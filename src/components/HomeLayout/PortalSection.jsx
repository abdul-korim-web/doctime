
import Link from "next/link";
import {
  UserRound,
  Stethoscope,
  CalendarDays,
  FileText,
  ArrowRight,
  ShieldCheck,
  ClipboardList,
} from "lucide-react";

const portals = [
  {
    id: "patient",
    label: "FOR PATIENTS",
    title: "DocTime Patient Portal",
    description:
      "Manage your healthcare journey with easy appointment booking, medical records, prescriptions, and personalized care.",
    icon: UserRound,
    color: "sky",
    features: [
      {
        icon: CalendarDays,
        text: "Book & manage appointments",
      },
      {
        icon: FileText,
        text: "Access medical records",
      },
      {
        icon: ShieldCheck,
        text: "Secure patient information",
      },
    ],
    button: "Patient Login",
    href: "/patient/login",
    secondaryButton: "Create Account",
    secondaryHref: "/patient/register",
  },
  {
    id: "clinical",
    label: "FOR HEALTHCARE PROFESSIONALS",
    title: "DocTime Clinical EMR & Router",
    description:
      "Streamline clinical workflows with smart patient management, digital records, and efficient healthcare coordination.",
    icon: Stethoscope,
    color: "emerald",
    features: [
      {
        icon: ClipboardList,
        text: "Electronic medical records",
      },
      {
        icon: CalendarDays,
        text: "Manage patient schedules",
      },
      {
        icon: ShieldCheck,
        text: "Secure clinical workspace",
      },
    ],
    button: "Clinical Login",
    href: "/clinical/login",
    secondaryButton: "Learn More",
    secondaryHref: "/clinical",
  },
];

function PortalCard({ portal }) {
  const isPatient = portal.color === "sky";
  const Icon = portal.icon;

  return (
    <div
      className={`rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7 ${
        isPatient
          ? "border-sky-100 bg-sky-50/50 hover:shadow-sky-100/50 dark:border-sky-900/50 dark:bg-sky-950/20 dark:hover:shadow-sky-950/20"
          : "border-emerald-100 bg-emerald-50/50 hover:shadow-emerald-100/50 dark:border-emerald-900/50 dark:bg-emerald-950/20 dark:hover:shadow-emerald-950/20"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span
            className={`text-[10px] font-bold tracking-[0.15em] ${
              isPatient
                ? "text-sky-600 dark:text-sky-400"
                : "text-emerald-600 dark:text-emerald-400"
            }`}
          >
            {portal.label}
          </span>

          <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
            {portal.title}
          </h3>
        </div>

        <div
          className={`rounded-xl p-3 ${
            isPatient
              ? "bg-sky-100 text-sky-600 dark:bg-sky-900/50 dark:text-sky-400"
              : "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400"
          }`}
        >
          <Icon size={25} />
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
        {portal.description}
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {portal.features.map((feature) => {
          const FeatureIcon = feature.icon;

          return (
            <div
              key={feature.text}
              className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-300"
            >
              <FeatureIcon
                size={15}
                className={
                  isPatient
                    ? "shrink-0 text-sky-600 dark:text-sky-400"
                    : "shrink-0 text-emerald-600 dark:text-emerald-400"
                }
              />
              {feature.text}
            </div>
          );
        })}
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <Link
          href={portal.href}
          className={`inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white transition ${
            isPatient
              ? "bg-sky-600 hover:bg-sky-700"
              : "bg-emerald-600 hover:bg-emerald-700"
          }`}
        >
          {portal.button}
          <ArrowRight size={16} />
        </Link>

        <Link
          href={portal.secondaryHref}
          className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-500"
        >
          {portal.secondaryButton}
        </Link>
      </div>
    </div>
  );
}

export default function PortalSection() {
  return (
    <section className="bg-slate-50 px-4 pb-14 sm:px-6 lg:px-8 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
        {portals.map((portal) => (
          <PortalCard key={portal.id} portal={portal} />
        ))}
      </div>
    </section>
  );
}
