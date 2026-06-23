"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const mainLinks = [
  { href: "/events", label: "Events" },
  { href: "/news", label: "News" },
];

const visitLinks = [
  { href: "/visit", label: "Visit Us" },
  { href: "/cafe", label: "Cafe" },
  { href: "/physio", label: "Physio" },
];

const aboutLinks = [
  { href: "/about/team", label: "Our Team" },
  { href: "/about/careers", label: "Careers" },
];

const mobileLinks = [
  { href: "/visit", label: "Visit Us" },
  { href: "/cafe", label: "Cafe" },
  { href: "/physio", label: "Physio" },
  { href: "/events", label: "Events" },
  { href: "/news", label: "News" },
  { href: "/about/team", label: "Our Team" },
  { href: "/about/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname.startsWith(href);

  const linkClass = (href: string) =>
    cn(
      "px-3 py-2 text-sm transition-colors",
      isActive(href) ? "text-[#1A1A1A] font-medium" : "text-[#6B6B6B] hover:text-[#1A1A1A]"
    );

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-[#1A1A1A] font-bold text-base tracking-widest">
          HANGARGYMS
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Visit Us dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "h-auto px-3 py-2 text-sm font-normal bg-transparent hover:bg-transparent data-popup-open:bg-transparent",
                    isActive("/visit") || isActive("/cafe") || isActive("/physio")
                      ? "text-[#1A1A1A] font-medium"
                      : "text-[#6B6B6B] hover:text-[#1A1A1A]"
                  )}
                >
                  Visit Us
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-44 py-1">
                    {visitLinks.map((link) => (
                      <li key={link.href}>
                        <NavigationMenuLink
                          href={link.href}
                          className="block rounded px-3 py-2 text-sm text-[#1A1A1A] hover:bg-[#F2F2F2]"
                        >
                          {link.label}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {mainLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </Link>
          ))}

          {/* About dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "h-auto px-3 py-2 text-sm font-normal bg-transparent hover:bg-transparent data-popup-open:bg-transparent",
                    isActive("/about") ? "text-[#1A1A1A] font-medium" : "text-[#6B6B6B] hover:text-[#1A1A1A]"
                  )}
                >
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-44 py-1">
                    {aboutLinks.map((link) => (
                      <li key={link.href}>
                        <NavigationMenuLink
                          href={link.href}
                          className="block rounded px-3 py-2 text-sm text-[#1A1A1A] hover:bg-[#F2F2F2]"
                        >
                          {link.label}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <a
            href="https://www.hangareshop.cz/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors"
          >
            E-shop
          </a>

          <Link href="/contact" className={linkClass("/contact")}>
            Contact
          </Link>

          {/* Language switcher */}
          <div className="ml-6 pl-6 border-l border-[#E5E5E5] flex items-center gap-2 text-sm">
            <button className="text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors">CZ</button>
            <span className="text-[#E5E5E5]">/</span>
            <button className="text-[#1A1A1A] font-medium">EN</button>
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[#1A1A1A]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-white border-t border-[#E5E5E5]">
          <div className="flex flex-col px-6 py-4">
            {mobileLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#1A1A1A] py-3 border-b border-[#F2F2F2]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.hangareshop.cz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#1A1A1A] py-3 border-b border-[#F2F2F2] last:border-0"
              onClick={() => setOpen(false)}
            >
              E-shop
            </a>
            <div className="flex gap-3 text-sm pt-4 mt-2 border-t border-[#E5E5E5]">
              <button className="text-[#6B6B6B]">CZ</button>
              <span className="text-[#6B6B6B]">/</span>
              <button className="text-[#1A1A1A] font-medium">EN</button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
