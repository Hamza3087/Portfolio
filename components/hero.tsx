"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  const handleHireMe = () => {
    const phoneNumber = "+923185454416";
    const message = encodeURIComponent("Hello, I am interested in your services.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Hamza_Tariq_CV.pdf"; // Ensure your CV file is placed in the "public" folder
    link.download = "Hamza_Tariq_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-blue-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 40 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="md:w-1/2 space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-medium text-foreground/80">Hello! I Am</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                <span className="text-purple-600">Hamza Tariq</span>
              </h1>
              <div className="h-12 md:h-16">
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    1500,
                    "UI/UX Designer",
                    1500,
                    "AI/ML Developer",
                    1500,
                    "Web Developer",
                    1500,
                    "Software Engineer",
                    1500,
                  ]}
                  wrapper="h2"
                  speed={50}
                  repeat={Number.POSITIVE_INFINITY}
                  className="text-2xl md:text-3xl font-semibold text-primary"
                />
              </div>
            </div>

            <p className="text-foreground/70 text-base md:text-lg max-w-lg">
              I am a skilled <b>Full Stack Web Developer</b>, <b>AI/ML Developer</b>, and <b>Software Engineer</b>, adept at building scalable applications and delivering innovative solutions by staying ahead of industry trends.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button onClick={handleHireMe} className="rounded-full px-6 bg-purple-600 hover:bg-purple-700">
                Hire Me <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button onClick={handleDownloadCV} variant="outline" className="rounded-full px-6">
                Download CV <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-75 animate-pulse"></div>
              <div className="relative bg-background rounded-full p-2">
                <Image
                  src="/images/hamza.png"
                  alt="Hamza's Profile"
                  width={400}
                  height={300}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
