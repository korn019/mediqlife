import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";

const NAV_LINKS = [
  { name: "ทำไมถึงเกิด MediQ", href: "#why-mediq" },
  { name: "ทำไมต้องใช้ MediQ", href: "#benefits" },
  { name: "MediQ ดูแลยังไง", href: "#service" },
  { name: "Q Health Knowledge Zone", href: "#knowledge" },
  { name: "โปรโมชั่น & สิทธิพิเศษ", href: "#promo" },
  { name: "เริ่มต้นกับ MediQ วันนี้", href: "#start" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-primary to-[#81d8bf] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-16">
          {/* 1. Logo Section */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/mediq-white-logo.png"
                alt="MediQ Logo"
                className="w-32 h-auto"
              />
            </div>
          </div>

          {/* 2. Menu Links - Column 1 */}
          <div className="md:col-span-3 flex flex-col gap-4">
            {NAV_LINKS.slice(0, 3).map((link) => (
              <FooterLink key={link.name} label={link.name} href={link.href} />
            ))}
          </div>

          {/* 3. Menu Links - Column 2 */}
          <div className="md:col-span-3 flex flex-col gap-4">
            {NAV_LINKS.slice(3, 6).map((link) => (
              <FooterLink key={link.name} label={link.name} href={link.href} />
            ))}
          </div>

          {/* 4. Social Icons */}
          <div className="md:col-span-2 flex gap-4 justify-start md:justify-end ">
            <SocialIcon icon={<TikTokIcon />} />
            <SocialIcon icon={<Youtube size={20} />} />
            <SocialIcon icon={<Instagram size={20} />} />
            <SocialIcon icon={<Facebook size={20} />} />
          </div>
        </div>

        {/* 5. Bottom Copyright Section */}
        <div className="border-t border-white/20 pt-8 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-light opacity-90">
            <a href="#" className="hover:underline">
              เกี่ยวกับเรา
            </a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:underline">
              ติดต่อเรา
            </a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:underline">
              เงื่อนไขการใช้งาน
            </a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:underline">
              ความเป็นส่วนตัว
            </a>
          </div>
          <p className="text-[12px] opacity-70 font-light">
            © 2026 MediQ Co., Ltd. — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

// Sub-components เพื่อความสะอาดของ Code
const FooterLink = ({
  label,
  active = false,
  href = "#",
}: {
  label: string;
  active?: boolean;
  href?: string;
}) => (
  <a
    href={href}
    className={`text-sm hover:translate-x-1 transition-transform inline-block border-b w-fit pb-1  ${active ? "border-white font-medium" : "border-transparent "}`}
  >
    {label}
  </a>
);

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a
    href="#"
    className="w-10 h-10 rounded-full  flex items-center justify-center hover:bg-white/10 transition "
  >
    {icon}
  </a>
);

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.31-.75.42-1.24 1.25-1.33 2.1-.1.7.1 1.41.53 1.98.5.73 1.36 1.19 2.24 1.17.68.02 1.38-.24 1.9-.69.72-.61 1.02-1.58 1.01-2.5-.02-3.76-.04-7.51-.04-11.27z" />
  </svg>
);

export default Footer;
