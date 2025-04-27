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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-lg border-b border-purple-200/30"
          : "bg-white",
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo on the Left */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="text-3xl font-bold relative group">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-300 group-hover:from-indigo-600 group-hover:to-purple-600">
              Hamza's
            </span>
            <span className="text-purple-500 relative">
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-500 group-hover:w-full"></span>
              Portfolio
            </span>
          </Link>
        </motion.div>

        {/* Centered Navigation */}
        <nav className="hidden md:flex items-center space-x-10 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-2 rounded-lg bg-purple-100/0 group-hover:bg-purple-100/50 transition-all duration-300 -z-10"></div>
              <Link
                href={item.href}
                className="text-lg text-foreground group-hover:text-purple-600 transition-colors font-semibold relative px-3 py-2 flex items-center"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
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
            className="relative inline-flex items-center px-8 py-3 overflow-hidden text-lg font-semibold text-white rounded-full group"
          >
            <span className="absolute left-0 w-full h-full transition-all duration-500 ease-out bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600"></span>
            <span className="absolute left-0 w-full h-full transition-all duration-300 ease-out bg-gradient-to-r from-purple-500 to-indigo-500 group-hover:translate-y-full"></span>
            <span className="absolute left-0 w-full h-full transition-all duration-300 ease-out bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:translate-y-full delay-100"></span>
            <span className="relative flex items-center gap-2">
              Contact
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden relative p-2 rounded-full transition-all duration-300 ${mobileMenuOpen ? 'bg-purple-100 text-purple-600' : 'text-foreground hover:bg-purple-50'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          <span className={`absolute inset-0 rounded-full border-2 border-purple-400 scale-0 transition-transform duration-300 ${mobileMenuOpen ? 'scale-100 opacity-100' : 'opacity-0'}`}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-md border-b border-purple-100"
        >
          <div className="container mx-auto px-6 py-6 flex flex-col space-y-4 text-center">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="block text-lg font-semibold text-foreground hover:text-purple-600 py-3 px-4 transition-all rounded-lg hover:bg-purple-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="relative">
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: navItems.length * 0.05 }}
              className="pt-2"
            >
              <Link
                href="#contact"
                className="block w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 text-lg rounded-lg transition-all font-semibold text-center relative overflow-hidden hover:shadow-lg hover:shadow-purple-200 duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="flex items-center justify-center gap-2">
                  Contact
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
