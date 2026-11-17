
import Link from "next/link";

export default function NavigationLink({
  href,
  children,
  active = false,
}) {
  return (
    <Link
      href={href}
      className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
        active
          ? "bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-400"
          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}
