import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function DressCode({ dressCode }) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="px-7 py-10 text-center"
        >
            <Sparkles
                className="w-5 h-5 text-champagne mx-auto mb-3"
                strokeWidth={1.3}
            />
            <p className="text-[10px] uppercase tracking-[0.28em] text-stone">
                {dressCode.title}
            </p>
            <h3 className="mt-2 font-serif text-2xl text-charcoal">
                {dressCode.style}
            </h3>
            <p className="mt-3 text-sm font-light text-stone leading-relaxed max-w-xs mx-auto">
                {dressCode.description}
            </p>

            {/* Muestras visuales de paleta sugerida */}
            {dressCode.palette && (
                <div className="mt-6 flex items-center justify-center gap-3">
                    {dressCode.palette.map((hex) => (
                        <span
                            key={hex}
                            style={{ backgroundColor: hex }}
                            className="w-6 h-6 rounded-full border border-charcoal/15 shadow-sm"
                            title={hex}
                        />
                    ))}
                </div>
            )}
        </motion.section>
    );
}