"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Award } from "lucide-react"

export function AboutSection() {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Award, label: "Years Experience", value: "25+" },
    { icon: Clock, label: "Response Time", value: "24hrs" },
    { icon: MapPin, label: "Location", value: "Varanasi" },
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm">
                About Jan & Co.
              </Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-balance">
                Trusted Financial Partners Since 1995
              </h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Jan & Co. (formerly known as A.K. Agrawal & Co.) is a trusted Chartered Accountancy firm in Varanasi,
                offering expert services with personalized attention to help individuals and businesses navigate
                financial and legal requirements with accuracy.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Why Choose Us?</h3>
              <ul className="space-y-3">
                {[
                  "Expert team of qualified Chartered Accountants",
                  "Personalized attention to every client",
                  "Timely and accurate service delivery",
                  "Comprehensive financial and legal solutions",
                  "Located conveniently in Mahmoorganj Road",
                ].map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-4 text-center">
                      <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="/modern-chartered-accountancy-office-in-varanasi-wi.jpg"
                alt="Jan & Co. Office"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 bg-background/95 backdrop-blur-sm p-4 rounded-lg">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-medium">Surya Complex 1, Mahmoorganj Road</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">Near Shubham Lawn, Varanasi</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
