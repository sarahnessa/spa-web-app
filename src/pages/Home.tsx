import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import {
  BlobGreen,
  BlobLilac,
  BlobBlue,
  CloudShape,
  BlobSmall,
} from "../components/Blobs";

function IconHerbalWrap() {
  return (
    <svg
      viewBox="0 0 80 56"
      xmlns="http://www.w3.org/2000/svg"
      className="w-20 h-14"
      aria-hidden="true"
    >
      <path
        d="M8,36 Q6,20,20,14 Q34,8,48,16 Q62,10,70,22 Q78,34,66,42 Q54,50,38,48 Q22,50,12,44 Q6,40,8,36Z"
        fill="#7DB88A"
        opacity="0.35"
      />
      <ellipse cx="40" cy="35" rx="22" ry="12" fill="#7DB88A" opacity="0.55" />
      <path
        d="M28,35 Q32,22,40,20 Q48,22,52,35"
        fill="none"
        stroke="#4A7A60"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M36,20 Q38,12,40,10 Q42,12,40,20" fill="#7DB88A" opacity="0.8" />
      <circle cx="40" cy="10" r="3" fill="#BBA8D4" opacity="0.9" />
      <path
        d="M33,25 Q30,20,26,22"
        fill="none"
        stroke="#4A7A60"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M47,25 Q50,20,54,22"
        fill="none"
        stroke="#4A7A60"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconHotStone() {
  return (
    <svg
      viewBox="0 0 80 56"
      xmlns="http://www.w3.org/2000/svg"
      className="w-20 h-14"
      aria-hidden="true"
    >
      <path
        d="M6,38 Q4,22,18,14 Q32,6,50,12 Q68,8,74,24 Q80,40,66,46 Q52,52,34,50 Q16,52,8,44 Q4,42,6,38Z"
        fill="#98B8DA"
        opacity="0.3"
      />
      <ellipse cx="28" cy="36" rx="14" ry="9" fill="#8BA0B4" opacity="0.7" />
      <ellipse cx="50" cy="38" rx="11" ry="7" fill="#7A92A8" opacity="0.65" />
      <ellipse cx="40" cy="30" rx="9" ry="5.5" fill="#98B0C0" opacity="0.8" />
      <path
        d="M30,18 Q31,12,30,8"
        fill="none"
        stroke="#C4B4D8"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M40,16 Q42,10,40,6"
        fill="none"
        stroke="#C4B4D8"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M50,18 Q51,12,50,8"
        fill="none"
        stroke="#C4B4D8"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
}

function IconFacial() {
  return (
    <svg
      viewBox="0 0 80 56"
      xmlns="http://www.w3.org/2000/svg"
      className="w-20 h-14"
      aria-hidden="true"
    >
      <path
        d="M10,34 Q8,16,24,10 Q40,4,56,12 Q72,8,76,26 Q80,44,62,48 Q44,54,26,48 Q8,44,10,34Z"
        fill="#BBA8D4"
        opacity="0.3"
      />
      <ellipse cx="40" cy="32" rx="18" ry="18" fill="#E8D8F0" opacity="0.7" />
      <ellipse cx="40" cy="32" rx="14" ry="14" fill="#D4C0E8" opacity="0.5" />
      <circle cx="34" cy="28" r="2.5" fill="#7DB88A" opacity="0.8" />
      <circle cx="46" cy="28" r="2.5" fill="#7DB88A" opacity="0.8" />
      <path
        d="M35,37 Q40,41,45,37"
        fill="none"
        stroke="#9080A8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M28,18 Q32,10,40,8 Q48,10,52,18" fill="#C4B4D8" opacity="0.6" />
      <circle cx="40" cy="8" r="3.5" fill="#7DB88A" opacity="0.75" />
    </svg>
  );
}

export function IconMeditation() {
  return (
    <svg
      viewBox="0 0 80 56"
      xmlns="http://www.w3.org/2000/svg"
      className="w-20 h-14"
      aria-hidden="true"
    >
      <path
        d="M5,38 Q4,20,20,12 Q36,4,54,10 Q72,6,76,24 Q80,42,64,48 Q48,54,28,50 Q8,48,5,38Z"
        fill="#98B8DA"
        opacity="0.28"
      />
      <circle cx="40" cy="18" r="7" fill="#BBA8D4" opacity="0.75" />
      <path d="M22,40 Q28,28,40,26 Q52,28,58,40" fill="#C4B4D8" opacity="0.5" />
      <path
        d="M22,40 Q15,42,14,46 Q30,50,40,49 Q50,50,66,46 Q65,42,58,40"
        fill="#7DB88A"
        opacity="0.45"
      />
      <path
        d="M30,36 Q25,34,20,38"
        fill="none"
        stroke="#9080A8"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M50,36 Q55,34,60,38"
        fill="none"
        stroke="#9080A8"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M38,8 Q40,4,42,8"
        fill="none"
        stroke="#BBA8D4"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}

function IconAromatherapy() {
  return (
    <svg
      viewBox="0 0 80 56"
      xmlns="http://www.w3.org/2000/svg"
      className="w-20 h-14"
      aria-hidden="true"
    >
      <path
        d="M8,36 Q6,18,22,10 Q38,2,56,10 Q74,6,76,26 Q78,46,60,50 Q42,54,22,48 Q4,44,8,36Z"
        fill="#7DB88A"
        opacity="0.28"
      />
      <rect
        x="32"
        y="30"
        width="16"
        height="16"
        rx="4"
        fill="#98B8DA"
        opacity="0.7"
      />
      <ellipse cx="40" cy="30" rx="8" ry="4" fill="#6BA5A0" opacity="0.6" />
      <path
        d="M36,20 Q34,14,36,10 Q38,14,36,20"
        fill="#7DB88A"
        opacity="0.85"
      />
      <path
        d="M40,18 Q40,10,40,6"
        fill="none"
        stroke="#7DB88A"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M44,20 Q46,14,44,10 Q42,14,44,20"
        fill="#7DB88A"
        opacity="0.85"
      />
      <path
        d="M28,24 Q22,20,18,24"
        fill="none"
        stroke="#BBA8D4"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M52,24 Q58,20,62,24"
        fill="none"
        stroke="#BBA8D4"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconDeepTissue() {
  return (
    <svg
      viewBox="0 0 80 56"
      xmlns="http://www.w3.org/2000/svg"
      className="w-20 h-14"
      aria-hidden="true"
    >
      <path
        d="M6,36 Q4,18,20,10 Q36,2,54,8 Q72,4,76,24 Q80,44,62,50 Q44,56,24,50 Q4,46,6,36Z"
        fill="#BBA8D4"
        opacity="0.28"
      />
      <rect
        x="14"
        y="32"
        width="52"
        height="14"
        rx="7"
        fill="#D4C0E8"
        opacity="0.6"
      />
      <ellipse cx="40" cy="28" rx="20" ry="9" fill="#BBA8D4" opacity="0.5" />
      <path
        d="M24,28 Q28,18,40,16 Q52,18,56,28"
        fill="#C4B4D8"
        opacity="0.55"
      />
      <ellipse cx="28" cy="28" rx="5" ry="5" fill="#98B8DA" opacity="0.75" />
      <ellipse cx="52" cy="28" rx="5" ry="5" fill="#98B8DA" opacity="0.75" />
      <path d="M36,22 Q38,16,40,14 Q42,16,40,22" fill="#7DB88A" opacity="0.7" />
    </svg>
  );
}

const services = [
  {
    Icon: IconHerbalWrap,
    title: "Herbal Body Wraps",
    desc: "Envelop yourself in warm, botanical-infused wraps that draw out tension and nourish the skin.",
  },
  {
    Icon: IconHotStone,
    title: "Hot Stone Therapy",
    desc: "Heated basalt stones melt deep muscle tension while grounding your energy to the earth.",
  },
  {
    Icon: IconFacial,
    title: "Botanical Facials",
    desc: "Plant-based formulas crafted with wildcrafted botanicals to restore your natural radiance.",
  },
  {
    Icon: IconMeditation,
    title: "Guided Meditation",
    desc: "One-on-one stillness sessions with our mindfulness practitioners to quiet the mind.",
  },
  {
    Icon: IconAromatherapy,
    title: "Forest Aromatherapy",
    desc: "Immerse your senses in pine, cedar, and eucalyptus to recalibrate and breathe fully.",
  },
  {
    Icon: IconDeepTissue,
    title: "Restorative Deep Tissue",
    desc: "Targeted therapeutic massage that releases chronic tension stored deep in the body.",
  },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home | Serenova Spa</title>
        <meta name="description" content="Serenova Spa - Fall into Stillness" />
        <meta property="og:title" content="Home | Serenova Spa" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="overflow-hidden">
        {/* Hero */}
        <section className="relative min-h-screen flex items-center">
          <BlobGreen className="absolute -top-20 -left-20 w-96 h-96 pointer-events-none" />
          <BlobLilac className="absolute top-10 -right-16 w-80 h-80 pointer-events-none" />
          <BlobBlue className="absolute bottom-0 left-1/3 w-72 h-72 pointer-events-none opacity-60" />

          <div className="relative max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase font-semibold mb-6"
                style={{ color: "var(--primary)" }}
              >
                A Forest Sanctuary
              </p>
              <h1
                className="font-serif text-5xl md:text-6xl font-semibold leading-tight mb-8"
                style={{ color: "var(--foreground)" }}
              >
                Restore your
                <br />
                <em className="not-italic" style={{ color: "var(--primary)" }}>
                  natural stillness
                </em>
              </h1>
              <p
                className="text-lg leading-relaxed mb-10 max-w-md"
                style={{ color: "var(--muted-foreground)" }}
              >
                Serenova is a sanctuary where forest botanicals, gentle touch,
                and unhurried time work together to return you to yourself.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/booking"
                  className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-105"
                  style={{ backgroundColor: "var(--primary)", color: "white" }}
                >
                  Book a Session
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 border-2 hover:bg-card"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--foreground)",
                  }}
                >
                  Meet Our Team
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&h=875&fit=crop&auto=format"
                  alt="Calm spa interior with natural light and botanical elements"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 60%, rgba(58,48,40,0.25))",
                  }}
                />
              </div>
              <BlobSmall
                color="#C4B4D8"
                className="absolute -bottom-12 -left-12 w-40 h-40 pointer-events-none"
              />
              <BlobSmall
                color="#8EAF86"
                className="absolute -top-8 -right-8 w-28 h-28 pointer-events-none"
              />
            </div>
          </div>
        </section>

        {/* Cloud divider */}
        <div className="relative -mt-6">
          <CloudShape className="w-full" />
        </div>

        {/* Services */}
        <section
          className="py-24 relative"
          style={{ backgroundColor: "var(--card)" }}
        >
          <BlobBlue className="absolute -right-20 top-10 w-72 h-72 pointer-events-none opacity-50" />
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p
                className="text-xs tracking-[0.3em] uppercase font-semibold mb-3"
                style={{ color: "var(--accent-foreground)" }}
              >
                Our Offerings
              </p>
              <h2
                className="font-serif text-4xl font-semibold"
                style={{ color: "var(--foreground)" }}
              >
                Treatments designed for deep rest
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl p-7 transition-all duration-300 hover:scale-[1.02] hover:shadow-md group"
                  style={{ backgroundColor: "var(--background)" }}
                >
                  <div className="mb-4">
                    <s.Icon />
                  </div>
                  <h3
                    className="font-serif text-xl font-semibold mb-2"
                    style={{ color: "var(--foreground)" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote section */}
        <section className="relative py-24 overflow-hidden">
          <BlobGreen className="absolute -left-24 top-0 w-80 h-80 pointer-events-none opacity-60" />
          <BlobLilac className="absolute -right-24 bottom-0 w-80 h-80 pointer-events-none opacity-60" />
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <p
              className="font-serif text-3xl md:text-4xl italic leading-relaxed"
              style={{ color: "var(--foreground)" }}
            >
              "Within the stillness of the forest, the body remembers how to
              heal."
            </p>
            <p
              className="mt-6 text-sm tracking-widest uppercase"
              style={{ color: "var(--muted-foreground)" }}
            >
              — Serenova Philosophy
            </p>
          </div>
        </section>

        {/* CTA banner */}
        <section
          className="py-20"
          style={{ backgroundColor: "var(--primary)" }}
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif text-4xl font-semibold mb-4 text-white">
              Ready to begin?
            </h2>
            <p className="text-base mb-8 opacity-90 text-white">
              Reserve your session today and take the first step back to
              yourself.
            </p>
            <Link
              to="/booking"
              className="inline-block px-10 py-4 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: "white", color: "var(--primary)" }}
            >
              Book Your Session
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
