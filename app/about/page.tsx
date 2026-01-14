import Header from "@/components/header";
import Footer from "@/components/footer";
import { Lightbulb, Target } from "lucide-react";

const values = [
  {
    title: "Creativity",
    description:
      "We believe in the power of imagination and originality to craft compelling stories and innovative solutions.",
  },
  {
    title: "Excellence",
    description:
      " We hold ourselves to the highest standards, delivering quality services that exceed expectations.",
  },
  {
    title: "Integrity",
    description:
      "We operate with transparency, honesty, and accountability in every project and partnership.",
  },
  {
    title: "Innovation",
    description:
      "We embrace technology and fresh ideas to drive growth in writing, publishing, and digital advertising.",
  },
  {
    title: "Impact",
    description:
      "Our focus is on creating measurable results that empower individuals, authors, and businesses to thrive.",
  },
  {
    title: "Collaboration",
    description:
      "We value teamwork, building lasting relationships with clients, partners, and communities.",
  },
];

const brandPersonality = [
  {
    trait: "Professional yet Creative",
    description: "We balance corporate reliability with artistic expression.",
  },
  {
    trait: "Innovative",
    description: "Always ahead with new tools and digital trends.",
  },
  {
    trait: "Impact-Driven",
    description: "Focused on measurable results and long-term value.",
  },
  {
    trait: "Collaborative",
    description: "We grow together with our clients and partners.",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
            About <span className="text-secondary">GT Consult</span>
          </h1>

          <p className="text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed max-w-4xl mx-auto">
            GT Consult was born from a simple belief: that powerful ideas
            deserve to be seen, heard, and transformed into real influence. What
            began as a passion for writing and storytelling evolved into a
            full-fledged agency that bridges creativity with digital strategy.
            From supporting authors who want their stories in the world to
            helping brands communicate with clarity and impact, GT Consult
            exists to make expression effortless and meaningful. Every project
            reflects our commitment to excellence, innovation, and purposeful
            communication—because we know that the right words, delivered the
            right way, can change everything.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-card border border-border rounded-xl p-8">
              <Target className="w-12 h-12 text-secondary mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At GT Consult, our mission is to transform ideas into influence
                by delivering exceptional writing, publishing, and digital
                advertising solutions. We are committed to helping individuals
                and businesses amplify their voices, grow their reach, and
                achieve measurable success through creativity, strategy, and
                innovation.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8">
              <Lightbulb className="w-12 h-12 text-secondary mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To be Africa’s leading hub for impactful storytelling and
                digital innovation – empowering brands, authors, and businesses
                to connect, inspire, and thrive in a global marketplace.
              </p>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl p-8 text-center border border-secondary/30">
              <p className="text-5xl font-bold text-secondary mb-2">100%</p>
              <p className="text-foreground font-semibold">
                Client Satisfaction
              </p>
            </div>
            <div className="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl p-8 text-center border border-secondary/30">
              <p className="text-5xl font-bold text-accent mb-2">15+</p>
              <p className="text-foreground font-semibold">
                Projects Completed
              </p>
            </div>
            <div className="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl p-8 text-center border border-secondary/30">
              <p className="text-5xl font-bold text-secondary mb-2">10+</p>
              <p className="text-foreground font-semibold">Team Members</p>
            </div>
            <div className="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl p-8 text-center border border-secondary/30">
              <p className="text-5xl font-bold text-accent mb-2">8+</p>
              <p className="text-foreground font-semibold">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-secondary transition-colors"
              >
                <h4 className="text-xl font-bold text-secondary mb-3">
                  {value.title}
                </h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of creative professionals brings together expertise in writing, 
              publishing, and digital strategy to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Gbolahan Thompson", role: "Founder & CEO", initial: "G" },
              { name: "Creative Team", role: "Content & Strategy", initial: "C" },
              { name: "Digital Team", role: "Marketing & Tech", initial: "D" }
            ].map((member, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 bg-gradient-to-br from-secondary to-accent rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white">
                  {member.initial}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Personality */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Brand Personality
          </h2>
          <div className="space-y-6">
            {brandPersonality.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold">
                    {index + 1}
                  </div>
                  {index !== brandPersonality.length - 1 && (
                    <div className="w-1 h-12 bg-border mt-2"></div>
                  )}
                </div>
                <div className="bg-card border border-border rounded-xl p-6 flex-grow">
                  <p className="text-secondary font-bold mb-2">
                    {item.trait}
                  </p>
                  <p className="text-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
