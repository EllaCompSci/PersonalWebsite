import { useEffect, useRef, useState } from 'react';
import VANTA from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';
import Terminal from './Terminal';
import Navbar from './components/NavBar';


export default function LossVisualisation({ onBack }: { onBack: () => void }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const vantaRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [scrolledMore, setScrolledMore] = useState(false);

  useEffect(() => {
  if (!mountRef.current) return;
  if (mountRef.current.childElementCount > 0) return;

  const observer = new ResizeObserver(() => {
    const width = mountRef.current!.clientWidth;
    const height = mountRef.current!.clientHeight;
    if (width === 0 || height === 0) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 8, 12);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mountRef.current!.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    observer.disconnect(); // stop observing once initialised
  });

  observer.observe(mountRef.current);

  return () => {
  observer.disconnect();
  if (mountRef.current && mountRef.current.childElementCount > 0) {
    mountRef.current.innerHTML = '';
  }
};
}, []);

    useEffect(() => {
    if (!vantaRef.current) return;
    const vantaEffect = VANTA({
        el: vantaRef.current,
        THREE,
        color: 0xff0000,
        backgroundColor: 0x0,
        points: 10,
        maxDistance: 20,
        spacing: 15,
    });
    
    return () => { if (vantaEffect) vantaEffect.destroy(); };
    }, []);

    


  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const handleScroll = () => {
        setScrolled(window.scrollY > 100);
        setScrolledMore(window.scrollY > window.innerHeight + 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    }, []);


  return (
  <>
    <Navbar />
              <div ref={vantaRef} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }} />
              <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <h1 className={`title ${scrolled ? 'title--hidden' : ''}`}>Loss Visuliser</h1>
              </div>
              <div className={`visualiser-section ${scrolled ? 'visualiser-section--visible' : ''}`}>
                <div ref={mountRef}style={{ width: '800px', height: '500px' }} />
              </div>
              <div className={`projects-section ${scrolledMore ? 'projects-section--visible' : ''}`}>
                <Terminal onNavigate={onBack} initialCwd="~/LossVisual" />
              </div>
  </>
  );
}