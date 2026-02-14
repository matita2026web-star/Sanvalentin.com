
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SunsetHero from './components/SunsetHero';
import PhotoSection from './components/PhotoSection';
import CountdownSection from './components/CountdownSection';
import LetterSection from './components/LetterSection';
import HeartBackground from './components/HeartBackground';
import { Music2, Heart } from 'lucide-react';


const LOCAL_MUSIC_SRC = '/music/nrique Iglesias, Juan Luis Guerra - Cuando Me Enamoro (Official Music Video).webm';
const DEFAULT_MUSIC_SRC = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3';
const MUSIC_SRC = import.meta.env.VITE_MUSIC_URL || LOCAL_MUSIC_SRC;

const App: React.FC = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [musicLabel, setMusicLabel] = useState('Tu canción especial');

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => {
          console.error("Error al reproducir audio:", e);
          alert("Toca la pantalla para permitir la música.");
        });
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative min-h-screen selection:bg-rose-200 selection:text-rose-900"
        >
          {/*
              ---------------------------------------------------------
              🎵 MÚSICA PERSONALIZADA:
              1) Copia tu archivo en /public/music/nrique Iglesias, Juan Luis Guerra - Cuando Me Enamoro (Official Music Video).webm
              2) (Opcional) define VITE_MUSIC_URL en .env.local
                 Ej: VITE_MUSIC_URL=https://misitio.com/tu-cancion.webm
              ---------------------------------------------------------
          */}
          <audio
            ref={audioRef}
            loop
            preload="metadata"
            src={MUSIC_SRC}
            onLoadedMetadata={() => setMusicLabel('Nuestra canción ❤️')}
            onError={() => {
              setMusicLabel('Canción romántica');
              if (audioRef.current && audioRef.current.src !== DEFAULT_MUSIC_SRC) {
                audioRef.current.src = DEFAULT_MUSIC_SRC;
                audioRef.current.load();
              }
            }}
          />

          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, type: "spring" }}
            onClick={toggleMusic}
            className="fixed bottom-8 right-8 z-50 p-5 bg-white/95 backdrop-blur-md rounded-full shadow-2xl border border-rose-100 text-[#FF6F91] hover:scale-110 active:scale-95 transition-all flex items-center gap-3 group overflow-hidden"
          >
            <div className="relative">
              {isMusicPlaying && (
                <motion.div 
                  animate={{ scale: [1, 2.5, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="absolute inset-0 bg-rose-400 rounded-full -z-10"
                />
              )}
              {isMusicPlaying ? <Heart className="w-6 h-6 fill-current animate-pulse text-[#FF6F91]" /> : <Music2 className="w-6 h-6 text-gray-400" />}
            </div>
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700 whitespace-nowrap px-0 group-hover:px-4">
              {isMusicPlaying ? musicLabel : 'Activar Música'}
            </span>
          </motion.button>

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
              <p className="font-playfair italic tracking-[0.5em] uppercase text-white/40">Eternamente juntos.</p>
            </motion.div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default App;
