import { useState } from 'react'
import { BlobGreen, BlobLilac, BlobBlue } from '../components/Blobs'

const photos = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=700&h=520&fit=crop&auto=format',
    thumb: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400&h=300&fit=crop&auto=format',
    alt: 'Spa treatment room with soft candlelight and botanical arrangements',
    category: 'Spaces',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1634992186330-283b9da965a7?w=700&h=520&fit=crop&auto=format',
    thumb: 'https://images.unsplash.com/photo-1634992186330-283b9da965a7?w=400&h=300&fit=crop&auto=format',
    alt: 'Warm herbal bowl with fresh botanicals for a wrap treatment',
    category: 'Treatments',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&h=520&fit=crop&auto=format',
    thumb: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop&auto=format',
    alt: 'Facial treatment using botanical serums and gentle massage',
    category: 'Treatments',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&h=520&fit=crop&auto=format',
    thumb: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop&auto=format',
    alt: 'Serene spa waiting area with linen cushions and dried flowers',
    category: 'Spaces',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1565033624234-3fcd6717568a?w=400&h=300&fit=crop&auto=format',
    thumb: 'https://images.unsplash.com/photo-1565033624234-3fcd6717568a?w=400&h=300&fit=crop&auto=format',
    alt: 'Tinctures, massage oils, and apothecary on a wooden shelf',
    category: 'Botanicals',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1755610146353-d22fe8083edb?w=700&h=520&fit=crop&auto=format',
    thumb: 'https://images.unsplash.com/photo-1755610146353-d22fe8083edb?w=400&h=300&fit=crop&auto=format',
    alt: 'Hot stone preparation for a hot stone massage treatment',
    category: 'Treatments',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1771979788833-561c832025c3?w=700&h=520&fit=crop&auto=format',
    thumb: 'https://images.unsplash.com/photo-1771979788833-561c832025c3?w=400&h=300&fit=crop&auto=format',
    alt: 'Bamboo forest path leading to the spa entrance',
    category: 'Nature',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=700&h=520&fit=crop&auto=format',
    thumb: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=400&h=300&fit=crop&auto=format',
    alt: 'Meditation garden with moss-covered stones and gentle water',
    category: 'Nature',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=700&h=520&fit=crop&auto=format',
    thumb: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=400&h=300&fit=crop&auto=format',
    alt: 'Stone bathtub for after-treatment release and relaxation',
    category: 'Spaces',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1585815157396-ad62043f721b?w=700&h=520&fit=crop&auto=format',
    thumb: 'https://images.unsplash.com/photo-1585815157396-ad62043f721b?w=400&h=300&fit=crop&auto=format',
    alt: 'Private hot coal sauna room with skylight',
    category: 'Spaces',
  },
]


const categories = ['All', 'Spaces', 'Treatments', 'Botanicals', 'Nature']

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState<typeof photos[0] | null>(null)

  const filtered = activeCategory === 'All' ? photos : photos.filter((p) => p.category === activeCategory)

  return (
    <div className="relative overflow-hidden">
      <BlobGreen className="absolute -top-16 -right-16 w-64 h-64 pointer-events-none opacity-50" />
      <BlobLilac className="absolute top-60 -left-20 w-72 h-72 pointer-events-none opacity-40" />

      {/* Header */}
      <section className="py-20 text-center relative">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: 'var(--primary)' }}>Our World</p>
          <h1 className="font-serif text-5xl font-semibold mb-4" style={{ color: 'var(--foreground)' }}>A glimpse inside</h1>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
            From our forest-side treatment rooms to the botanicals we grow in-house — step into the world of Serenova.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <div className="flex justify-center gap-3 flex-wrap px-6 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
            style={{
              backgroundColor: activeCategory === cat ? 'var(--primary)' : 'var(--muted)',
              color: activeCategory === cat ? 'white' : 'var(--muted-foreground)',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {filtered.map((photo) => (
            <div
              key={photo.id}
              className="break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group relative"
              onClick={() => setLightbox(photo)}
              style={{ backgroundColor: 'var(--muted)' }}
            >
              <img
                src={photo.thumb}
                alt={photo.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{ background: 'linear-gradient(to top, rgba(58,48,40,0.55), transparent)' }}>
                <span className="text-white text-xs font-semibold tracking-wide">{photo.category}</span>
              </div>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center py-16" style={{ color: 'var(--muted-foreground)' }}>No images in this category yet.</p>
        )}
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ backgroundColor: 'rgba(30,22,18,0.85)', backdropFilter: 'blur(8px)' }}
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full rounded-2xl object-cover"
              style={{ maxHeight: '80vh' }}
            />
            <p className="text-center mt-4 text-sm text-white opacity-80">{lightbox.alt}</p>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-4 -right-4 w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-lg"
              style={{ backgroundColor: 'var(--primary)' }}
            >
              ×
            </button>
          </div>
        </div>
      )}

      <BlobBlue className="absolute bottom-20 right-0 w-56 h-56 pointer-events-none opacity-40" />
    </div>
  )
}
