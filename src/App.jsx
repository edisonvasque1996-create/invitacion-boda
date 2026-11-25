import { useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { weddingConfig } from './config/weddingConfig';
import { useAudioPlayer } from './hooks/useAudioPlayer';
import EnvelopeIntro from './components/EnvelopeIntro';
import AudioControl from './components/AudioControl';
import HeroSection from './components/HeroSection';
import DateCards from './components/DateCards';
import Countdown from './components/Countdown';
import CoupleStory from './components/CoupleStory';
import EventDetails from './components/EventDetails';
import DressCode from './components/DressCode';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';

function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const { isPlaying, isAvailable, play, toggle } = useAudioPlayer(
    weddingConfig.media.audioFile
  );

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-[100dvh] bg-[#E8E2D7] flex justify-center">
        {/* Sobre inicial animado */}
        <EnvelopeIntro
          initials={weddingConfig.couple.initials}
          coupleNames={`${weddingConfig.couple.partner1} & ${weddingConfig.couple.partner2}`}
          dateText={`${weddingConfig.date.day} de ${weddingConfig.date.month}, ${weddingConfig.date.year}`}
          onOpen={play}
          onReveal={() => setIsEnvelopeOpen(true)}
        />

        {/* Botón flotante de música cuando exista archivo de audio */}
        {isEnvelopeOpen && isAvailable && (
          <AudioControl isPlaying={isPlaying} onToggle={toggle} />
        )}

        {/* Contenedor editorial optimizado para pantalla de celular */}
        <main className="w-full max-w-[430px] min-h-[100dvh] paper-texture shadow-envelope relative overflow-x-hidden">
          <HeroSection
            couple={weddingConfig.couple}
            date={weddingConfig.date}
            heroImage={weddingConfig.media.heroImage}
            isEnvelopeOpen={isEnvelopeOpen}
          />

          <DateCards date={weddingConfig.date} />

          <Countdown targetDateIso={weddingConfig.date.iso} />

          <CoupleStory
            quote={weddingConfig.quote}
            story={weddingConfig.story}
          />

          <EventDetails ceremony={weddingConfig.ceremony} />

          <DressCode dressCode={weddingConfig.dressCode} />

          <PhotoGallery photos={weddingConfig.media.gallery} />

          <Footer couple={weddingConfig.couple} date={weddingConfig.date} />
        </main>
      </div>
    </MotionConfig>
  );
}

export default App;
