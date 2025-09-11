"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Award, CheckCircle } from "lucide-react";

export function HeroSection() {
    const scrollToContact = () => {
        const element = document.querySelector("#contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const scrollToServices = () => {
        const element = document.querySelector("#services");
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="min-h-screen w-full relative overflow-hidden">
            {/* Teal Glow Background */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    backgroundImage: `
                        radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #14b8a6 100%)
                    `,
                    backgroundSize: "100% 100%",
                }}
            />

            <section
                id="home"
                className="section-padding bg-transparent overflow-hidden"
            >
                <div className="max-w-7xl mx-auto container-padding pt-6 ">
                    <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="space-y-8 lg:space-y-10"
                        >
                            <div className="space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
                                >
                                    <CheckCircle className="h-4 w-4" />
                                    Trusted CA Firm Since 1995
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight"
                                >
                                    Your Trusted{" "}
                                    <span className="text-primary relative">
                                        Accounting Partner
                                        <svg
                                            className="absolute -bottom-2 left-0 w-full h-3 text-primary/20"
                                            viewBox="0 0 100 10"
                                            preserveAspectRatio="none"
                                        >
                                            <path
                                                d="M0,8 Q50,0 100,8"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                fill="none"
                                            />
                                        </svg>
                                    </span>{" "}
                                    in Varanasi
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
                                >
                                    Expert chartered accountancy services with
                                    personalized attention. From GST
                                    registration to tax consultancy, we help
                                    individuals and businesses navigate
                                    financial requirements with accuracy and
                                    care.
                                </motion.p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <Button
                                    onClick={scrollToContact}
                                    size="lg"
                                    className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:cursor-pointer"
                                >
                                    Get Consultation
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button
                                    onClick={scrollToServices}
                                    size="lg"
                                    variant="outline"
                                    className="text-lg px-8 py-6 rounded-xl border-2 hover:bg-secondary/50 transition-all duration-300 bg-transparent hover:cursor-pointer hover:text-black/80"
                                >
                                    View Services
                                </Button>
                            </motion.div>

                            {/* Trust indicators */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border/50"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <Shield className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-sm">
                                            Trusted Since 1995
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            30+ Years Experience
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <Users className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-sm">
                                            500+ Happy Clients
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            Across Industries
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <Award className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-sm">
                                            Expert CA Team
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            Certified Professionals
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Enhanced Image Section */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative lg:justify-self-end"
                        >
                            <div className="relative">
                                {/* Background decoration */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-30"></div>

                                {/* Main card */}
                                <div className="relative bg-card rounded-2xl p-6 sm:p-8 shadow-2xl border border-border/50">
                                    <img
                                        src="/professional-chartered-accountant-team-working-in-.jpg"
                                        alt="Jan & Co. Professional Team"
                                        className="w-full h-auto rounded-xl object-cover"
                                    />

                                    {/* Floating stats card */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.8,
                                        }}
                                        className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl border-4 border-background"
                                    >
                                        <div className="text-center">
                                            <div className="text-3xl font-bold">
                                                30+
                                            </div>
                                            <div className="text-sm opacity-90">
                                                Years Experience
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Additional floating element */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 1 }}
                                        className="absolute -top-4 -left-4 bg-accent text-accent-foreground p-4 rounded-xl shadow-lg"
                                    >
                                        <div className="text-center">
                                            <div className="text-xl font-bold">
                                                500+
                                            </div>
                                            <div className="text-xs opacity-90">
                                                Clients
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
