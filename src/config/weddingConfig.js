export const weddingConfig = {
  // Nombres e iniciales para el sello de lacre
  couple: {
    partner1: 'Edison',
    partner2: 'Estefy',
    initials: 'E & E',
  },

  // Fecha y hora exacta (Formato ISO para el contador y tarjetas)
  date: {
    iso: '2026-12-11T09:00:00',
    day: '11',
    month: 'Diciembre',
    year: '2026',
    dayOfWeek: 'Viernes',
    time: '09:00 a. m.',
  },

  // Frase romántica principal
  quote: {
    text: '“Elegirnos cada día es la historia más sencilla y hermosa que hemos escrito.”',
    author: 'Nuestra boda civil',
  },

  // Historia breve de los novios
  story: {
    title: 'Nuestra Historia',
    paragraphs: [
      'Lo que comenzó como una coincidencia cotidiana se transformó poco a poco en nuestro lugar favorito del mundo.',
      'Hoy damos este paso rodeados de las personas que han sido parte esencial de nuestro camino, celebrando el amor en su forma más simple y verdadera.',
    ],
  },

  // Detalles de la ceremonia y ubicación exacta en Google Maps
  ceremony: {
    title: 'Ceremonia Civil',
    venue: 'Registro Civil de Pomasqui',
    time: '09:00 a. m.',
    address: 'Registro Civil de Pomasqui, Quito',
    note: 'Agradecemos llegar 15 minutos antes de la hora indicada.',
    mapsUrl: 'https://maps.app.goo.gl/vXp4DZ9YXpb7HS679',
    mapsEmbedUrl:
      'https://www.google.com/maps?q=-0.0552015,-78.4542821&z=17&output=embed',
  },

  // Código de vestimenta
  dressCode: {
    title: 'Código de Vestimenta',
    style: 'Formal / Elegante de Día',
    description:
      'Sugerimos tonos neutros, tierra o pastel acordes a una ceremonia matutina.',
    palette: ['#FAF8F5', '#E6DFD3', '#C8B8A6', '#8C8278', '#2C2A29'],
  },

  // Archivos multimedia (ubicados en la carpeta public/)
  media: {
    heroImage: '/images/portada.png',
    audioFile: '/audio/melodia-boda.mp3',
    // Fotos provisionales conectadas desde public/images/galeria/
    // Cuando agregues más fotos (ej. foto-2.jpeg), añádelas aquí abajo
    gallery: [
      {
        src: '/images/galeria/foto-1.jpeg',
        alt: 'Edison y Estefy',
      },
    ],
  },
};
