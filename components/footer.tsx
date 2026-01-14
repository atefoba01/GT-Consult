import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center font-bold text-primary">
                GT
              </div>
              <span className="font-bold text-lg">GT Consult</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Africa's leading hub for impactful storytelling and digital
              innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Professional Writing
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Publishing
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Digital Advertising
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Brand Strategy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-secondary" />
                <a
                  href="mailto:info@gtconsult.com"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  gbolahan.gtconsult@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-secondary" />
                <a
                  href="tel:+234123456789"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  +234 816 358 6086
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-secondary mt-0.5" />
                <span className="text-primary-foreground/80">
                  Ilorin, Nigeria
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/80">
              © 2025 GT Consult. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
