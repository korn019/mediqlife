"use client";
import MediQButton from "@/components/ui/MediQButton";
import { cn } from "@/utils/helper";
import { NextPage } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Install lucide-react for icons

interface Props {}

const NAV_LINKS = [
  { name: "ทำไมถึงเกิด MediQ", href: "#why-mediq" },
  { name: "ทำไมต้องใช้ MediQ", href: "#benefits" },
  { name: "MediQ ดูแลยังไง", href: "#service" },
  { name: "Q Health Knowledge Zone", href: "#knowledge" },
  { name: "โปรโมชั่น & สิทธิพิเศษ", href: "#promo" },
  { name: "เริ่มต้นกับ MediQ วันนี้", href: "#start" },
];

const Header: NextPage<Props> = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking a link
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 left-0 right-0 z-50 transition-all duration-1000  px-4 py-3",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-[#f2f2f2]  max-w-7xl mx-auto rounded-2xl",
      )}
    >
      <div className="flex justify-between items-center gap-4">
        {/* Logo */}
        <div className="shrink-0">
          <img
            src="/mediq-logo.png"
            alt="Mediq"
            className="w-auto h-8 md:h-10"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] font-medium text-gray-600 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <MediQButton
              label="Get Standard"
              className="font-medium px-5 py-2"
            />
          </div>

          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "lg:hidden absolute left-0 top-full w-full bg-white border-t transition-all duration-300 overflow-hidden",
          isMenuOpen
            ? "max-h-[500px] opacity-100 shadow-lg"
            : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col p-6 gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="text-base font-medium text-gray-700 hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
          <div className="sm:hidden pt-4">
            <MediQButton
              label="Get Standard"
              className="w-full justify-center"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
