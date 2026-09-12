import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { BlobGreen, BlobLilac } from "../components/Blobs";
import { IconMeditation } from "./Home";

const services = [
  {
    id: "herbal-wrap",
    name: "Herbal Body Wrap",
    duration: "90 min",
    price: "$140",
  },
  {
    id: "hot-stone",
    name: "Hot Stone Therapy",
    duration: "75 min",
    price: "$125",
  },
  {
    id: "botanical-facial",
    name: "Botanical Facial",
    duration: "60 min",
    price: "$110",
  },
  {
    id: "meditation",
    name: "Guided Meditation",
    duration: "60 min",
    price: "$95",
  },
  {
    id: "aromatherapy",
    name: "Forest Aromatherapy",
    duration: "45 min",
    price: "$80",
  },
  {
    id: "deep-tissue",
    name: "Restorative Deep Tissue",
    duration: "90 min",
    price: "$150",
  },
];

const clinicians = [
  "Dr. Amara Osei",
  "Priya Venkatesh",
  "Jonah Whitfield",
  "Seren Llywelyn",
  "Kenji Murakami",
  "Nadia Ferreira",
  "No preference",
];

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

type Step = "service" | "datetime" | "details" | "confirm";

interface FormData {
  service: string;
  clinician: string;
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes: string;
}

export default function Booking() {
  const [step, setStep] = useState<Step>("service");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    service: "",
    clinician: "",
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  });

  const steps: Step[] = ["service", "datetime", "details", "confirm"];
  const stepIndex = steps.indexOf(step);

  const selectedService = services.find((s) => s.id === form.service);

  function next() {
    const idx = steps.indexOf(step);
    if (idx < steps.length - 1) setStep(steps[idx + 1]);
  }
  function back() {
    const idx = steps.indexOf(step);
    if (idx > 0) setStep(steps[idx - 1]);
  }

  function update(field: keyof FormData, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function canProceed() {
    if (step === "service") return !!form.service && !!form.clinician;
    if (step === "datetime") return !!form.date && !!form.time;
    if (step === "details")
      return !!form.firstName && !!form.lastName && !!form.email;
    return true;
  }

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="mb-6 justify-center flex">{IconMeditation()}</div>
          <h2
            className="font-serif text-3xl font-semibold mb-3"
            style={{ color: "var(--foreground)" }}
          >
            You are booked, {form.firstName}.
          </h2>
          <p
            className="text-base leading-relaxed mb-6"
            style={{ color: "var(--muted-foreground)" }}
          >
            Your {selectedService?.name} session is confirmed for {form.date} at{" "}
            {form.time} with{" "}
            {form.clinician === "No preference" ? "our team" : form.clinician}.
            A confirmation email is on its way to {form.email}.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setStep("service");
              setForm({
                service: "",
                clinician: "",
                date: "",
                time: "",
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                notes: "",
              });
            }}
            className="px-7 py-3 rounded-full text-sm font-semibold"
            style={{ backgroundColor: "var(--primary)", color: "white" }}
          >
            Book another session
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Booking | Serenova Spa</title>
        <meta
          name="description"
          content="Book a treatment with one of our practitioners."
        />
        <meta property="og:title" content="Booking | Serenova Spa" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="relative overflow-hidden">
        <BlobGreen className="absolute -top-16 -left-16 w-72 h-72 pointer-events-none opacity-60" />
        <BlobLilac className="absolute top-40 -right-20 w-64 h-64 pointer-events-none opacity-50" />

        <div className="max-w-2xl mx-auto px-6 py-20 relative">
          <div className="text-center mb-12">
            <p
              className="text-xs tracking-[0.3em] uppercase font-semibold mb-3"
              style={{ color: "var(--primary)" }}
            >
              Reserve Your Place
            </p>
            <h1
              className="font-serif text-4xl font-semibold"
              style={{ color: "var(--foreground)" }}
            >
              Book a Session
            </h1>
          </div>

          {/* Progress */}
          <div className="flex items-center justify-center gap-3 mb-10">
            {["Service", "Date & Time", "Your Details", "Confirm"].map(
              (label, i) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300"
                      style={{
                        backgroundColor:
                          i <= stepIndex ? "var(--primary)" : "var(--muted)",
                        color:
                          i <= stepIndex ? "white" : "var(--muted-foreground)",
                      }}
                    >
                      {i < stepIndex ? "✓" : i + 1}
                    </div>
                    <span
                      className="text-[10px] hidden sm:block"
                      style={{
                        color:
                          i === stepIndex
                            ? "var(--primary)"
                            : "var(--muted-foreground)",
                      }}
                    >
                      {label}
                    </span>
                  </div>
                  {i < 3 && (
                    <div
                      className="w-8 h-px mb-4"
                      style={{
                        backgroundColor:
                          i < stepIndex ? "var(--primary)" : "var(--border)",
                      }}
                    />
                  )}
                </div>
              ),
            )}
          </div>

          <div
            className="rounded-2xl p-8"
            style={{ backgroundColor: "var(--card)" }}
          >
            {/* Step 1: Service */}
            {step === "service" && (
              <div>
                <h2
                  className="font-serif text-2xl font-semibold mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  Choose your treatment
                </h2>
                <p
                  className="text-sm mb-6"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Select a service and a practitioner preference.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {services.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => update("service", s.id)}
                      className="text-left p-4 rounded-xl border-2 transition-all duration-200"
                      style={{
                        borderColor:
                          form.service === s.id
                            ? "var(--primary)"
                            : "var(--border)",
                        backgroundColor:
                          form.service === s.id
                            ? "#A8C89E20"
                            : "var(--background)",
                      }}
                    >
                      <div
                        className="font-semibold text-sm"
                        style={{ color: "var(--foreground)" }}
                      >
                        {s.name}
                      </div>
                      <div
                        className="text-xs mt-1"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        {s.duration} · {s.price}
                      </div>
                    </button>
                  ))}
                </div>
                <label
                  className="block mb-2 text-sm font-semibold"
                  style={{ color: "var(--foreground)" }}
                >
                  Practitioner preference
                </label>
                <select
                  value={form.clinician}
                  onChange={(e) => update("clinician", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none border"
                  style={{
                    backgroundColor: "var(--background)",
                    color: "var(--foreground)",
                    borderColor: "var(--border)",
                  }}
                >
                  <option value="">Select a practitioner…</option>
                  {clinicians.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Step 2: Date & Time */}
            {step === "datetime" && (
              <div>
                <h2
                  className="font-serif text-2xl font-semibold mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  Choose a date and time
                </h2>
                <p
                  className="text-sm mb-6"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  We are open Monday–Saturday, 9am–7pm.
                </p>
                <label
                  className="block mb-2 text-sm font-semibold"
                  style={{ color: "var(--foreground)" }}
                >
                  Date
                </label>
                <input
                  type="date"
                  value={form.date}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => update("date", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none border mb-6"
                  style={{
                    backgroundColor: "var(--background)",
                    color: "var(--foreground)",
                    borderColor: "var(--border)",
                  }}
                />
                <label
                  className="block mb-3 text-sm font-semibold"
                  style={{ color: "var(--foreground)" }}
                >
                  Time
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((t) => (
                    <button
                      key={t}
                      onClick={() => update("time", t)}
                      className="py-2.5 rounded-xl text-xs font-semibold border-2 transition-all duration-200"
                      style={{
                        borderColor:
                          form.time === t ? "var(--primary)" : "var(--border)",
                        backgroundColor:
                          form.time === t ? "#A8C89E20" : "var(--background)",
                        color: "var(--foreground)",
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Details */}
            {step === "details" && (
              <div>
                <h2
                  className="font-serif text-2xl font-semibold mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  Your details
                </h2>
                <p
                  className="text-sm mb-6"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  We only use these to confirm your booking.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      className="block text-xs font-semibold mb-1"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      value={form.firstName}
                      onChange={(e) => update("firstName", e.target.value)}
                      placeholder="Elara"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none border"
                      style={{
                        backgroundColor: "var(--background)",
                        color: "var(--foreground)",
                        borderColor: "var(--border)",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold mb-1"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      value={form.lastName}
                      onChange={(e) => update("lastName", e.target.value)}
                      placeholder="Moss"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none border"
                      style={{
                        backgroundColor: "var(--background)",
                        color: "var(--foreground)",
                        borderColor: "var(--border)",
                      }}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-xs font-semibold mb-1"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="elara@example.com"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none border"
                    style={{
                      backgroundColor: "var(--background)",
                      color: "var(--foreground)",
                      borderColor: "var(--border)",
                    }}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-xs font-semibold mb-1"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none border"
                    style={{
                      backgroundColor: "var(--background)",
                      color: "var(--foreground)",
                      borderColor: "var(--border)",
                    }}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold mb-1"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    Notes or intentions (optional)
                  </label>
                  <textarea
                    value={form.notes}
                    onChange={(e) => update("notes", e.target.value)}
                    rows={3}
                    placeholder="Any areas of focus, allergies, or intentions for the session…"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none border resize-none"
                    style={{
                      backgroundColor: "var(--background)",
                      color: "var(--foreground)",
                      borderColor: "var(--border)",
                    }}
                  />
                </div>
              </div>
            )}

            {/* Step 4: Confirm */}
            {step === "confirm" && (
              <div>
                <h2
                  className="font-serif text-2xl font-semibold mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  Confirm your booking
                </h2>
                <p
                  className="text-sm mb-6"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Please review the details below before confirming.
                </p>
                <div
                  className="rounded-xl p-5 space-y-3 mb-2"
                  style={{ backgroundColor: "var(--background)" }}
                >
                  {[
                    ["Treatment", selectedService?.name],
                    ["Duration", selectedService?.duration],
                    ["Price", selectedService?.price],
                    ["Practitioner", form.clinician || "No preference"],
                    ["Date", form.date],
                    ["Time", form.time],
                    ["Name", `${form.firstName} ${form.lastName}`],
                    ["Email", form.email],
                    ...(form.phone ? [["Phone", form.phone]] : []),
                    ...(form.notes ? [["Notes", form.notes]] : []),
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between text-sm">
                      <span style={{ color: "var(--muted-foreground)" }}>
                        {label}
                      </span>
                      <span
                        className="font-medium text-right max-w-[60%]"
                        style={{ color: "var(--foreground)" }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              {stepIndex > 0 ? (
                <button
                  onClick={back}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold border"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--foreground)",
                  }}
                >
                  Back
                </button>
              ) : (
                <div />
              )}
              {step !== "confirm" ? (
                <button
                  onClick={next}
                  disabled={!canProceed()}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 disabled:opacity-40"
                  style={{ backgroundColor: "var(--primary)", color: "white" }}
                >
                  Continue
                </button>
              ) : (
                <button
                  onClick={() => setSubmitted(true)}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold"
                  style={{ backgroundColor: "var(--primary)", color: "white" }}
                >
                  Confirm Booking
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
