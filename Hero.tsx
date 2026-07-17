import React from 'react';
import { Shield, Tag, Handshake, ShoppingCart } from 'lucide-react';
import { CONFIG } from './constants';
import { motion } from 'motion/react';

export function Hero() {
  const trustBadges = [
    { icon: Shield, label: 'SECURE' },
    { icon: Tag, label: 'DEALS' },
    { icon: Handshake, label: 'TRUST' },
    { icon: ShoppingCart, label: 'TRADE' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,rgba(255,255,255,0.1)_0%,rgba(0,0,0,1)_70%)]"></div>
        {/* Particle/streak simulation overlay */}
        <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(circle at 50% 100%, #fff 1px, transparent 1px), radial-gradient(circle at 50% 100%, #fff 1px, transparent 1px)',
            backgroundSize: '100px 100px',
            backgroundPosition: '0 0, 50px 50px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        
        {/* Decorative corner brackets wrapping the main hero content */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="hud-corners p-8 md:p-16 flex flex-col items-center"
        >
            {/* Logo */}
            <div className="w-32 h-32 md:w-48 md:h-48 mb-8 relative">
              <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full"></div>
              <img src={CONFIG.LOGO_IMAGE} alt="Mythic Marketplace Logo" className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
            </div>

            {/* SERVER_NAME Placeholder */}
            <h1 className="font-display text-4xl md:text-7xl font-bold tracking-[0.3em] md:tracking-[0.5em] text-white uppercase ml-2 md:ml-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              {CONFIG.SERVER_NAME}
            </h1>
            
            {/* Tagline */}
            <p className="mt-6 text-sm md:text-base font-medium tracking-[0.4em] text-white/70 uppercase">
              {CONFIG.TAGLINE}
            </p>

            {/* HUD Divider */}
            <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mt-6 mb-12 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-px bg-white box-content border-y border-black"></div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
              {trustBadges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div key={idx} className="flex flex-col items-center space-y-3 group">
                    <div className="p-3 border border-white/20 rounded-none bg-white/5 group-hover:bg-white/10 group-hover:border-white/40 transition-all duration-300 hud-corners-full relative w-14 h-14 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-semibold tracking-[0.2em] text-white/60 group-hover:text-white transition-colors">{badge.label}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <a 
              href={CONFIG.DISCORD_INVITE_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="clip-hex-button relative inline-flex items-center justify-center px-10 py-4 bg-white text-black font-bold tracking-[0.2em] uppercase overflow-hidden group hover:scale-105 transition-transform duration-300"
            >
              <span className="relative z-10 flex items-center gap-3">
                JOIN NOW
              </span>
              <div className="absolute inset-0 bg-gray-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </a>
        </motion.div>
      </div>

      {/* Grid Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-[linear-gradient(to_top,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom pointer-events-none"></div>
    </section>
  );
}
