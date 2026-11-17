
import {
  Clock,
  ParkingCircle,
  BriefcaseMedical,
  Headset,
} from "lucide-react";

const hospitalInfo = [
  {
    id: 1,
    title: "VISITING HOURS",
    icon: Clock,
    lines: [
      "Daily: 08:00 AM – 08:30 PM",
      "ICU Quiet: 2:00 PM – 4:00 PM",
    ],
  },
  {
    id: 2,
    title: "PARKING & VALET",
    icon: ParkingCircle,
    lines: [
      "Garages A, B, & C Open 24/7",
      "Complimentary Patient Valet",
    ],
  },
  {
    id: 3,
    title: "HOSPITAL PHARMACY",
    icon: BriefcaseMedical,
    lines: [
      "Main Lobby Ground Floor",
      "Mon-Sun: 7:30 AM – 10:00 PM",
    ],
  },
  {
    id: 4,
    title: "PATIENT ADVOCATE",
    icon: Headset,
    lines: [
      "Desk Phone: (555) 019-4820",
      "Multi-Language Interpreters",
    ],
  },
];

function InfoCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="flex min-h-[80px] items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 transition hover:border-sky-200 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:hover:border-sky-900">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center text-sky-600 dark:text-sky-400">
        <Icon size={21} strokeWidth={2.2} />
      </div>

      <div className="min-w-0">
        <h3 className="text-[11px] font-bold tracking-wide text-slate-900 dark:text-white">
          {item.title}
        </h3>

        <div className="mt-1 space-y-0.5">
          {item.lines.map((line, index) => (
            <p
              key={index}
              className={`text-[11px] leading-[1.5] ${
                index === 0
                  ? "text-slate-600 dark:text-slate-400"
                  : "text-sky-600 dark:text-sky-400"
              }`}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HospitalInfoSection() {
  return (
    <section className="bg-slate-50 px-4 py-5 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {hospitalInfo.map((item) => (
          <InfoCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
