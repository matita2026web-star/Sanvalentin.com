
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { SectionProps } from '../types';
import { Heart } from 'lucide-react';

const LetterSection: React.FC<SectionProps> = ({ id }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDone, setIsDone] = useState(false);
  const fullText = "Gracias por cada risa, cada abrazo, cada mirada. Desde ese atardecer, mi lugar favorito es a tu lado.";
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView && !isDone) {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText(fullText.slice(0, i));
        i++;
        if (i > fullText.length) {
          clearInterval(interval);
          setIsDone(true);
        }
      }, 80);
      return () => clearInterval(interval);
    }
  }, [isInView, isDone]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id={id} className="min-h-screen bg-[#0f0511] flex items-center justify-center py-40 px-8 overflow-hidden relative">
      {/* Atmósfera de fondo con toque púrpura y rosa */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(156,39,176,0.1),transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div ref={ref} className="max-w-4xl w-full text-center z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="relative"
        >
          <Heart className="w-8 h-8 text-rose-500/30 mx-auto mb-12" />
          
          <div className="font-playfair text-3xl md:text-6xl text-white/90 leading-[1.8] md:leading-[1.7] min-h-[300px] flex items-center justify-center italic font-light px-4">
            <p className="relative">
              {displayText}
              {!isDone && (
                <motion.span 
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                  className="inline-block w-[2px] h-8 md:h-14 bg-rose-400 ml-4 align-middle"
                />
              )}
            </p>
          </div>
        </motion.div>

        <AnimatePresence>
          {isDone && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 2, ease: "easeOut" }}
              className="mt-24"
            >
              <div className="relative inline-block group">
                <div className="absolute -inset-4 bg-rose-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                
                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative px-16 py-7 bg-[#FF6F91] text-white rounded-full font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs shadow-[0_20px_60px_-15px_rgba(255,111,145,0.5)] overflow-hidden"
                >
                  <span className="relative z-10">¿Seguimos escribiendo nuestra historia?</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default LetterSection;
