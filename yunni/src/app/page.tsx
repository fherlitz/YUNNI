'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Releases from './releases/page';
import Videos from './videos/page';
import Tour from './tour/page';
import Inquires from './inquires/page';
import Footer from './components/Footer';

// Main page component
export default function Home() {
  // Refs for video and image elements
  const initialImageRef = useRef<HTMLImageElement>(null);
  const backgroundVideoRef = useRef<HTMLVideoElement>(null);
  const epAnnouncementRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<NodeListOf<HTMLAnchorElement> | null>(null);

  useEffect(() => {
    // Start video after 4 seconds
    const timer = setTimeout(() => {
      if (initialImageRef.current) initialImageRef.current.classList.add('fade-out');
      if (backgroundVideoRef.current) {
        backgroundVideoRef.current.classList.add('fade-in');
        backgroundVideoRef.current.play();
      }
      
      // Change text color to white
      if (epAnnouncementRef.current) {
        epAnnouncementRef.current.style.color = 'white';
        epAnnouncementRef.current.querySelectorAll('h1, h4').forEach(element => {
          (element as HTMLElement).style.color = 'white';
        });
      }

      // Change navigation color to white
      if (navLinksRef.current) {
        navLinksRef.current.forEach(link => {
          link.classList.add('video-active');
        });
      }
    }, 4000);

    // Update nav colors on scroll
    const handleScroll = () => {
      const homeSection = document.querySelector('#home');
      if (!homeSection) return;
      
      const rect = homeSection.getBoundingClientRect();
      
      if (navLinksRef.current) {
        if (rect.bottom > 0) {
          navLinksRef.current.forEach(link => {
            link.classList.add('video-active');
          });
        } else {
          navLinksRef.current.forEach(link => {
            link.classList.remove('video-active');
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    navLinksRef.current = document.querySelectorAll('.nav-menu ul li a');

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main>
      {/* Side Logo */}
      <div className="fixed left-8 top-8 z-50">
        <Link href="#home">
          <Image
            src="/images/logo.png"
            alt="YUNNI Logo"
            width={100}
            height={100}
            className="w-auto h-auto"
          />
        </Link>
      </div>

      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full z-40">
        <nav className="flex justify-center py-4">
          <div className="nav-menu">
            <ul className="flex gap-24">
              <li><Link href="#releases" className="text-black hover:text-yellow-500 transition-colors duration-300 text-2xl tracking-wider">RELEASES</Link></li>
              <li><Link href="#videos" className="text-black hover:text-yellow-500 transition-colors duration-300 text-2xl tracking-wider">VIDEOS</Link></li>
              <li><Link href="#tour" className="text-black hover:text-yellow-500 transition-colors duration-300 text-2xl tracking-wider">TOUR</Link></li>
              <li><Link href="#inquires" className="text-black hover:text-yellow-500 transition-colors duration-300 text-2xl tracking-wider">INQUIRES</Link></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="relative w-screen h-screen overflow-hidden">
        <div className="image-slider slide active">
          <Image
            ref={initialImageRef}
            src="/images/cover.jpg"
            alt="YUNNI Band Image 1"
            fill
            className="object-cover transition-opacity duration-1000"
            priority
          />
          <video
            ref={backgroundVideoRef}
            className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000"
            loop
            muted
            playsInline
          >
            <source src="/images/YUNNI.mp4" type="video/mp4" />
          </video>
          <div ref={epAnnouncementRef} className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center text-white w-full px-5">
            <h1 className="text-4xl mb-2">YUNNI PRESENTS</h1>
            <h1 className="text-4xl mb-2">DEBUT EP "COLORIZED"</h1>
            <h4 className="text-xl mb-2 tracking-wider">OUT NOW</h4>
            <div className="flex gap-8 justify-center mt-10">
              <a
                href="https://yunni.bandcamp.com/album/colorized"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-2 text-xl tracking-wider transition-all duration-300 border-2 border-black rounded-full hover:bg-black hover:text-white"
              >
                BUY EP
              </a>
              <a
                href="https://open.spotify.com/album/0I1BUl0E4CJbYYjMGcgdCH?si=rsQsIRxWTC6wToa_cD3usQ"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-2 text-xl tracking-wider transition-all duration-300 border-2 border-black rounded-full hover:bg-black hover:text-white"
              >
                LISTEN
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <Releases />
      <Videos />
      <Tour />
      <Inquires />

      {/* Footer */}
      <Footer />
    </main>
  );
}
