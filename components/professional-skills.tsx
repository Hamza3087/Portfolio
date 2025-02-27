"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function ProfessionalSkills() {
  const skills = [
    {
      name: "Project Management",
      percentage: 100,
      color: "from-amber-400 to-amber-600",
    },
    {
      name: "Team Worker",
      percentage: 100,
      color: "from-purple-400 to-purple-600",
    },
    {
      name: "Analytical Thinking",
      percentage: 100,
      color: "from-emerald-400 to-emerald-600",
    },
    {
      name: "Communication",
      percentage: 90,
      color: "from-indigo-400 to-indigo-600",
    },
  ]

  const softSkills = [
    "Strong project management skills, ensuring timely and efficient delivery",
    "Excellent team player, fostering a collaborative and productive work environment",
    "Analytical problem-solving approach, tackling complex challenges with innovative solutions",
    "Clear and effective communication, bridging the gap between technical and non-technical stakeholders",
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <Card key={index} className="border border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col items-center justify-center">
                  <div className="relative w-32 h-32 mb-4">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        className="text-muted-foreground/20"
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                      />
                      <circle
                        className={`text-transparent bg-gradient-to-r ${skill.color}`}
                        strokeWidth="8"
                        strokeDasharray={`${skill.percentage * 2.51} 251.2`}
                        strokeLinecap="round"
                        stroke="url(#gradient-${index})"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                        style={{
                          transformOrigin: "center",
                          transform: "rotate(-90deg)",
                        }}
                      />
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" className={`stop-color-start-${index}`} />
                          <stop offset="100%" className={`stop-color-end-${index}`} />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold">{skill.percentage}%</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-center">{skill.name}</h3>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-lg font-medium text-purple-600 mb-2">Professional Skills</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Driving Success Through Soft Skills</h3>
            <p className="text-foreground/70 mb-8">
              In today's dynamic work environment, technical expertise alone isn't enough. My professional skills
              complement my technical abilities, enabling me to lead projects, collaborate effectively, and drive
              results:
            </p>
            <ul className="space-y-4">
              {softSkills.map((skill, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 mt-1 flex-shrink-0 rounded-full bg-purple-100 p-1 dark:bg-purple-900/20">
                    <Check className="h-4 w-4 text-purple-600" />
                  </span>
                  <span className="text-foreground/80">{skill}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors"
              >
                Download CV
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

