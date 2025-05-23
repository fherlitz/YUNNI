'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link href="/">YUNNI</Link>
        </div>
        
        <div className="hamburger d-lg-none" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link href="/live">Live</Link></li>
            <li><Link href="/store">Store</Link></li>
            <li><Link href="/lyrics">Lyrics</Link></li>
            <li><Link href="/videos">Videos</Link></li>
            <li><Link href="/releases">Releases</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 