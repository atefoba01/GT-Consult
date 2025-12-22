import { Sparkles, Award, TrendingUp } from "lucide-react";
import BlogPostCard from "@/components/blog-post-card";
import TestimonialCard from "@/components/testimonial-card";
import Header from "@/components/header"


export default function BlogPage() {
  const blogPosts = [
    {
      title: "Transforming African Narratives Through Digital Innovation",
      image: "/digital-innovation-african-storytelling.jpg",
      rating: 5,
      description:
        "Discover how GT Consult is revolutionizing the way African stories are told in the digital age, creating impactful narratives that resonate globally.",
      category: "Case Study",
      date: "Nov 15, 2024",
    },
    {
      title: "The Power of Authentic Brand Storytelling",
      image: "/brand-storytelling-authentic-narratives.jpg",
      rating: 5,
      description:
        "Learn the essential strategies for crafting compelling brand stories that connect with your audience and drive meaningful engagement.",
      category: "Strategy",
      date: "Nov 10, 2024",
    },
    {
      title: "Publishing Success: From Manuscript to Market",
      image: "/publishing-manuscript-market-success.jpg",
      rating: 4,
      description:
        "A comprehensive guide to navigating the publishing landscape, from manuscript preparation to successful market launch and promotion.",
      category: "Guide",
      date: "Nov 5, 2024",
    },
    {
      title: "Digital Advertising Trends in 2025",
      image: "/digital-advertising-trends-2025.jpg",
      rating: 5,
      description:
        "Explore the latest digital advertising trends and strategies that will dominate the marketing landscape this year and beyond.",
      category: "Trends",
      date: "Oct 28, 2024",
    },
    {
      title: "Building Your Personal Brand as a Creator",
      image: "/personal-brand-creator-development.jpg",
      rating: 5,
      description:
        "Essential tips for creators looking to establish a powerful personal brand that stands out in today's competitive digital marketplace.",
      category: "Tutorial",
      date: "Oct 20, 2024",
    },
    {
      title: "Content Marketing Excellence: Best Practices",
      image: "/content-marketing-best-practices-excellence.jpg",
      rating: 4,
      description:
        "Master the fundamentals of content marketing and learn proven strategies to create content that converts and builds lasting audience relationships.",
      category: "Best Practices",
      date: "Oct 12, 2024",
    },
  ];

  const testimonials = [
    {
      name: "Chidi Okafor",
      role: "Founder, Innovate Africa",
      content:
        "GT Consult transformed our brand story and helped us reach international markets. Their storytelling expertise is unmatched.",
      rating: 5,
      avatar: "/professional-man-headshot.png",
    },
    {
      name: "Amara Adeyemi",
      role: "CEO, Creative Solutions Ltd",
      content:
        "Working with GT Consult was a game-changer. They delivered exceptional results and exceeded all our expectations.",
      rating: 5,
      avatar: "/professional-woman-headshot.png",
    },
    {
      name: "Kwame Mensah",
      role: "Author & Content Creator",
      content:
        "The publishing support and digital strategy guidance I received was invaluable. Highly recommended for anyone serious about their brand.",
      rating: 5,
      avatar: "/professional-headshot-creative.jpg",
    },
    {
      name: "Nia Johnson",
      role: "Marketing Director, Global Brand Co.",
      content:
        "GT Consult's advertising campaigns delivered remarkable ROI. Their team truly understands the African market dynamics.",
      rating: 5,
      avatar: "/professional-headshot-executive.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
         <Header />
      <section className="bg-gradient-to-r from-primary via-primary/80 to-accent text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Work & Achievements
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Explore our portfolio of transformative projects, client success
              stories, and industry-leading insights that showcase our
              expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-card border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award size={40} className="text-secondary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-foreground">150+</h3>
              <p className="text-muted-foreground mt-2">Projects Completed</p>
            </div>
            <div className="text-center">
              <TrendingUp size={40} className="text-accent mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-foreground">98%</h3>
              <p className="text-muted-foreground mt-2">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <Sparkles size={40} className="text-secondary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-foreground">50+</h3>
              <p className="text-muted-foreground mt-2">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Gallery */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Case Studies & Articles
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover our latest work, industry insights, and success stories
              from our clients across Africa and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogPostCard key={index} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Client Reviews & Commendations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What our clients have to say about working with GT Consult and the
              transformative results we delivered.
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
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Let us help you create impactful narratives and achieve your
            business goals with our comprehensive consulting services.
          </p>
          <a
            href="/contact"
            className="inline-block bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get In Touch Today
          </a>
        </div>
      </section>
    </main>
  );
}
