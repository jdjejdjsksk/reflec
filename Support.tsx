import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { CONFIG } from './constants';

const faqs = [
  {
    q: 'How do I report a scammer?',
    a: 'Open a support ticket with all relevant proof (screenshots, chat logs, transaction IDs). Do not ping staff in public channels; submit your report privately.',
  },
  {
    q: 'How do trades work?',
    a: 'Find a buyer/seller in our marketplace channels. For high-value items, request a verified middleman to hold the assets until both parties have fulfilled their end of the deal.',
  },
  {
    q: 'How do I become a verified middleman?',
    a: 'Middleman applications are opened periodically in the announcements channel. You must have a clean record and significant established trust within the community to be considered.',
  },
  {
    q: 'Is there a fee for using a middleman?',
    a: 'Our verified middlemen may charge a small fee or percentage for their time and the security they provide. This is negotiated in the ticket before the trade begins.',
  },
];

export function Support() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="support" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-[0.3em] text-white uppercase mb-4">SUPPORT & FAQ</h2>
            <div className="w-24 h-px bg-white/50 mx-auto mb-8"></div>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                All official support is handled strictly through Discord tickets. Do not trust direct messages claiming to be staff.
            </p>
            <a 
              href={CONFIG.DISCORD_INVITE_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="clip-hex-button inline-flex items-center justify-center px-8 py-3 bg-white text-black font-bold tracking-[0.15em] uppercase hover:bg-gray-200 transition-colors"
            >
              OPEN A TICKET
            </a>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/10 bg-white/[0.02]"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold tracking-wide text-white">{faq.q}</span>
                <ChevronDown 
                    className={`text-white/50 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                    size={20} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-white/60 font-light leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
