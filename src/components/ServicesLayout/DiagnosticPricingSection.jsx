

import React from "react";
import {
  ShieldCheck,
  FileText,
  Droplet,
  FlaskConical,
  Scan,
  Activity,
  PlusSquare,
  Download,
  ArrowRight,
} from "lucide-react";

const INSURANCE_NETWORKS = [
  "Medicare Part B",
  "BlueCross BlueShield",
  "Aetna",
  "UnitedHealthcare",
  "Cigna",
  "Humana",
];

const DIAGNOSTIC_TESTS = [
  {
    id: "1",
    title: "Complete Blood Count (CBC) Panel",
    description: "WBC, RBC, Platelets, Hematocrit & Indices",
    price: "$32",
    subPrice: "Self-Pay / $0 Ins.",
    icon: <Droplet className="h-5 w-5 text-[#082B49] dark:text-sky-400" strokeWidth={2} />,
    href: "#book-cbc",
  },
  {
    id: "2",
    title: "Comprehensive Metabolic Panel (CMP)",
    description: "14-parameter kidney, liver & electrolyte check",
    price: "$45",
    subPrice: "Self-Pay / $0 Ins.",
    icon: <FlaskConical className="h-5 w-5 text-[#082B49] dark:text-sky-400" strokeWidth={2} />,
    href: "#book-cmp",
  },
  {
    id: "3",
    title: "Digital 2-View Chest X-Ray",
    description: "Frontal & lateral high-resolution radiographs",
    price: "$85",
    subPrice: "Self-Pay / In-Net",
    icon: <Scan className="h-5 w-5 text-[#082B49] dark:text-sky-400" strokeWidth={2} />,
    href: "#book-xray",
  },
  {
    id: "4",
    title: "12-Lead Electrocardiogram (ECG)",
    description: "Cardiologist-reviewed electrical rhythm trace",
    price: "$60",
    subPrice: "Self-Pay / In-Net",
    icon: <Activity className="h-5 w-5 text-[#082B49] dark:text-sky-400" strokeWidth={2} />,
    href: "#book-ecg",
  },
  {
    id: "5",
    title: "Diagnostic Abdominal Ultrasound",
    description: "Full quadrant sonogram with radiologist report",
    price: "$175",
    subPrice: "Self-Pay / In-Net",
    icon: <PlusSquare className="h-5 w-5 text-[#082B49] dark:text-sky-400" strokeWidth={2} />,
    href: "#book-ultrasound",
  },
];

export default function DiagnosticPricingSection() {
  return (
    <section className="w-full bg-[#F4F7FC] dark:bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="mx-auto max-w-[1320px]">
        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Heading, Info & Insurance Box */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.08em] text-[#1D63B8] dark:text-sky-400">
                DIAGNOSTIC TRANSPARENCY
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0B1F3A] dark:text-slate-100 sm:text-[34px] leading-tight">
                Clear, Upfront Pricing for Diagnostic Tests
              </h2>
              <p className="mt-4 text-[14px] leading-[1.7] text-[#52647A] dark:text-slate-400">
                Healthcare should never come with billing surprises. We publish direct outpatient costs alongside comprehensive in-network insurance support with zero hidden facility fees.
              </p>
            </div>

            {/* Insurance Networks Card */}
            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-[0_4px_20px_rgba(15,23,42,0.03)]">
              <div className="flex items-center gap-2.5 text-[#0B1F3A] dark:text-slate-100 font-bold text-[15px]">
                <ShieldCheck className="h-5 w-5 text-[#2563EB] dark:text-sky-400" strokeWidth={2.2} />
                <span>Accepted Insurance Networks</span>
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-[#52647A] dark:text-slate-400">
                Most diagnostic exams and clinical panels are covered up to 100% by leading carriers:
              </p>

              {/* Insurance Network Badges */}
              <div className="mt-4 flex flex-wrap gap-2">
                {INSURANCE_NETWORKS.map((network, idx) => (
                  <span
                    key={idx}
                    className="rounded-lg bg-[#EBF2FA] dark:bg-slate-800 px-3 py-1.5 text-[12px] font-semibold text-[#1D4ED8] dark:text-sky-300 border border-slate-100 dark:border-slate-700/50"
                  >
                    {network}
                  </span>
                ))}
              </div>
            </div>

            {/* Cost Estimate Callout Box */}
            <div className="flex items-start gap-3.5 rounded-2xl bg-[#EBF2FA] dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800 p-4.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white dark:bg-slate-800 shadow-sm text-[#1D63B8] dark:text-sky-400">
                <FileText className="h-5 w-5" strokeWidth={2} />
              </div>
              <div>
                <h4 className="text-[13.5px] font-bold text-[#0B1F3A] dark:text-slate-200">
                  Need a Formal Cost Estimate?
                </h4>
                <p className="mt-0.5 text-[12.5px] text-[#52647A] dark:text-slate-400">
                  Our Financial Counselors verify coverage prior to appointments.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Tests List Container */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-[0_4px_24px_rgba(15,23,42,0.04)]">
            
            {/* List Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h3 className="text-[17px] font-bold text-[#0B1F3A] dark:text-slate-100">
                  Common Outpatient Tests
                </h3>
                <p className="text-[12.5px] text-[#52647A] dark:text-slate-400 mt-0.5">
                  Select test to book a fast-track phlebotomy or imaging bay slot
                </p>
              </div>
              <span className="self-start sm:self-auto rounded-full bg-[#EBF2FA] dark:bg-sky-950/70 px-3.5 py-1 text-[11.5px] font-bold text-[#0466A6] dark:text-sky-400">
                Digital Results &lt; 24h
              </span>
            </div>

            {/* Test Items List with id="1", id="2", etc. */}
            <div className="mt-5 divide-y divide-slate-100 dark:divide-slate-800">
              {DIAGNOSTIC_TESTS.map((test) => (
                <div
                  key={test.id}
                  id={test.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4.5 first:pt-0 last:pb-0 transition-colors"
                >
                  {/* Left: Icon & Details */}
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EBF2FA] dark:bg-slate-800 mt-0.5 sm:mt-0">
                      {test.icon}
                    </div>
                    <div>
                      <h4 className="text-[14.5px] font-bold text-[#0B1F3A] dark:text-slate-100 leading-snug">
                        {test.title}
                      </h4>
                      <p className="mt-1 text-[12.5px] text-[#52647A] dark:text-slate-400 leading-normal">
                        {test.description}
                      </p>
                    </div>
                  </div>

                  {/* Right: Price & Book Button */}
                  <div className="flex items-center justify-between sm:justify-end gap-5 pl-14 sm:pl-0">
                    <div className="text-right">
                      <div className="text-[17px] font-bold text-[#0B1F3A] dark:text-slate-100">
                        {test.price}
                      </div>
                      <div className="text-[11px] font-medium text-[#64748B] dark:text-slate-400">
                        {test.subPrice}
                      </div>
                    </div>

                    <a
                      href={test.href}
                      className="inline-flex items-center justify-center rounded-lg bg-[#052946] hover:bg-[#083B63] dark:bg-sky-600 dark:hover:bg-sky-700 px-5 py-2.5 text-[13px] font-semibold text-white transition-colors shadow-sm"
                    >
                      Book
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Notice & Download Link */}
            <div className="mt-7 pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11.5px] text-[#64748B] dark:text-slate-400">
              <p>* Pricing includes professional read and digital portal archiving.</p>
              <a
                href="#download-chargemaster"
                className="inline-flex items-center gap-1.5 font-semibold text-[#1D63B8] dark:text-sky-400 hover:underline"
              >
                <span>Download Full 2026 Chargemaster (PDF)</span>
                <Download className="h-3.5 w-3.5" strokeWidth={2.2} />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}