import { useEffect, useRef, useState } from 'react';
import VANTA from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';
import AboutText from './AboutText';
import Terminal from './Terminal';
import Navbar from './components/NavBar';

export default function About({ onBack }: { onBack: () => void }) {
  const vantaRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [scrolledMore, setScrolledMore] = useState(false);

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
        <h1 className={`title ${scrolled ? 'title--hidden' : ''}`}>About Me</h1>
      </div>
      <div className={`about-section ${scrolled ? 'about-section--visible' : ''}`}>
        <AboutText />
      </div>
      <div className={`projects-section ${scrolledMore ? 'projects-section--visible' : ''}`}>
        <Terminal onNavigate={onBack} initialCwd="~/About" />
      </div>
    </>
  );
}