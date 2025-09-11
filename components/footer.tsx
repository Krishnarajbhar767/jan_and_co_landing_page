"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
    const services = [
        "GST Registration",
        "Tax Consultancy",
        "Business Accounting",
        "TDS Management",
        "Company Returns",
        "IPR Services",
    ];

    const quickLinks = [
        "About Us",
        "Services",
        "Contact",
        "Privacy Policy",
        "Terms of Service",
    ];

    return (
        <footer className="bg-card border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <h3 className="text-2xl font-serif font-bold text-primary">
                            Jan & Co.
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Trusted Chartered Accountancy firm in Varanasi,
                            providing expert financial and legal services with
                            personalized attention since 1995.
                        </p>
                        <div className="flex items-center gap-2 text-sm">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>
                                Surya Complex 1, Mahmoorganj Rd, next to Shubham
                                Lawn, Shivaji Nagar Colony, Mahmoorganj,
                                Varanasi, Uttar Pradesh 221010
                            </span>
                        </div>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-4"
                    >
                        <h4 className="font-semibold">Our Services</h4>
                        <ul className="space-y-2">
                            {services.map((service) => (
                                <li key={service}>
                                    <a
                                        href="#services"
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h4 className="font-semibold">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-4"
                    >
                        <h4 className="font-semibold">Contact Info</h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm">
                                <Phone className="h-4 w-4 text-primary" />
                                <span>+91 94531 41045</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Mail className="h-4 w-4 text-primary" />
                                <span>aadeshkagrawal@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Clock className="h-4 w-4 text-primary" />
                                <span>Mon-Sat: 9AM-7PM</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="border-t border-border mt-12 pt-8 text-center"
                >
                    <p className="text-sm text-muted-foreground">
                        © 2024 Jan & Co. (formerly A.K. Agrawal & Co.). All
                        rights reserved. | Chartered Accountancy Firm in
                        Varanasi
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
