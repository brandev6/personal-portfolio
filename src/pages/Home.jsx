import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { Footer } from "../components/Footer";
import { ContactSection } from "../components/ContactSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";

export const Home = () => {
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        <ThemeToggle />

        <StarBackground />

        <Navbar />

        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
          
        </main>

        <Footer />
     </div>
    );
}