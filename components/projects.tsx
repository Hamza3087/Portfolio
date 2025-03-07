"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Bizzkonn",
      description: "Built a full-stack company website for client info and user interaction.",
      image: "/images/Bizzkonn.png?height=300&width=500",
      category: "web",
      technologies: ["React.js", "MongoDB", "Express.js", "Node.js"],
    },
    {
      id: 2,
      title: "Caffeine",
      description: "A Coffee Cafe website with modern UI and seamless checkout.",
      image: "/images/caffeine.png?height=300&width=500",
      category: "web",
      technologies: ["React (Redux Toolkit)", "Tailwind", "Node.js"],
    },
    {
      id: 3,
      title: "FlexGear Hub",
      description: "An e-commerce sports platform with advanced product tracking and analytics.",
      image: "/images/flex.png?height=300&width=500",
      category: "web",
      technologies: ["JavaScript", "Bootstrap", "HTML"],
    },
    {
      id: 4,
      title: "AI Image Colorizer",
      description: "Built a Flask web app leveraging deep learning (ECCV16 & SIGGRAPH17) to automatically colorize grayscale images.",
      image: "/placeholder.svg?height=300&width=500",
      category: "ai",
      technologies: ["ECCV16v", "SIGGRAPH17", "Torch Model Zoo", "PyTorch", "NumPy"],
    },
    {
      id: 5,
      title: "Election Management System",
      description: "Developed an Online Election System with dashboards for Candidates, Officers, and Voters to manage voting and results.",
      image: "/images/election.png?height=300&width=500",
      category: "app",
      technologies: ["React Native", "Firebase", "Redux"],
    },
    {
      id: 6,
      title: "Student Management System",
      description: "Built a web app with role-based dashboards to manage courses, grades, and student records.",
      image: "/images/lms.png?height=300&width=500",
      category: "app",
      technologies: ["[.NET", "C#", "SQL", "Google Forms"],
    },
    {
      id: 7,
      title: "InSightScraper",
      description: "Built a web app with role-based dashboards to manage courses, grades, and student records.",
      image: "/images/linkedIn.png?height=300&width=500",
      category: "app",
      technologies: ["Selenium", "Chrome WebDriver", " Unidecode", "Time Module", "CSV Module", "FastAPI"],
    },
    {
      id: 8,
      title: "PropValueAI",
      description: "Built a smart web app that predicts house prices using a trained ML model based on size, bathrooms, and rooms — delivering fast and accurate valuations through a sleek interface.",
      image: "/images/propvalueai.png?height=300&width=500",
      category: "app",
      technologies: ["HTML", "CSS", "JavaScript", "Python", "FastAPI", "Linear Regression", "NumPy"],
    },
  ]

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => {
          if (activeTab === "web") return project.category === "web"
          if (activeTab === "app") return project.category === "app"
          if (activeTab === "ai") return project.category === "ai"
          if (activeTab === "other") return !["web", "app", "ai"].includes(project.category)
          return true
        })

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
    <section id="projects" className="py-16 md:py-24 relative">
      {/* Background Image */}
     

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-lg font-medium text-purple-600 mb-2">Creative Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Check My Portfolio</h3>

          <Tabs defaultValue="all" className="w-full max-w-2xl mx-auto">
            <TabsList className="grid grid-cols-5 mb-8">
              <TabsTrigger
                value="all"
                onClick={() => setActiveTab("all")}
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="web"
                onClick={() => setActiveTab("web")}
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
              >
                Websites
              </TabsTrigger>
              <TabsTrigger
                value="app"
                onClick={() => setActiveTab("app")}
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
              >
                Web App
              </TabsTrigger>
              <TabsTrigger
                value="ai"
                onClick={() => setActiveTab("ai")}
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
              >
                AI
              </TabsTrigger>
              <TabsTrigger
                value="other"
                onClick={() => setActiveTab("other")}
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
              >
                Other
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="w-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                      >
                        View Project
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="bg-muted/50">
                        {tech}
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
  )
}
