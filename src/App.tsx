import './App.css'
import Terminal from './Terminal';
import { useEffect, useRef, useState } from 'react';
import VANTA from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';
import About from './About';
import Resume from './Resume';
import Navbar from './components/NavBar';
import LossVisualisation from './LossVisualisation';

export default function App() {
  const vantaRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [page, setPage] = useState('home'); 
  const rootRef = useRef<HTMLDivElement>(null);
  const navigateTo = (p: string) => {
  setScrolled(false);
  setPage(p);
  setTimeout(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, 10);
};

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
}, [page]);

const topRef = useRef<HTMLDivElement>(null);



useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 100);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [page]);


  return (
  <>
    <div ref={vantaRef} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }} />
    {page === 'about' ? (
      <About onBack={() => navigateTo('home')} />
    ) : page === 'resume' ? (
      <Resume onBack={() => navigateTo('home')} />
    ) : page === 'LossVisualisation' ? (
      <LossVisualisation onBack={() => navigateTo('home')} />
    ) : (
      <>
        <div ref={topRef} style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <Navbar/>
          <h1 className={`title ${scrolled ? 'title--hidden' : ''}`}>Ella Bennsion</h1>
        </div>
        <div className={`projects-section ${scrolled ? 'projects-section--visible' : ''}`}>
        <Terminal onNavigate={navigateTo} /> 
        </div>
      </>
    )}
  </>
);
}