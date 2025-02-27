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
      description: "Working as a freelance web developer managing websites for private clients.",
    },
    {
      title: "Full Stack Developer",
      company: "Techxserve",
      period: "Sep 2024 - Oct 2024",
      description: "Completed a 5-week internship as a Full Stack Web Developer.",
    },
    {
      title: "Mern Stack Developer Intern",
      company: "Bytewise Limited",
      period: "June 2024 - Aug 2024",
      description: "Completed internship as a React Developer, working on modern web applications.",
    },
    {
      title: "Cloud Intern ",
      company: "Software Productivity Strategies",
      period: "Sep 2024 - Oct 2024",
      description: "Completed a 5-week internship as a Full Stack Web Developer.",
    },
    {
      title: "Parallel And Distributed Computing Teacher Assistant",
      company: "FAST University",
      period: "Jan 2024 - June 2024",
      description: "Played a key role as a lab demonstrator, specializing in MySQL database systems.",
    },
    {
      title: "Computer Organization and Assembly Language Lab Demonstrator",
      company: "FAST University",
      period: "Jan 2024 - June 2024",
      description: "Played a key role as a lab demonstrator, specializing in MySQL database systems.",
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
    <section id="experience" className="relative py-16 md:py-24 bg-muted/30">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10 bg-center bg-no-repeat bg-cover opacity-9"
        style={{ backgroundImage: 'url("/images/3.svg")' }}
      ></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Work Experience</h2>
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
              <Card className="relative border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-purple-500/50 hover:shadow-purple-500/30">
                <CardHeader className="pb-2">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <CardTitle className="text-xl text-black relative">
                      {exp.title} {exp.company && `- ${exp.company}`}
                      <span className="absolute inset-0 -z-10 bg-purple-500/20 blur-md rounded-md"></span>
                    </CardTitle>
                    <Badge className="self-start md:self-center bg-purple-600/20 text-purple-600 hover:bg-purple-600/30">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
