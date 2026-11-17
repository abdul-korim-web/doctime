
import Link from "next/link";
import { Home, BriefcaseMedical, Search, ListFilter } from "lucide-react";

const categories = [
  { name: "All Services", value: "all" },
  { name: "Primary & Preventive Care", value: "primary-preventive" },
  { name: "Diagnostic & Lab Tests", value: "diagnostic-lab" },
  { name: "Surgical & Inpatient Care", value: "surgical-inpatient" },
  { name: "Telehealth & Virtual Care", value: "telehealth-virtual" },
  { name: "Emergency & Critical Care", value: "emergency-critical" },
  { name: "Rehabilitation", value: "rehabilitation" },
];

const ServicesHeader = ({ search = "", activeCategory = "all" }) => {
  return (
    <section className="border-b border-slate-200/70 bg-[#f8f9ff] py-10 dark:border-slate-800 dark:bg-slate-950 sm:py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <nav className="mb-8 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
          <Link href="/" className="flex items-center gap-2 hover:text-cyan-600">
            <Home size={15} />
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">Services</span>
        </nav>

        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-xs font-bold uppercase tracking-wide text-blue-800 dark:bg-blue-400/10 dark:text-blue-300">
            <BriefcaseMedical size={15} />
            Comprehensive Healthcare Services
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Our Medical & Healthcare Services
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            From 24/7 urgent care and advanced diagnostic imaging to
            specialized surgery and home wellness, explore our integrated
            hospital and outpatient clinical services designed for you
            and your family.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-5">
          <form action="/services" method="GET" className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type="search"
                name="search"
                defaultValue={search}
                placeholder="Search by test, procedure, treatment, or specialty (e.g., MRI, Pediatrics, ECG)..."
                className="h-12 w-full rounded-lg border border-slate-400 bg-[#f1f3ff] pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/15 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400"
              />
            </div>

            <input type="hidden" name="category" value={activeCategory} />

            <button
              type="submit"
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#002b49] px-7 text-sm font-semibold text-white transition hover:bg-cyan-700 dark:bg-cyan-600 dark:hover:bg-cyan-500"
            >
              <ListFilter size={17} />
              Search Catalog
            </button>
          </form>

          <div className="mt-4 flex gap-2.5 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((category) => {
              const isActive = activeCategory === category.value;

              return (
                <Link
                  key={category.value}
                  href={
                    category.value === "all"
                      ? "/services"
                      : `/services?category=${category.value}`
                  }
                  className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                    isActive
                      ? "bg-[#002b49] text-white dark:bg-cyan-600"
                      : "bg-[#e2e9ff] text-slate-700 hover:bg-blue-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                  }`}
                >
                  {category.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeader;
