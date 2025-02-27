"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Services", href: "#services" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-5",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-white",
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo on the Left */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="text-4xl font-bold text-primary hover:text-primary/80 transition-colors">
            Hamza's<span className="text-purple-500"> Portfolio</span>
          </Link>
        </motion.div>

        {/* Centered Navigation */}
        <nav className="hidden md:flex items-center space-x-12 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="text-lg text-foreground hover:text-purple-500 transition-colors font-semibold relative after:block after:w-full after:h-0.5 after:bg-purple-500 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Contact Button on the Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="hidden md:flex"
        >
          <Link
            href="#contact"
            className="bg-primary text-white px-8 py-3 text-lg rounded-full transition-all font-semibold relative overflow-hidden hover:translate-y-[-3px] duration-300"
          >
            Contact
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-md"
        >
          <div className="container mx-auto px-6 py-6 flex flex-col space-y-6 text-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-semibold text-foreground hover:text-purple-500 py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-primary text-white px-8 py-3 text-lg rounded-full transition-all font-semibold text-center relative overflow-hidden hover:translate-y-[-3px] duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  )
}
