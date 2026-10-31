export const initialProducts = [
  {
    id: 1,
    nombre: 'Champú Equilibrio',
    categoria: 'Champú',
    presentacion: '300 ml',
    descripcion: 'Limpieza delicada para un cabello ligero y con movimiento.',
    precio: 42000,
    badge: 'EL FAVORITO',
    imagen_url: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=700&q=80',
    visible: true,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString()
  },
  {
    id: 2,
    nombre: 'Acondicionador Seda',
    categoria: 'Acondicionador',
    presentacion: '300 ml',
    descripcion: 'Suavidad y desenredo para acompañar tu rutina capilar.',
    precio: 45000,
    badge: null,
    imagen_url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80',
    visible: true,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 6).toISOString()
  },
  {
    id: 3,
    nombre: 'Perfume Bruma',
    categoria: 'Perfumes',
    presentacion: '50 ml',
    descripcion: 'Un encuentro floral con notas de peonía y almizcle.',
    precio: 98000,
    badge: null,
    imagen_url: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=700&q=80',
    visible: true,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString()
  },
  {
    id: 4,
    nombre: 'Exfoliante Renueva',
    categoria: 'Exfoliantes',
    presentacion: '200 g',
    descripcion: 'Textura granulada para un momento de cuidado corporal.',
    precio: 48000,
    badge: null,
    imagen_url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80',
    visible: true,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4).toISOString()
  },
  {
    id: 5,
    nombre: 'Crema Abrazo',
    categoria: 'Cremas',
    presentacion: '250 ml',
    descripcion: 'Una textura envolvente para tu cuidado de todos los días.',
    precio: 52000,
    badge: 'PARA LLEVAR',
    imagen_url: 'https://images.unsplash.com/photo-1608248597359-545a05b1c518?auto=format&fit=crop&w=700&q=80',
    visible: true,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString()
  },
  {
    id: 6,
    nombre: 'Óleo Luminoso',
    categoria: 'Aceites',
    presentacion: '60 ml',
    descripcion: 'El toque final de brillo y suavidad para medios y puntas.',
    precio: 56000,
    badge: null,
    imagen_url: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=700&q=80',
    visible: true,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString()
  },
  {
    id: 7,
    nombre: 'Mascarilla Pausa',
    categoria: 'Capilares',
    presentacion: '250 g',
    descripcion: 'Un paso extra de cuidado para tu ritual de cabello.',
    precio: 58000,
    badge: null,
    imagen_url: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=700&q=80',
    visible: true,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1).toISOString()
  },
  {
    id: 8,
    nombre: 'Crema de manos Caricia',
    categoria: 'Cremas',
    presentacion: '75 ml',
    descripcion: 'Cuidado que va contigo, con un delicado aroma floral.',
    precio: 28000,
    badge: null,
    imagen_url: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=700&q=80',
    visible: true,
    created_at: new Date().toISOString()
  }
]

