import { Pen, BookOpen, Megaphone, Sparkles } from "lucide-react"

const services = [
  {
    icon: Pen,
    title: "Professional Writing",
    description: "Craft compelling narratives and content that resonate with your audience and drive engagement.",
  },
  {
    icon: BookOpen,
    title: "Publishing Solutions",
    description: "From manuscript to market, we guide authors and businesses through the complete publishing journey.",
  },
  {
    icon: Megaphone,
    title: "Digital Advertising",
    description: "Strategic campaigns that amplify your message and connect you with the right audience.",
  },
  {
    icon: Sparkles,
    title: "Brand Strategy",
    description: "Build your unique voice and establish a powerful presence in the digital marketplace.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Our <span className="text-secondary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions designed to transform your ideas into measurable impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-secondary transition-all duration-300"
              >
                <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-colors">
                  <Icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
