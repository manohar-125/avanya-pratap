import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1C3B70] text-white mt-24 border-t border-white/10">

      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-8 py-16 grid md:grid-cols-3 gap-12">

        {/* Company Info */}
        <div>
          <div className="mb-6 inline-block rounded-full border-2 border-white/30 overflow-hidden">
            <Image
              src="/logo.jpeg"
              alt="Avanya Group"
              width={140}
              height={60}
            />
          </div>
          <p className="text-blue-100/70 text-sm leading-relaxed">
                Avanya Pratap Service and Construction is a registered
                government contractor delivering infrastructure,
                civil, and technical services across multiple departments.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3 text-blue-100/70 text-sm">
            <li>
              <Link href="/" className="hover:text-primary transition-all duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary transition-all duration-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-primary transition-all duration-300">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition-all duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-6">
            Contact Information
          </h3>

          <div className="space-y-4 text-blue-100/70 text-sm">

            <div className="flex items-start gap-3">
              <Phone size={18} className="text-primary mt-1" />
              <span>(+91) 70715 83939,  73555 34189</span>
            </div>

            <div className="flex items-start gap-3">
              <Mail size={18} className="text-primary mt-1" />
              <span>info@avanyapratap.com, avanya.pratap@gmail.com</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-primary mt-1" />
              <span>
                Khajuriya, Ghazipur,
                Uttar Pradesh, India
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white/10 text-center py-6 text-xs text-blue-100/40 tracking-wide">
        &copy; {new Date().getFullYear()} Avanya Group. All Rights Reserved.
      </div>

    </footer>
  );
}