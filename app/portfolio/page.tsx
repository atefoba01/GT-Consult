"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BlogPostCard from "@/components/blog-post-card";
import TestimonialCard from "@/components/testimonial-card";
import { Filter } from "lucide-react";

const categories = ["All", "Writing", "Publishing", "Advertising", "Brand Strategy"];

const projects = [
  {
    id: 1,
    title: "Brand Innovation Summit 2024",
    category: "Brand Strategy",
    image: "/c1.jpeg",
    description: "Led Africa's premier storytelling conference with 500+ attendees, featuring industry leaders and emerging creators.",
    results: "500+ attendees, 50+ speakers, 95% satisfaction rate",
  },
  {
    id: 2,
    title: "Digital Campaign Excellence",
    category: "Advertising",
    image: "/c2.jpeg",
    description: "Award-winning multi-platform advertising campaign that reached 2M+ people across Africa.",
    results: "2M+ reach, 40% engagement increase, 3 industry awards",
  },
  {
    id: 3,
    title: "African Authors Empowerment Program",
    category: "Publishing",
    image: "/c3.jpeg",
    description: "Comprehensive publishing program that helped 50+ African authors reach global audiences.",
    results: "50+ published authors, 100K+ books sold globally",
  },
  {
    id: 4,
    title: "Corporate Storytelling Workshop",
    category: "Writing",
    image: "/writing.jpeg",
    description: "Executive training program teaching leaders to craft compelling narratives for business impact.",
    results: "200+ executives trained, 90% implementation rate",
  },
  {
    id: 5,
    title: "Content Strategy Revolution",
    category: "Writing",
    image: "/writing2.jpeg",
    description: "Developed comprehensive content strategies for 30+ brands, transforming their digital presence.",
    results: "30+ brands, 250% average engagement growth",
  },
  {
    id: 6,
    title: "Brand Transformation Initiative",
    category: "Brand Strategy",
    image: "/c6.jpeg",
    description: "Complete brand overhaul for leading African organization, including strategy, positioning, and visual identity.",
    results: "Brand recognition increased by 85%",
  },
  {
    id: 7,
    title: "Social Media Excellence Campaign",
    category: "Advertising",
    image: "/c7.jpeg",
    description: "Integrated social media campaign driving awareness and conversions across multiple platforms.",
    results: "500K+ new followers, 3x conversion rate",
  },

  {
    id: 8,
    title: "Author Development Program",
    category: "Publishing",
    image: "/Publish.jpeg",
    description: "Year-long mentorship program supporting emerging writers in crafting and publishing their first books.",
    results: "25 debut authors, 15 bestsellers",
  },

  {
    id: 8,
    title: "Author Development Program",
    category: "Publishing",
    image: "/Publish2.jpeg",
    description: "Year-long mentorship program supporting emerging writers in crafting and publishing their first books.",
    results: "25 debut authors, 15 bestsellers",
  },
  {
    id: 9,
    title: "Thought Leadership Series",
    category: "Writing",
    image: "/writing3.jpeg",
    description: "Created compelling thought leadership content for C-suite executives across various industries.",
    results: "100+ articles published, 1M+ total views",
  },

  {
    id: 9,
    title: "Thought Leadership Series",
    category: "Writing",
    image: "/writing4.jpeg",
    description: "Created compelling thought leadership content for C-suite executives across various industries.",
    results: "100+ articles published, 1M+ total views",
  },
];

const blogPosts = [
  {
    title: "Transforming African Narratives Through Digital Innovation",
    image: "/digital-innovation-african-storytelling.jpg",
    rating: 5,
    description: "Discover how GT Consult is revolutionizing the way African stories are told in the digital age.",
    category: "Case Study",
    date: "Nov 15, 2024",
  },
  {
    title: "The Power of Authentic Brand Storytelling",
    image: "/brand-storytelling-authentic-narratives.jpg",
    rating: 5,
    description: "Learn essential strategies for crafting compelling brand stories that connect with your audience.",
    category: "Strategy",
    date: "Nov 10, 2024",
  },
  {
    title: "Publishing Success: From Manuscript to Market",
    image: "/publishing-manuscript-market-success.jpg",
    rating: 4,
    description: "A comprehensive guide to navigating the publishing landscape successfully.",
    category: "Guide",
    date: "Nov 5, 2024",
  },
];

const testimonials = [
  {
    name: "Chidi Okafor",
    role: "Founder, Innovate Africa",
    content: "GT Consult transformed our brand story and helped us reach international markets. Their storytelling expertise is unmatched.",
    rating: 5,
    avatar: "/placeholder.svg",
  },
  {
    name: "Amara Adeyemi",
    role: "CEO, Creative Solutions Ltd",
    content: "Working with GT Consult was a game-changer. They delivered exceptional results and exceeded all our expectations.",
    rating: 5,
    avatar: "/placeholder.svg",
  },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const loadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 3, filteredProjects.length));
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground py-20 md:py-32">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ✨ Our Portfolio
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Inspiring <span className="text-secondary">Confident</span> Projects
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Discover our wealth of work curated by our team of experts, offering invaluable 
              perspectives on transformative storytelling and digital innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Works Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-center">
              Our <span className="text-secondary">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
              Explore our portfolio of successful projects across writing, publishing, advertising, and brand strategy
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleProjects(6);
                }}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-muted text-foreground hover:bg-secondary/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-secondary transition-all duration-300"
              >
                <div className="relative h-56 bg-muted overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs font-semibold text-secondary mb-1">RESULTS</p>
                    <p className="text-sm text-muted-foreground">{project.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleProjects < filteredProjects.length && (
            <div className="text-center">
              <button
                onClick={loadMore}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Load More Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-center">
              Case <span className="text-secondary">Studies</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
              Deep dives into our most impactful projects and the strategies behind them
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogPostCard key={index} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Client <span className="text-secondary">Reviews</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear what our clients say about working with GT Consult and the results we've delivered
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Let's collaborate to transform your ideas into impactful results through creativity, 
            strategy, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity text-lg"
            >
              Start Your Project
            </a>
            <a
              href="/services"
              className="bg-white/10 backdrop-blur-sm text-primary-foreground border-2 border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all text-lg"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}