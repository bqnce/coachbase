"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, CheckCircle2, XCircle, LayoutGrid, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-white">
      
      {/* 1. Tech Background Grid (Mérnöki hatás) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* INLINED HEADER (SectionHeader helyett) */}
        <div className="mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-6">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-500 to-blue-700 text-[10px] font-black uppercase tracking-[0.25em]">
                A filozófiám
              </span>
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
          >
            Ki vagyok én?
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 h-1.5 w-24 bg-blue-600 rounded-full mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* BAL OLDAL: A "Statement" Kártya (Sötét, kontrasztos) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative rounded-[2.5rem] bg-slate-900 p-8 md:p-12 overflow-hidden shadow-2xl shadow-slate-200"
          >
            {/* Dekorációs háttér a kártyán belül */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                <LayoutGrid className="w-3 h-3" />
                Rendszerépítő
              </div>

              <h3 className="text-3xl md:text-4xl font-black text-white leading-tight mb-8">
                Nem hiszek a szerencsében. <br/>
                <span className="text-blue-500">A matekban hiszek.</span>
              </h3>

              <div className="space-y-4">
                {/* A "ROSSZ" (Múlt) */}
                <div className="flex items-center gap-4 text-slate-500">
                  <XCircle className="w-6 h-6 shrink-0" />
                  <span className="text-lg font-medium line-through decoration-slate-600 decoration-2">
                    Marketinget árulok
                  </span>
                </div>

                {/* A "JÓ" (Jövő) */}
                <div className="flex items-center gap-4 text-white">
                  <div className="w-6 h-6 shrink-0 rounded-full bg-blue-500 flex items-center justify-center text-slate-900">
                    <CheckCircle2 className="w-4 h-4" strokeWidth={3} />
                  </div>
                  <span className="text-xl font-bold">
                    Működő jelentkező rendszert építek
                  </span>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-800">
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  "Az edzők többsége remek szakember, de elveszik az online zajban. Én abban segítek, hogy a szaktudásod eljusson azokhoz, akiknek szükségük van rá – kiszámíthatóan."
                </p>
              </div>
            </div>
          </motion.div>

          {/* JOBB OLDAL: Személyesebb, tisztább rész */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="pl-0 lg:pl-12 text-center lg:text-left"
          >
            <div className="mb-8 relative inline-block">
               <Quote className="w-12 h-12 text-blue-100 absolute -top-6 -left-6 -z-10" />
               <h4 className="text-2xl font-black text-slate-900 tracking-tight">
                 Edzők online jelenlétével foglalkozom.
               </h4>
            </div>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Nem ügynökség vagyok, aki sablonokat sóz rád. Egy partner vagyok, aki érti, milyen érzés, amikor üres a naptár, és milyen, amikor tele van várólistával.
            </p>

            {/* Kiemelt "Personal Touch" Box */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm inline-block text-left relative group hover:border-blue-200 transition-colors duration-300">
              <div className="flex items-center gap-4">
                {/* Placeholder a képnek/ikonnak */}
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-2xl group-hover:bg-blue-50 transition-colors">
                  👋
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">
                    A garanciám
                  </p>
                  <p className="text-base font-black text-slate-900 italic">
                    "Csak olyat adok el, amit edzőként én is használnék."
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};