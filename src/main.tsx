import React from "react";
import ReactDOM from "react-dom/client";
import { Briefcase, MessageCircle, Send, Code2 } from "lucide-react";

function App() {
  return (
    <main className="min-h-screen px-6 py-16 flex justify-center">
      <div className="w-full max-w-2xl">
        <section className="text-center mb-16">
          <div className="w-28 h-28 mx-auto mb-6 rounded-3xl glass neon-border"></div>

          <h1 className="text-5xl font-bold tracking-tight">reflec.xyz</h1>

          <p className="font-mono text-blue-400 text-xs tracking-[0.35em] mt-4 uppercase">
            Roblox Scripting Engineer
          </p>

          <p className="text-gray-400 text-lg mt-8 leading-relaxed">
            Building scalable Roblox gameplay systems, clean Luau architecture,
            UI logic, and optimized experiences for serious projects.
          </p>
        </section>

        <section className="glass neon-border rounded-3xl p-6 mb-12 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
            <Briefcase size={24} />
          </div>
          <div>
            <h2 className="font-bold text-xl">Hiring Status: Open</h2>
            <p className="text-gray-400">
              Available for commissions, long-term projects, and system rewrites.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-5">Case Studies</h2>

          <div className="space-y-5">
            <div className="project-card glass rounded-3xl p-6 transition-all">
              <h3 className="text-xl font-bold">Combat System Framework</h3>
              <p className="text-gray-400 mt-2">
                Designed modular hitboxes, cooldowns, abilities, and server-side validation
                for responsive Roblox combat.
              </p>
            </div>

            <div className="project-card glass rounded-3xl p-6 transition-all">
              <h3 className="text-xl font-bold">Data & Progression System</h3>
              <p className="text-gray-400 mt-2">
                Built reliable player data handling, rewards, saving, and progression
                logic for long-term retention.
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a className="glass rounded-2xl p-5 flex items-center gap-3 hover:bg-white/5 transition" href="mailto:your@email.com">
            <MessageCircle size={20} />
            Contact
          </a>

          <a className="glass rounded-2xl p-5 flex items-center gap-3 hover:bg-white/5 transition" href="https://discord.com" target="_blank">
            <Send size={20} />
            Discord
          </a>

          <a className="glass rounded-2xl p-5 flex items-center gap-3 hover:bg-white/5 transition" href="https://github.com" target="_blank">
            <Code2 size={20} />
            GitHub
          </a>
        </section>
      </div>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
