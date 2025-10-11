import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const HeroSection = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const modelRef = useRef(null);
  
  const originalModelSize = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    cameraRef.current = camera;
    
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true,
      powerPreference: "high-performance"
    });
    
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    
    sceneRef.current = scene;
    rendererRef.current = renderer;

    const loadModel = async () => {
      try {
        const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
        const loader = new GLTFLoader();
        
        loader.load('/models/geometry_effect/scene.gltf', (gltf) => {
          const model = gltf.scene;
          modelRef.current = model;
          
          const box = new THREE.Box3().setFromObject(model);
          const size = box.getSize(new THREE.Vector3());
          originalModelSize.current = Math.max(size.x, size.y, size.z);
          
          // 모델을 원점으로 이동
          const center = box.getCenter(new THREE.Vector3());
          model.position.sub(center);

          scene.add(model);
          handleResize(); // 모델 로드 후 사이즈 조정
          
        }, undefined, (error) => {
          console.error('GLTF 파일 로드 실패:', error);
        });
      } catch (error) {
        console.error('GLTFLoader import 실패:', error);
      }
    };

    const ambientLight = new THREE.AmbientLight(0xffffff, 6);
    scene.add(ambientLight);
    const dir1 = new THREE.DirectionalLight(0xffffff, 8);
    dir1.position.set(10, 10, 10);
    scene.add(dir1);
    const dir2 = new THREE.DirectionalLight(0xffffff, 4);
    dir2.position.set(-10, -10, -10);
    scene.add(dir2);

    camera.position.set(0, 0, 10);
    loadModel();

    const handleResize = () => {
        if (!rendererRef.current || !cameraRef.current || !canvasRef.current.parentElement) return;

        const container = canvasRef.current.parentElement;
        const width = container.clientWidth;
        const height = container.clientHeight;

        rendererRef.current.setSize(width, height);
        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();

        if (modelRef.current && originalModelSize.current > 0) {
            const model = modelRef.current;
            const maxSize = originalModelSize.current; // 저장된 원본 크기를 사용
            
            const targetSize = window.innerWidth < 768 ? 9 : 13;
            const scale = targetSize / maxSize;
            model.scale.setScalar(scale);
        }
    };

    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      if(modelRef.current) {
        modelRef.current.rotation.y += 0.005;
      }
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) cancelAnimationFrame(animationId);
      if (rendererRef.current) rendererRef.current.dispose();
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-black" style={{ backgroundColor: '#000000' }}>
        {/* 데스크탑/모바일 텍스트 및 스크롤 인디케이터 */}
        <div className="hidden md:block absolute left-8 top-1/2 transform -translate-y-1/2 z-10 jetbrains">
            <p className="text-sm font-semibold text-gray-300 uppercase">A Collection of Visual Works</p>
        </div>
        <div className="hidden md:block absolute right-8 top-1/2 transform -translate-y-1/2 z-10 jetbrains">
            <p className="text-sm font-semibold text-gray-300 uppercase text-right">YOO EUNJI 2026</p>
        </div>
        <div className="md:hidden absolute top-28 text-center z-10 jetbrains">
            <p className="text-sm font-semibold text-gray-300 uppercase">A Collection of Visual Works</p>
            <p className="text-sm font-semibold text-gray-300 uppercase mt-1">YOO EUNJI 2026</p>
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-0 w-full h-full">
            <canvas ref={canvasRef} className="w-full h-full"/>
        </div>
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center z-10 jetbrains">
            <p className="text-sm font-semibold text-gray-300 mb-6 uppercase">Scroll to Explore</p>
            <div className="flex justify-center">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-gray-300 animate-bounce">
                        <path d="M6 1L6 11M6 11L10 7M6 11L2 7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;