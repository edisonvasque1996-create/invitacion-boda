import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function PhotoGallery({ photos }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  if (!photos || photos.length === 0) return null;

  const isSinglePhoto = photos.length === 1;
  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-8"
      >
        <p className="text-[10px] uppercase tracking-[0.28em] text-champagne">
          Recuerdos
        </p>
        <h2 className="mt-2 font-serif text-3xl text-charcoal">
          Nuestros Momentos
        </h2>
      </motion.div>

      {/* Cuadrícula adaptable: centrada si hay 1 foto provisional, 2 columnas si hay varias */}
      <div
        className={
          isSinglePhoto
            ? 'max-w-[290px] mx-auto grid grid-cols-1'
            : 'grid grid-cols-2 gap-3'
        }
      >
        {photos.map((photo, index) => (
          <motion.button
            key={`${photo.src}-${index}`}
            type="button"
            onClick={() => openLightbox(index)}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: (index % 2) * 0.12 }}
            className="group relative aspect-[3/4] overflow-hidden bg-sand border border-champagne/25 cursor-pointer focus:outline-none active:scale-[0.99] transition-transform"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/10" />
          </motion.button>
        ))}
      </div>

      {/* Visor modal (Lightbox) táctil para celulares */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/92 backdrop-blur-sm p-4"
          >
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Cerrar imagen"
              className="absolute top-5 right-5 flex items-center justify-center w-11 h-11 text-ivory/85 hover:text-ivory transition-colors"
            >
              <X className="w-6 h-6" strokeWidth={1.5} />
            </button>

            {photos.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPrev}
                  aria-label="Foto anterior"
                  className="absolute left-2 sm:left-6 flex items-center justify-center w-11 h-11 text-ivory/85 hover:text-ivory transition-colors"
                >
                  <ChevronLeft className="w-7 h-7" strokeWidth={1.5} />
                </button>

                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Foto siguiente"
                  className="absolute right-2 sm:right-6 flex items-center justify-center w-11 h-11 text-ivory/85 hover:text-ivory transition-colors"
                >
                  <ChevronRight className="w-7 h-7" strokeWidth={1.5} />
                </button>
              </>
            )}

            <motion.img
              key={photos[selectedIndex].src}
              src={photos[selectedIndex].src}
              alt={photos[selectedIndex].alt}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[82dvh] max-w-full object-contain shadow-2xl"
            />

            <span className="absolute bottom-6 text-xs tracking-[0.25em] text-ivory/75">
              {selectedIndex + 1} / {photos.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
