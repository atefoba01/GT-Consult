import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold">
              ✨ Brand Overview
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
              GT Consult is a{" "}
              <span className="text-secondary">Creative and Strategic</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed text-balance">
              agency specializing in writing, publishing, and digital
              advertising. We help authors, entrepreneurs, and brands transform
              their ideas into influence through professional content creation,
              refined publishing services, and results-driven digital campaigns.
              Positioned at the intersection of storytelling and innovation, we
              deliver excellence, integrity, and impactful solutions that ensure
              our clients’messages are seen, heard, and remembered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Start Your Journey
              </button>
              <button className="border-2 border-secondary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-2xl blur-2xl"></div>

            <div className="relative bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl h-full flex items-center justify-center border border-secondary/30 overflow-hidden">
              <Image
                src="/digital-innovation-african-storytelling.jpg"
                alt="Empowering Voices"
                fill
                className="object-cover"
                priority // optional: loads faster if it's above the fold
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
