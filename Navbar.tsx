import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { CONFIG } from './constants';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'RULES', href: '#rules' },
    { name: 'SUPPORT', href: '#support' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            {/* LOGO_IMAGE Placeholder */}
            <div className="w-10 h-10 bg-white/5 rounded-none border border-white/20 flex items-center justify-center overflow-hidden">
                <img src={CONFIG.LOGO_IMAGE} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-display font-bold text-xl tracking-widest text-white">MYTHIC</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-[0.2em] text-white/70 hover:text-white transition-colors uppercase"
              >
                {link.name}
              </a>
            ))}
            <a
              href={CONFIG.DISCORD_INVITE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="clip-hex-button bg-white text-black px-6 py-2.5 text-sm font-bold tracking-[0.15em] hover:bg-gray-200 transition-colors uppercase"
            >
              JOIN DISCORD
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white/70 hover:text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-4 text-base font-medium tracking-[0.2em] text-white/70 hover:text-white hover:bg-white/5 uppercase"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-3">
              <a
                href={CONFIG.DISCORD_INVITE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="clip-hex-button block w-full text-center bg-white text-black px-6 py-3 text-sm font-bold tracking-[0.15em] hover:bg-gray-200 transition-colors uppercase"
              >
                JOIN DISCORD
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
