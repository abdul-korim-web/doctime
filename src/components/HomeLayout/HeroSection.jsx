
"use client";

import { useState } from "react";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Search,
  ShieldCheck,
  Stethoscope,
  Users,
  HeartPulse,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "99.2%",
    label: "Patient Satisfaction",
  },
  {
    icon: Stethoscope,
    value: "450+",
    label: "Expert Doctors",
  },
  {
    icon: Clock3,
    value: "24/7",
    label: "Medical Support",
  },
  {
    icon: HeartPulse,
    value: "25+",
    label: "Years of Excellence",
  },
];

export default function HeroSection() {
  const [formData, setFormData] = useState({
    specialty: "",
    doctor: "",
    date: "",
    time: "",
    location: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("Appointment request submitted successfully!");
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 px-4 py-14 dark:bg-slate-950 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-400">
            <ShieldCheck size={15} />
            Your Health, Our Priority
          </div>

          <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            Compassionate Care,
            <span className="mt-1 block text-sky-600 dark:text-sky-400">
              Made Simple.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
            Experience trusted healthcare with expert doctors, modern
            facilities, and personalized treatment. Your journey to better
            health starts here.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#appointment"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
            >
              Book an Appointment
              <CalendarDays size={17} />
            </a>

            <a
              href="#doctors"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-500 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              Find a Doctor
              <Search size={17} />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
                >
                  <Icon
                    size={19}
                    className="mb-3 text-sky-600 dark:text-sky-400"
                  />

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {stat.value}
                  </h3>

                  <p className="mt-1 text-[11px] leading-4 text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div id="appointment">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20 sm:p-7">
            <div className="mb-6 flex items-start justify-between gap-3">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  Quick & Easy Booking
                </span>

                <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                  Book an Appointment
                </h2>

                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  Find the right doctor for your healthcare needs.
                </p>
              </div>

              <div className="rounded-xl bg-sky-50 p-3 text-sky-600 dark:bg-sky-950 dark:text-sky-400">
                <CalendarDays size={25} />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Medical Specialty
                </label>

                <select
                  name="specialty"
                  value={formData.specialty}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  <option value="">Select a specialty</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="neurology">Neurology</option>
                  <option value="dermatology">Dermatology</option>
                  <option value="orthopedics">Orthopedics</option>
                  <option value="pediatrics">Pediatrics</option>
                  <option value="gynecology">Gynecology</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Select Doctor
                </label>

                <select
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  <option value="">Choose a doctor</option>
                  <option value="available-doctor">Any Available Doctor</option>
                  <option value="doctor-1">Dr. Sarah Ahmed</option>
                  <option value="doctor-2">Dr. Michael Smith</option>
                  <option value="doctor-3">Dr. James Wilson</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                    <CalendarDays size={15} />
                    Date
                  </label>

                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={"2026-11-17"}
                    required
                    className="w-full min-w-0 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-700 outline-none focus:border-sky-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  />
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                    <Clock3 size={15} />
                    Time
                  </label>

                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full min-w-0 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-700 outline-none focus:border-sky-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    <option value="">Select time</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <MapPin size={15} />
                  Hospital Location
                </label>

                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-sky-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  <option value="">Select hospital location</option>
                  <option value="main-campus">Main Hospital Campus</option>
                  <option value="city-branch">City Branch</option>
                  <option value="north-branch">North Branch</option>
                </select>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-sky-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-700"
              >
                <CalendarDays size={17} />
                Find Available Appointments
              </button>

              {message && (
                <p
                  role="status"
                  className="rounded-lg bg-emerald-50 p-3 text-center text-sm text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400"
                >
                  {message}
                </p>
              )}

              <p className="text-center text-xs text-slate-400">
                <ShieldCheck size={13} className="mr-1 inline" />
                Your information is safe and secure.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
