"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/gt-logo.jpg"
              alt="GT Consult Logo"
              width={32}
              height={32}
              className="w-8 h-8 rounded object-contain"
            />
            <span className="font-bold text-xl hidden sm:inline">
              GT Consult
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/services"
              className="hover:text-secondary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="hover:text-secondary transition-colors"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="hover:text-secondary transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/career"
              className="hover:text-secondary transition-colors"
            >
              Career
            </Link>
            <Link
              href="/contact"
              className="hover:text-secondary transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-secondary text-secondary-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link
              href="/services"
              className="block hover:text-secondary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block hover:text-secondary transition-colors"
            >
              About
            </Link>
            <Link
              href="/blog"
              className=" block hover:text-secondary transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/career"
              className=" block hover:text-secondary transition-colors"
            >
              Career
            </Link>
            <Link
              href="/contact"
              className="block hover:text-secondary transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="block w-full bg-secondary text-secondary-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity text-center"
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
