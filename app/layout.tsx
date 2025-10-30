import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"
import { ThemeProvider } from "next-themes";

 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});
 
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

 
export const metadata: Metadata = {
  title: "Generations Tax & Wealth Management | Bookkeeping & Financial Services",
  description:
    "Professional bookkeeping, reconciliations, and financial management for small and mid-sized businesses. Partner with Generations Tax & Wealth Management for trusted results.",
  keywords: [
    "Accounting",
    "Bookkeeping",
    "Financial Management",
    "Tax Advisory",
    "Tech Support",
    "QuickBooks Integration",
  ],
  authors: [{ name: "Generations Tax & Wealth Management" }],
  creator: "Generations Tax & Wealth Management",
  publisher: "Generations Tax & Wealth Management",
  metadataBase: new URL("https://gtaxwealth.com"),
  openGraph: {
    title: "Generations Tax & Wealth Management",
    description:
      "Premium bookkeeping and financial advisory services for your growing business.",
    url: "https://gtaxwealth.com",
    siteName: "Generations Tax & Wealth Management",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Generations Tax & Wealth Management",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Generations Tax & Wealth Management",
    description:
      "Trusted bookkeeping and financial management services built for small and mid-sized businesses.",
    creator: "@gtaxwealth",
    images: ["/og-image.jpg"],
  },
};

 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="data-theme" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}