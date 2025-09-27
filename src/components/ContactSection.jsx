import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ContactSection = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);

  // 3D 모델 로드 useEffect
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
    
    renderer.setSize(600, 600); // 크기를 600으로 변경
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
          
          // 모델 크기와 위치 설정
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());
          
          // 모델을 원점으로 이동
          model.position.sub(center);
          
          // 적절한 크기로 조정
          const maxSize = Math.max(size.x, size.y, size.z);
          
          if (maxSize > 0) {
            const targetSize = 12;
            const scale = targetSize / maxSize;
            model.scale.setScalar(scale);
          }
          
          // 모델 위치 조정
          model.position.z = 0;
          model.position.y = -5;
          
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
          console.log('Contact Cherry Tree 로딩 진행:', (progress.loaded / progress.total * 100) + '%');
        },
        // 에러 처리
        (error) => {
          console.error('Contact Cherry Tree GLTF 파일 로드 실패:', error);
        });
      } catch (error) {
        console.error('GLTFLoader import 실패:', error);
      }
    };

    // Ambient 조명 (더 어둡게)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    // 방향광 추가 (더 부드럽게)
    const dir1 = new THREE.DirectionalLight(0xffffff, 2.5);
    dir1.position.set(10, 10, 10);
    scene.add(dir1);

    const dir2 = new THREE.DirectionalLight(0xffffff, 1);
    dir2.position.set(-10, -10, -10);
    scene.add(dir2);

    // 하늘/땅 반사광 효과를 위한 Hemispherical Light
    const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1.5);
    hemi.position.set(0, 20, 0);
    scene.add(hemi);
    
    // 배경을 투명하게 (ContactSection 배경색이 보이도록)
    // scene.background 설정을 제거하여 투명하게 유지

    camera.position.set(0, 0, 10);

    loadModel();

    return () => {
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  const topCategories = [
    { id: "01", name: "Motion Design", href: "./works-motion" },
    { id: "02", name: "Brand Design", href: "./works-branding" },
    { id: "03", name: "Editorial Design", href: "./works-editorial" }
  ];

  const bottomCategories = [
    { id: "04", name: "Photography", href: "./works-photoworks" },
    { id: "05", name: "Illustration", href: "./works-illustration" },
    { id: "06", name: "3D Tech", href: "./works-3d-tech" }
  ];

  const CategoryLink = ({ id, name, href }) => {
    return (
      <a 
        href={href}
        className="group block hover:opacity-80 transition-opacity"
      >
        <div className="flex items-center gap-3">
          <p className="text-white text-sm font-mono uppercase tracking-normal leading-6 opacity-60">
            {id}
          </p>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-normal">
            {name}
          </h2>
        </div>
      </a>
    );
  };

  const ContactLink = ({ label, href, children }) => {
    return (
      <a 
        href={href}
        className="group relative inline-block cursor-pointer"
        target={href.startsWith('http') ? "_blank" : "_self"}
        rel={href.startsWith('http') ? "noopener noreferrer" : ""}
      >
        <div className="relative overflow-hidden">
          {/* Default state */}
          <div className="transition-transform duration-300 group-hover:-translate-y-full">
            <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">{label}</div>
            <div className="text-gray-300 text-sm">{children}</div>
          </div>
          
          {/* Hover state */}
          <div className="absolute inset-0 bg-white text-black px-2 py-1 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
            <div className="text-xs uppercase tracking-widest mb-1">{label}</div>
            <div className="text-sm font-medium">{children}</div>
          </div>
        </div>
      </a>
    );
  };

  return (
    <section id="contact" className="min-h-screen text-white relative overflow-hidden" style={{ backgroundColor: '#202020' }}>
      {/* Top Categories */}
      <div className="absolute top-8 left-0 right-0 z-10">
        {/* First row */}
        <div className="flex justify-center gap-12 md:gap-16 lg:gap-20 mb-8">
          {topCategories.map((category) => (
            <CategoryLink 
              key={category.id}
              id={category.id}
              name={category.name}
              href={category.href}
            />
          ))}
        </div>
        
        {/* Second row */}
        <div className="flex justify-center gap-12 md:gap-16 lg:gap-20">
          {bottomCategories.map((category) => (
            <CategoryLink 
              key={category.id}
              id={category.id}
              name={category.name}
              href={category.href}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center h-screen px-8">
        {/* Center Cherry Tree 3D Element */}
        <div className="w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
          <canvas 
            ref={canvasRef}
            className="w-full h-full"
            style={{maxWidth: '600px', maxHeight: '600px'}}
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Contact Links */}
        <div className="flex justify-center gap-8 md:gap-12 mb-6 px-8">
          <ContactLink label="EMAIL" href="mailto:yooj0264@gmail.com">
            EMAIL
          </ContactLink>
          
          <ContactLink label="INSTAGRAM" href="https://instagram.com/yoon664">
            INSTAGRAM
          </ContactLink>
          
          <ContactLink label="LINKEDIN" href="https://linkedin.com/in/yooeunji">
            LINKEDIN
          </ContactLink>
          
          <ContactLink label="RESUME" href="https://github.com/yoon664">
            RESUME
          </ContactLink>
        </div>

        {/* Large Name Typography */}
        <div className="w-full mb-4">
          <h1 className="w-full text-6xl md:text-8xl lg:text-9xl xl:text-[8rem] font-light tracking-wider text-gray-400 leading-none opacity-50 text-center">
            YOOEUNJIWORKS
          </h1>
        </div>

        {/* Bottom Copyright */}
        <div className="flex justify-center items-center px-8 pb-4 text-xs text-gray-500">
          <div className="opacity-50">© 2025 YOO EUNJI</div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;