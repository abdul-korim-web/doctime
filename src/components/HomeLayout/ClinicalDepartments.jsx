
import Link from "next/link";
import {
  HeartPulse,
  Brain,
  Ribbon,
  Bone,
  Baby,
  Ambulance,
  ArrowUpRight,
} from "lucide-react";

const departments = [
  {
    id: "cardiology",
    title: "Cardiology & Heart Care",
    description:
      "Advanced diagnosis and treatment for heart conditions with expert cardiologists and modern cardiac facilities.",
    icon: HeartPulse,
    color: "rose",
    href: "/departments/cardiology",
  },
  {
    id: "neurology",
    title: "Neurology & Neurosurgery",
    description:
      "Comprehensive care for brain, spine, and nervous system disorders with specialized medical expertise.",
    icon: Brain,
    color: "violet",
    href: "/departments/neurology",
  },
  {
    id: "oncology",
    title: "Oncology & Cancer Care",
    description:
      "Personalized cancer treatment and supportive care using advanced diagnostic and therapeutic approaches.",
    icon: Ribbon,
    color: "amber",
    href: "/departments/oncology",
  },
  {
    id: "orthopedics",
    title: "Orthopedics & Joint Care",
    description:
      "Expert treatment for bone, joint, and muscle conditions to help restore mobility and improve quality of life.",
    icon: Bone,
    color: "sky",
    href: "/departments/orthopedics",
  },
  {
    id: "pediatrics",
    title: "Pediatrics & Child Health",
    description:
      "Dedicated healthcare for infants, children, and adolescents in a friendly and supportive environment.",
    icon: Baby,
    color: "teal",
    href: "/departments/pediatrics",
  },
  {
    id: "emergency",
    title: "Emergency & Critical Care",
    description:
      "Round-the-clock emergency services and specialized critical care for urgent medical situations.",
    icon: Ambulance,
    color: "red",
    href: "/departments/emergency",
  },
];

const colorStyles = {
  rose: {
    icon: "bg-rose-50 text-rose-600 dark:bg-rose-950/50 dark:text-rose-400",
    link: "text-rose-600 dark:text-rose-400",
  },
  violet: {
    icon: "bg-violet-50 text-violet-600 dark:bg-violet-950/50 dark:text-violet-400",
    link: "text-violet-600 dark:text-violet-400",
  },
  amber: {
    icon: "bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400",
    link: "text-amber-600 dark:text-amber-400",
  },
  sky: {
    icon: "bg-sky-50 text-sky-600 dark:bg-sky-950/50 dark:text-sky-400",
    link: "text-sky-600 dark:text-sky-400",
  },
  teal: {
    icon: "bg-teal-50 text-teal-600 dark:bg-teal-950/50 dark:text-teal-400",
    link: "text-teal-600 dark:text-teal-400",
  },
  red: {
    icon: "bg-red-50 text-red-600 dark:bg-red-950/50 dark:text-red-400",
    link: "text-red-600 dark:text-red-400",
  },
};

function DepartmentCard({ department }) {
  const Icon = department.icon;
  const styles = colorStyles[department.color];

  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
      <div
        className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${styles.icon}`}
      >
        <Icon size={22} strokeWidth={1.8} />
      </div>

      <h3 className="text-base font-bold text-slate-900 dark:text-white">
        {department.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
        {department.description}
      </p>

      <Link
        href={department.href}
        className={`mt-5 inline-flex items-center gap-1.5 text-xs font-semibold transition group-hover:gap-2.5 ${styles.link}`}
      >
        Explore Department
        <ArrowUpRight size={15} />
      </Link>
    </div>
  );
}

export default function ClinicalDepartments() {
  return (
    <section className="bg-slate-50 px-4 py-16 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-sky-600 dark:text-sky-400">
              Our Specialties
            </span>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              Clinical Departments
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400">
              Comprehensive medical services across specialized departments,
              delivered by experienced healthcare professionals.
            </p>
          </div>

          <Link
            href="/departments"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-sky-600 transition hover:text-sky-700 dark:text-sky-400"
          >
            View All Departments
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((department) => (
            <DepartmentCard
              key={department.id}
              department={department}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
