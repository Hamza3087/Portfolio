"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com/" },
  ]

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="bg-muted/50 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
              Hamza<span className="text-purple-500">.dev</span>
            </Link>
            <p className="text-foreground/70 max-w-md">
              A passionate Full Stack Web Developer and Software Engineer with expertise in creating innovative digital
              solutions for modern businesses.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background hover:bg-muted transition-colors text-foreground/80 hover:text-purple-600"
                  whileHover={{ y: -3 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-foreground/70 hover:text-purple-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-foreground/70">
              Subscribe to my newsletter to receive updates on my latest projects and tech articles.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/50 text-center">
          <p className="text-foreground/70">&copy; {currentYear} Hamza's Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

