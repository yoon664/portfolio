import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const HeroSection = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // 3D 씬 설정
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current,
      alpha: true,
      antialias: true 
    });
    
    renderer.setSize(600, 600);
    renderer.setClearColor(0x000000, 0);
    
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Cherry Tree GLTF 파일 로드
    const loadModel = async () => {
      try {
        const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
        const loader = new GLTFLoader();
        
        // Cherry Tree 모델 로드
        loader.load('/models/cherry_tree/scene.gltf', (gltf) => {
          const model = gltf.scene;
          
          // 모델의 모든 메시 확인
          let meshCount = 0;
          model.traverse((child) => {
            if (child.isMesh) {
              meshCount++;
              console.log('메시 발견:', child.name, child.geometry, child.material);
              
              // PBR 머티리얼 설정 수정
              if (child.material) {
                if (Array.isArray(child.material)) {
                  child.material.forEach(mat => {
                    if (mat.isMeshPhysicalMaterial || mat.isMeshStandardMaterial) {
                      mat.transparent = false;
                      mat.opacity = 1;
                      mat.roughness = 0.7;
                      mat.metalness = 0.3;
                      mat.envMapIntensity = 1;
                    }
                  });
                } else {
                  if (child.material.isMeshPhysicalMaterial || child.material.isMeshStandardMaterial) {
                    // Cherry Tree에 맞는 머티리얼 설정
                    child.material.transparent = false;
                    child.material.opacity = 1;
                    child.material.roughness = 0.8;
                    child.material.metalness = 0.1;
                    child.material.envMapIntensity = 1;
                  }
                }
              }
            }
          });
          
          console.log('총 메시 개수:', meshCount);
          
          // 모델 크기와 위치 디버깅
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());
          
          console.log('Cherry Tree 모델 로드 성공!', model);
          console.log('모델 크기:', size);
          console.log('모델 중심점:', center);
          console.log('바운딩 박스:', box.min, box.max);
          
          // 모델을 원점으로 이동
          model.position.sub(center);
          
          // 적절한 크기로 조정 (나무는 보통 더 크게)
          const maxSize = Math.max(size.x, size.y, size.z);
          console.log('최대 크기:', maxSize);
          
          if (maxSize > 0) {
            const targetSize = 8; // 나무이므로 조금 더 크게
            const scale = targetSize / maxSize;
            model.scale.setScalar(scale);
            console.log('적용된 스케일:', scale);
          }
          
          // 모델을 약간 앞으로 이동
          model.position.z = 0;
          
          scene.add(model);
          
          // 애니메이션 루프 (천천히 회전)
          let animationId;
          const animate = () => {
            animationId = requestAnimationFrame(animate);
            model.rotation.y += 0.005; // 나무는 더 천천히 회전
            renderer.render(scene, camera);
          };
          animate();
          
          return () => {
            if (animationId) {
              cancelAnimationFrame(animationId);
            }
          };
        }, 
        // 로딩 진행상황
        (progress) => {
          console.log('Cherry Tree 로딩 진행:', (progress.loaded / progress.total * 100) + '%');
        },
        // 에러 처리
        (error) => {
          console.error('Cherry Tree GLTF 파일 로드 실패:', error);
        });
      } catch (error) {
        console.error('GLTFLoader import 실패:', error);
      }
    };

    // Ambient 조명 강화 (자연스러운 조명)
    const ambientLight = new THREE.AmbientLight(0xffffff, 15);
    scene.add(ambientLight);

    // 방향광 추가 (자연스러운 햇빛 효과)
    const dir1 = new THREE.DirectionalLight(0xffffff, 25);
    dir1.position.set(10, 10, 10);
    scene.add(dir1);

    const dir2 = new THREE.DirectionalLight(0xffffff, 10);
    dir2.position.set(-10, -10, -10);
    scene.add(dir2);

    // 하늘/땅 반사광 효과를 위한 Hemispherical Light
    const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 12);
    hemi.position.set(0, 20, 0);
    scene.add(hemi);
    
    // 배경
    scene.background = new THREE.Color(0x000000);

    camera.position.set(0, 0, 10);

    loadModel();

    return () => {
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-black" style={{ backgroundColor: '#000000' }}>
      {/* Left side text */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 jetbrains ">
        <p className="text-sm font-semibold text-gray-300 uppercase">
          A Collection of Visual Works
        </p>
      </div>

      {/* Right side text */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 jetbrains">
        <p className="text-sm font-semibold text-gray-300 uppercase text-right">
          YOO EUNJI 2026
        </p>
      </div>

      {/* 3D Cherry Tree 모델 */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <canvas 
          ref={canvasRef}
          className="w-full h-full"
          style={{maxWidth: '600px', maxHeight: '600px'}}
        />
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center z-10 jetbrains">
        <p className="text-sm font-semibold  text-gray-300 mb-6 uppercase">
          Scroll to Explore
        </p>
        <div className="flex justify-center">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 12 12" 
              fill="none" 
              className="text-gray-300 animate-bounce"
            >
              <path 
                d="M6 1L6 11M6 11L10 7M6 11L2 7" 
                stroke="currentColor" 
                strokeWidth="1" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;