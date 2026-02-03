"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Quote,
  CheckCircle2,
  Sparkles,
  Code2,
  Target,
  Cpu,
  ArrowRight,
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-slate-50/50">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl opacity-50" />
        <div className="absolute inset-0 bg-[matrix(1px,0,0,1px,0,0)] bg-[slate-200/20] [mask-image:radial-gradient(white,transparent)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* --- HEADER --- */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-500 to-blue-700 text-[10px] font-black uppercase tracking-[0.25em]">
                A RENDSZER
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight"
          >
            Így épül fel a növekedésed
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 h-1.5 w-24 bg-blue-600 rounded-full mx-auto"
          />
        </div>

        {/* --- MAIN GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
          {/* 1. Large Feature Card: The Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 relative group"
          >
            <div className="h-full p-8 md:p-12 rounded-[3rem] bg-slate-900 text-white overflow-hidden relative border border-slate-800">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Cpu className="w-32 h-32 text-blue-400" />
              </div>

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold tracking-widest uppercase text-slate-400">
                    Rendszerszemlélet
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black leading-tight mb-6">
                  Nem csak weboldalt készítek, <br />
                  hanem <span className="text-blue-400">ügyfélszerző rendszert</span>.
                </h3>

                <p className="text-slate-400 text-lg mb-8 max-w-md leading-relaxed">
                  A legtöbb edző azért nem nő online, mert reményre épít.
                  Én mérnöki logikával alakítom a szakértelmedet egy kiszámítható,
                  automatizált, személyre szabott és jól működő weboldalra.
                </p>

                <div className="mt-auto flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium text-slate-300">
                      Átgondolt logika
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium text-slate-300">
                      Skálázható rendszer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Side Card: Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4"
          >
            <div className="h-full p-8 rounded-[3rem] bg-blue-600 text-white flex flex-col justify-between relative overflow-hidden shadow-xl shadow-blue-200">
              <Quote className="w-20 h-20 text-white/10 absolute -top-4 -right-4" />

              <div className="relative z-10">
                <ul className="space-y-4 mb-8">
                  {[
                    "Felejtsd el a sablonkérdések megválaszolását.",
                    "Az érdeklődő minden válasz birtokában érkezik hozzád.",
                    "Innentől már csak egy lépés a közös munka kezdete."
                  ].map((text, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white group-hover:bg-blue-400 group-hover:scale-125 transition-all duration-300" />
                      <p className="text-xl font-bold leading-tight tracking-tight text-white/90">
                        {text}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-xl">
                  ⚡
                </div>
                <div>
                  <div className="text-sm font-black uppercase tracking-tighter">
                    Alapelvem
                  </div>
                  <div className="text-[10px] opacity-80 uppercase tracking-widest">
                    Logika a hype helyett
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. Bottom Card: Difference */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-12"
          >
            <div className="p-8 md:p-10 rounded-[3rem] bg-white border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-wider mb-4">
                  <Target className="w-4 h-4" />
                  Versenyelőny
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                  Tűnj ki a tömegből egy{" "}
                  <span className="text-blue-600 italic">
                    személyre szabott weboldallal
                  </span>
                  .
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Egy ilyen telített piacon, órási versenyelőnyt jelenthet egy profi weboldal, jelentkezői rendszer.
                  
                </p>
              </div>

              <div className="w-full md:w-auto">
                <div className="bg-slate-900 p-8 rounded-[2rem] border border-slate-800 flex flex-col gap-3 min-w-[280px]">
                  <div className="flex items-center gap-3 group cursor-default">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-white">
                      Automatizált érdeklődés
                    </span>
                  </div>
                  <div className="flex items-center gap-3 group cursor-default">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-white">
                      Hiteles szakmai jelenlét
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
