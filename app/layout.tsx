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

// PLACEHOLDER: Update all metadata with your personal information
export const metadata: Metadata = {
  title: "Your Name | Data Scientist & AI Engineer", // PLACEHOLDER
  description:
    "Portfolio of Your Name — Data Scientist, ML Engineer, and AI Enthusiast. Transforming raw data into actionable intelligence through scalable models and data-driven products.", // PLACEHOLDER
  keywords: [
    "Data Scientist",
    "Machine Learning Engineer",
    "AI Engineer",
    "Data Analyst",
    "Python",
    "Deep Learning",
    "NLP",
    "Portfolio",
  ],
  authors: [{ name: "Your Name" }], // PLACEHOLDER
  openGraph: {
    title: "Your Name | Data Scientist & AI Engineer", // PLACEHOLDER
    description:
      "Portfolio of Your Name — Data Scientist and ML Engineer building intelligent, data-driven products.", // PLACEHOLDER
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.vercel.app", // PLACEHOLDER
    siteName: "Your Name Portfolio", // PLACEHOLDER
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name | Data Scientist & AI Engineer", // PLACEHOLDER
    description: "Data Scientist and ML Engineer portfolio.", // PLACEHOLDER
    creator: "@yourtwitterhandle", // PLACEHOLDER
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
