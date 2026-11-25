import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LIGHT_PARTICLES = [
  { id: 1, x: -58, delay: 0.55, duration: 1.5, size: 5 },
  { id: 2, x: -24, delay: 0.72, duration: 1.35, size: 7 },
  { id: 3, x: 10, delay: 0.62, duration: 1.6, size: 4 },
  { id: 4, x: 42, delay: 0.8, duration: 1.4, size: 6 },
  { id: 5, x: 64, delay: 0.68, duration: 1.5, size: 4 },
  { id: 6, x: -6, delay: 0.9, duration: 1.3, size: 5 },
];

export default function EnvelopeIntro({
  initials,
  coupleNames,
  dateText,
  onOpen,
  onReveal,
}) {
  const [isOpening, setIsOpening] = useState(false);
  const [isFlapBehind, setIsFlapBehind] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Bloquea el scroll mientras el sobre está visible
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  const handleOpenEnvelope = () => {
    if (isOpening) return;
    setIsOpening(true);
    onOpen?.();

    // Cuando la solapa supera los 90°, pasa detrás de la tarjeta que emerge
    setTimeout(() => {
      setIsFlapBehind(true);
    }, 680);

    // Inicia la animación de entrada de la portada justo cuando aclara la luz
    setTimeout(() => {
      onReveal?.();
    }, 2200);

    // Transición final luminosa hacia la invitación completa
    setTimeout(() => {
      setIsVisible(false);
    }, 2550);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="envelope-overlay"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#E8E2D7] px-5 overflow-hidden select-none"
        >
          {/* Resplandor ambiental suave detrás del sobre */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0.25, scale: 0.9 }}
            animate={
              isOpening
                ? { opacity: 0.95, scale: 1.45 }
                : { opacity: 0.35, scale: 1 }
            }
            transition={{ duration: 1.8, ease: 'easeOut' }}
            className="pointer-events-none absolute w-[420px] h-[420px] rounded-full blur-3xl"
            style={{
              background:
                'radial-gradient(circle, rgba(255,244,219,0.9) 0%, rgba(184,159,125,0.28) 45%, transparent 72%)',
            }}
          />

          {/* Escenario del sobre en proporción móvil */}
          <div className="relative w-full max-w-[360px] aspect-[4/3] mt-16 envelope-perspective">
            {/* Haces de luz cálida saliendo del interior al abrir la solapa */}
            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0, scaleY: 0.35 }}
              animate={
                isOpening
                  ? { opacity: [0, 0.95, 0.85], scaleY: [0.35, 1.15, 1.35] }
                  : { opacity: 0, scaleY: 0.35 }
              }
              transition={{ duration: 1.55, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'bottom center' }}
              className="pointer-events-none absolute -top-44 -inset-x-10 h-64 z-10 blur-xl"
            >
              <div
                className="w-full h-full"
                style={{
                  background:
                    'radial-gradient(ellipse at 50% 95%, rgba(255,250,235,0.98) 0%, rgba(242,218,175,0.68) 38%, rgba(242,218,175,0) 76%)',
                }}
              />
            </motion.div>

            {/* Destellos de luz flotando hacia arriba */}
            {isOpening &&
              LIGHT_PARTICLES.map((particle) => (
                <motion.span
                  key={particle.id}
                  aria-hidden="true"
                  initial={{ opacity: 0, y: 12, x: particle.x, scale: 0.5 }}
                  animate={{
                    opacity: [0, 0.95, 0],
                    y: -150,
                    scale: [0.5, 1.15, 0.4],
                  }}
                  transition={{
                    duration: particle.duration,
                    delay: particle.delay,
                    ease: 'easeOut',
                  }}
                  style={{
                    width: particle.size,
                    height: particle.size,
                    left: '50%',
                    top: '28%',
                  }}
                  className="pointer-events-none absolute z-30 rounded-full bg-[#FFF7E2] shadow-[0_0_12px_rgba(255,244,214,0.95)]"
                />
              ))}

            {/* Cuerpo base e interior iluminado del sobre */}
            <div className="relative w-full h-full rounded-md envelope-texture shadow-envelope border border-champagne/35">
              {/* Interior cálido iluminado visible al levantar la solapa */}
              <motion.div
                aria-hidden="true"
                initial={{ opacity: 0.3 }}
                animate={isOpening ? { opacity: 1 } : { opacity: 0.3 }}
                transition={{ duration: 0.9, delay: 0.25 }}
                className="absolute inset-0 rounded-md"
                style={{
                  background:
                    'linear-gradient(180deg, #FFF7E8 0%, #F4E8D3 55%, #EADCC6 100%)',
                }}
              />

              {/* Tarjeta interior que emerge poco a poco del sobre */}
              <motion.div
                initial={{ y: 10, scale: 0.96, opacity: 0.92 }}
                animate={
                  isOpening
                    ? { y: -92, scale: 1.03, opacity: 1 }
                    : { y: 10, scale: 0.96, opacity: 0.92 }
                }
                transition={{
                  duration: 1.25,
                  delay: 0.72,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-x-4 top-3 bottom-3 z-20 rounded-sm paper-texture border border-champagne/40 shadow-[0_12px_30px_-8px_rgba(44,42,41,0.22)] flex flex-col items-center justify-center px-4 text-center"
              >
                <div className="w-7 h-[1px] bg-champagne/70 mb-2.5" />
                <p className="text-[9px] uppercase tracking-[0.28em] text-champagne">
                  Nuestra Boda Civil
                </p>
                <p className="mt-1.5 font-serif text-2xl text-charcoal">
                  {coupleNames}
                </p>
                <p className="mt-1 font-serif italic text-xs text-stone">
                  {dateText}
                </p>
                <div className="w-7 h-[1px] bg-champagne/70 mt-2.5" />
              </motion.div>

              {/* Bolsillo frontal del sobre (solapas laterales e inferior por encima de la tarjeta) */}
              <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-md">
                {/* Solapa izquierda */}
                <div
                  className="absolute inset-y-0 left-0 w-[56%] bg-[#EFE8DC] border-r border-champagne/15"
                  style={{
                    clipPath: 'polygon(0 0, 100% 52%, 0 100%)',
                  }}
                />
                {/* Solapa derecha */}
                <div
                  className="absolute inset-y-0 right-0 w-[56%] bg-[#ECE4D6] border-l border-champagne/15"
                  style={{
                    clipPath: 'polygon(100% 0, 0 52%, 100% 100%)',
                  }}
                />
                {/* Solapa inferior frontal */}
                <div
                  className="absolute inset-x-0 bottom-0 h-[62%] bg-[#F4EFE6] shadow-[0_-4px_14px_rgba(44,42,41,0.06)]"
                  style={{
                    clipPath: 'polygon(0 100%, 50% 18%, 100% 100%)',
                  }}
                />
                {/* Borde sutil en V del bolsillo */}
                <svg
                  viewBox="0 0 100 62"
                  preserveAspectRatio="none"
                  className="absolute inset-x-0 bottom-0 w-full h-[62%]"
                >
                  <polyline
                    points="0,62 50,11 100,62"
                    fill="none"
                    stroke="rgba(184,159,125,0.35)"
                    strokeWidth="0.6"
                  />
                </svg>
              </div>

              {/* Solapa superior 3D que se abre gradualmente hacia arriba */}
              <motion.div
                initial={{ rotateX: 0 }}
                animate={isOpening ? { rotateX: 176 } : { rotateX: 0 }}
                transition={{
                  duration: 1.3,
                  delay: 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  transformOrigin: 'top center',
                  zIndex: isFlapBehind ? 10 : 30,
                }}
                className="pointer-events-none absolute inset-x-0 top-0 h-[58%] preserve-3d"
              >
                {/* Cara exterior de la solapa */}
                <div
                  className="absolute inset-0 backface-hidden envelope-texture drop-shadow-[0_6px_12px_rgba(44,42,41,0.14)]"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  }}
                >
                  <svg
                    viewBox="0 0 100 58"
                    preserveAspectRatio="none"
                    className="w-full h-full"
                  >
                    <polyline
                      points="0,0 50,58 100,0"
                      fill="none"
                      stroke="rgba(184,159,125,0.45)"
                      strokeWidth="0.7"
                    />
                  </svg>
                </div>

                {/* Cara interior iluminada de la solapa al abrirse */}
                <div
                  className="absolute inset-0 backface-hidden"
                  style={{
                    transform: 'rotateX(180deg)',
                    clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                    background:
                      'linear-gradient(180deg, #FBF6EC 0%, #EFE4D1 100%)',
                  }}
                />
              </motion.div>

              {/* Sello de lacre central interactivo */}
              <motion.div
                animate={
                  isOpening
                    ? { opacity: 0, scale: 0.78, y: -6 }
                    : { opacity: 1, scale: 1, y: 0 }
                }
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="absolute top-[56%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40"
              >
                {/* Halo respirante alrededor del sello */}
                {!isOpening && (
                  <motion.span
                    aria-hidden="true"
                    animate={{
                      scale: [1, 1.24, 1],
                      opacity: [0.35, 0.7, 0.35],
                    }}
                    transition={{
                      duration: 2.6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="pointer-events-none absolute -inset-2 rounded-full bg-champagne/30 blur-md"
                  />
                )}

                <button
                  type="button"
                  onClick={handleOpenEnvelope}
                  aria-label="Abrir invitación de Edison y Estefy"
                  className="relative flex items-center justify-center w-[88px] h-[88px] rounded-full bg-champagne shadow-wax overflow-hidden transition-transform duration-300 active:scale-95 hover:scale-105 cursor-pointer"
                >
                  <span className="absolute inset-1.5 rounded-full border border-ivory/50" />
                  <span className="pointer-events-none absolute inset-y-0 w-8 bg-white/30 blur-[2px] wax-shimmer" />
                  <span className="relative font-serif italic text-2xl tracking-wider text-ivory">
                    {initials}
                  </span>
                </button>
              </motion.div>
            </div>
          </div>

          {/* Indicaciones debajo del sobre */}
          <motion.div
            animate={
              isOpening
                ? { opacity: 0, y: 8 }
                : { opacity: 1, y: 0 }
            }
            transition={{ duration: 0.4 }}
            className="mt-9 text-center"
          >
            <p className="text-[11px] uppercase tracking-[0.26em] text-stone animate-pulse">
              Toca el sello para abrir
            </p>
            <p className="mt-2 font-serif italic text-base text-charcoal/80">
              {coupleNames}
            </p>
            <p className="mt-0.5 text-[11px] tracking-[0.18em] text-stone/80 uppercase">
              {dateText}
            </p>
          </motion.div>

          {/* Velo de luz cálida al final de la apertura para entrar suave a la invitación */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={isOpening ? { opacity: 0.94 } : { opacity: 0 }}
            transition={{ duration: 0.65, delay: 1.85, ease: 'easeInOut' }}
            className="pointer-events-none fixed inset-0 z-50 bg-[#FAF8F5]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
