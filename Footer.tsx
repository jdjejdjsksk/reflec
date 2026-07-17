import React from 'react';
import { Shield, Tag, Handshake, ShoppingCart } from 'lucide-react';
import { CONFIG } from './constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/10 bg-black relative overflow-hidden">
        {/* Subtle grid background for footer */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'radial-gradient(circle at 50% 100%, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
        }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
            
            {/* Wordmark */}
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-[0.4em] text-white uppercase opacity-90">
                {CONFIG.SERVER_NAME}
            </h2>

            {/* Small Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 opacity-60">
                <div className="flex items-center gap-2"><Shield size={14} /><span className="text-[10px] tracking-widest uppercase">Secure</span></div>
                <div className="flex items-center gap-2"><Tag size={14} /><span className="text-[10px] tracking-widest uppercase">Deals</span></div>
                <div className="flex items-center gap-2"><Handshake size={14} /><span className="text-[10px] tracking-widest uppercase">Trust</span></div>
                <div className="flex items-center gap-2"><ShoppingCart size={14} /><span className="text-[10px] tracking-widest uppercase">Trade</span></div>
            </div>

            {/* Links & Copyright */}
            <div className="flex flex-col items-center space-y-4">
                <a 
                    href={CONFIG.DISCORD_INVITE_LINK} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-white text-sm tracking-[0.1em] transition-colors"
                >
                    discord.gg/navYQRXXt4
                </a>
                <p className="text-white/30 text-xs tracking-wider">
                    &copy; {currentYear} Mythic Marketplace. All rights reserved.
                </p>
                <p className="text-white/20 text-[10px] tracking-wider uppercase mt-2">
                    Not affiliated with Roblox Corporation.
                </p>
            </div>
        </div>
      </div>
    </footer>
  );
}
