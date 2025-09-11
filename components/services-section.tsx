"use client";

import { motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    FileText,
    Calculator,
    TrendingUp,
    Building,
    Shield,
    Briefcase,
    ArrowRight,
    CheckCircle,
} from "lucide-react";

const services = [
    {
        icon: FileText,
        title: "GST Registration & Compliance",
        description:
            "Complete GST registration, return filing, and compliance management for seamless business operations.",
        features: [
            "GST Registration Process",
            "Monthly & Annual Returns",
            "GST Audit & Compliance",
            "Input Tax Credit Management",
        ],
        highlight: "Most Popular",
    },
    {
        icon: Calculator,
        title: "Tax Consultancy & Planning",
        description:
            "Strategic tax planning and consultancy services to optimize your tax liability while ensuring full compliance.",
        features: [
            "Income Tax Planning",
            "Tax Return Filing",
            "Tax Audit Services",
            "Appeal & Representation",
        ],
        highlight: "",
    },
    {
        icon: TrendingUp,
        title: "Business Accounting Services",
        description:
            "Comprehensive accounting solutions to maintain accurate financial records and drive business growth.",
        features: [
            "Complete Bookkeeping",
            "Financial Statement Preparation",
            "Management Reporting",
            "Cash Flow Analysis",
        ],
        highlight: "",
    },
    {
        icon: Building,
        title: "Company Compliance & Returns",
        description:
            "End-to-end statutory compliance and return filing services for companies of all sizes.",
        features: [
            "ROC Compliance Management",
            "Annual Return Filing",
            "Board Resolution Drafting",
            "Statutory Audit Services",
        ],
        highlight: "",
    },
    {
        icon: Shield,
        title: "TDS Management Services",
        description:
            "Complete TDS compliance including calculation, deduction, deposit, and return filing services.",
        features: [
            "TDS Calculation & Deduction",
            "Quarterly Return Filing",
            "TDS Certificate Issuance",
            "Lower Deduction Applications",
        ],
        highlight: "",
    },
    {
        icon: Briefcase,
        title: "IPR & Legal Services",
        description:
            "Intellectual Property Rights services including trademark registration and legal compliance support.",
        features: [
            "Trademark Registration",
            "Copyright Applications",
            "Patent Filing Support",
            "IPR Compliance Advisory",
        ],
        highlight: "Specialized",
    },
];

export function ServicesSection() {
    return (
        <section
            id="services"
            className="section-padding bg-gradient-to-b from-background to-muted/20"
        >
            <div className="max-w-7xl mx-auto container-padding">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 lg:mb-20"
                >
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <CheckCircle className="h-4 w-4" />
                        Comprehensive CA Services
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 max-w-4xl mx-auto">
                        Expert Solutions for All Your{" "}
                        <span className="text-primary">Financial Needs</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        From GST compliance to strategic tax planning, we
                        provide comprehensive chartered accountancy services
                        tailored to help your business thrive in today's
                        competitive landscape.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="h-full"
                        >
                            <Card className="h-full hover:shadow-2xl transition-all duration-500 group border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm relative overflow-hidden">
                                {/* Highlight badge */}
                                {service.highlight && (
                                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
                                        {service.highlight}
                                    </div>
                                )}

                                {/* Background gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <CardHeader className="relative pb-4">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                                            <service.icon className="h-7 w-7 text-primary" />
                                        </div>
                                    </div>
                                    <CardTitle className="text-xl lg:text-2xl font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                                        {service.title}
                                    </CardTitle>
                                    <CardDescription className="text-base leading-relaxed text-muted-foreground">
                                        {service.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="relative flex-1 flex flex-col">
                                    <ul className="space-y-3 mb-8 flex-1">
                                        {service.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-start gap-3 text-sm"
                                            >
                                                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                                <span className="leading-relaxed">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button
                                        variant="outline"
                                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 bg-transparent border-2 py-6 rounded-xl font-medium hover:cursor-pointer"
                                    >
                                        <a href="#contact">
                                            Learn More About This Service
                                        </a>
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Call to action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center mt-16 lg:mt-20"
                >
                    <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-8 lg:p-12 border border-border/50">
                        <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                            Need a Custom Solution?
                        </h3>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Every business is unique. Let's discuss how our
                            expertise can be tailored to meet your specific
                            requirements.
                        </p>
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Schedule a Consultation
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
