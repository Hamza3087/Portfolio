'use client'

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Smile, MessageSquare, FileText, ChevronRight, Sparkles, Star } from 'lucide-react'

// Custom animations
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const slideIn = {
  initial: { x: -60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { type: "spring", stiffness: 100 }
}

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { type: "spring", stiffness: 100 }
}

const features = [
  { icon: Brain, text: "Object Detection", description: "Identifies and classifies objects in real-time" },
  { icon: Smile, text: "Sense Detection", description: "Analyzes environmental context and surroundings" },
  { icon: MessageSquare, text: "Facial Emotion Detection", description: "Recognizes human emotions from facial expressions" },
  { icon: FileText, text: "Text Recognition", description: "Extracts and processes text from images and surroundings" }
]

const tools = [
  { name: "TensorFlow", color: "bg-gradient-to-br from-amber-400 to-amber-600", index: 0 },
  { name: "PyTorch", color: "bg-gradient-to-br from-purple-400 to-purple-600", index: 1 },
  { name: "Flutter", color: "bg-gradient-to-br from-emerald-400 to-emerald-600", index: 2 },
  { name: "OpenCV", color: "bg-gradient-to-br from-blue-400 to-blue-600", index: 3 },
  { name: "Firebase", color: "bg-gradient-to-br from-amber-400 to-amber-600", index: 0 },
  { name: "AWS", color: "bg-gradient-to-br from-purple-400 to-purple-600", index: 1 },
  { name: "React Native", color: "bg-gradient-to-br from-emerald-400 to-emerald-600", index: 2 },
  { name: "Node.js", color: "bg-gradient-to-br from-blue-400 to-blue-600", index: 3 },
]

export default function FYPShowcase() {
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50 text-gray-800 py-12 px-4 md:px-6 overflow-hidden">
      <AnimatePresence>
        {isLoaded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-16">
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 50 }}
              >
                <Badge variant="outline" className="mb-4 px-4 py-1 text-sm font-medium bg-purple-100 text-purple-800 border-purple-200">
                  <Sparkles className="w-4 h-4 mr-1 inline-block" /> Showcase
                </Badge>
              </motion.div>
              
              <motion.h1 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-5xl md:text-6xl font-extrabold mb-2 text-3d"
              >
                <span className="inline-block relative">
                  <span className="text-gradient-primary">
                    Final Year Project
                  </span>
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"></span>
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg"
              >
                Revolutionizing accessibility through advanced artificial intelligence
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* Left Column */}
              <motion.div
                variants={slideIn}
                initial="initial"
                animate="animate"
                className="space-y-8"
              >
                <Card className="p-8 bg-white border-purple-100 shadow-lg shadow-purple-100/50 rounded-xl overflow-hidden group relative">
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-purple-100 rounded-full opacity-50 group-hover:scale-150 transition-all duration-700"></div>
                  
                  <motion.h2 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl font-bold mb-6 relative"
                  >
                    <span className="text-gradient-primary">
                      Empowered-AI:
                    </span>
                    <span className="block text-gray-800 mt-1">Sense Beyond Limits</span>
                  </motion.h2>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-600 mb-8 relative z-10"
                  >
                    A comprehensive accessibility application designed to enhance
                    the independence and quality of life for individuals with visual
                    impairments. Utilizing advanced AI technologies including:
                  </motion.p>
                  
                  <div className="space-y-5 relative z-10">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="group/feature"
                      >
                        <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-purple-50 transition-all duration-300">
                          <div className="bg-purple-100 text-purple-600 p-3 rounded-lg group-hover/feature:bg-purple-200 transition-colors">
                            <feature.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800 group-hover/feature:text-purple-600 transition-colors">
                              {feature.text}
                            </h3>
                            <p className="text-gray-500 text-sm mt-1">{feature.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { title: "CV", subtitle: "Computer Vision", gradient: "text-gradient-info" },
                    { title: "AI", subtitle: "Artificial Intelligence", gradient: "text-gradient-primary" },
                    { title: "FL", subtitle: "Flutter", gradient: "text-gradient-accent" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.05 }}
                      className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden relative glass"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-indigo-400/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      <div className={`text-2xl font-bold ${item.gradient}`}>
                        {item.title}
                      </div>
                      <div className="text-sm text-gray-500 mt-2">{item.subtitle}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right Column */}
              <motion.div
                variants={scaleIn}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.4 }}
              >
                <Card className="p-8 bg-white border-purple-100 shadow-lg shadow-purple-100/50 rounded-xl overflow-hidden">
                  <div className="space-y-8">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                        <div className="w-8 h-1 bg-purple-400 mr-3"></div>
                        OBJECTIVE
                      </h3>
                      <p className="text-gray-600 pl-11">
                        Empowered-AI is a comprehensive accessibility application designed to enhance the
                        independence and quality of life for individuals with visual impairments.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                        <div className="w-8 h-1 bg-purple-400 mr-3"></div>
                        WORKFLOW
                      </h3>
                      <div className="relative overflow-hidden rounded-lg group">
                        <img 
                          src={`/images/poster.png?height=200&width=400`}
                          alt="Project workflow diagram"
                          className="w-full rounded-lg transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 text-white text-sm">
                            Interactive AI-powered workflow
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      whileHover={{ scale: 1.02 }}
                      className="relative"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-shimmer"></div>
                      <Button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white shadow-md hover:shadow-lg transition-all duration-300 py-6 relative">
                        <span className="mr-2">View Complete Project</span> 
                        <Star className="w-4 h-4 animate-pulse" />
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
