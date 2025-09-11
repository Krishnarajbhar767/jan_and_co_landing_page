"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setIsOpen(false);
    };

    const handleCallNow = () => {
        window.location.href = "tel:+919453141045";
    };

    return (
        <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center"
                    >
                        <button
                            onClick={() => scrollToSection("#home")}
                            className="text-2xl font-serif font-bold text-primary hover:text-primary/80 transition-colors"
                        >
                            Jan & Co.
                        </button>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className="text-foreground hover:text-primary transition-colors duration-200"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.name}
                            </motion.button>
                        ))}
                        <Button
                            onClick={handleCallNow}
                            className="bg-primary hover:bg-primary/90"
                        >
                            <Phone className="w-4 h-4 mr-2" />
                            Call Now
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-card">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors"
                                >
                                    {item.name}
                                </button>
                            ))}
                            <div className="px-3 py-2">
                                <Button
                                    onClick={handleCallNow}
                                    className="w-full bg-primary hover:bg-primary/90"
                                >
                                    <Phone className="w-4 h-4 mr-2" />
                                    Call Now
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </nav>
    );
}
