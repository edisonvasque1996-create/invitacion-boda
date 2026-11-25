import { motion } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';

export default function Countdown({ targetDateIso }) {
    const { days, hours, minutes, seconds } = useCountdown(targetDateIso);

    const units = [
        { value: days, label: 'Días' },
        { value: hours, label: 'Horas' },
        { value: minutes, label: 'Min' },
        { value: seconds, label: 'Seg' },
    ];

    const padZero = (num) => String(num).padStart(2, '0');

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="px-6 py-8"
        >
            <div className="border-y border-champagne/25 py-7 grid grid-cols-4 divide-x divide-champagne/20 text-center">
                {units.map((unit) => (
                    <div key={unit.label} className="flex flex-col items-center px-1">
                        <span className="font-serif text-3xl text-charcoal tabular-nums">
                            {padZero(unit.value)}
                        </span>
                        <span className="mt-1 text-[10px] uppercase tracking-[0.2em] text-stone">
                            {unit.label}
                        </span>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}