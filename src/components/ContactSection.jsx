import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ContactSection = () => {
  const canvasRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const modelRef = useRef(null);
  const originalModelSize = useRef(null);

  // 3D 모델 렌더링 로직 (수정 없음)
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    cameraRef.current = camera;
    
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    rendererRef.current = renderer;
    
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

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
          
          const center = box.getCenter(new THREE.Vector3());
          model.position.sub(center);
          
          scene.add(model);
          handleResize();
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
      const canvas = canvasRef.current;
      if (!rendererRef.current || !cameraRef.current || !canvas.parentElement) return;

      const container = canvas.parentElement;
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      if (modelRef.current && originalModelSize.current > 0) {
        const model = modelRef.current;
        const maxSize = originalModelSize.current;
        const targetSize = window.innerWidth < 768 ? 9 : 15;
        const scale = targetSize / maxSize;
        model.scale.setScalar(scale);
      }
    };

    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      if (modelRef.current) modelRef.current.rotation.y += 0.005;
      if (rendererRef.current && scene && cameraRef.current) {
        rendererRef.current.render(scene, cameraRef.current);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (rendererRef.current) rendererRef.current.dispose();
    };
  }, []);

  const topCategories = [ { id: "01", name: "Motion Design" }, { id: "02", name: "Brand Design" }, { id: "03", name: "Editorial Design" } ];
  const bottomCategories = [ { id: "04", name: "Photography" }, { id: "05", name: "Illustration" }, { id: "06", name: "3D Tech" } ];

  const CategoryLink = ({ id, name }) => ( <a href="#" className="group block hover:opacity-80 transition-opacity"> <div className="flex items-center gap-3"> <p className="text-white text-sm font-mono uppercase tracking-normal leading-6 opacity-60">{id}</p> <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-normal">{name}</h2> </div> </a> );
  const ContactLink = ({ label, href, children }) => ( <a href={href} className="group relative inline-block cursor-pointer py-1" target={href.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer"> <div className="flex gap-2 items-center"> <div className="text-xs text-gray-500 uppercase tracking-widest">{label}</div> <div className="text-gray-300 text-xs">{children}</div> </div> </a> );

  return (
    <section id="contact" className="min-h-screen text-white relative overflow-hidden" style={{ backgroundColor: '#202020' }}>
      
      {/* --- 1. Canvas 컨테이너 (모든 화면 크기에서 공유) --- */}
      {/* 반응형 클래스를 통해 모바일과 데스크탑에서 위치, 크기, 투명도를 다르게 설정 */}
      <div className="absolute z-0 
                      w-80 h-80 -top-16 -right-20 opacity-50 
                      md:w-96 md:h-96 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:opacity-100">
          <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      {/* --- 2. 데스크탑 버전 콘텐츠 --- */}
      <div className="hidden md:flex flex-col justify-between min-h-screen relative z-10">
        {/* Top Categories */}
        <div className="pt-8">
          <div className="flex justify-center gap-12 md:gap-16 lg:gap-20 mb-8">
            {topCategories.map((cat) => <CategoryLink key={cat.id} {...cat} />)}
          </div>
          <div className="flex justify-center gap-12 md:gap-16 lg:gap-20">
            {bottomCategories.map((cat) => <CategoryLink key={cat.id} {...cat} />)}
          </div>
        </div>
        
        {/* Spacer for middle content */}
        <div className="flex-grow"></div>

        {/* Bottom Section */}
        <div>
          <div className="flex justify-between mb-5 max-w-7xl mx-auto px-8">
            <ContactLink label="EMAIL" href="mailto:yooj0264@gmail.com">yooj0264@gmail.com</ContactLink>
            <ContactLink label="INSTAGRAM" href="https://instagram.com/yoon664" />
            <ContactLink label="GITHUB" href="https://github.com/yoon664">https://github.com/yoon664</ContactLink>
            <ContactLink label="RESUME" href="#" />
          </div>
          <div className="w-full mb-4">
            <h1 className="w-full text-6xl md:text-8xl lg:text-9xl xl:text-[8rem] font-semibold tracking-wider text-gray-400 leading-none opacity-50 text-center" style={{fontFamily: '"Lock Serif Light", serif'}}>
              YOOEUNJI WORKS
            </h1>
          </div>
          <div className="flex justify-center items-center px-8 pb-4 text-xs text-gray-500">
            <div className="opacity-50">© 2025 YOO EUNJI</div>
          </div>
        </div>
      </div>

      {/* --- 3. 모바일 버전 콘텐츠 --- */}
      <div className="md:hidden flex flex-col min-h-screen p-8 relative z-10">
        {/* Top Categories */}
        <div className="space-y-4">
          {[...topCategories, ...bottomCategories].map((cat) => <CategoryLink key={cat.id} {...cat} />)}
        </div>
        
        {/* Spacer - 이 요소가 남는 공간을 모두 차지하여 하단 콘텐츠를 아래로 밀어냄 */}
        <div className="flex-grow"></div> 
        
        {/* Bottom Content */}
        <div className="w-full flex flex-col items-start space-y-8">
          <div className="flex flex-col items-start">
            <ContactLink label="EMAIL" href="mailto:yooj0264@gmail.com">yooj0264@gmail.com</ContactLink>
            <ContactLink label="GITHUB" href="https://github.com/yoon664">https://github.com/yoon664</ContactLink>
            <ContactLink label="INSTAGRAM" href="https://instagram.com/yoon664" />
            <ContactLink label="RESUME" href="#" />
          </div>
          <div>
            <h1 className="text-6xl font-semibold tracking-wider text-gray-400 leading-none opacity-50" style={{fontFamily: '"Lock Serif Light", serif'}}>
              YOOEUNJI WORKS
            </h1>
            <p className="mt-4 text-xs text-gray-500 opacity-50">© 2025 YOO EUNJI</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;