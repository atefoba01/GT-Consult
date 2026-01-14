import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import ProjectsPreview from "@/components/projects-preview";
import About from "@/components/about";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <ProjectsPreview />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
