
import Link from "next/link";
import {
  HeartPulse,
  Microscope,
  Scan,
  Ambulance,
  FlaskConical,
  Pill,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

const capabilities = [
  {
    id: 1,
    title: "Advanced Cardiac Care",
    description:
      "Comprehensive heart care with modern cardiac diagnostics, experienced specialists, and advanced treatment facilities.",
    icon: HeartPulse,
    color: "rose",
    href: "/services/cardiac-care",
  },
  {
    id: 2,
    title: "Modern Laboratory",
    description:
      "Reliable diagnostic testing with advanced laboratory equipment and experienced medical professionals.",
    icon: Microscope,
    color: "violet",
    href: "/services/laboratory",
  },
  {
    id: 3,
    title: "Advanced Imaging",
    description:
      "Modern imaging facilities including MRI, CT scans, ultrasound, and digital X-ray services.",
    icon: Scan,
    color: "sky",
    href: "/services/imaging",
  },
  {
    id: 4,
    title: "Emergency Services",
    description:
      "Dedicated emergency medical support with rapid response and specialized critical care facilities.",
    icon: Ambulance,
    color: "red",
    href: "/services/emergency",
  },
  {
    id: 5,
    title: "Diagnostic Services",
    description:
      "Comprehensive diagnostic solutions to support accurate diagnosis and effective treatment planning.",
    icon: FlaskConical,
    color: "amber",
    href: "/services/diagnostics",
  },
  {
    id: 6,
    title: "Pharmacy Services",
    description:
      "Convenient access to prescribed medications and professional pharmaceutical support.",
    icon: Pill,
    color: "emerald",
    href: "/services/pharmacy",
  },
];

const colorStyles = {
  rose: {
    icon: "bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400",
    link: "text-rose-600 dark:text-rose-400",
  },
  violet: {
    icon: "bg-violet-50 text-violet-600 dark:bg-violet-950/40 dark:text-violet-400",
    link: "text-violet-600 dark:text-violet-400",
  },
  sky: {
    icon: "bg-sky-50 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400",
    link: "text-sky-600 dark:text-sky-400",
  },
  red: {
    icon: "bg-red-50 text-red-600 dark:bg-red-950/40 dark:text-red-400",
    link: "text-red-600 dark:text-red-400",
  },
  amber: {
    icon: "bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400",
    link: "text-amber-600 dark:text-amber-400",
  },
  emerald: {
    icon: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400",
    link: "text-emerald-600 dark:text-emerald-400",
  },
};

function CapabilityCard({ capability }) {
  const Icon = capability.icon;
  const styles = colorStyles[capability.color];

  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between">
        <div className={`rounded-xl p-3 ${styles.icon}`}>
          <Icon size={23} strokeWidth={1.8} />
        </div>

        <ShieldCheck
          size={17}
          className="text-slate-300 transition group-hover:text-emerald-500 dark:text-slate-700"
        />
      </div>

      <h3 className="mt-5 text-base font-bold text-slate-900 dark:text-white">
        {capability.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
        {capability.description}
      </p>

      <Link
        href={capability.href}
        className={`mt-5 inline-flex items-center gap-1.5 text-xs font-semibold transition group-hover:gap-2.5 ${styles.link}`}
      >
        Explore Service
        <ArrowUpRight size={15} />
      </Link>
    </div>
  );
}

export default function HospitalCapabilities() {
  return (
    <section className="bg-white px-4 py-16 dark:bg-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-sky-600 dark:text-sky-400">
              Our Healthcare Excellence
            </span>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              Advanced Hospital Capabilities
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400">
              Discover our modern healthcare facilities and specialized
              services designed to support your health and wellbeing.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-sky-600 transition hover:text-sky-700 dark:text-sky-400"
          >
            Explore All Services
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <CapabilityCard
              key={capability.id}
              capability={capability}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
