"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
// Hozzáadtuk az ArrowDown-t az importokhoz
import { ArrowRight, CheckCircle2, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-32 md:pb-32 px-6 overflow-hidden bg-slate-50 min-h-screen flex flex-col justify-center">
      
      {/* 1. TECH BACKGROUND (Grid + Glows) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] left-[20%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-[10%] w-[600px] h-[600px] bg-indigo-300/20 rounded-full blur-[120px]"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        {/* 2. BADGE */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 text-slate-100 text-xs font-bold uppercase tracking-widest border border-slate-700 shadow-xl shadow-blue-900/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Status: Online & Ready
          </div>
        </motion.div>

        {/* 3. HEADLINE */}
        <motion.h1 
          variants={itemVariants} 
          className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-[1.1] md:leading-[1.1] mb-8"
        >
          {/* 1. Szó: Weboldal (Aláhúzva) */}
          <span className="relative inline-block mr-3 md:mr-4">
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
               Weboldal
             </span>
             <motion.svg
                viewBox="0 0 300 15"
                className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-auto text-blue-600 z-0 pointer-events-none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
              >
                <path d="M5 5 Q 150 15 295 5" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
              </motion.svg>
          </span>

          <span className="inline-block text-slate-900">
             és lead rendszer
          </span>
          
          <br className="hidden md:block" />

          {/* 2. Szó: edzőknek (Aláhúzva) */}
          <span className="inline-block relative ml-3 md:ml-0">
             <span className="text-slate-900">
               személyi{' '}
             </span>
             <span className="relative inline-block">
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                 edzőknek.
               </span>
               <motion.svg
                  viewBox="0 0 300 15"
                  className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-auto text-indigo-600 z-0 pointer-events-none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8, ease: "easeInOut" }}
                >
                  <path d="M5 10 Q 150 2 295 10" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
                </motion.svg>
             </span>
          </span>
        </motion.h1>

        {/* 4. SUBHEADLINE */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-lg md:text-xl font-medium text-slate-500 mb-12 mt-12">
          <span className="flex items-center gap-2">
            <CheckCircle2 size={20} className="text-blue-600" />
            Kevesebb komolytalan érdeklődő
          </span>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-300" />
          <span className="flex items-center gap-2">
            <CheckCircle2 size={20} className="text-blue-600" />
            Több valódi kliens
          </span>
        </motion.div>

        {/* 5. CTA BUTTONS */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-lg tracking-wide overflow-hidden shadow-2xl shadow-blue-900/20 hover:shadow-blue-900/40 transition-shadow"
          >
            {/* Hover Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            
            <span className="relative z-10">Ingyenes áttekintés</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="#problem"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 text-slate-500 font-bold hover:text-slate-900 transition-colors"
          >
            Hogyan működik?
          </motion.a>
        </motion.div>

      </motion.div>
      
      {/* 6. LEBEGŐ NYÍL (ÚJ RÉSZ) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 2, duration: 1 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" } 
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 cursor-pointer hover:text-blue-600 transition-colors"
        onClick={() => {
          const problemSection = document.getElementById('problem');
          if (problemSection) {
            problemSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <ArrowDown size={32} strokeWidth={1.5} />
      </motion.div>

    </section>
  );
};

export default Hero;