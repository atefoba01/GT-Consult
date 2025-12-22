export default function CTA() {
  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
          Ready to Transform Your Ideas into <span className="text-secondary">Impact</span>?
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Let's collaborate to amplify your voice, grow your reach, and achieve measurable success through creativity,
          strategy, and innovation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity text-lg">
            Get in Touch
          </button>
          <button className="border-2 border-secondary-foreground text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors text-lg">
            Schedule a Call
          </button>
        </div>
      </div>
    </section>
  )
}
