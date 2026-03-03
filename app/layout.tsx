import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shubham Kumar | Data Scientist & AI Engineer",
  description:
    "Portfolio of Shubham Kumar — Data Scientist, ML Engineer, and AI Enthusiast based in Delhi, India. Transforming raw data into actionable intelligence through scalable models and data-driven products.",
  keywords: [
    "Data Scientist",
    "Machine Learning Engineer",
    "AI Engineer",
    "Data Analyst",
    "Python",
    "Deep Learning",
    "NLP",
    "Portfolio",
    "Shubham Kumar",
  ],
  authors: [{ name: "Shubham Kumar" }],
  openGraph: {
    title: "Shubham Kumar | Data Scientist & AI Engineer",
    description:
      "Portfolio of Shubham Kumar — Data Scientist and ML Engineer building intelligent, data-driven products.",
    type: "website",
    locale: "en_US",
    url: "https://shubham-psi-navy.vercel.app",
    siteName: "Shubham Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Kumar | Data Scientist & AI Engineer",
    description: "Data Scientist and ML Engineer portfolio — Shubham Kumar.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300`}
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
