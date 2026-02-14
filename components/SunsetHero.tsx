
import React from 'react';
import { motion } from 'framer-motion';
import { SectionProps } from '../types';

const SunsetHero: React.FC<SectionProps> = ({ id }) => {
  const scrollToRecuerdo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('recuerdo');
    if (element) {
      const headerOffset = 40;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id={id}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Mezcla de Rosa, Amarillo y Púrpura */}
      <motion.div 
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#ff9fb9_0%,#ff709b_35%,#c85ad6_70%,#7f4ad8_100%)] z-0"
      />
      
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(20,8,26,0.2),rgba(20,8,26,0.35))] backdrop-blur-[1px] z-[1]" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center px-6"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1.5 }}
          className="h-px w-24 bg-white/40 mx-auto mb-12 origin-center"
        />

        <motion.h1 
          className="font-playfair text-6xl md:text-9xl text-white mb-4 tracking-tighter drop-shadow-lg font-bold"
        >
          24 de marzo
        </motion.h1>
        <motion.h2 
          className="font-playfair text-4xl md:text-7xl text-white/90 mb-12 font-light italic"
        >
          4:37 PM
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 2 }}
          className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto mb-20 tracking-[0.15em] font-light italic leading-relaxed"
        >
          "El momento en que empezó nuestra historia."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1.2 }}
        >
          <motion.a
            href="#recuerdo"
            onClick={scrollToRecuerdo}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center px-16 py-7 overflow-hidden font-medium text-white transition duration-500 ease-out bg-white/15 backdrop-blur-md border border-white/30 rounded-full shadow-[0_25px_60px_-15px_rgba(0,0,0,0.45)] z-20 cursor-pointer"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-500 -translate-x-full bg-gradient-to-r from-[#ff6f91] to-[#ff8ab3] group-hover:translate-x-0 ease">
              <svg className="w-7 h-7 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease uppercase tracking-[0.4em] text-[11px] font-bold">
              Descubrí lo que significó
            </span>
            <span className="relative invisible uppercase tracking-[0.4em] text-[11px] font-bold">Descubrí lo que significó</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SunsetHero;
