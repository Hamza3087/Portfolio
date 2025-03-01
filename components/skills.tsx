"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C++", "C#", "C", "GO"],
    },
    {
      title: "Web Development",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Next.js",
        "Express.js",
        "Bootstrap",
        "Tailwind CSS",
        "MongoDB",
        "Node.js",
        "ASP.Net",
      ],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "SQL Server"],
    },
    {
      title: "Programming Paradigms",
      skills: [
        "Object Oriented Programming (OOP)",
        "Functional Programming",
        "Procedural Programming",
        "Data Structures",
        "Database-Driven Development",
      ],
    },
    {
      title: "Artificial Intelligence",
      skills: ["OpenCV", "Image Processing", "Machine Learning", "Deep Learning", "Data Preprocessing and Analysis"],
    },
    {
      title: "Version Control & Containerization",
      skills: ["Git", "GitHub", "Kubernetes", "Docker", "CI/CD"],
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
    <section id="skills" className="relative py-16 md:py-24 bg-muted/30 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/1.svg')", opacity: 0.9 }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-lg font-medium text-purple-500 mb-2">My Expertise</h2>
          <motion.h3
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Technical Skills
          </motion.h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="relative h-full border border-purple-400 bg-card/50 backdrop-blur-md transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-2 hover:bg-[#F3E8FF]">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground font-semibold tracking-wide transition-all duration-300 group-hover:text-purple-400">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-muted hover:bg-purple-500 hover:text-white transition-all duration-200 text-foreground/80 px-3 py-1 rounded-full"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}