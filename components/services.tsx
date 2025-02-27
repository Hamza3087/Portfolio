"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, Globe } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "MERN + MEAN Stack Development",
      description: "Full-stack web development using MongoDB, Express.js, React/Angular, and Node.js.",
      icon: <Code className="h-10 w-10 text-purple-600" />,
    },
    {
      title: "Flutter + Kotlin Development",
      description: "Cross-platform and native mobile app development for Android and iOS platforms.",
      icon: <Smartphone className="h-10 w-10 text-purple-600" />,
    },
    {
      title: "WordPress Development",
      description: "Custom WordPress themes and plugins development for content management systems.",
      icon: <Globe className="h-10 w-10 text-purple-600" />,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-lg font-medium text-purple-600 mb-2">My Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Provide Wide Range of Digital Services
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-md hover:shadow-purple-500/10 transition-all duration-300 group">
                <CardHeader className="pb-2 flex flex-col items-center">
                  <div className="mb-4 p-3 rounded-full bg-purple-100 dark:bg-purple-900/20 group-hover:bg-purple-200 dark:group-hover:bg-purple-900/30 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-center text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-foreground/70 mb-6">{service.description}</p>
                  <Button variant="link" className="text-purple-600 hover:text-purple-700 p-0">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

