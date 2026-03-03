"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/30 border-b border-white/50 shadow-2xl">
      <nav className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label="Avanya Group — Home">
          <Image
            src="/logo.jpeg"
            alt="Avanya Group"
            width={220}
            height={90}
            className="object-contain h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-secondary/80 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex bg-primary text-white px-6 py-2 rounded-full text-sm font-medium tracking-wide hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/30"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 text-secondary/80 transition-all duration-300 hover:text-primary"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden backdrop-blur-lg bg-white/60 border-t border-white/50 px-8 py-6 space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block text-sm font-medium tracking-wide transition-all duration-300 ${
                pathname === link.href
                  ? "text-primary"
                  : "text-secondary/80 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block mt-2 bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium text-center hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/30"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
