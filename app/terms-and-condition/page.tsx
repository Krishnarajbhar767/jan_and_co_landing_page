"use client";

import React from "react";
import {
    Gavel,
    CheckCircle,
    User,
    Banknote,
    Scale,
    Mail,
    Phone,
    MapPin,
} from "lucide-react";

const TermsConditions: React.FC = () => {
    return (
        <section className="container mx-auto max-w-4xl px-4 py-10 mt-10">
            <div className="flex items-center gap-3 mb-6">
                <Gavel className="text-primary w-8 h-8" />
                <h1 className="text-3xl sm:text-4xl font-serif font-bold text-primary">
                    Terms &amp; Conditions
                </h1>
            </div>

            <p className="mb-4 text-pretty leading-relaxed">
                <strong>Effective Date:</strong> September 11, 2025
            </p>
            <p className="mb-6 text-pretty leading-relaxed">
                By accessing or using Jan &amp; Co.’s website or services, you
                agree to these Terms &amp; Conditions. If you disagree, please
                do not use our services.
            </p>

            <h2 className="flex items-center gap-2 text-2xl font-serif font-semibold mb-4 text-accent">
                <CheckCircle className="w-6 h-6 text-accent" /> Services
                Provided
            </h2>
            <p className="mb-6 text-pretty leading-relaxed">
                We provide chartered accountancy, tax consultancy, GST
                compliance, and related services. All services comply with
                Indian laws and professional standards.
            </p>

            <h2 className="flex items-center gap-2 text-2xl font-serif font-semibold mb-4 text-accent">
                <User className="w-6 h-6 text-accent" /> Client Responsibilities
            </h2>
            <p className="mb-6 text-pretty leading-relaxed">
                Clients must provide accurate information. We are not
                responsible for errors arising from incomplete or inaccurate
                data.
            </p>

            <h2 className="flex items-center gap-2 text-2xl font-serif font-semibold mb-4 text-accent">
                <Banknote className="w-6 h-6 text-accent" /> Fees &amp; Payments
            </h2>
            <p className="mb-6 text-pretty leading-relaxed">
                All fees are communicated prior to service delivery. Late
                payments may result in additional charges.
            </p>

            <h2 className="flex items-center gap-2 text-2xl font-serif font-semibold mb-4 text-accent">
                <Scale className="w-6 h-6 text-accent" /> Governing Law
            </h2>
            <p className="mb-6 text-pretty leading-relaxed">
                These Terms are governed by Indian law. Disputes will be
                resolved in the courts of Varanasi, Uttar Pradesh.
            </p>

            <h2 className="flex items-center gap-2 text-2xl font-serif font-semibold mb-4 text-accent">
                <Mail className="w-6 h-6 text-accent" /> Contact Information
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

export default TermsConditions;
