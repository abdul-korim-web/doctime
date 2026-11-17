
import Link from "next/link";
import {
  CalendarDays,
  PhoneCall,
  Stethoscope,
  Hospital,
  Siren,
} from "lucide-react";

import NavigationLink from "./navigation-link";
import MobileNavigation from "./mobile-navigation";
import ThemeToggle from "../theme/theme-toggle";

const navigation = [
  { label: "Find a Doctor", href: "doctors", active: true },
  { label: "Departments", href: "departments" },
  { label: "Services", href: "services" },
  { label: "Patient Portal", href: "portals" },
  { label: "Doctor Portal", href: "portals" },
];

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">

      {/* Emergency Bar */}
      <div className="bg-slate-900 px-4 py-2 text-white dark:bg-black">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 text-xs font-medium md:text-sm">

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1.5 font-bold tracking-wide text-red-400">
              <Siren size={16} className="animate-pulse" />
              <span>Emergency: Dial 911</span>
            </div>

            <span className="hidden text-slate-600 sm:inline">|</span>

            <div className="flex items-center gap-1.5 text-sky-300">
              <PhoneCall size={15} />
              <span>24/7 Helpline: 1-800-DOCTIME (362-8463)</span>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-slate-800 px-2.5 py-1 text-xs">
            <span className="h-2 w-2 animate-ping rounded-full bg-emerald-400" />
            <span className="text-slate-300">Hospital Status:</span>
            <span className="font-semibold text-emerald-400">
              Normal Capacity (ER Wait &lt; 15m)
            </span>
          </div>

        </div>
      </div>

      {/* Main Navigation */}
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-4">

        {/* Logo */}
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 text-white shadow-md shadow-sky-600/20 transition-colors group-hover:bg-sky-700">
            <Hospital size={25} strokeWidth={2.5} />
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
              DocTime
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-400">
              Health Network
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <NavigationLink
              key={item.label}
              href={item.href}
              active={item.active}
            >
              {item.label}
            </NavigationLink>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">

          <ThemeToggle />

          <Link
            href="#portals"
            className="hidden items-center gap-1.5 rounded-lg border border-slate-300 bg-slate-100 px-3.5 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 sm:inline-flex"
          >
            <Stethoscope size={16} className="text-teal-600" />
            <span>Doctor Staff Login</span>
          </Link>

          <Link
            href="#booking-console"
            className="inline-flex items-center gap-1.5 rounded-lg bg-sky-600 px-3 py-2 text-xs font-semibold text-white shadow-sm shadow-sky-600/20 transition-all hover:bg-sky-700 md:px-4 md:text-sm"
          >
            <CalendarDays size={17} />
            <span className="hidden sm:inline">Book Appointment</span>
            <span className="sm:hidden">Book</span>
          </Link>

          <MobileNavigation />

        </div>
      </div>
    </header>
  );
}
