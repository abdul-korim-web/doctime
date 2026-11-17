
import "./globals.css";
import ThemeProvider from "@/components/theme/theme-provider";
import Header from './../components/shared/Header';
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: "DocTime | Health Network",
  description: "Your trusted healthcare network.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-white max-w-[2100px] mx-auto">
        <ThemeProvider>
         <Header/>
          <main className="min-h-screen pt-36 md:pt-32">
            {children}
          </main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
