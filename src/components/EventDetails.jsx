import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Navigation, Copy, Check } from 'lucide-react';

export default function EventDetails({ ceremony }) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(ceremony.mapsUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback en navegadores móviles antiguos sin permiso clipboard
      window.open(ceremony.mapsUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="px-5 py-10">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.75 }}
        className="bg-sand/65 border border-champagne/30 px-5 py-8 text-center rounded-sm"
      >
        <p className="text-[10px] uppercase tracking-[0.28em] text-champagne">
          Dónde y Cuándo
        </p>
        <h2 className="mt-2 font-serif text-3xl text-charcoal">
          {ceremony.title}
        </h2>

        <div className="w-10 h-[1px] bg-champagne/50 mx-auto my-5" />

        <p className="font-serif italic text-2xl text-charcoal">
          {ceremony.venue}
        </p>

        <div className="mt-4 flex flex-col items-center space-y-2 text-sm text-stone font-light">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-champagne" strokeWidth={1.5} />
            <span>{ceremony.time}</span>
          </div>

          <div className="flex items-start justify-center gap-2 max-w-xs">
            <MapPin
              className="w-4 h-4 text-champagne shrink-0 mt-0.5"
              strokeWidth={1.5}
            />
            <span>{ceremony.address}</span>
          </div>
        </div>

        {ceremony.note && (
          <p className="mt-4 text-xs italic text-stone/85 px-2">
            {ceremony.note}
          </p>
        )}

        {/* Mapa interactivo de Google Maps integrado dentro de la invitación */}
        {ceremony.mapsEmbedUrl && (
          <div className="mt-6 overflow-hidden rounded-sm border border-champagne/35 bg-ivory shadow-sm">
            <div className="relative w-full h-56">
              <iframe
                title={`Ubicación en Google Maps - ${ceremony.venue}`}
                src={ceremony.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
            <div className="px-3 py-2 bg-ivory/90 border-t border-champagne/20 flex items-center justify-between text-[11px] text-stone">
              <span className="truncate">{ceremony.venue}</span>
              <span className="text-champagne uppercase tracking-[0.16em] text-[9px] shrink-0 ml-2">
                Google Maps
              </span>
            </div>
          </div>
        )}

        {/* Botones optimizados para tocar desde celular */}
        <div className="mt-6 flex flex-col gap-3">
          <a
            href={ceremony.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[48px] inline-flex items-center justify-center gap-2.5 px-5 py-3 bg-charcoal text-ivory text-[11px] uppercase tracking-[0.22em] transition-colors duration-300 hover:bg-charcoal/90 active:scale-[0.99]"
          >
            <Navigation className="w-3.5 h-3.5 text-champagne" strokeWidth={1.75} />
            <span>Cómo llegar en Google Maps</span>
          </a>

          <button
            type="button"
            onClick={handleCopyLink}
            className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-champagne/50 text-[11px] uppercase tracking-[0.2em] text-stone transition-colors duration-300 hover:border-charcoal hover:text-charcoal active:scale-[0.99] cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-champagne" strokeWidth={1.75} />
                <span>¡Enlace copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-champagne" strokeWidth={1.5} />
                <span>Copiar enlace de ubicación</span>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </section>
  );
}
