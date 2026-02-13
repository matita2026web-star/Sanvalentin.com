import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { SectionProps } from '../types';
import { Heart } from 'lucide-react';

/* =========================
   🌸 EFECTO PÉTALOS PRO
========================= */

const Petals: React.FC = () => {
  const petals = useMemo(
    () =>
      Array.from({ length: 25 }).map((_, i) => ({
        id: i,
        size: 15 + Math.random() * 25,
        left: Math.random() * 100,
        duration: 12 + Math.random() * 10,
        delay: Math.random() * 5,
        drift: Math.random() * 100 - 50,
        rotate: Math.random() * 360,
        depth: Math.random(),
        hue: 330 + Math.random() * 40
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{
            y: -100,
            x: `${petal.left}vw`,
            rotate: petal.rotate,
            opacity: 0
          }}
          animate={{
            y: "110vh",
            x: `calc(${petal.left}vw + ${petal.drift}px)`,
            rotate: petal.rotate + 360,
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            width: petal.size,
            height: petal.size * 1.15,
            filter: petal.depth > 0.5 ? "blur(1px)" : "none",
            zIndex: petal.depth > 0.5 ? 0 : 20,
            background: `linear-gradient(145deg, hsla(${petal.hue}, 90%, 84%, 0.95), hsla(${petal.hue - 12}, 95%, 70%, 0.75))`,
            boxShadow: 'inset -5px -6px 12px rgba(255,255,255,0.45), 0 12px 24px rgba(220, 39, 117, 0.22)',
            borderRadius: '58% 42% 68% 32% / 54% 33% 67% 46%'
          }}
          className="absolute top-0"
        />
      ))}
    </div>
  );
};

/* =========================
   💖 SECCIÓN FOTO
========================= */

const PhotoSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="relative min-h-screen bg-[radial-gradient(circle_at_top,#fff9ed_0%,#fff4de_35%,#fff0d2_100%)] flex flex-col items-center justify-center py-40 px-6 overflow-hidden scroll-mt-20"
    >
      {/* 🌸 PÉTALOS */}
      <Petals />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative group mx-auto max-w-2xl">

            {/* Glow suave */}
            <div className="absolute -inset-10 bg-purple-500/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

            <motion.div
              whileHover={{ scale: 1.02, rotate: 0 }}
              initial={{ rotate: -1 }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-[2rem] shadow-[0_60px_120px_-20px_rgba(156,39,176,0.2)] bg-white border-[8px] md:border-[16px] border-white transition-all duration-700"
            >
              {/* 📸 TU FOTO */}
              <img
                src="https://i.ibb.co/dsPMpsZt/san-valentin.jpg"
                alt="San Valentín"
                className="w-full aspect-[3/4] md:aspect-[4/5] object-cover transition-transform duration-[12s] ease-out group-hover:scale-110"
              />

              <div
                className="absolute inset-0 pointer-events-none backdrop-blur-[1px] transition-all duration-1000 opacity-30 group-hover:opacity-10"
                style={{
                  maskImage:
                    'radial-gradient(circle at center, transparent 40%, black 100%)',
                  WebkitMaskImage:
                    'radial-gradient(circle at center, transparent 40%, black 100%)'
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute -bottom-10 -right-4 md:right-0 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-rose-50/50 max-w-[240px] z-30"
            >
              <Heart className="w-5 h-5 text-[#FF6F91] mb-3 fill-current" />
              <p className="font-playfair text-[#2E2E2E] text-sm italic leading-relaxed">
                "Momentos simples que se vuelven eternos."
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.5 }}
            className="mt-32 text-center"
          >
            <h4 className="font-playfair text-3xl md:text-5xl text-[#2E2E2E] leading-[1.6] italic font-medium max-w-4xl mx-auto px-6 drop-shadow-sm">
              "aca vos y yo en un dia de las vacaciones, pero con la persona correcta. <br className="hidden md:block" />
               simplemente un momento hermoso y una foto historica con mi amor ."
            </h4>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhotoSection;
