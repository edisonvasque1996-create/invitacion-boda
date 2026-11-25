import { ArrowUp } from 'lucide-react';

export default function Footer({ couple, date }) {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="px-6 pt-10 pb-16 text-center border-t border-champagne/20 mt-6">
            <div className="w-12 h-12 rounded-full border border-champagne/40 flex items-center justify-center mx-auto mb-5">
                <span className="font-serif italic text-base text-charcoal">
                    {couple.initials}
                </span>
            </div>

            <p className="font-serif text-xl text-charcoal">
                {couple.partner1} &amp; {couple.partner2}
            </p>

            <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-stone">
                {date.day} · 12 · {date.year}
            </p>

            <p className="mt-6 text-xs font-light text-stone/80">
                Con cariño, te esperamos para compartir este momento.
            </p>

            <button
                type="button"
                onClick={scrollToTop}
                aria-label="Volver al inicio"
                className="mt-8 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.24em] text-stone hover:text-charcoal transition-colors cursor-pointer"
            >
                <ArrowUp className="w-3.5 h-3.5 text-champagne" strokeWidth={1.5} />
                <span>Volver arriba</span>
            </button>
        </footer>
    );
}