"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  const experiences = [
    {
      title: "Freelance Web Developer",
      company: "",
      period: "April 2024 - Present",
      description:
        "Building responsive websites and web applications for clients using modern technologies like React, Next.js, and Tailwind CSS. Focusing on delivering high-quality, user-friendly solutions.",
    },
    {
      title: "Full Stack Developer",
      company: "Techxserve",
      period: "Sep 2024 - Oct 2024",
      description:
        "Developed and maintained web applications using the MERN stack. Collaborated with the design team to implement responsive UI components and integrated RESTful APIs for seamless data flow.",
    },
    {
      title: "MERN Stack Developer Intern",
      company: "Bytewise Limited",
      period: "June 2024 - Aug 2024",
      description:
        "Built modern web applications using React, Node.js, and MongoDB. Implemented state management with Redux and created reusable UI components following best practices.",
    },
    {
      title: "Cloud Engineering Intern",
      company: "Software Productivity Strategies",
      period: "Sep 2024 - Oct 2024",
      description:
        "Gained hands-on experience with AWS services including EC2, S3, and Lambda. Assisted in deploying and monitoring cloud infrastructure and implemented CI/CD pipelines.",
    },
    {
      title: "Parallel And Distributed Computing TA",
      company: "FAST University",
      period: "Jan 2024 - June 2024",
      description:
        "Assisted students with complex parallel computing concepts and algorithms. Conducted lab sessions, graded assignments, and provided one-on-one support to enhance student learning.",
    },
    {
      title: "Assembly Language Lab Demonstrator",
      company: "FAST University",
      period: "Jan 2024 - June 2024",
      description:
        "Guided students through assembly language programming concepts and practices. Helped troubleshoot code issues and explained low-level computing principles to enhance understanding.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <section id="experience" className="relative py-16 md:py-24 bg-muted/30">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: 'url("/images/exp.svg")', opacity: 0.3 }}
      ></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-lg font-medium text-purple-600 mb-2">
            Professional Journey
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">
            My Experience & Expertise
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="relative border border-purple-400 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-purple-500/70 hover:shadow-purple-500/40 group">
                {/* Glowing Background Effect */}
                <div className="absolute inset-0 -z-10 bg-purple-500/15 blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <CardHeader className="pb-2 flex flex-col items-center">
                  <CardTitle className="text-xl text-center text-foreground font-bold">
                    {exp.title} {exp.company && <span className="text-purple-600">- {exp.company}</span>}
                  </CardTitle>
                  <Badge className="bg-purple-600/30 text-purple-700 hover:bg-purple-600/40 font-medium">
                    {exp.period}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-foreground/80">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
