import { motion } from 'framer-motion';

export default function DateCards({ date }) {
    const items = [
        { value: date.day, label: 'Día' },
        { value: date.month, label: 'Mes' },
        { value: date.year, label: 'Año' },
    ];

    return (
        <section className="px-6 pt-16 pb-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7 }}
            >
                <p className="text-[11px] uppercase tracking-[0.25em] text-stone">
                    Reserva la fecha
                </p>
                <h2 className="mt-2 font-serif italic text-3xl text-charcoal">
                    {date.dayOfWeek}
                </h2>
            </motion.div>

            <div className="mt-8 grid grid-cols-3 gap-3">
                {items.map((item, index) => (
                    <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, delay: index * 0.12 }}
                        className="bg-sand/70 border border-champagne/30 rounded-sm py-6 px-2 flex flex-col items-center justify-center shadow-sm"
                    >
                        <span className="font-serif text-2xl sm:text-[26px] text-charcoal tracking-wide">
                            {item.value}
                        </span>
                        <span className="mt-2 text-[9px] uppercase tracking-[0.24em] text-stone">
                            {item.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}