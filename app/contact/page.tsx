"use client";

import type React from "react";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("[v0] Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
            Get in <span className="text-secondary">Touch</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            We'd love to hear from you. Let's discuss how we can help you
            achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
              <a
                href="mailto:info@gtconsult.com"
                className="text-muted-foreground hover:text-secondary transition-colors"
              >
                gbolahan.gtconsult@gmail.com
              </a>
              <p className="text-muted-foreground text-sm mt-2">
                Response within 24 hours
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Phone</h3>
              <a
                href="tel:+234123456789"
                className="text-muted-foreground hover:text-secondary transition-colors"
              >
                +234 816 358 6086
              </a>
              <p className="text-muted-foreground text-sm mt-2">
                Mon-Fri, 9 AM - 6 PM WAT
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Location
              </h3>
              <p className="text-muted-foreground">Ilorin, Nigeria</p>
              <p className="text-muted-foreground text-sm mt-2">
                Visit our office
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Send us a Message
              </h2>

              {submitted && (
                <div className="mb-6 bg-secondary/20 border border-secondary rounded-lg p-4 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <p className="text-foreground font-medium">
                    Thank you! We'll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-foreground font-semibold mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-foreground font-semibold mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-foreground font-semibold mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                  >
                    <option value="">Select a subject</option>
                    <option value="Professional Writing">
                      Professional Writing
                    </option>
                    <option value="Publishing Solutions">
                      Publishing Solutions
                    </option>
                    <option value="Digital Advertising">
                      Digital Advertising
                    </option>
                    <option value="Brand Strategy">Brand Strategy</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-foreground font-semibold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
