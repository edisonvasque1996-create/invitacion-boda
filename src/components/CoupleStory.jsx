import { motion } from 'framer-motion';

export default function CoupleStory({ quote, story }) {
    return (
        <section className="px-7 py-12 text-center">
            {/* Bloque de frase romántica */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.8 }}
                className="mb-14"
            >
                <div className="w-8 h-[1px] bg-champagne mx-auto mb-6" />
                <blockquote className="font-serif italic text-2xl leading-relaxed text-charcoal">
                    {quote.text}
                </blockquote>
                <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-stone">
                    {quote.author}
                </p>
                <div className="w-8 h-[1px] bg-champagne mx-auto mt-6" />
            </motion.div>

            {/* Historia de la pareja */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.8 }}
            >
                <p className="text-[11px] uppercase tracking-[0.25em] text-champagne">
                    Nosotros
                </p>
                <h2 className="mt-2 font-serif text-3xl text-charcoal">
                    {story.title}
                </h2>

                <div className="mt-6 space-y-4 text-sm font-light leading-relaxed text-stone">
                    {story.paragraphs.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}