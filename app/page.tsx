import Hero from "@/components/hero"
import Header from "@/components/header"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Services from "@/components/services"
import ProfessionalSkills from "@/components/professional-skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import PageTransition from "@/components/page-transition"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <PageTransition />
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <ProfessionalSkills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

