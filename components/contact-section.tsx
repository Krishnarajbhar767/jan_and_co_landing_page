"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactSection() {
    const contactInfo = [
        {
            icon: MapPin,
            title: "Visit Our Office",
            details: [
                "Surya Complex 1, Mahmoorganj Road",
                "Near Shubham Lawn, Varanasi",
                "Uttar Pradesh, India",
            ],
        },
        {
            icon: Phone,
            title: "Call Us",
            details: ["+91 94531 41045", "Mon-Sat: 9:00 AM - 7:00 PM"],
        },
        {
            icon: Mail,
            title: "Email Us",
            details: ["aadeshkagrawal@gmail.com", "We reply within 24 hours"],
        },
        {
            icon: Clock,
            title: "Business Hours",
            details: [
                "Monday - Saturday",
                "9:00 AM - 7:00 PM",
                "Sunday: By Appointment",
            ],
        },
    ];

    return (
        <section id="contact" className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-balance">
                        Get In Touch With Us
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
                        Ready to streamline your finances? Contact us today for
                        a free consultation and discover how we can help your
                        business grow.
                    </p>
                </motion.div>

                {/* Grid: Contact Info + Form+Map */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={info.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.1,
                                }}
                            >
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="p-2 bg-primary/10 rounded-lg">
                                                <info.icon className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold mb-2">
                                                    {info.title}
                                                </h3>
                                                {info.details.map(
                                                    (detail, idx) => (
                                                        <p
                                                            key={idx}
                                                            className="text-sm text-muted-foreground"
                                                        >
                                                            {detail}
                                                        </p>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Contact Form + Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 flex flex-col gap-8"
                    >
                        {/* Form */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl font-serif">
                                    Send Us a Message
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <form
                                    action="https://formsubmit.co/aadeshkagrawal@gmail.com"
                                    method="POST"
                                    className="space-y-6"
                                >
                                    <input
                                        type="hidden"
                                        name="_subject"
                                        value="New Contact Form Submission - Jan & Co."
                                    />
                                    <input
                                        type="hidden"
                                        name="_captcha"
                                        value="false"
                                    />
                                    <input
                                        type="hidden"
                                        name="_template"
                                        value="table"
                                    />

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">
                                                Full Name
                                            </Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                placeholder="Enter your full name"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">
                                                Email Address
                                            </Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="Enter your email"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">
                                                Phone Number
                                            </Label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                placeholder="Enter your phone number"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="service">
                                                Service Required
                                            </Label>
                                            <Input
                                                id="service"
                                                name="service"
                                                placeholder="e.g., GST Registration"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Tell us about your requirements..."
                                            className="min-h-[120px]"
                                            required
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                                    >
                                        Send Message
                                    </Button>
                                    <p className="text-sm text-muted-foreground text-center">
                                        We'll get back to you within 24 hours
                                    </p>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Map (directly below form) */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl font-serif text-center">
                                    Find Us on Map
                                </CardTitle>
                                <p className="text-muted-foreground text-center">
                                    Visit our office at Surya Complex 1,
                                    Mahmoorganj Road, Varanasi
                                </p>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="w-full h-32 rounded-lg overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.947652331381!2d82.97601587538533!3d25.305962777641096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e3209b9250ecd%3A0x6f6ebb982c3a791a!2sJAN%20%26%20CO.%20%E2%80%93%20Chartered%20Accountants%20%7C%20Tax%20Consultants%20in%20Varanasi!5e0!3m2!1sen!2sin!4v1757404296546!5m2!1sen!2sin"
                                        loading="lazy"
                                        height={200}
                                        className="border-none h-full w-full"
                                    ></iframe>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
