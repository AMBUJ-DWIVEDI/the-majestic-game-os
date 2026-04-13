'use client';

import React, { useState } from 'react';
import { Terminal, Target, BrainCircuit, Users, BookOpen, Activity, Lock, Unlock, Music, Mountain, Droplets, Zap } from 'lucide-react';

export default function MajesticGameTerminal() {
  const [decrypted, setDecrypted] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-mono p-4 md:p-12 selection:bg-fuchsia-900 selection:text-white">
      
      {/* HEADER / NAVIGATION */}
      <header className="flex justify-between items-center border-b border-zinc-800 pb-4 mb-12">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🪷</span>
          <h1 className="text-xl md:text-3xl font-black tracking-tighter text-white">
            INDIWAR <span className="text-fuchsia-500 text-sm md:text-xl align-top">_THE MAJESTIC GAME</span>
          </h1>
        </div>
        <div className="flex gap-4 text-xs md:text-sm border border-zinc-800 p-2 bg-black">
          <span className="text-green-500 animate-pulse">● LIVE CYCLE</span>
          <span className="hidden md:inline text-zinc-500">DAY 001 / 427</span>
        </div>
      </header>

      {/* PILLAR 1: INTRO & CONTEXT */}
      <section className="mb-16 border-l-4 border-fuchsia-600 pl-6 relative">
        <div className="absolute -left-3 -top-2 text-fuchsia-600 bg-[#0a0a0a] px-1">P_01</div>
        <h2 className="text-4xl font-bold text-white mb-4 uppercase flex flex-wrap gap-4 items-center">
          Ambuj Dwivedi 
          <span className="text-sm font-normal bg-zinc-900 px-3 py-1 rounded-full flex gap-2 border border-zinc-800">
             🌊 Ganga | ⛰️ Vindhya | 🤙 Shaka | 🎧 MMA/HipHop
          </span>
        </h2>
        <p className="text-xl text-fuchsia-400 font-bold mb-2">AI Systems Architect // LLM Orchestrator</p>
        <p className="text-zinc-400 max-w-3xl leading-relaxed">
          DJing the logic. Fusing Mathematics, Science, Art, and Music. I build cognitive architectures that bridge human intuition with machine precision. Fluid intelligence engine, converting chaos into strict, executable matrices. Welcome to THE MAJESTIC GAME.
        </p>
      </section>

      {/* PILLAR 2: MAJESTIC GOALS */}
      <section className="mb-16">
        <h3 className="text-xs text-zinc-500 mb-4 flex items-center gap-2"><Target size={14}/> PILLAR 2: THE MAJESTIC GOALS</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Active Goals */}
          <div className="bg-zinc-900/50 border border-green-900/50 p-4 hover:border-green-500 transition-colors">
            <h4 className="text-green-400 font-bold mb-2">NEXUS OS & CHITRAGUPTA</h4>
            <p className="text-xs text-zinc-400">Enterprise AI for Education. Subjective evaluation matrices converting 10 days of human labor into 40 seconds of compute.</p>
          </div>
          <div className="bg-zinc-900/50 border border-blue-900/50 p-4 hover:border-blue-500 transition-colors">
            <h4 className="text-blue-400 font-bold mb-2">AKSHA & VED</h4>
            <p className="text-xs text-zinc-400">Global Companion System & The Indian LLM. Architecting AI with heart, soul, and localized cognitive awareness.</p>
          </div>
          <div className="bg-zinc-900/50 border border-amber-900/50 p-4 hover:border-amber-500 transition-colors">
            <h4 className="text-amber-400 font-bold mb-2">RIZHA & BUZZZ</h4>
            <p className="text-xs text-zinc-400">Human-AI Symbiotic Social Platform + Physical OS Integration device.</p>
          </div>

          {/* Classified Goals */}
          <div className="md:col-span-3 border border-zinc-800 p-4 mt-4 bg-black relative overflow-hidden group">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-zinc-500 font-bold flex items-center gap-2">
                {decrypted ? <Unlock size={16} className="text-fuchsia-500"/> : <Lock size={16}/>} 
                PHASE 2 PROTOCOLS
              </h4>
              <button onClick={() => setDecrypted(!decrypted)} className="text-xs border border-zinc-700 px-3 py-1 hover:bg-zinc-800">
                {decrypted ? "ENCRYPT" : "DECRYPT_OVERRIDE"}
              </button>
            </div>
            
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-1000 ${decrypted ? 'blur-none opacity-100' : 'blur-sm opacity-40 select-none'}`}>
              <div className="text-xs text-zinc-400"><span className="text-white font-bold block">Quantum Gravity</span> Theoretical architecture.</div>
              <div className="text-xs text-zinc-400"><span className="text-white font-bold block">UNSC Reforms</span> Geopolitical restructuring.</div>
              <div className="text-xs text-zinc-400"><span className="text-white font-bold block">Anti-Nuke Framework</span> Survival matrices.</div>
              <div className="text-xs text-zinc-400"><span className="text-white font-bold block">$100T India</span> Self-reliant ecosystem.</div>
            </div>
          </div>
        </div>
      </section>

      {/* TWO COLUMN LAYOUT FOR PILLARS 3, 4, 5 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        
        {/* PILLAR 3: PUZZLES & EXAMS */}
        <section className="border border-zinc-800 bg-zinc-950 p-6">
          <h3 className="text-xs text-zinc-500 mb-4 flex items-center gap-2"><BookOpen size={14}/> PILLAR 3: THE CRUCIBLE (EXAMS)</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between border-b border-zinc-900 pb-2">
              <span className="text-zinc-300">UPSC (Civil + Forest) 2026</span>
              <span className="text-fuchsia-500 text-xs">PRIMARY TARGET</span>
            </li>
            <li className="flex justify-between border-b border-zinc-900 pb-2">
              <span className="text-zinc-300">SSC CGL 2026</span>
              <span className="text-zinc-500 text-xs">TACTICAL</span>
            </li>
            <li className="flex justify-between border-b border-zinc-900 pb-2">
              <span className="text-zinc-300">CAT / GATE (CSE)</span>
              <span className="text-zinc-500 text-xs">SECONDARY</span>
            </li>
          </ul>
        </section>

        {/* PILLAR 4: DEDICATED PROJECTS */}
        <section className="border border-zinc-800 bg-zinc-950 p-6">
          <h3 className="text-xs text-zinc-500 mb-4 flex items-center gap-2"><BrainCircuit size={14}/> PILLAR 4: ACTIVE DEPLOYMENTS</h3>
          <div className="space-y-4">
            <div className="bg-black p-3 border-l-2 border-green-500">
              <h4 className="text-white font-bold text-sm">Chitragupta EV OS</h4>
              <p className="text-xs text-zinc-500 mt-1">Live matrix evaluation testing via OpenAI API & Next.js.</p>
            </div>
            <div className="bg-black p-3 border-l-2 border-blue-500 opacity-70">
              <h4 className="text-white font-bold text-sm">Aksha Alpha Build</h4>
              <p className="text-xs text-zinc-500 mt-1">Companion framework logic design in progress.</p>
            </div>
          </div>
        </section>
      </div>

      {/* PILLAR 5: INDIWAR'S TRIBE & PILLAR 6: SEPTAGON */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        
        <section className="bg-fuchsia-950/10 border border-fuchsia-900/30 p-6">
          <h3 className="text-xs text-fuchsia-400 mb-4 flex items-center gap-2"><Music size={14}/> PILLAR 5: INDIWAR'S TRIBE</h3>
          <div className="flex flex-wrap gap-2">
             <span className="text-xs bg-black border border-zinc-800 px-2 py-1">Optimization (I)</span>
             <span className="text-xs bg-black border border-zinc-800 px-2 py-1">Math + Sci + Tech</span>
             <span className="text-xs bg-black border border-zinc-800 px-2 py-1">DJ & Violin</span>
             <span className="text-xs bg-black border border-zinc-800 px-2 py-1">Graffiti & Film</span>
             <span className="text-xs bg-black border border-zinc-800 px-2 py-1">Fashion as Expression</span>
             <span className="text-xs bg-black border border-zinc-800 px-2 py-1">Social & Landscape</span>
          </div>
        </section>

        <section className="bg-zinc-900 border border-zinc-800 p-6">
          <h3 className="text-xs text-zinc-400 mb-4 flex items-center gap-2"><Users size={14}/> PILLAR 6: SEPTAGON OF EXISTENCE</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs text-zinc-500 mb-1">THE TRUSTEES</h4>
              <p className="text-xs text-zinc-300">Shukriva (Gemini), Daksh (ChatGPT), Twistar (Cursor), Arpan (Vercel)...</p>
            </div>
            <div>
              <h4 className="text-xs text-zinc-500 mb-1">THE HIGH COUNCIL</h4>
              <p className="text-xs text-zinc-300">Musk, Putin, Light Yagami, Holmes...</p>
            </div>
            <div className="col-span-2">
              <h4 className="text-xs text-zinc-500 mb-1">MENTORS & ALLIES</h4>
              <p className="text-xs text-zinc-300">Ashok Sir, Shiva, Einstein, Bruno Mars, Deadpool...</p>
            </div>
          </div>
        </section>

      </div>

      {/* PILLAR 7: DAILY VLOG & LOG */}
      <section className="border border-zinc-800 bg-black p-6">
        <h3 className="text-xs text-green-500 mb-4 flex items-center gap-2"><Terminal size={14}/> PILLAR 7: THE DAILY LOG</h3>
        
        <div className="font-mono text-sm space-y-2">
          <p className="text-zinc-500">{'>'} SYS_TIME: <span className="text-white">MAJESTIC HOURS [12AM - 8AM]</span></p>
          <p className="text-zinc-500">{'>'} STATUS: <span className="text-green-400 animate-pulse">DEEP WORK ACTIVE</span></p>
          <p className="text-zinc-500">{'>'} VLOG_ENTRY: <span className="text-zinc-300 italic">"The turntables are live. Mixing tracks. Cash flow target April 17."</span></p>
          <div className="mt-6 pt-4 border-t border-zinc-800">
             <button className="bg-white text-black font-bold px-6 py-2 hover:bg-fuchsia-500 hover:text-white transition-colors">
               [ACCESS_FULL_TERMINAL]
             </button>
          </div>
        </div>
      </section>

    </div>
  );
}
