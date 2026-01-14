"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Briefcase,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";

const projects = [
  {
    id: 1,
    image: "/c1.jpeg",
    title: "Brand Innovation Summit",
    description: "Leading Africa's premier storytelling conference",
    testimony:
      "Working on this project was transformative. GT Consult empowered our team to create meaningful impact through storytelling.",
    author: "GT Consult Team",
    role: "Content Strategist",
    rating: 5,
  },
  {
    id: 2,
    image: "/c2.jpeg",
    title: "Digital Campaign Excellence",
    description: "Award-winning advertising campaign launch",
    testimony:
      "The creative freedom and collaborative environment at GT Consult allowed me to deliver my best work and grow professionally.",
    author: "GT Consult Team",
    role: "Brand Designer",
    rating: 5,
  },
  {
    id: 3,
    image: "/c3.jpeg",
    title: "Publishing Success Stories",
    description: "Empowering African authors to reach global audiences",
    testimony:
      "GT Consult's publishing expertise and supportive team culture made this project an incredible learning experience.",
    author: "GT Consult Team",
    role: "Publishing Manager",
    rating: 5,
  },
  {
    id: 4,
    image: "/c4.jpeg",
    title: "Corporate Event Management",
    description: "Executive training and team building excellence",
    testimony:
      "The resources and mentorship I received at GT Consult helped me execute this complex project successfully.",
    author: "GT Consult Team",
    role: "Event Coordinator",
    rating: 5,
  },
  {
    id: 5,
    image: "/c5.jpeg",
    title: "Content Strategy Workshop",
    description: "Training next-generation content creators",
    testimony:
      "The collaborative approach and industry insights shared during this project elevated my professional capabilities.",
    author: "GT Consult Team",
    role: "Workshop Facilitator",
    rating: 5,
  },
  {
    id: 6,
    image: "/c6.jpeg",
    title: "Brand Transformation Project",
    description: "Complete brand overhaul for leading organization",
    testimony:
      "This project showcased GT Consult's ability to deliver comprehensive branding solutions with measurable impact.",
    author: "GT Consult Team",
    role: "Brand Strategist",
    rating: 5,
  },
  {
    id: 7,
    image: "/c7.jpeg",
    title: "Media Production Excellence",
    description: "Creating compelling visual narratives",
    testimony:
      "The production quality and creative vision on this project set new standards for our team's capabilities.",
    author: "GT Consult Team",
    role: "Media Producer",
    rating: 5,
  },
  {
    id: 8,
    image: "/c8.jpeg",
    title: "Digital Marketing Campaign",
    description: "Multi-platform advertising success",
    testimony:
      "Executing this integrated campaign taught me the power of data-driven creativity in digital advertising.",
    author: "GT Consult Team",
    role: "Marketing Specialist",
    rating: 5,
  },
  {
    id: 9,
    image: "/c9.jpeg",
    title: "Author Development Program",
    description: "Supporting emerging African writers",
    testimony:
      "Being part of this initiative to empower authors was incredibly fulfilling and impactful for all involved.",
    author: "GT Consult Team",
    role: "Publishing Consultant",
    rating: 5,
  },
  {
    id: 10,
    image: "/c10.jpeg",
    title: "Innovation Summit 2024",
    description: "Connecting storytellers with digital innovation",
    testimony:
      "This event brought together industry leaders and showcased GT Consult's position at the forefront of creative innovation.",
    author: "GT Consult Team",
    role: "Event Manager",
    rating: 5,
  },
  {
    id: 11,
    image: "/c11.jpeg",
    title: "Strategic Partnership Launch",
    description: "Building bridges across creative industries",
    testimony:
      "Facilitating this partnership demonstrated GT Consult's commitment to collaboration and industry growth.",
    author: "GT Consult Team",
    role: "Partnership Director",
    rating: 5,
  },
  {
    id: 12,
    image: "/c13.jpeg",
    title: "Community Engagement Initiative",
    description: "Grassroots storytelling and empowerment",
    testimony:
      "This community-focused project reminded us of the transformative power of authentic storytelling and local engagement.",
    author: "GT Consult Team",
    role: "Community Manager",
    rating: 5,
  },
  ///////////////////////////////////////////////
  {
    id: 12,
    image: "/Publish.jpeg",
    title: "Community Engagement Initiative",
    description: "Grassroots storytelling and empowerment",
    testimony:
        "This community-focused project reminded us of the transformative power of authentic storytelling and local engagement.",
    author: "GT Consult Team",
    role: "Community Manager",
    rating: 5,
  },

  {
    id: 12,
    image: "/Publish2.jpeg",
    title: "Community Engagement Initiative",
    description: "Grassroots storytelling and empowerment",
    testimony:
        "This community-focused project reminded us of the transformative power of authentic storytelling and local engagement.",
    author: "GT Consult Team",
    role: "Community Manager",
    rating: 5,
  },

  {
    id: 12,
    image: "/writing.jpeg",
    title: "Community Engagement Initiative",
    description: "Grassroots storytelling and empowerment",
    testimony:
        "This community-focused project reminded us of the transformative power of authentic storytelling and local engagement.",
    author: "GT Consult Team",
    role: "Community Manager",
    rating: 5,
  },

  {
    id: 12,
    image: "/writing2.jpeg",
    title: "Community Engagement Initiative",
    description: "Grassroots storytelling and empowerment",
    testimony:
        "This community-focused project reminded us of the transformative power of authentic storytelling and local engagement.",
    author: "GT Consult Team",
    role: "Community Manager",
    rating: 5,
  },

  {
    id: 12,
    image: "/writing3.jpeg",
    title: "Community Engagement Initiative",
    description: "Grassroots storytelling and empowerment",
    testimony:
        "This community-focused project reminded us of the transformative power of authentic storytelling and local engagement.",
    author: "GT Consult Team",
    role: "Community Manager",
    rating: 5,
  },

];

const jobOpenings = [
  {
    title: "Senior Content Writer",
    department: "Content & Strategy",
    location: "Lagos, Nigeria / Remote",
    type: "Full-time",
  },
  {
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Lagos, Nigeria",
    type: "Full-time",
  },
  {
    title: "Publishing Manager",
    department: "Publishing",
    location: "Lagos, Nigeria / Hybrid",
    type: "Full-time",
  },
  {
    title: "Brand Strategist",
    department: "Strategy & Innovation",
    location: "Remote",
    type: "Contract",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Continuous learning opportunities and clear career progression paths",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with talented professionals in a supportive environment",
  },
  {
    icon: Award,
    title: "Recognition & Rewards",
    description:
      "Performance bonuses, awards, and comprehensive benefits package",
  },
  {
    icon: Briefcase,
    title: "Flexible Work",
    description: "Hybrid and remote options with work-life balance focus",
  },
];

export default function CareersPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll functionality with pause capability
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentSlide];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary to-accent py-24 text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Build Your Career at{" "}
              <span className="text-secondary">GT Consult</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty">
              Join Africa's leading hub for storytelling and digital innovation.
              Create impact, grow professionally, and work on projects that
              matter.
            </p>
          </div>
        </section>

        {/* Project Gallery with Auto-Scroll */}
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Projects Reviews / Testimonies
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See the incredible work our team has accomplished and hear from
                the people behind these success stories
              </p>
            </div>

            {/* /////////////////////////// */}

            {/* Image Carousel - Very Compact Version */}
            <div 
              className="relative max-w-3xl mx-auto"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative h-[260px] md:h-[300px] rounded-2xl overflow-hidden bg-gray-100 shadow-2xl">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-contain object-center transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                {/* Project Info Overlay - Compact text */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex gap-1 mb-2">
                    {[...Array(currentProject.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-secondary text-secondary"
                      />
                    ))}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-1.5">
                    {currentProject.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/90 line-clamp-2">
                    {currentProject.description}
                  </p>
                </div>
              </div>
              {/* Navigation Buttons - Small and subtle */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-2 rounded-full shadow-lg transition-all z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-2 rounded-full shadow-lg transition-all z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              {/* Slide Indicators - Smaller dots */}
              <div className="flex justify-center gap-2 mt-4">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      index === currentSlide
                        ? "w-6 bg-secondary"
                        : "w-1.5 bg-muted-foreground/30"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* ///////////////////////// */}

            {/* Testimony Section */}
            <div className="mt-12 bg-card rounded-2xl p-8 shadow-lg border border-border">
              <div className="max-w-3xl mx-auto text-center">
                <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-secondary-foreground">
                  {currentProject.author.charAt(0)}
                </div>
                <blockquote className="text-xl md:text-2xl text-foreground mb-6 italic text-balance">
                  "{currentProject.testimony}"
                </blockquote>
                <div>
                  <p className="font-bold text-lg text-foreground">
                    {currentProject.author}
                  </p>
                  <p className="text-muted-foreground">{currentProject.role}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Join GT Consult?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We offer more than just a job – we provide a platform for
                growth, innovation, and meaningful impact
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Open Positions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our current job openings and find the perfect role for
                your skills and ambitions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {jobOpenings.map((job, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:border-secondary"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {job.title}
                      </h3>
                      <p className="text-muted-foreground">{job.department}</p>
                    </div>
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4 flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {job.location}
                  </p>
                  <a 
                    href="/contact"
                    className="block w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-3 rounded-lg transition-colors text-center"
                  >
                    Apply Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Don't see a position that fits? Send us your resume and let's
              explore opportunities together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@gtconsult.com"
                className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity text-lg"
              >
                Send Your Resume
              </a>
              <a
                href="/contact"
                className="bg-white/10 backdrop-blur-sm text-primary-foreground border-2 border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all text-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
