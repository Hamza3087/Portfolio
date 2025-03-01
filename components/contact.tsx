"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Message sent successfully!")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-10 w-10 text-purple-600" />,
      title: "Location",
      details: "Islamabad, Pakistan",
    },
    {
      icon: <Phone className="h-10 w-10 text-purple-600" />,
      title: "Phone",
      details: "+92 318 5454416",
      link: "https://wa.me/923185454416?text=Hello%2C%20I%20want%20to%20contact%20you",
    },
    {
      icon: <Mail className="h-10 w-10 text-purple-600" />,
      title: "Email",
      details: "hamzagondal921@gmail.com",
      link: "mailto:hamzagondal921@gmail.com?subject=Inquiry&body=Hello,%20I%20would%20like%20to%20discuss...",
    },
  ]

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-lg font-medium text-purple-600 mb-2">Get in Touch</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">Contact Information</h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {info.link ? (
                <a href={info.link} target="_blank" rel="noopener noreferrer">
                  <Card className="border border-[#ceb2ce] bg-card/50 backdrop-blur-md hover:bg-[#F3E8FF] transition-all duration-300 cursor-pointer">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="mb-4 p-3 rounded-full bg-purple-100 dark:bg-purple-900/20">{info.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                      <p className="text-foreground/70">{info.details}</p>
                    </CardContent>
                  </Card>
                </a>
              ) : (
                <Card className="border border-[#ceb2ce] bg-card/50 backdrop-blur-md hover:bg-[#F3E8FF] transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 p-3 rounded-full bg-purple-100 dark:bg-purple-900/20">{info.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                    <p className="text-foreground/70">{info.details}</p>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  )
}
