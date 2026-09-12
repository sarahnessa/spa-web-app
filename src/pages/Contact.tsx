import { useState } from "react";
import { BlobGreen, BlobLilac, BlobBlue } from "../components/Blobs";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function update(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function submit({ preventDefault }: React.SubmitEvent): void {
    preventDefault();
    setSent(true);
  }

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="Contact information, map & directions, and send us a message."
        />
        <meta property="og:title" content="Serenova Spa - Contact Page" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="relative overflow-hidden">
        <BlobGreen className="absolute -top-12 -left-12 w-64 h-64 pointer-events-none opacity-55" />
        <BlobLilac className="absolute top-32 -right-16 w-72 h-72 pointer-events-none opacity-45" />

        {/* Header */}
        <section className="py-20 text-center relative">
          <div className="max-w-2xl mx-auto px-6">
            <p
              className="text-sm tracking-[0.3em] uppercase font-semibold mb-3"
              style={{ color: "var(--primary)" }}
            >
              Reach Out
            </p>
            <h1
              className="font-serif text-5xl font-semibold mb-4"
              style={{ color: "var(--foreground)" }}
            >
              We would love to hear from you
            </h1>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              Questions about treatments, gift vouchers, accessibility needs, or
              just wanting to say hello — we are here.
            </p>
          </div>
        </section>

        {/* Contact info row — info left, map right */}
        <div className="max-w-6xl mx-auto px-6 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left: contact info */}
            <div className="space-y-6">
              <h2
                className="font-serif text-3xl font-semibold"
                style={{ color: "var(--foreground)" }}
              >
                Find us
              </h2>
              {[
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  ),
                  label: "Address",
                  lines: ["12 Fernwood Grove", "Maplecrest Valley, OR 97401"],
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                  ),
                  label: "Phone",
                  lines: ["+1 (541) 882-4730"],
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  ),
                  label: "Email",
                  lines: ["hello@serenovaspa.com"],
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  ),
                  label: "Hours",
                  lines: [
                    "Mon–Fri: 9am – 7pm",
                    "Saturday: 9am – 5pm",
                    "Sunday: 10am – 4pm",
                  ],
                },
              ].map(({ icon, label, lines }) => (
                <div key={label} className="flex gap-5 items-start">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: "#6BA5A035",
                      color: "var(--primary)",
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div
                      className="text-xs font-bold tracking-widest uppercase mb-1.5"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {label}
                    </div>
                    {lines.map((l) => (
                      <div
                        key={l}
                        className="text-base font-medium"
                        style={{ color: "var(--foreground)" }}
                      >
                        {l}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: map */}
            <div>
              <h3
                className="font-serif text-3xl font-semibold mb-4"
                style={{ color: "var(--foreground)" }}
              >
                Directions
              </h3>
              <div
                className="rounded-2xl overflow-hidden relative shadow-lg"
                style={{ border: "2px solid var(--border)" }}
              >
                <iframe
                  title="Serenova Wellness Spa location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-122.7%2C42.2%2C-122.5%2C42.4&layer=mapnik"
                  className="w-full"
                  style={{ height: "320px", border: "none" }}
                  loading="lazy"
                />
              </div>
              <p
                className="text-base mt-3 leading-relaxed"
                style={{ color: "var(--muted-foreground)" }}
              >
                Take the Maplecrest Valley exit off OR-62 N. We are on the left,
                set back from the road behind the cedar grove. Ample parking
                on-site.
              </p>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="max-w-6xl mx-auto px-6 pb-24">
          <div
            className="rounded-2xl p-10"
            style={{ backgroundColor: "var(--card)" }}
          >
            {sent ? (
              <div className="text-center py-14">
                <div className="text-5xl mb-5">🌿</div>
                <h3
                  className="font-serif text-3xl font-semibold mb-3"
                  style={{ color: "var(--foreground)" }}
                >
                  Message received
                </h3>
                <p
                  className="text-lg"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Thank you, {form.name}. We will be in touch at {form.email}{" "}
                  within one business day.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-8 px-8 py-3 rounded-full text-base font-semibold"
                  style={{ backgroundColor: "var(--primary)", color: "white" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="max-w-3xl mx-auto">
                <h2
                  className="font-serif text-3xl font-semibold mb-8"
                  style={{ color: "var(--foreground)" }}
                >
                  Send us a message
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      className="block text-sm font-bold mb-2"
                      style={{ color: "var(--foreground)" }}
                    >
                      Your name
                    </label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Rowan Birch"
                      className="w-full px-5 py-3.5 rounded-xl text-base outline-none border"
                      style={{
                        backgroundColor: "var(--background)",
                        color: "var(--foreground)",
                        borderColor: "var(--border)",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-bold mb-2"
                      style={{ color: "var(--foreground)" }}
                    >
                      Email address
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="rowan@example.com"
                      className="w-full px-5 py-3.5 rounded-xl text-base outline-none border"
                      style={{
                        backgroundColor: "var(--background)",
                        color: "var(--foreground)",
                        borderColor: "var(--border)",
                      }}
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <label
                    className="block text-sm font-bold mb-2"
                    style={{ color: "var(--foreground)" }}
                  >
                    Subject
                  </label>
                  <select
                    required
                    value={form.subject}
                    onChange={(e) => update("subject", e.target.value)}
                    className="w-full px-5 py-3.5 rounded-xl text-base outline-none border"
                    style={{
                      backgroundColor: "var(--background)",
                      color: form.subject
                        ? "var(--foreground)"
                        : "var(--muted-foreground)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <option value="" disabled>
                      Choose a subject…
                    </option>
                    <option value="General enquiry">General enquiry</option>
                    <option value="Booking help">Booking help</option>
                    <option value="Gift vouchers">Gift vouchers</option>
                    <option value="Accessibility">
                      Accessibility & special requirements
                    </option>
                    <option value="Corporate wellness">
                      Corporate wellness packages
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="mb-8">
                  <label
                    className="block text-sm font-bold mb-2"
                    style={{ color: "var(--foreground)" }}
                  >
                    Message
                  </label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    rows={6}
                    placeholder="Tell us what is on your mind…"
                    className="w-full px-5 py-3.5 rounded-xl text-base outline-none border resize-none"
                    style={{
                      backgroundColor: "var(--background)",
                      color: "var(--foreground)",
                      borderColor: "var(--border)",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-full font-bold text-base transition-all duration-200 hover:opacity-90"
                  style={{ backgroundColor: "var(--primary)", color: "white" }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        <BlobBlue className="absolute bottom-10 left-0 w-56 h-56 pointer-events-none opacity-40" />
      </div>
    </>
  );
}
