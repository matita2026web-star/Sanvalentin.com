
import React from 'react';
import { motion } from 'framer-motion';
import { SectionProps } from '../types';
import { useCountdown } from '../hooks/useCountdown';

const CountdownSection: React.FC<SectionProps> = ({ id }) => {
  const targetDate = new Date('2025-03-24T16:37:00');
  const timeLeft = useCountdown(targetDate);

  const stats = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds },
  ];

  return (
    <section id={id} className="min-h-[80vh] bg-gradient-to-b from-[#FFF6E5] to-[#FF6F91]/5 flex flex-col items-center justify-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="max-w-4xl w-full text-center"
      >
        <h3 className="font-playfair text-3xl md:text-4xl text-[#FF6F91] mb-16 italic opacity-80">
          Cada segundo a tu lado cuenta...
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-rose-100 shadow-xl"
            >
              <div className="font-playfair text-4xl md:text-6xl text-[#9C27B0] mb-2 font-bold">
                {stat.value.toString().padStart(2, '0')}
              </div>
              <div className="text-xs md:text-sm uppercase tracking-widest text-[#2E2E2E]/60 font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-playfair text-2xl md:text-3xl text-[#2E2E2E] max-w-2xl mx-auto italic"
        >
          "Y si pudiera volver a ese momento… <br /> te volvería a elegir."
        </motion.p>
      </motion.div>
    </section>
  );
};

export default CountdownSection;
