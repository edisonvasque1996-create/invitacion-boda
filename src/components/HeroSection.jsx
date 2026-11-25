import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection({
  couple,
  date,
  heroImage,
  isEnvelopeOpen,
}) {
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden bg-sand">
      {/* Fotografía principal con zoom suave al abrir el sobre */}
      <motion.img
        src={heroImage}
        alt={`${couple.partner1} y ${couple.partner2}`}
        initial={{ scale: 1.08 }}
        animate={isEnvelopeOpen ? { scale: 1 } : { scale: 1.08 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="w-full h-full object-cover object-center"
      />

      {/* Degradado editorial inferior para asegurar legibilidad en celular */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/15 via-transparent via-45% to-ivory to-90%" />

      {/* Contenido tipográfico superpuesto en la base */}
      <div className="absolute inset-x-0 bottom-0 pb-10 pt-24 px-6 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={
            isEnvelopeOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
          }
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-[11px] uppercase tracking-[0.28em] text-stone mb-3"
        >
          Nos casamos
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={
            isEnvelopeOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
          }
          transition={{ duration: 0.9, delay: 0.45 }}
          className="font-serif text-4xl sm:text-5xl font-normal text-charcoal tracking-wide"
        >
          {couple.partner1}{' '}
          <span className="italic text-champagne font-normal">&amp;</span>{' '}
          {couple.partner2}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isEnvelopeOpen ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-3 text-xs tracking-[0.2em] uppercase text-stone"
        >
          {date.day} · {date.month} · {date.year}
        </motion.p>

        {/* Indicador sutil de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isEnvelopeOpen ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-7 flex flex-col items-center text-stone/85"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] mb-1">
            Desliza
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4 text-champagne" strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
