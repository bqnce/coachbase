"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Globe, FileText, PhoneCall, CheckCircle2, ArrowRight } from 'lucide-react';

const Solution: React.FC = () => {
  const steps = [
    {
      icon: <Instagram size={32} className="text-white" />,
      label: "Figyelem",
      sub: "Instagram forgalom",
      desc: "A célközönséged már ott van. Mi csak odatereljük őket.",
      color: "from-pink-500 to-rose-500",
      delay: 0
    },
    {
      icon: <Globe size={32} className="text-white" />,
      label: "Szűrés",
      sub: "Profi weboldal",
      desc: "Egy oldal, ami elad helyetted, amíg te alszol (vagy edzel).",
      color: "from-blue-500 to-cyan-500",
      delay: 0.1
    },
    {
      icon: <FileText size={32} className="text-white" />,
      label: "Minőség",
      sub: "Jelentkező ív",
      desc: "Csak azok jutnak át, akik komolyan gondolják.",
      color: "from-indigo-500 to-purple-500",
      delay: 0.2
    },
    {
      icon: <PhoneCall size={32} className="text-white" />,
      label: "Zárás",
      sub: "Konzultáció",
      desc: "Már csak a 'melyik csomagot válasszam?' kérdés marad.",
      color: "from-emerald-500 to-teal-500",
      delay: 0.3
    },
  ];

  return (
    <section id="solution" className="py-24 px-6 relative overflow-hidden bg-slate-50">
      
      {/* Háttér Rács */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-200 shadow-sm">
              <CheckCircle2 size={14} />
              A Megoldás
            </div>
          </motion.div>

          <br />

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6 relative inline-block"
          >
            Erre való a{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                CoachBase.
              </span>
              
              {/* --- SVG ALÁHÚZÁS ANIMÁCIÓ --- */}
              <motion.svg
                viewBox="0 0 300 25"
                className="absolute -bottom-3 left-0 w-full h-auto text-blue-400/40 pointer-events-none z-0"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
              >
                <path
                  d="M5 15 Q 150 5 295 15" // Enyhe ív
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            Lecseréljük a végtelen DM-ezést egy automatizált gépezetre, ami <span className="font-bold text-slate-800">0-24-ben szűri a jelentkezőket</span> helyetted.
          </motion.p>
        </div>

        {/* Lépések Kártyák */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6 mb-32">
          
          {/* Összekötő vonal (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: step.delay }}
              className="relative group"
            >
              {/* Kártya Doboz */}
              <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col items-start relative overflow-hidden z-10">
                
                {/* Színes felső sáv (Accent) */}
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${step.color}`} />

                {/* --- KORRIGÁLT SZÁM POZÍCIÓ (Bentebb) --- */}
                <div className="absolute right-6 top-6 text-6xl font-black text-slate-100 font-oswald select-none pointer-events-none group-hover:text-blue-50 transition-colors z-0">
                  0{idx + 1}
                </div>

                {/* Ikon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-6 transition-transform relative z-10`}>
                  {step.icon}
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-1 relative z-10">{step.label}</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 relative z-10">{step.sub}</p>
                <p className="text-slate-600 text-sm leading-relaxed relative z-10">{step.desc}</p>
                
              </div>
              
              {/* Mobil nyíl */}
              {idx < steps.length - 1 && (
                 <div className="md:hidden flex justify-center py-4">
                    <ArrowRight className="text-slate-300 rotate-90" />
                 </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Statement Block */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-slate-900 rounded-[3rem] p-10 md:p-16 text-center overflow-hidden shadow-2xl shadow-slate-900/30"
          >
            {/* Háttér effektek */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-900 opacity-50 -z-10" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-600 rounded-full blur-[100px] opacity-20" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              <div className="text-center md:text-right">
                <p className="text-lg md:text-2xl font-bold text-slate-500 line-through decoration-slate-600 decoration-2 opacity-60">
                  Nem több üzenet.
                </p>
              </div>

              <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                 <ArrowRight className="text-white md:rotate-0 rotate-90" />
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight drop-shadow-lg">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                    Jobb folyamat.
                  </span>
                </h3>
              </div>
            </div>

            <p className="mt-8 text-slate-400 text-sm font-mono uppercase tracking-widest">
              // Automated Client Acquisition System
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Solution;