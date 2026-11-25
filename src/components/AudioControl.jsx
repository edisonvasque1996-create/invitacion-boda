import { Volume2, VolumeX } from 'lucide-react';

export default function AudioControl({ isPlaying, onToggle }) {
    return (
        <button
            type="button"
            onClick={onToggle}
            aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
            className="fixed bottom-5 right-5 z-40 flex items-center justify-center w-11 h-11 rounded-full bg-ivory/90 backdrop-blur-sm border border-champagne/40 text-charcoal shadow-md transition-transform duration-200 hover:scale-105 active:scale-95"
        >
            {isPlaying ? (
                <Volume2 className="w-4 h-4 text-champagne" strokeWidth={1.75} />
            ) : (
                <VolumeX className="w-4 h-4 text-stone" strokeWidth={1.75} />
            )}
        </button>
    );
}