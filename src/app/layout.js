
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"
import { Noto_Serif } from 'next/font/google';
import { AuthProvider } from "@/components/AuthProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-serif',
});

export const metadata = {
  title: "Brainex - A virtual assistant for all your knowledge work.",
  description: "The virtual butler for your knowledge work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} antialiased`}
      >
        <AuthProvider>
          <span
            className="flex h-screen overflow-hidden"
            // style={{ backgroundColor: "var(--surface-color-2)" }}
          >
            <Navbar />
            <main
              className={ `flex-1 overflow-y-auto` }

              // style={{ backgroundColor: "var(--surface-color-2)" }}
            >
              {children}
            </main>
          </span>
          <SpeedInsights />
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  );
}
