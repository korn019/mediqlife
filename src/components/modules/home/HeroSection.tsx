import React from "react";
import { ArrowRight, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@mantine/core";
import MediQButton from "@/components/ui/MediQButton";

const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 ">
      <div className="flex flex-col md:flex-row bg-white overflow-hidden gap-4">
        {/* Left Side: Mascot Image */}
        <div className="md:w-1/3 flex items-center justify-center">
          <div className="relative w-full  h-full rounded-md overflow-hidden">
            {/* แทนที่ด้วยรูป Mascot สีเขียวของคุณ */}
            <img
              src="/mascot.png"
              alt="MediQ Mascot"
              className="w-full h-full object-cover "
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div
          className="md:w-2/3 p-8 md:p-16 flex flex-col justify-center relative rounded-md
        
         bg-[url('/banner.png')] bg-no-repeat  bg-cover bg-center
        "
        >
          {/* Top Label */}
          <div className="flex items-center gap-2 mb-4 w-fit  ">
            <Button
              color="white"
              leftSection={
                <img src="/home-icon.png" alt="Home" className="w-auto h-5" />
              }
              classNames={{
                root: " hover:bg-gray-200 transition-colors",
                label: "text-primary font-medium text-sm",
              }}
              radius={"xl"}
            >
              <span className="text-paragraph mr-1"> Welcome To </span> mediQ
            </Button>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl font-semibold mb-2 tracking-tight">
            <span className="text-primary">mediQ</span>{" "}
            <span className="text-gray-800">your Family Pharmacist</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium mb-6">
            “เภสัชกรของคุณและครอบครัว”
          </p>

          {/* Description */}
          <div className="max-w-xs text-black text-sm leading-relaxed mb-8">
            <p>เราเข้าใจว่าคุณมีหน้าที่ที่มากมายในชีวิต</p>
            <p>จนบางครั้งอาจลืมดูแลตัวเอง หรือคนที่คุณรัก</p>
            <p className="mt-2  ">
              จะดีไหม...ถ้ามีใครคอยดูแลสุขภาพให้คุณและครอบครัว อย่างถูกต้อง
              ปลอดภัย และอุ่นใจเสมอ
            </p>
          </div>

          {/* QR & Download Action */}
          <div className="flex flex-wrap items-center gap-6 mb-10">
            <div className="">
              <img src="/qr.png" alt="QR Code" className="w-20 h-20" />
            </div>
            <MediQButton label=" ดาวน์โหลด MediQ" />
          </div>

          {/* Social Icons & Team Image Background */}
          <div className="flex items-center justify-between mt-auto">
            <div className="flex gap-4 text-title">
              <TikTokIcon />
              <Youtube size={18} />
              <Instagram size={18} />
              <Facebook size={18} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.31-.75.42-1.24 1.25-1.33 2.1-.1.7.1 1.41.53 1.98.5.73 1.36 1.19 2.24 1.17.68.02 1.38-.24 1.9-.69.72-.61 1.02-1.58 1.01-2.5-.02-3.76-.04-7.51-.04-11.27z" />
  </svg>
);

export default HeroSection;
