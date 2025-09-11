import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Jan & Co. - Trusted Chartered Accountancy Firm in Varanasi | CA Services",
  description:
    "Jan & Co. (formerly A.K. Agrawal & Co.) offers expert CA services in Varanasi including GST registration, tax consultancy, business accounting, TDS management, and company return filing. Professional and reliable financial solutions.",
  keywords:
    "chartered accountant varanasi, CA firm varanasi, GST registration, tax consultancy, business accounting, TDS management, company return filing, IPR services",
  authors: [{ name: "Jan & Co." }],
  openGraph: {
    title: "Jan & Co. - Trusted CA Firm in Varanasi",
    description:
      "Expert chartered accountancy services in Varanasi. GST, tax consultancy, and business accounting solutions.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
