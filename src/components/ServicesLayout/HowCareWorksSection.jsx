"use client";

import React from "react";
import { PhoneCall, CalendarCheck, Lock } from "lucide-react";

const CARE_STEPS = [
  {
    id: "1",
    number: "01",
    title: "Select Service or Specialist",
    description:
      "Browse our verified clinical departments or consult our 24/7 care coordination desk to pinpoint the exact specialist you require.",
    metaText: "Clinical phone triage ready",
    icon: <PhoneCall className="h-3.5 w-3.5 shrink-0" strokeWidth={2.2} />,
    boxStyle:
      "bg-[#04233C] dark:bg-slate-800 text-white shadow-[0_8px_20px_rgba(4,35,60,0.18)]",
  },
  {
    id: "2",
    number: "02",
    title: "Book Online or Walk In",
    description:
      "Choose an in-person time slot or virtual visit with immediate SMS and email confirmation. No primary referral needed for most outpatient visits.",
    metaText: "Real-time availability sync",
    icon: <CalendarCheck className="h-3.5 w-3.5 shrink-0" strokeWidth={2.2} />,
    boxStyle:
      "bg-[#0466A6] dark:bg-sky-600 text-white shadow-[0_8px_20px_rgba(4,102,166,0.25)]",
  },
  {
    id: "3",
    number: "03",
    title: "Integrated Follow-up",
    description:
      "Access secure diagnostic reports, physician summaries, and direct clinician messaging through our unified MyDocTime Patient Portal.",
    metaText: "100% HIPAA-compliant records",
    icon: <Lock className="h-3.5 w-3.5 shrink-0" strokeWidth={2.2} />,
    boxStyle:
      "bg-[#083052] dark:bg-slate-800 text-white shadow-[0_8px_20px_rgba(8,48,82,0.18)]",
  },
];

export default function HowCareWorksSection() {
  return (
    <section className="w-full bg-[#EFF3FB] dark:bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="mx-auto max-w-[1160px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-[#DCE7FA] dark:bg-sky-950/70 px-3.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.08em] text-[#1D63B8] dark:text-sky-400">
            PATIENT EXPERIENCE
          </span>

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#0B1F3A] dark:text-slate-100 sm:text-[32px]">
            How Care Works at DocTime
          </h2>

          <p className="mt-3 text-[13.5px] leading-relaxed text-[#52647A] dark:text-slate-400 sm:text-[14.5px]">
            Transparent, interconnected medical care without endless referrals or
            administrative friction.
          </p>
        </div>

        {/* 3-Step Horizontal Timeline */}
        <div className="relative mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {/* Connecting Horizontal Line (Visible on Desktop) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-[26px] hidden h-[1.5px] bg-[#D5E2F5] dark:bg-slate-800 md:block"
          />

          {CARE_STEPS.map((step) => (
            <div
              key={step.id}
              id={step.id}
              className="relative z-10 flex flex-col items-center text-center"
            >
              {/* Numbered Badge Box */}
              <div
                className={`flex h-[52px] w-[52px] items-center justify-center rounded-2xl text-[17px] font-bold tracking-wide transition-transform duration-200 hover:scale-105 ${step.boxStyle}`}
              >
                {step.number}
              </div>

              {/* Step Title */}
              <h3 className="mt-6 text-[17px] font-bold text-[#0B1F3A] dark:text-slate-100">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="mt-2.5 max-w-[310px] text-[13px] leading-[1.65] text-[#52647A] dark:text-slate-400">
                {step.description}
              </p>

              {/* Bottom Feature Link / Metadata */}
              <div className="mt-4 inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-[#1D63B8] dark:text-sky-400">
                {step.icon}
                <span>{step.metaText}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}