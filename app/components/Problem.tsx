"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareOff, Repeat2, Hourglass, AlertTriangle, XCircle, ArrowDown } from 'lucide-react';

const Problem: React.FC = () => {
  const problems = [
    {
      icon: <MessageSquareOff size={32} className="text-rose-500" />,
      title: "DM Káosz",
      text: "Sokan írnak, de kevesen fizetnek. A napod fele pötyögéssel telik, nulla eredménnyel.",
      code: "ERR_01"
    },
    {
      icon: <Repeat2 size={32} className="text-rose-500" />,
      title: "Mókuskerék",
      text: "Ugyanazokat a kérdéseket válaszolod meg századszorra is. 'Mennyibe kerül?', 'Hogy működik?'",
      code: "ERR_02"
    },
    {
      icon: <Hourglass size={32} className="text-rose-500" />,
      title: "Időpazarlás",
      text: "A komolytalan érdeklődők elviszik az energiádat a fizető kliensek elől.",
      code: "ERR_03"
    }
  ];

  return (
    <section id="problem" className="py-24 px-6 relative overflow-hidden bg-white">

      {/* Háttér Rács (Grid Pattern) - Ugyanaz mint a Solution-nél a konzisztencia miatt */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* --- HEADER --- */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-bold uppercase tracking-widest mb-6 border border-rose-100"
          >
            <AlertTriangle size={14} />
            Diagnosztika
          </motion.div>

          <br />

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter relative inline-block mb-6"
          >
            Ismerős a helyzet?
            {/* Vörös "Frusztrált" Aláhúzás */}
            <motion.svg
              viewBox="0 0 300 20"
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-auto text-rose-500/50 z-0"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
            >
              <path
                d="M5 15 Q 150 5 295 15"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </motion.svg>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            A legtöbb edző nem azért ég ki, mert nem szereti a munkáját. <br className="hidden md:block" />
            Hanem mert <span className="text-rose-600 font-bold bg-rose-50 px-1 rounded">rossz folyamatokkal</span> dolgozik.
          </motion.p>
        </div>

        {/* --- KÁRTYÁK GRID --- */}
        <div className="grid md:grid-cols-3 gap-8 mb-24 items-stretch">
          {problems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="group relative bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-rose-500/10 hover:border-rose-200 transition-all duration-300"
            >
              {/* Error Code Badge */}
              <div className="absolute top-6 right-8 text-[10px] font-mono font-bold text-slate-300 uppercase tracking-widest group-hover:text-rose-400 transition-colors">
                {item.code}
              </div>

              {/* Ikon Háttérrel */}
              <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-rose-500 group-hover:rotate-3 transition-all duration-300 shadow-sm">
                {React.isValidElement(item.icon) ? (
                  // Itt történik a javítás: "as React.ReactElement<{ className?: string }>"
                  React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, {
                    className: "text-rose-500 group-hover:text-white transition-colors duration-300"
                  })
                ) : null}
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-rose-600 transition-colors">
                {item.title}
              </h3>

              <p className="text-slate-600 font-medium leading-relaxed">
                {item.text}
              </p>

            </motion.div>
          ))}
        </div>

        {/* --- STATEMENT BLOCK (High Contrast) --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative overflow-hidden bg-slate-900 rounded-[3rem] shadow-2xl shadow-slate-900/40">

            {/* Háttér fények */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-rose-600 rounded-full blur-[100px] opacity-20" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-orange-600 rounded-full blur-[100px] opacity-20" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>

            <div className="relative z-10 p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">

              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-rose-400 font-mono text-xs uppercase tracking-widest mb-2">
                  <XCircle size={14} />
                  Root Cause Analysis
                </div>

                <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                  Nem az a baj, hogy <br className="hidden md:block" />
                  nincs érdeklődő.
                </h3>

                <p className="text-lg md:text-xl text-slate-400 font-medium italic">
                  "A baj az, hogy lyukas vödörrel próbálsz vizet merni."
                </p>
              </div>

              {/* Vizuális elem jobb oldalt: Hiányzó láncszem vagy X */}
              <div className="flex-shrink-0 relative group cursor-default">
                <div className="absolute inset-0 bg-rose-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full" />

                <div className="relative w-32 h-32 rounded-full bg-slate-800 border border-slate-700 flex flex-col items-center justify-center gap-2 group-hover:border-rose-500/50 transition-colors duration-300">
                  <div className="text-4xl font-black text-white">404</div>
                  <div className="text-[10px] text-rose-500 font-mono uppercase tracking-widest">System Missing</div>
                </div>

                {/* Kis nyíl lefelé, ami a következő szekcióra (Solution) utal */}
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-slate-500 hidden md:flex flex-col items-center gap-1"
                >
                  <span className="text-[10px] uppercase tracking-widest">Megoldás</span>
                  <ArrowDown size={14} />
                </motion.div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Problem;