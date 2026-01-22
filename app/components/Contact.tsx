"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ArrowRight, MessageCircle, Wifi } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      
      {/* Háttér dekorációk (Glows) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] opacity-40 -z-10 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* BAL OLDAL: A "Hívogató" Szöveg */}
          <div className="text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Status: Elérhető
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6 leading-[0.9]"
            >
              Nézzük meg <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                a rendszered.
              </span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-500 font-medium max-w-md mx-auto lg:mx-0 leading-relaxed"
            >
              Nincs formalitás. Nincs sales script. Csak te, én, és egy őszinte diagnosztika arról, hol folyik el a pénz a folyamatodban.
            </motion.p>
          </div>

          {/* JOBB OLDAL: A "Kapcsolati Kártya" */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8 }}
            className="relative group"
          >
            {/* Gradiens keret effekt */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-[2.5rem] blur opacity-30 group-hover:opacity-60 transition duration-500" />
            
            <div className="relative bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-center border border-slate-800 shadow-2xl overflow-hidden">
              
              {/* Noise textúra a sötét háttéren (opcionális CSS class, vagy inline style) */}
              <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

              {/* Profil / Ikon */}
              <div className="relative mx-auto w-20 h-20 mb-8">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#833ab4] to-[#fcb045] rounded-2xl rotate-6 opacity-50 blur-lg"></div>
                <div className="relative w-full h-full bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 shadow-inner">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                {/* Értesítés badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 border-4 border-slate-900 rounded-full flex items-center justify-center text-[10px] font-bold text-white">
                  1
                </div>
              </div>

              <h3 className="text-2xl font-black text-white mb-2">Írj rám Instán</h3>
              <p className="text-slate-400 text-sm mb-10">Átlagos válaszidő: &lt; 2 óra</p>

              {/* A FŐ GOMB */}
              <motion.a 
                href="https://instagram.com/coachbaseweb/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group/btn relative flex items-center justify-center gap-3 w-full py-5 bg-white text-slate-900 rounded-xl font-black text-lg uppercase tracking-widest overflow-hidden"
              >
                 {/* Hover Gradiens Kitöltés */}
                 <div className="absolute inset-0 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out" />
                 
                 <Instagram className="w-5 h-5 relative z-10 group-hover/btn:text-white transition-colors" />
                 <span className="relative z-10 group-hover/btn:text-white transition-colors">Start Chat</span>
                 <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:text-white transition-colors group-hover/btn:translate-x-1 duration-300" />
              </motion.a>

              {/* Tech Specs / Trust Signals */}
              <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                <span className="flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                  Ingyenes Audit
                </span>
                <span className="flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                  0% Kötelezettség
                </span>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;