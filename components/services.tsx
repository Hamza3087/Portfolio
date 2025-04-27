"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Brain } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "MERN + MEAN Stack Development",
      description:
        "Full-stack web development using MongoDB, Express.js, React/Angular, Next.js, and Node.js.",
      icon: <Code className="h-10 w-10 text-purple-600" />,
    },
    {
      title: "Flutter",
      description:
        "Cross-platform and native mobile app development for Android and iOS platforms.",
      icon: <Smartphone className="h-10 w-10 text-purple-600" />,
    },
    {
      title: "AI/ML Development",
      description:
        "Building machine learning models and AI solutions using PyTorch, TensorFlow, and NLP techniques for real-world applications.",
      icon: <Brain className="h-10 w-10 text-purple-600" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="relative py-16 md:py-24 bg-muted/30">
      {/* Background Image with 50% Opacity */}
      {/*<div
        className="absolute inset-0 -z-10 bg-center bg-no-repeat bg-cover opacity-50"
        style={{ backgroundImage: 'url("/images/3.svg")' }}
      ></div>
      */}

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-lg font-medium text-purple-600 mb-2">
            My Expertise
          </h2>
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
              <Card className="relative border border-purple-400 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-purple-500/50 hover:shadow-purple-500/30 group">
                {/* Glowing Background Effect */}
                <div className="absolute inset-0 -z-10 bg-purple-500/10 blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <CardHeader className="pb-2 flex flex-col items-center">
                  <div className="mb-4 p-3 rounded-full bg-purple-100 dark:bg-purple-900/20 group-hover:bg-purple-200 dark:group-hover:bg-purple-900/30 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-center text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-foreground/70 mb-6">
                    {service.description}
                  </p>
                  <Button
                    variant="link"
                    className="text-purple-600 hover:text-purple-700 p-0"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
