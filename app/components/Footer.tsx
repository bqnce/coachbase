"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin, ArrowUpRight, Mail } from 'lucide-react';

// Segéd komponens a linkekhez
const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a 
    href={href}
    className="block text-slate-400 hover:text-white transition-colors duration-200 text-sm font-medium w-fit"
    whileHover={{ x: 5 }}
  >
    {children}
  </motion.a>
);

const SocialButton = ({ icon: Icon, href }: { icon: any; href: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-blue-600/20"
  >
    <Icon size={18} />
  </motion.a>
);

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-200 pt-20 pb-10 relative overflow-hidden">
      
      {/* Háttér dekorációk */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 -z-10" />

      {/* Óriás háttér szöveg */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[12vw] font-black text-slate-900/50 leading-none pointer-events-none select-none tracking-tighter whitespace-nowrap">
        COACHBASE
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* 1. Oszlop: Brand Info (5 egység széles) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-blue-900/20">
                C
              </div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase">
                CoachBase
              </span>
            </div>
            
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Prémium online jelenlét és automatizált ügyfélszerző rendszer ambiciózus személyi edzőknek. Ne csak eddz, építs birodalmat.
            </p>

            <div className="flex gap-4 pt-2">
              <SocialButton icon={Instagram} href="#" />
              <SocialButton icon={Facebook} href="#" />
              <SocialButton icon={Linkedin} href="#" />
            </div>
          </div>

          {/* 2. Oszlop: Navigáció (3 egység széles - kicsit szélesebb lett) */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Navigáció</h4>
            <div className="space-y-4">
              <FooterLink href="/">Kezdőlap</FooterLink>
              <FooterLink href="#problem">Probléma</FooterLink>
              <FooterLink href="#solution">Megoldás</FooterLink>
              <FooterLink href="#about">Rólam</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </div>
          </div>

          {/* 3. Oszlop: Kapcsolat CTA (4 egység széles - átvette a jogi rész helyét) */}
          <div className="md:col-span-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Kapcsolat</h4>
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800/60 shadow-xl relative overflow-hidden group">
              {/* Kis hover effekt a dobozon */}
              <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <p className="text-sm text-slate-400 mb-6 relative z-10">
                Kérdésed van a rendszerrel kapcsolatban? Írj nekünk közvetlenül.
              </p>
              
              <a 
                href="mailto:hello@coachbase.hu" 
                className="relative z-10 flex items-center gap-4 text-white font-bold hover:text-blue-400 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                   <Mail size={18} />
                </div>
                <span className="text-lg">hello@coachbase.hu</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs font-medium">
            © {currentYear} CoachBase System. Minden jog fenntartva.
          </p>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-white transition-colors group cursor-pointer"
          >
            Vissza a tetejére
            <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;