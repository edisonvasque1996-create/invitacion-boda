import { useState, useRef, useEffect, useCallback } from 'react';

export function useAudioPlayer(audioSrc) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function initAudio() {
      if (!audioSrc) return;
      try {
        const res = await fetch(audioSrc, { method: 'HEAD' });
        const contentType = res.headers.get('content-type') || '';
        if (!res.ok || !contentType.startsWith('audio/')) {
          return;
        }
        if (cancelled) return;

        const audio = new Audio(audioSrc);
        audio.loop = true;
        audio.volume = 0.45;
        audioRef.current = audio;
        setIsAvailable(true);
      } catch {
        // Si no existe archivo de audio aún, no genera errores en consola
      }
    }

    initAudio();

    return () => {
      cancelled = true;
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
        audioRef.current = null;
      }
    };
  }, [audioSrc]);

  const play = useCallback(async () => {
    if (!audioRef.current) return;
    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  }, []);

  const pause = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  }, []);

  const toggle = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, play, pause]);

  return { isPlaying, isAvailable, play, pause, toggle };
}
