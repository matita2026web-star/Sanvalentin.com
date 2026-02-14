import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SunsetHero from './components/SunsetHero';
import PhotoSection from './components/PhotoSection';
import CountdownSection from './components/CountdownSection';
import LetterSection from './components/LetterSection';
import HeartBackground from './components/HeartBackground';
import { Heart } from 'lucide-react';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative min-h-screen selection:bg-rose-200 selection:text-rose-900"
        >
          <HeartBackground />

          <main className="relative z-10">
            <SunsetHero id="inicio" />
            <PhotoSection id="recuerdo" />
            <CountdownSection id="tiempo" />
            <LetterSection id="carta" />
          </main>

          <footer className="py-20 bg-[#1a0b1d] text-white/20 text-center text-xs border-t border-white/5">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex flex-col items-center gap-6"
            >
              <Heart className="w-5 h-5 text-rose-500/30" />
              <p className="font-playfair italic tracking-[0.5em] uppercase text-white/40">
                Eternamente juntos.
              </p>
            </motion.div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default App;

