
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Find a Doctor", href: "#doctors" },
  { label: "Departments", href: "#departments" },
  { label: "Services", href: "#services" },
  { label: "Patient Portal", href: "#portals" },
  { label: "Doctor Portal", href: "#portals" },
];

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 dark:border-slate-700 dark:text-white"
      >
        {isOpen ? <X size={21} /> : <Menu size={21} />}
      </button>

      {isOpen && (
        <nav className="absolute left-0 top-full w-full border-b border-slate-200 bg-white p-4 shadow-lg dark:border-slate-800 dark:bg-slate-950">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-sky-400"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}
