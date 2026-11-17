
import {
  BadgeCheck,
  LockKeyhole,
  Award,
  ShieldCheck,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "David Henderson",
    role: "Cardiac Patient",
    initials: "DH",
    avatar: "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
    review:
      "When I arrived with sudden chest pain, Dr. Jenkins and the cardiac team had me in the catheterization lab within twenty minutes. They literally saved my life.",
  },
  {
    id: 2,
    name: "Maria Lindqvist",
    role: "Robotic Surgery Patient",
    initials: "ML",
    avatar: "bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-300",
    review:
      "The da Vinci robotic surgery for my hip replacement was remarkable. I was back home walking comfortably within 36 hours. The orthopedic nurses are angels.",
  },
  {
    id: 3,
    name: "Thomas & Clara Patel",
    role: "Parents of NICU Graduate",
    initials: "TP",
    avatar: "bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300",
    review:
      "Having a baby in the NICU is every parent's biggest fear, but Dr. Rostova explained every detail so clearly and gently. We felt secure every single day.",
  },
];

const trustItems = [
  {
    id: 1,
    icon: BadgeCheck,
    text: "Joint Commission Gold Seal Certified",
    color: "text-sky-500",
  },
  {
    id: 2,
    icon: LockKeyhole,
    text: "256-Bit HIPAA Encrypted Platform",
    color: "text-teal-500",
  },
  {
    id: 3,
    icon: Award,
    text: "Magnet Recognition for Nursing",
    color: "text-sky-500",
  },
  {
    id: 4,
    icon: ShieldCheck,
    text: "Level 1 Comprehensive Trauma Center",
    color: "text-emerald-500",
  },
];

function TestimonialCard({ testimonial }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 sm:p-6">
      <div
        className="flex gap-1 text-amber-500"
        aria-label="5 out of 5 stars"
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className="text-base leading-none">
            ★
          </span>
        ))}
      </div>

      <p className="mt-5 min-h-[88px] text-sm italic leading-[1.65] text-slate-700 dark:text-slate-300">
        "{testimonial.review}"
      </p>

      <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-3 dark:border-slate-800">
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${testimonial.avatar}`}
        >
          {testimonial.initials}
        </div>

        <div>
          <h3 className="text-xs font-bold text-slate-900 dark:text-white">
            {testimonial.name}
          </h3>

          <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
            {testimonial.role}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function PatientTestimonials() {
  return (
    <section className="bg-slate-50 px-4 py-14 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-sky-600 dark:text-sky-400">
            Patient Experience
          </span>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Voices of Healing & Trust
          </h2>

          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Hear how our doctors, nurses, and staff supported patients during
            critical times.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>

        <div className="mt-7 grid grid-cols-1 gap-5 rounded-xl border border-slate-200 bg-white px-5 py-5 dark:border-slate-800 dark:bg-slate-900 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="flex items-center justify-center gap-2.5"
              >
                <Icon
                  size={17}
                  className={`shrink-0 ${item.color}`}
                />

                <span className="text-center text-[11px] font-semibold text-slate-800 dark:text-slate-200">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
