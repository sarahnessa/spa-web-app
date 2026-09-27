import type { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import { BlobGreen, BlobLilac } from "../components/Blobs";
import { useState } from "react";

const inputClass =
  "w-full px-4 py-3 rounded-xl text-sm outline-none border focus:ring-2 focus:ring-[var(--ring)]";
const inputStyle = {
  backgroundColor: "var(--background)",
  color: "var(--foreground)",
  borderColor: "var(--border)",
};
const labelClass = "block text-sm font-semibold mb-1.5";

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block" style={{ color: "var(--foreground)" }}>
      <span className={labelClass}>{label}{required && " *"}</span>
      <input
        className={inputClass}
        style={inputStyle}
        type={type}
        name={name}
        autoComplete={autoComplete}
        required={required}
      />
    </label>
  );
}

function TextArea({ label, name }: { label: string; name: string }) {
  return (
    <label className="block" style={{ color: "var(--foreground)" }}>
      <span className={labelClass}>{label}</span>
      <textarea
        className={`${inputClass} resize-y`}
        style={inputStyle}
        name={name}
        rows={3}
      />
    </label>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t pt-7" style={{ borderColor: "var(--border)" }}>
      <h2
        className="font-serif text-2xl font-semibold mb-5"
        style={{ color: "var(--foreground)" }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function MedicalIntake() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Helmet>
        <title>Medical Intake | Serenova Spa</title>
        <meta name="description" content="Complete your medical intake form." />
      </Helmet>
      <main className="relative overflow-hidden">
        <BlobGreen className="absolute -top-16 -left-16 w-72 h-72 pointer-events-none opacity-50" />
        <BlobLilac className="absolute top-80 -right-20 w-64 h-64 pointer-events-none opacity-40" />
        <div className="max-w-3xl mx-auto px-6 py-16 relative">
          <header className="text-center mb-10">
            <p
              className="text-xs tracking-[0.3em] uppercase font-semibold mb-3"
              style={{ color: "var(--primary)" }}
            >
              Before Your Visit
            </p>
            <h1
              className="font-serif text-4xl font-semibold mb-3"
              style={{ color: "var(--foreground)" }}
            >
              Medical Intake Form
            </h1>
            <p style={{ color: "var(--muted-foreground)" }}>
              Please share the information below to help us prepare for your session.
            </p>
          </header>

          <form
            className="rounded-2xl p-6 sm:p-9 space-y-8"
            style={{ backgroundColor: "var(--card)" }}
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <Section title="Patient Demographics">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full Name" name="fullName" autoComplete="name" required />
                <Field label="Date of Birth" name="dateOfBirth" type="date" required />
                <Field label="Phone" name="phone" type="tel" autoComplete="tel" required />
                <Field label="Email" name="email" type="email" autoComplete="email" required />
                <div className="sm:col-span-2">
                  <Field label="Address" name="address" autoComplete="street-address" required />
                </div>
              </div>
            </Section>

            <Section title="Emergency Contact">
              <div className="grid sm:grid-cols-3 gap-4">
                <Field label="Name" name="emergencyName" required />
                <Field label="Relationship" name="emergencyRelationship" required />
                <Field label="Phone" name="emergencyPhone" type="tel" required />
              </div>
            </Section>

            <Section title="Insurance Information">
              <div className="grid sm:grid-cols-3 gap-4">
                <Field label="Provider" name="insuranceProvider" />
                <Field label="Policy Number" name="policyNumber" />
                <Field label="Group Number" name="groupNumber" />
              </div>
            </Section>

            <Section title="Medical History">
              <div className="space-y-4">
                <TextArea label="Current Medications (include dosage if known)" name="medications" />
                <TextArea label="Known Allergies and Reactions" name="allergies" />
                <TextArea label="Past Surgeries (include approximate dates)" name="surgeries" />
                <TextArea label="Chronic Conditions" name="chronicConditions" />
                <label
                  className="flex items-start gap-3 text-sm"
                  style={{ color: "var(--foreground)" }}
                >
                  <input type="checkbox" name="noMedicalHistory" className="mt-1 accent-[var(--primary)]" />
                  I have no medications, allergies, past surgeries, or chronic conditions to report.
                </label>
              </div>
            </Section>

            <Section title="Reason for Visit / Chief Complaint">
              <TextArea label="Please describe your reason for visiting and any concerns" name="chiefComplaint" />
            </Section>

            <Section title="Consent">
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted-foreground)" }}>
                I confirm that the information provided is accurate to the best of my knowledge and consent to its use in preparing for my visit.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Signature (type your full name)" name="signature" required />
                <Field label="Date" name="consentDate" type="date" required />
              </div>
            </Section>

            <div
              className="rounded-xl border p-4 text-sm leading-relaxed"
              style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}
              role="note"
            >
              <strong style={{ color: "var(--foreground)" }}>Privacy notice:</strong> This is a demonstration interface and does not securely store or transmit your information. A secure backend and a signed Business Associate Agreement (BAA) are required for HIPAA compliance if this form is deployed in a clinical setting. Do not submit sensitive medical information here.
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                to="/booking"
                className="text-sm font-semibold underline underline-offset-4"
                style={{ color: "var(--primary)" }}
              >
                Back to booking
              </Link>
              <button
                type="submit"
                className="px-7 py-3 rounded-full text-sm font-semibold"
                style={{ backgroundColor: "var(--primary)", color: "white" }}
              >
                Submit Intake Form
              </button>
            </div>
          </form>
        </div>
      </main>
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/25 backdrop-blur-sm">
          <section
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="intake-success-title"
            className="w-full max-w-md rounded-2xl p-8 text-center shadow-xl"
            style={{ backgroundColor: "var(--card)", color: "var(--foreground)" }}
          >
            <h2
              id="intake-success-title"
              className="font-serif text-2xl font-semibold mb-3"
            >
              Intake Form Submitted
            </h2>
            <p className="text-sm leading-relaxed mb-6">
              Your medical intake form has been successfully submitted.
            </p>
            <Link
              to="/booking"
              className="inline-block px-7 py-3 rounded-full text-sm font-semibold"
              style={{ backgroundColor: "var(--primary)", color: "white" }}
            >
              Go back to set your appointment
            </Link>
          </section>
        </div>
      )}
    </>
  );
}
