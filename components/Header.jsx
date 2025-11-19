'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => pathname === path;

  return (
    <>
      <div className="header-area">
        <div id="sticky-header" className="main-header-area">
          <nav 
            className={`navbar navbar-expand-lg navbar-dark ${
              isHomePage 
                ? (isScrolled ? 'navbar-scroll shadow' : 'navbar-transparent')
                : (isScrolled ? 'navbar-scroll shadow' : 'sticky-top')
            }`}
            data-aos="fade-down"
          >
            <div className="container">
              <Link className="navbar-brand" href="/">
                <Image
                  id="nav-brand"
                  src="/img/logo/logo-invert-transparent.png"
                  alt="Bali Pyro 2 Logo"
                  width={120}
                  height={120}
                  priority
                />
                <h5>Illuminating Moments, Creating Memories</h5>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} href="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${isActive('/services') ? 'active' : ''}`} href="/services">
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${isActive('/our-event') ? 'active' : ''}`} href="/our-event">
                      Our Event
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${isActive('/about') ? 'active' : ''}`} href="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${isActive('/inquiry') ? 'active' : ''}`} href="/inquiry">
                      Inquiry
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div id="navbarFill" className={`navbar-fill-space ${!isScrolled ? 'visually-hidden' : ''}`}></div>
    </>
  );
}
