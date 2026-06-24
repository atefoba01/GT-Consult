export default function About() {
  const values = [
    { title: "Creativity", description: "Imagination and originality at the heart of every solution" },
    { title: "Excellence", description: "Highest standards in every project and partnership" },
    { title: "Integrity", description: "Transparency, honesty, and accountability always" },
    { title: "Innovation", description: "Embracing technology and fresh ideas for growth" },
    { title: "Impact", description: "Creating measurable results that empower success" },
    { title: "Collaboration", description: "Growing together with clients and communities" },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              About <span className="text-secondary">GT Consult</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are Africa's leading hub for impactful storytelling and digital marketing strategy. Our mission is to transform
              ideas into influence by delivering exceptional solutions that help individuals and businesses amplify
              their voices and achieve measurable success.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a focus on creativity, excellence, and collaboration, we empower authors, brands, and businesses to
              connect, inspire, and thrive in a global marketplace.
            </p>
          </div>
          <div className="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl p-8 border border-secondary/30">
            <div className="space-y-4">
              <div className="text-center py-8">
                <p className="text-5xl font-bold text-secondary mb-2">100%</p>
                <p className="text-foreground font-semibold">Client Satisfaction</p>
              </div>
              <div className="h-px bg-border"></div>
              <div className="text-center py-8">
                <p className="text-5xl font-bold text-accent mb-2">25+</p>
                <p className="text-foreground font-semibold">Projects Completed</p>
              </div>
              <div className="h-px bg-border"></div>
              <div className="text-center py-8">
                <p className="text-5xl font-bold text-secondary mb-2">10+</p>
                <p className="text-foreground font-semibold">Team Members</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-secondary transition-colors"
              >
                <h4 className="text-xl font-bold text-secondary mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
