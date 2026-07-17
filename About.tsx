import React from 'react';
import { motion } from 'motion/react';
import { CONFIG } from './constants';

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hud-corners p-8 md:p-12 bg-white/[0.02] backdrop-blur-sm border border-white/10"
        >
            <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-white/30 flex-grow"></div>
                <h2 className="font-display text-2xl md:text-3xl font-bold tracking-[0.3em] text-white uppercase text-center">
                    ABOUT {CONFIG.SERVER_NAME}
                </h2>
                <div className="h-px bg-white/30 flex-grow"></div>
            </div>
            
            <p className="text-lg md:text-xl leading-relaxed text-white/80 font-light text-center max-w-3xl mx-auto">
                Mythic Marketplace is a premier Roblox-focused trading community. We provide a secure, highly-moderated environment where members can safely buy, sell, and trade items, accounts, and in-game currency. Backed by dedicated staff and a trusted network of verified middlemen, we ensure that every transaction is protected.
            </p>
        </motion.div>
      </div>
    </section>
  );
}
