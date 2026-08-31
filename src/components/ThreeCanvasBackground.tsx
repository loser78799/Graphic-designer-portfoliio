import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeCanvasBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create 3D Geometric Objects (Icosahedron, Torus Knot, Floating Particles)
    const group = new THREE.Group();
    scene.add(group);

    // 1. Central Wireframe/Solid Icosahedron
    const geometry = new THREE.IcosahedronGeometry(2.2, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0xC5A47E,
      wireframe: true,
      roughness: 0.3,
      metalness: 0.8,
    });
    const icosahedron = new THREE.Mesh(geometry, material);
    group.add(icosahedron);

    // 2. Inner Glowing Core Sphere
    const coreGeometry = new THREE.SphereGeometry(1.2, 32, 32);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x8b6f4e,
      roughness: 0.2,
      metalness: 0.9,
      emissive: 0x3d2c1d,
      emissiveIntensity: 0.5,
    });
    const coreSphere = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(coreSphere);

    // 3. Floating Particles Ring
    const particleCount = 350;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 3 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      particlePositions[i] = radius * Math.cos(phi) * Math.cos(theta);
      particlePositions[i + 1] = radius * Math.sin(phi);
      particlePositions[i + 2] = radius * Math.cos(phi) * Math.sin(theta);
    }

    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xC5A47E,
      size: 0.05,
      transparent: true,
      opacity: 0.8,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xC5A47E, 3, 50);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x4a7c59, 2, 50);
    pointLight2.position.set(-5, -5, -5);
    scene.add(pointLight2);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth rotation
      targetX = mouseX * 0.5;
      targetY = mouseY * 0.5;

      group.rotation.y += 0.005 + (targetX - group.rotation.y) * 0.05;
      group.rotation.x += 0.003 + (targetY - group.rotation.x) * 0.05;

      particles.rotation.y = elapsedTime * 0.05;
      particles.rotation.z = elapsedTime * 0.02;

      // Pulsing scale of inner sphere
      const pulse = 1 + Math.sin(elapsedTime * 2) * 0.04;
      coreSphere.scale.set(pulse, pulse, pulse);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[480px] my-6 flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-[#0A0A0B] z-10 pointer-events-none"></div>
      <div ref={containerRef} className="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing" />
      <div className="absolute bottom-2 z-20 pointer-events-none flex items-center gap-2 bg-[#161618]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#C5A47E]/30 text-[#C5A47E] text-[10px] tracking-widest uppercase">
        <span className="w-2 h-2 rounded-full bg-[#C5A47E] animate-ping"></span>
        Interactive 3D Graphic Animation Engine (Three.js)
      </div>
    </div>
  );
};
