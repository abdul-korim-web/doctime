
import Link from "next/link";
import {
  Hospital,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  ArrowRight,
  Clock3,
  ShieldCheck,
  HeartPulse,
  Ambulance,
  Stethoscope,
} from "lucide-react";

const footerLinks = {
  explore: [
    { label: "About Our Hospital", href: "/about" },
    { label: "Clinical Departments", href: "/departments" },
    { label: "Find a Doctor", href: "/doctors" },
    { label: "Our Services", href: "/services" },
    { label: "Patient Reviews", href: "/testimonials" },
  ],
  patients: [
    { label: "Patient Portal", href: "/patient/login" },
    { label: "Book an Appointment", href: "/#appointment" },
    { label: "Medical Records", href: "/patient/medical-records" },
    { label: "Online Payment", href: "/patient/billing" },
    { label: "Contact Support", href: "/contact" },
  ],
};

const schedules = [
  { label: "Emergency Care", time: "24/7", emergency: true },
  { label: "Outpatient Clinics", time: "7 AM – 6 PM" },
  { label: "Diagnostic Imaging", time: "6 AM – 9 PM" },
  { label: "Hospital Pharmacy", time: "7:30 AM – 10 PM" },
];

const policies = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "HIPAA Notice", href: "/hipaa-notice" },
  { label: "Accessibility", href: "/accessibility" },
];

function FooterHeading({ children }) {
  return (
    <h3 className="mb-5 text-sm font-bold text-slate-900 dark:text-white">
      {children}
      <span className="mt-2.5 block h-0.5 w-8 rounded-full bg-sky-500" />
    </h3>
  );
}

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 text-[13px] text-slate-600 transition hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400"
    >
      <ArrowRight
        size={13}
        className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-sky-500"
      />
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">

      <div className="mx-auto max-w-7xl px-4 pt-9 sm:px-6 lg:px-8">

        {/* Emergency Information */}
        <div className="mb-9 flex flex-col gap-4 rounded-xl border border-red-100 bg-red-50/70 p-4 dark:border-red-900/30 dark:bg-red-950/20 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400">
              <HeartPulse size={21} />
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Medical Emergency?
              </h3>
              <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-400">
                Our emergency care team is available 24 hours a day.
              </p>
            </div>
          </div>

          <a
            href="tel:5550194911"
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-red-700"
          >
            <Phone size={14} />
            Call Emergency: (555) 019-4911
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-9 border-b border-slate-200 pb-9 dark:border-slate-800 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.9fr_0.9fr_1.15fr] lg:gap-10">

          {/* Brand Information */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-600 text-white shadow-sm shadow-sky-600/20">
                <Hospital size={21} />
              </div>

              <div>
                <h2 className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white">
                  DocTime
                </h2>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-sky-600 dark:text-sky-400">
                  Health Network
                </p>
              </div>
            </Link>

            <p className="mt-4 max-w-xs text-[13px] leading-6 text-slate-600 dark:text-slate-400">
              Delivering accessible and compassionate healthcare through
              medical excellence, modern technology, and dedicated care.
            </p>

            <div className="mt-5 space-y-3">
              <div className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                <MapPin size={15} className="mt-0.5 shrink-0 text-sky-600" />
                <span>800 Medical Center Blvd, Suite 100</span>
              </div>

              <a
                href="tel:5550194800"
                className="flex items-center gap-2.5 text-xs text-slate-600 transition hover:text-sky-600 dark:text-slate-400"
              >
                <Phone size={14} className="text-sky-600" />
                (555) 019-4800
              </a>

              <a
                href="mailto:info@doctime.example"
                className="flex items-center gap-2.5 text-xs text-slate-600 transition hover:text-sky-600 dark:text-slate-400"
              >
                <Mail size={14} className="text-sky-600" />
                info@doctime.example
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <FooterHeading>Explore DocTime</FooterHeading>

            <div className="flex flex-col gap-3.5">
              {footerLinks.explore.map((item) => (
                <FooterLink key={item.label} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Patient Resources */}
          <div>
            <FooterHeading>Patient Resources</FooterHeading>

            <div className="flex flex-col gap-3.5">
              {footerLinks.patients.map((item) => (
                <FooterLink key={item.label} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Hospital Information */}
          <div>
            <FooterHeading>Hospital Information</FooterHeading>

            <div className="space-y-3">
              {schedules.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-3 border-b border-slate-100 pb-2.5 last:border-0 dark:border-slate-800"
                >
                  <div className="flex items-center gap-2">
                    <Clock3
                      size={14}
                      className="shrink-0 text-sky-600"
                    />
                    <span className="text-xs text-slate-600 dark:text-slate-400">
                      {item.label}
                    </span>
                  </div>

                  <span
                    className={`shrink-0 text-[11px] font-bold ${
                      item.emergency
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-slate-800 dark:text-slate-300"
                    }`}
                  >
                    {item.time}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-lg bg-sky-50 p-3 dark:bg-sky-950/30">
              <ShieldCheck
                size={17}
                className="shrink-0 text-sky-600 dark:text-sky-400"
              />
              <span className="text-[11px] leading-5 text-slate-600 dark:text-slate-400">
                Your health information and privacy matter to us.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center text-[11px] text-slate-500 dark:text-slate-400 sm:text-left">
            © 2026 DocTime Health Network. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {policies.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[11px] text-slate-500 transition hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-center gap-1.5 text-[11px] font-medium text-slate-500 dark:text-slate-400">
            <Stethoscope size={14} className="text-sky-600" />
            Care Beyond Expectations
          </div>
        </div>
      </div>
    </footer>
  );
}
