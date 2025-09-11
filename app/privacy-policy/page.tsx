"use client";

import React from "react";
import { Shield, Cookie, UserCheck, Mail, Phone, MapPin } from "lucide-react";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

const PrivacyPolicy: React.FC = () => {
    return (
        <section className="container mx-auto max-w-4xl px-4 py-10 mt-10">
            <div className="flex items-center gap-3 mb-6">
                <Shield className="text-primary w-8 h-8" />
                <h1 className="text-3xl sm:text-4xl font-serif font-bold text-primary">
                    Privacy Policy
                </h1>
            </div>

            <p className="mb-4 text-pretty leading-relaxed">
                <strong>Effective Date:</strong> September 11, 2025
            </p>
            <p className="mb-6 text-pretty leading-relaxed">
                Jan &amp; Co. respects your privacy and is committed to
                protecting your personal information. This Privacy Policy
                explains how we collect, use, and safeguard your data when you
                use our website or services.
            </p>

            <h2 className="flex items-center gap-2 text-2xl font-serif font-semibold mb-4 text-accent">
                <UserCheck className="w-6 h-6 text-accent" /> Information We
                Collect
            </h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                    <strong>Personal Information:</strong> Name, email, phone
                    number, and business details you provide.
                </li>
                <li>
                    <strong>Automatically Collected:</strong> IP address,
                    browser type, device info, and browsing behavior.
                </li>
                <li>
                    <strong>Financial Details:</strong> Information shared for
                    accounting or compliance.
                </li>
            </ul>

            <h2 className="flex items-center gap-2 text-2xl font-serif font-semibold mb-4 text-accent">
                <Cookie className="w-6 h-6 text-accent" /> Cookies &amp;
                Tracking
            </h2>
            <p className="mb-6 text-pretty leading-relaxed">
                We use cookies and third-party tools to analyze traffic, improve
                your experience, and support advertising campaigns. You can
                manage cookies in your browser settings.
            </p>

            <h2 className="text-2xl font-serif font-semibold mb-4 text-accent">
                Your Rights
            </h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Request access, correction, or deletion of your data.</li>
                <li>Opt out of marketing emails anytime.</li>
                <li>Manage cookies or disable tracking in your browser.</li>
            </ul>

            <h2 className="flex items-center gap-2 text-2xl font-serif font-semibold mb-4 text-accent">
                <Mail className="w-6 h-6 text-accent" /> Contact Us
            </h2>
            <p className="flex items-center gap-2 mb-2">
                <Mail className="text-primary" /> aadeshkagrawal@gmail.com
            </p>
            <p className="flex items-center gap-2 mb-2">
                <Phone className="text-primary" /> +91 94531 41045
            </p>
            <p className="flex items-center gap-2">
                <MapPin className="text-primary" /> Surya Complex 1, Mahmoorganj
                Road, Varanasi, Uttar Pradesh 221010
            </p>
        </section>
    );
};

export default PrivacyPolicy;
