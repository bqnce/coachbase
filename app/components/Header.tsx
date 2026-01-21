"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import logo from '@/public/logo.png'; // Feltételezve, hogy a kép ott van

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Scroll figyelés a stílusváltáshoz
  useMotionValueEvent(scrollY, "change", (latest) => {
    const isScrolled = latest > 20;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  });

  const navLinks = [
    { name: "Probléma", href: "#problem" },
    { name: "Megoldás", href: "#solution" },
    { name: "Rólam", href: "#about" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO AREA */}
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative w-10 h-10 flex items-center justify-center">
            {/* Logo Glow Effect */}
            <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full" />
            
            <img 
              src={logo.src}
              alt="CoachBase Logo" 
              className="relative w-full h-full object-contain rounded-xl transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <span className="font-black text-xl tracking-tighter text-slate-900 uppercase">
            CoachBase
          </span>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="group relative text-xs font-bold text-slate-600 hover:text-slate-900 uppercase tracking-widest transition-colors py-2"
            >
              {link.name}
              {/* Animated Underline */}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
            </a>
          ))}

          {/* CTA BUTTON - Tech Style */}
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-black uppercase tracking-widest overflow-hidden shadow-lg shadow-slate-900/20"
          >
            {/* Hover Gradient Shine */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            
            <span className="relative z-10">Ingyenes áttekintés</span>
            <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;