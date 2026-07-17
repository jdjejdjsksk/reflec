import React from 'react';
import { motion } from 'motion/react';

const rules = [
  { title: 'No Scamming', desc: 'Scamming results in a permanent blacklist and public exposure.' },
  { title: 'No Chargebacks', desc: 'All payments are final. Chargebacks result in a permanent ban and public blacklist.' },
  { title: 'Middleman Required', desc: 'All high-value trades must go through a verified middleman.' },
  { title: 'No Fake Proof', desc: 'Submitting falsified trade proof results in a permanent ban.' },
  { title: 'Respect Staff', desc: 'Harassment of staff will result in a mute or ban.' },
  { title: 'No Spam', desc: 'Spamming will result in a mute.' },
  { title: '13+ Only', desc: 'Members under the age of 13 will be immediately banned, per Discord\'s Terms of Service.' },
  { title: 'No Toxic Behavior', desc: 'Toxicity or harassment will result in a mute or ban.' },
  { title: 'Trade At Your Own Risk', desc: 'Mythic Marketplace is not responsible for trades conducted without a verified middleman.' },
  { title: 'Follow Discord ToS', desc: 'Violations of Discord\'s Terms of Service will result in an immediate ban and report.' },
];

const punishments = [
  { offense: '1st', consequence: 'Warning' },
  { offense: '2nd', consequence: '24-hour mute' },
  { offense: '3rd', consequence: '7-day ban' },
  { offense: '4th', consequence: 'Permanent ban' },
];

export function Rules() {
  return (
    <section id="rules" className="py-24 relative border-y border-white/5 bg-black/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
        >
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-[0.3em] text-white uppercase mb-4">SERVER RULES</h2>
            <div className="w-24 h-px bg-white/50 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {rules.map((rule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-6 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors hud-corners"
            >
              <div className="flex items-start gap-4">
                <span className="font-display text-2xl font-bold text-white/30 leading-none">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-xl font-bold tracking-wide text-white mb-2 uppercase">{rule.title}</h3>
                  <p className="text-white/60 font-light leading-relaxed">{rule.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
            <h3 className="font-display text-2xl font-bold tracking-[0.2em] text-white uppercase mb-8 text-center">PUNISHMENT LADDER</h3>
            <div className="overflow-x-auto">
                <table className="w-full max-w-3xl mx-auto border-collapse">
                    <thead>
                        <tr className="border-b border-white/20">
                            <th className="py-4 px-6 text-left font-bold tracking-[0.15em] text-white/50 uppercase">Offense</th>
                            <th className="py-4 px-6 text-left font-bold tracking-[0.15em] text-white/50 uppercase">Consequence</th>
                        </tr>
                    </thead>
                    <tbody>
                        {punishments.map((p, idx) => (
                            <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                <td className="py-4 px-6 text-white font-display font-bold tracking-wider">{p.offense}</td>
                                <td className="py-4 px-6 text-white/80">{p.consequence}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
