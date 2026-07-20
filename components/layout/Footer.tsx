import Link from "next/link";
import { Globe, Share2, Link2 } from "lucide-react";

const navLinks = [
  { href: "/visit", label: "Visit Us" },
  { href: "/events", label: "Events" },
  { href: "/hangar-challenge", label: "Hangar Challenge" },
  { href: "/cafe", label: "Cafe" },
  { href: "/physio", label: "Physio" },
  { href: "/news", label: "News" },
  { href: "/about/team", label: "About" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/visitor-rules", label: "Visitor Rules" },
];

export function Footer() {
  return (
    <footer className="bg-[#F2F2F2] border-t border-[#E5E5E5] mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + tagline */}
          <div>
            <Link href="/" className="text-[#1A1A1A] font-bold text-base tracking-widest">
              HANGARGYMS
            </Link>
            <p className="mt-3 text-sm text-[#6B6B6B] leading-relaxed">
              Czech bouldering and climbing gym network, backed by Adam Ondra.
            </p>
          </div>

          {/* Company info */}
          <div>
            <h3 className="text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider mb-3">
              Company
            </h3>
            <div className="text-sm text-[#6B6B6B] space-y-1">
              <p>Hangar Gyms s.r.o.</p>
              <p>IČO: 12345678</p>
              <p>DIČ: CZ12345678</p>
              <p>Placeholder Address 1</p>
              <p>602 00 Brno, CZ</p>
            </div>
          </div>

          {/* Quick contacts */}
          <div>
            <h3 className="text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider mb-3">
              Contact
            </h3>
            <div className="text-sm text-[#6B6B6B] space-y-1">
              <p>info@hangargyms.cz</p>
              <p>+420 000 000 000</p>
              <p className="pt-2 text-xs">Brno: brno@hangargyms.cz</p>
              <p className="text-xs">Ostrava: ostrava@hangargyms.cz</p>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider mb-3">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <span className="text-xs text-[#6B6B6B]">
              © {new Date().getFullYear()} HANGARGYMS
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a href="#" aria-label="Social 1" className="text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors">
              <Globe size={18} />
            </a>
            <a href="#" aria-label="Social 2" className="text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors">
              <Share2 size={18} />
            </a>
            <a href="#" aria-label="Social 3" className="text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors">
              <Link2 size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
