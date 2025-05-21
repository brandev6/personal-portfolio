import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { Footer } from "../components/Footer";

export const Home = () => {
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        <ThemeToggle />

        <StarBackground />

        <Navbar />

        <main>
          <HeroSection />
          
        </main>

        <Footer />
     </div>
    );
}