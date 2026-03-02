"use client";
import MediQButton from "@/components/ui/MediQButton";
import { cn } from "@/utils/helper";
import { NextPage } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {}

const NAV_LINKS = [
  { name: "ทำไมถึงเกิด MediQ", href: "#" },
  {
    name: "ทำไมต้องใช้ MediQ",
    href: "#",
  },
  {
    name: "MediQ ดูแลยังไง",
    href: "#",
  },
  {
    name: "Q Health Knowledge Zone",
    href: "#",
  },
  {
    name: "โปรโมชั่น & สิทธิพิเศษ",
    href: "#",
  },
  {
    name: "เริ่มต้นกับ MediQ วันนี้",
    href: "#",
  },
];

const Header: NextPage<Props> = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  console.log("🚀 ~ Header ~ isScrolled:", isScrolled);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    return pathname === href || (href === "#" && isMenuOpen);
  };

  return (
    <>
      <header
        className={cn(
          "bg-[#f2f2f2] p-4  mx-auto sticky top-0 z-50 transition-all duration-500",
          isScrolled ? "max-w-full" : "max-w-7xl rounded-3xl ",
        )}
      >
        <div className="flex justify-between items-center gap-4">
          <div>
            <img src="/mediq-logo.png" alt="Mediq" className="w-auto h-10" />
          </div>
          <div>
            <nav className="flex gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs text-gray-700 hover:text-primary transition-colors duration-200 ${
                    isActive(link.href) ? "text-primary" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <MediQButton label="Get Standard" className="font-medium" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
