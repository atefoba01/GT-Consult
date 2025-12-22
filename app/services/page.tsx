import Header from "@/components/header"
import Footer from "@/components/footer"
import { Pen, BookOpen, Megaphone, Sparkles, CheckCircle, Zap, Users, TrendingUp } from "lucide-react"

const servicesDetails = [
  {
    icon: Pen,
    title: "Professional Writing",
    description: "Craft compelling narratives and content that resonate with your audience and drive engagement.",
    features: ["Content Strategy", "Copywriting", "SEO Optimization", "Brand Voice Development"],
    price: "Starting at $500",
  },
  {
    icon: BookOpen,
    title: "Publishing Solutions",
    description: "From manuscript to market, we guide authors and businesses through the complete publishing journey.",
    features: ["Manuscript Editing", "Cover Design", "Distribution", "Marketing Support"],
    price: "Custom Quote",
  },
  {
    icon: Megaphone,
    title: "Digital Advertising",
    description: "Strategic campaigns that amplify your message and connect you with the right audience.",
    features: ["Campaign Strategy", "Social Media Ads", "Google Ads", "Analytics & Reporting"],
    price: "Starting at $1,000",
  },
  {
    icon: Sparkles,
    title: "Brand Strategy",
    description: "Build your unique voice and establish a powerful presence in the digital marketplace.",
    features: ["Brand Identity", "Positioning", "Messaging Framework", "Implementation Guide"],
    price: "Starting at $750",
  },
]

const benefits = [
  { icon: CheckCircle, text: "Results-driven approach with proven track record" },
  { icon: Zap, text: "Quick turnaround without compromising quality" },
  { icon: Users, text: "Dedicated team of creative professionals" },
  { icon: TrendingUp, text: "Measurable growth and ROI focus" },
]

export default function Services() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
              Our <span className="text-secondary">Services</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Comprehensive solutions designed to transform your ideas into measurable impact
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {servicesDetails.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-secondary transition-all duration-300 flex flex-col"
                >
                  <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-colors">
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">{service.description}</p>
                  <div className="text-secondary font-semibold">{service.price}</div>
                </div>
              )
            })}
          </div>

          {/* Detailed Service Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {servicesDetails.map((service, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  {<service.icon className="w-8 h-8 text-secondary" />}
                  <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle size={18} className="text-secondary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-primary/5 rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Choose GT Consult?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4">
                  <benefit.icon className="w-6 h-6 text-secondary flex-shrink-0" />
                  <p className="text-foreground font-medium">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
