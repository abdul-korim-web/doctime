

import React from "react";
import {
  Activity,
  ScanLine,
  Siren,
  Video,
  BriefcaseMedical,
  Accessibility,
  Baby,
  Home,
  CheckCircle2,
  ArrowRight,
  Asterisk,
} from "lucide-react";

const CLINICAL_UNITS = [
  {
    id: "1", 
    title: "Outpatient & Primary Care",
    description:
      "Your medical anchor for lifelong health, proactive illness prevention, and trusted disease management.",
    badgeText: "Walk-in Welcome",
    badgeStyle: "blue",
    variant: "standard",
    icon: <Activity className="h-5 w-5 text-[#082B49] dark:text-sky-400" strokeWidth={2} />,
    features: [
      "Comprehensive Annual Physicals",
      "Chronic Condition Plans (Hypertension, Diabetes)",
      "Pediatric Growth & Geriatric Wellness",
    ],
    metaLeft: "In-Network Insurance",
    metaRight: "Copay applies",
    ctaText: "Book Consultation",
    ctaIcon: "arrow",
    href: "#book-consultation",
  },
  {
    id: "2", 
    title: "Diagnostic Imaging & Labs",
    description:
      "Ultra-high definition imaging and fully automated clinical pathology labs delivering rapid, verified answers.",
    badgeText: "Digital Delivery",
    badgeStyle: "mint",
    variant: "standard",
    icon: <ScanLine className="h-5 w-5 text-[#082B49] dark:text-sky-400" strokeWidth={2} />,
    features: [
      "3T High-Res MRI & 512-Slice CT Scan",
      "Digital Mammography & 4D Ultrasound",
      "24-Hour Patient Portal Lab Results",
    ],
    metaLeft: "Pre-Auth Assistance",
    metaRight: "100% Covered Standard",
    ctaText: "View Test Menu",
    ctaIcon: "arrow",
    href: "#test-menu",
  },
  {
    id: "3",
    title: "24/7 Emergency & Trauma",
    description:
      "Full-spectrum acute medical intervention, critical resuscitation, and state-certified trauma bays.",
    badgeText: "Average Wait < 15m",
    badgeStyle: "red",
    variant: "emergency",
    icon: <Siren className="h-5 w-5 text-[#C81E1E] dark:text-red-400" strokeWidth={2} />,
    features: [
      "Level 1 Adult Trauma Triage Bay",
      "Rapid Stroke & Cardiac Cath Lab Protocol",
      "Pediatric Emergency Dedicated Unit",
    ],
    metaLeft: "Direct ER Hotline",
    metaRight: "(555) 019-4911",
    ctaText: "Emergency Guidelines",
    ctaIcon: "asterisk",
    href: "#emergency-guidelines",
  },
  {
    id: "4", 
    title: "Telehealth & Virtual Care",
    description:
      "High-definition video appointments with licensed physicians from the comfort and safety of your home.",
    badgeText: "Same-Day Slots",
    badgeStyle: "blue",
    variant: "telehealth",
    icon: <Video className="h-5 w-5 text-[#082B49] dark:text-sky-400" strokeWidth={2} />,
    features: [
      "15-Minute On-Demand Sick Visits",
      "Direct Electronic Pharmacy Script Transfer",
      "Mental Health & Therapy Video Sessions",
    ],
    metaLeft: "Zero Commute",
    metaRight: "$0 Copay with Select Plans",
    ctaText: "Launch Virtual Visit",
    ctaIcon: "video",
    href: "#virtual-visit",
  },
  {
    id: "5", 
    title: "Surgical & Day Procedures",
    description:
      "Cutting-edge surgical suites engineered for precision, reduced pain, smaller incisions, and swift recovery.",
    badgeText: "Same Day Discharge",
    badgeStyle: "blue",
    variant: "standard",
    icon: (
      <BriefcaseMedical className="h-5 w-5 text-[#082B49] dark:text-sky-400" strokeWidth={2} />
    ),
    features: [
      "Advanced Laparoscopic & Endoscopy",
      "Robotic-Assisted Joint & Soft Tissue Care",
      "Private Post-Op Recovery Pods",
    ],
    metaLeft: "Pre-Op Consultations",
    metaRight: "Specialist Guided",
    ctaText: "Consult Surgeon",
    ctaIcon: "arrow",
    href: "#consult-surgeon",
  },
  {
    id: "6", 
    title: "Therapy & Rehabilitation",
    description:
      "Restoring strength, mobility, and confidence through customized clinical kinesiology and occupational therapy.",
    badgeText: "Tailored Plans",
    badgeStyle: "blue",
    variant: "standard",
    icon: <Accessibility className="h-5 w-5 text-[#082B49] dark:text-sky-400" strokeWidth={2} />,
    features: [
      "Post-Operative Orthopedic Regimens",
      "Neuro-Rehabilitation & Stroke Therapy",
      "Athletic Injury & Spine Conditioning",
    ],
    metaLeft: "Session Plans",
    metaRight: "Direct Access (No Referral)",
    ctaText: "Schedule Evaluation",
    ctaIcon: "arrow",
    href: "#schedule-evaluation",
  },
  {
    id: "7", 
    title: "Women's & Maternal Center",
    description:
      "Holistic, compassionate care across all life chapters, from routine gynecological health to labor and delivery.",
    badgeText: "Family Centered",
    badgeStyle: "blue",
    variant: "standard",
    icon: <Baby className="h-5 w-5 text-[#082B49] dark:text-sky-400" strokeWidth={2} />,
    features: [
      "Prenatal, Labor & Postnatal Care",
      "Level III Neonatal Intensive Care (NICU)",
      "Breast Health & Preventative Screenings",
    ],
    metaLeft: "Birthing Suites",
    metaRight: "Virtual Tours Available",
    ctaText: "OB/GYN Appointments",
    ctaIcon: "arrow",
    href: "#obgyn-appointments",
  },
  {
    id: "8",
    title: "Home & Elder Nursing",
    description:
      "Professional clinical care, wound dressing, and lab draws delivered safely within your residence.",
    badgeText: "At-Home Care",
    badgeStyle: "blue",
    variant: "standard",
    icon: <Home className="h-5 w-5 text-[#082B49] dark:text-sky-400" strokeWidth={2} />,
    features: [
      "Post-Hospitalization Home Nursing",
      "Mobile Blood Draws & Diagnostic Kits",
      "Palliative Support & Medication Oversight",
    ],
    metaLeft: "Medicare Certified",
    metaRight: "Direct Home Dispatch",
    ctaText: "Request Home Visit",
    ctaIcon: "arrow",
    href: "#request-home-visit",
  },
];

export default function ClinicalUnitsSection() {
  const getBadgeClasses = (style) => {
    switch (style) {
      case "mint":
        return "bg-[#9EF0D8] text-[#054A37] dark:bg-emerald-950 dark:text-emerald-300";
      case "red":
        return "bg-[#FADBD8] text-[#B91C1C] dark:bg-red-950 dark:text-red-300";
      case "blue":
      default:
        return "bg-[#CFE4FF] text-[#1D4ED8] dark:bg-blue-950 dark:text-blue-300";
    }
  };

  const getCtaClasses = (variant) => {
    switch (variant) {
      case "emergency":
        return "bg-[#BA1B1D] hover:bg-[#991517] text-white dark:bg-red-700 dark:hover:bg-red-800";
      case "telehealth":
        return "bg-[#0466A6] hover:bg-[#035287] text-white dark:bg-sky-600 dark:hover:bg-sky-700";
      case "standard":
      default:
        return "bg-[#052946] hover:bg-[#083B63] text-white dark:bg-slate-700 dark:hover:bg-slate-600";
    }
  };

  return (
    <section className="w-full bg-[#F8FAFC] dark:bg-slate-950 py-16 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="mx-auto max-w-[1360px]">
        {/* Header Bar */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#1D63B8] dark:text-sky-400">
              CLINICAL EXCELLENCE
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#0B1F3A] dark:text-slate-100 sm:text-[28px]">
              Specialized Care &amp; Clinical Units
            </h2>
          </div>

          {/* Status Indicators */}
          <div className="flex items-center gap-4 text-xs font-medium text-[#52647A] dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#2DD4BF]" />
              <span>Instant Booking</span>
            </div>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#38BDF8]" />
              <span>Portal Synchronized</span>
            </div>
          </div>
        </div>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CLINICAL_UNITS.map((unit) => {
            const isEmergency = unit.variant === "emergency";

            return (
              <div
                key={unit.id}
                id={unit.id} // প্রতিটি কার্ডে id="1", id="2", id="3" এভাবে ডাইনামিক আইডি যুক্ত হলো
                className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-[0_2px_12px_rgba(15,23,42,0.03)] dark:shadow-none transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)] dark:hover:border-slate-700"
              >
                {/* Decorative top-right corner accent on Emergency Card */}
                {isEmergency && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-8 -top-8 h-28 w-36 rounded-bl-[60px] bg-[#FEF2F2] dark:bg-red-950/30"
                  />
                )}

                <div>
                  {/* Card Top Row: Icon Box + Pill Badge */}
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                        isEmergency 
                          ? "bg-[#FEE2E2] dark:bg-red-950/50" 
                          : "bg-[#EBF2FA] dark:bg-slate-800"
                      }`}
                    >
                      {unit.icon}
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide ${getBadgeClasses(
                        unit.badgeStyle
                      )}`}
                    >
                      {unit.badgeText}
                    </span>
                  </div>

                  {/* Card Title & Description */}
                  <h3 className="mt-5 text-[17px] font-bold leading-snug text-[#0B1F3A] dark:text-slate-100">
                    {unit.title}
                  </h3>
                  <p className="mt-2.5 text-[13px] leading-[1.6] text-[#52647A] dark:text-slate-400">
                    {unit.description}
                  </p>

                  {/* Checklist Features */}
                  <ul className="mt-5 space-y-2.5">
                    {unit.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-[12.5px] leading-snug text-[#334155] dark:text-slate-300"
                      >
                        <CheckCircle2
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            isEmergency ? "text-[#DC2626] dark:text-red-400" : "text-[#2563EB] dark:text-sky-400"
                          }`}
                          strokeWidth={2}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Metadata Strip & CTA Button */}
                <div className="mt-6 pt-2">
                  {/* Info Box */}
                  <div
                    className={`mb-3.5 flex items-center justify-between gap-2 rounded-lg px-3.5 py-2.5 text-[11.5px] ${
                      isEmergency
                        ? "border border-[#FECACA] bg-[#FFF5F5] dark:border-red-900/50 dark:bg-red-950/30"
                        : "bg-[#F1F5F9] dark:bg-slate-800/60"
                    }`}
                  >
                    <span
                      className={`font-semibold leading-tight ${
                        isEmergency ? "text-[#B91C1C] dark:text-red-400" : "text-[#334155] dark:text-slate-300"
                      }`}
                    >
                      {unit.metaLeft}
                    </span>
                    <span
                      className={`text-right leading-tight ${
                        isEmergency
                          ? "font-bold text-[#B91C1C] dark:text-red-400"
                          : "font-medium text-[#475569] dark:text-slate-400"
                      }`}
                    >
                      {unit.metaRight}
                    </span>
                  </div>

                  {/* Action Button */}
                  <a
                    href={unit.href}
                    className={`flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-[13px] font-semibold transition-colors ${getCtaClasses(
                      unit.variant
                    )}`}
                  >
                    {unit.ctaIcon === "asterisk" && (
                      <Asterisk className="h-4 w-4" strokeWidth={2.5} />
                    )}
                    <span>{unit.ctaText}</span>
                    {unit.ctaIcon === "arrow" && (
                      <ArrowRight className="h-4 w-4" strokeWidth={2} />
                    )}
                    {unit.ctaIcon === "video" && (
                      <Video className="h-4 w-4" strokeWidth={2} />
                    )}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}