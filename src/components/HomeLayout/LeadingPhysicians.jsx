
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  CalendarDays,
  ArrowRight,
  Award,
} from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    degree: "MD, FACC",
    specialty: "Senior Cardiologist",
    experience: "15+ Years Experience",
    rating: "4.9",
    reviews: "128 Reviews",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=85",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    degree: "MD, PhD",
    specialty: "Neurology Specialist",
    experience: "12+ Years Experience",
    rating: "4.8",
    reviews: "96 Reviews",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&auto=format&fit=crop&q=85",
  },
  {
    id: 3,
    name: "Dr. Emily Williams",
    degree: "MD, FAAP",
    specialty: "Pediatric Specialist",
    experience: "10+ Years Experience",
    rating: "4.9",
    reviews: "114 Reviews",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&auto=format&fit=crop&q=85",
  },
];

function DoctorCard({ doctor }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      <div className="relative h-56 overflow-hidden bg-slate-100 dark:bg-slate-800">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition duration-500 group-hover:scale-105"
        />

        <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-amber-600 shadow-sm dark:bg-slate-900/95">
          <Star size={13} fill="currentColor" />
          {doctor.rating}
        </div>

        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-md bg-emerald-600 px-2.5 py-1.5 text-[10px] font-semibold text-white">
          <Award size={13} />
          Verified Specialist
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {doctor.name}
            </h3>

            <p className="mt-1 text-xs font-medium text-sky-600 dark:text-sky-400">
              {doctor.degree}
            </p>
          </div>
        </div>

        <p className="mt-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
          {doctor.specialty}
        </p>

        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          {doctor.experience}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <Star
                size={13}
                fill="currentColor"
                className="text-amber-500"
              />
              {doctor.rating}
            </div>

            <p className="mt-1 text-[11px] text-slate-400">
              {doctor.reviews}
            </p>
          </div>

          <Link
            href={`/doctors/${doctor.id}`}
            className="inline-flex items-center gap-1.5 rounded-lg bg-sky-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-sky-700"
          >
            View Profile
            <ArrowRight size={14} />
          </Link>
        </div>

        <Link
          href="/#appointment"
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-700 transition hover:border-sky-500 hover:text-sky-600 dark:border-slate-700 dark:text-slate-300 dark:hover:text-sky-400"
        >
          <CalendarDays size={14} />
          Book Appointment
        </Link>
      </div>
    </div>
  );
}

export default function LeadingPhysicians() {
  return (
    <section className="bg-slate-50 px-4 py-16 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-sky-600 dark:text-sky-400">
              Meet Our Experts
            </span>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              Leading Attending Physicians
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400">
              Meet our experienced physicians dedicated to providing
              exceptional, compassionate healthcare.
            </p>
          </div>

          <Link
            href="/doctors"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-sky-600 transition hover:text-sky-700 dark:text-sky-400"
          >
            View All Doctors
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
}
