import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Script from "next/script";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

const sourceSans = Source_Sans_3({
    subsets: ["latin"],
    variable: "--font-source-sans",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Jan & Co. - Trusted Chartered Accountancy Firm in Varanasi | CA Services",
    description:
        "Jan & Co. (formerly A.K. Agrawal & Co.) offers expert CA services in Varanasi including GST registration, tax consultancy, business accounting, TDS management, and company return filing. Professional and reliable financial solutions.",
    keywords:
        "chartered accountant varanasi, CA firm varanasi, GST registration, tax consultancy, business accounting, TDS management, company return filing, IPR services",
    authors: [{ name: "Jan & Co." }],
    openGraph: {
        title: "Best Chartered Accountant Ca Firm in Varanasi - Jan & Co",
        description:
            "Expert chartered accountancy services in Varanasi. GST, tax consultancy, and business accounting solutions - Get Free Consultation Call +919453141045",
        type: "website",
        locale: "en_IN",
    },
    robots: {
        index: true,
        follow: true,
    },
    other: {
        "google-site-verification":
            "pLJx4TauHFu48zmhH5DbsL3hSeJTrUOb1DCPCZ6lEhM",
    },
};

// GA 4 iD
const GA_MEASUREMENT_ID = "G-1ERK76NN28"; // Replace with your GA4 ID

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${playfair.variable} ${sourceSans.variable} antialiased`}
        >
            <body className="font-sans">
                {/* Google Analytics 4 */}
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                    strategy="afterInteractive"
                />
                <Script id="ga4-init" strategy="afterInteractive">
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
                </Script>
                <main className="min-h-screen">
                    <Navigation />
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    );
}
