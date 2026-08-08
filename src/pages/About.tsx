import { BlobGreen, BlobLilac, BlobBlue, BlobSmall } from '../components/Blobs'

const clinicians = [
  {
    name: 'Dr. Amara Cohen',
    title: 'Clinical Holistic Therapist',
    specialty: 'Trauma-Informed Bodywork',
    bio: 'Amara brings fifteen years of somatic healing experience to every session. Trained in trauma-informed bodywork and forest therapy, she guides clients through gentle, body-centered releases that honor the nervous system\'s own timeline.',
    photo: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=500&fit=crop&auto=format',
    tags: ['Somatic Work', 'Forest Therapy', 'Nervous System'],
    accent: '#7DB88A',
  },
  {
    name: 'Samantha Whittaker',
    title: 'Ayurvedic Practitioner',
    specialty: 'Herbal Treatments & Doshas',
    bio: 'Samantha trained at the Kottakkal Ayurveda Institute and has practiced for over a decade, blending traditional Ayurvedic wisdom with modern integrative approaches. Her treatments restore elemental balance through herbal formulas, touch, and breathwork.',
    photo: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=500&fit=crop&auto=format',
    tags: ['Ayurveda', 'Herbalism', 'Breathwork'],
    accent: '#C4B4D8',
  },
  {
    name: 'Jonah Whitfield',
    title: 'Deep Tissue & Sports Therapist',
    specialty: 'Myofascial Release',
    bio: 'A former physiotherapist turned therapeutic massage specialist, Jonah combines structural bodywork with intuitive listening. He focuses on myofascial release and movement re-patterning to help clients move freely without pain.',
    photo: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=500&fit=crop&auto=format',
    tags: ['Myofascial', 'Deep Tissue', 'Movement'],
    accent: '#B8C8E8',
  },
  {
    name: 'Seren Llywelyn',
    title: 'Mindfulness & Meditation Guide',
    specialty: 'Breathwork & Sound Healing',
    bio: 'Seren weaves Welsh forest traditions with mindfulness meditation, Tibetan singing bowl therapy, and guided visualization. Her sessions create spaciousness in the mind and quiet in the body, often described as a deep exhale.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&auto=format',
    tags: ['Meditation', 'Sound Healing', 'Visualization'],
    accent: '#7DB88A',
  },
  {
    name: 'Kenji Miller',
    title: 'Shiatsu & Acupressure Specialist',
    specialty: 'Meridian Therapy',
    bio: 'Kenji studied classical shiatsu under master practitioners in Osaka before settling in the mountains. He works along the body\'s meridian pathways to dissolve energetic blockages, leaving clients with a profound sense of flow and equilibrium.',
    photo: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=400&h=500&fit=crop&auto=format',
    tags: ['Shiatsu', 'Acupressure', 'Meridian Work'],
    accent: '#C4B4D8',
  },
  {
    name: `Nadia O'Neill`,
    title: 'Botanist & Aromatherapist',
    specialty: 'Plant Medicine & Skin Rituals',
    bio: 'Nadia grows many of the plants used in Serenova\'s treatments on her small mountain holding. With a background in botanical science and clinical aromatherapy, she formulates every facial and body ritual from scratch — nothing she applies is synthetic.',
    photo: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=500&fit=crop&auto=format',
    tags: ['Aromatherapy', 'Botanicals', 'Skin Rituals'],
    accent: '#B8C8E8',
  },
]

export default function About() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 text-center overflow-hidden">
        <BlobGreen className="absolute -top-16 -left-16 w-72 h-72 pointer-events-none" />
        <BlobLilac className="absolute -top-8 -right-16 w-64 h-64 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6">
          <p className="text-xs tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: 'var(--primary)' }}>Our Practitioners</p>
          <h1 className="font-serif text-5xl font-semibold mb-6" style={{ color: 'var(--foreground)' }}>
            The hands behind your healing
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
            Each of our clinicians brings years of specialized training and a genuine dedication to the art of therapeutic care. They work slowly, listen deeply, and tailor every session to you.
          </p>
        </div>
      </section>

      {/* Clinician cards */}
      <section className="py-16 relative">
        <BlobBlue className="absolute right-0 top-40 w-64 h-64 pointer-events-none opacity-40" />
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          {clinicians.map((c, i) => (
            <div
              key={c.name}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}
            >
              <div className={i % 2 === 1 ? 'md:[direction:ltr]' : ''}>
                <div className="relative inline-block">
                  <div className="rounded-[2rem] overflow-hidden w-full max-w-sm aspect-[4/5]">
                    <img
                      src={c.photo}
                      alt={`Portrait of ${c.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <BlobSmall color={c.accent} className="absolute -bottom-8 -right-8 w-32 h-32 pointer-events-none" />
                </div>
              </div>
              <div className={i % 2 === 1 ? 'md:[direction:ltr]' : ''}>
                <p className="text-xs tracking-[0.25em] uppercase font-semibold mb-2" style={{ color: 'var(--muted-foreground)' }}>
                  {c.specialty}
                </p>
                <h2 className="font-serif text-3xl font-semibold mb-1" style={{ color: 'var(--foreground)' }}>{c.name}</h2>
                <p className="text-sm mb-6 font-medium" style={{ color: 'var(--primary)' }}>{c.title}</p>
                <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--muted-foreground)' }}>{c.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ backgroundColor: `${c.accent}40`, color: 'var(--foreground)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values section */}
      <section className="py-24 mt-10" style={{ backgroundColor: 'var(--card)' }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl font-semibold mb-4" style={{ color: 'var(--foreground)' }}>Our approach</h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
            Every session at Serenova begins with listening. We believe healing is not something done to a body — it is something that happens within, when conditions of safety, warmth, and intention are present.
          </p>
        </div>
      </section>
    </div>
  )
}
