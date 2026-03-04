import React from "react";
import { ArrowRight, Megaphone } from "lucide-react";
import { Button } from "@mantine/core";
import MediQButton from "@/components/ui/MediQButton";

const PromotionSection = () => {
  return (
    <section id="promo" className="max-w-6xl mx-auto px-4 ">
      {/* 1. Sub-navigation / Pills */}
      <div className="flex flex-col items-start gap-4 mb-10">
        <Button
          color="#f2f2f2"
          leftSection={<Megaphone className="text-black" />}
          classNames={{
            label: "text-primary font-medium",
          }}
          radius={"xl"}
        >
          โปรโมชั่น & สิทธิพิเศษ
        </Button>

        <div className="flex flex-wrap gap-3">
          <button className="px-5 py-2 rounded-full border border-primary text-title font-medium text-sm hover:bg-primary/5 transition">
            บัตรสมาชิก MediQ
          </button>
          <button className="px-5 py-2 rounded-full bg-[#56C596] text-white text-sm font-medium">
            โปรโมชั่น / ส่วนลดพิเศษ
          </button>
          <button className="px-5 py-2 rounded-full border border-primary text-title font-medium text-sm hover:bg-primary/5 transition">
            แบนเนอร์กิจกรรมสุขภาพ
          </button>
        </div>
      </div>

      {/* 2. Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Images Grid (Left side) */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-4">
          <div className="rounded-[2rem] overflow-hidden border-[6px] border-[#A7E2D0] aspect-[4/5] shadow-lg">
            <img
              src="/promotion-1.png"
              alt="Medicine basket"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-[2rem] overflow-hidden border-[6px] border-[#A7E2D0] aspect-[4/5] shadow-lg">
            <img
              src="/promotion-2.png"
              alt="Pharmacy shelf"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content (Right side) */}
        <div className="lg:col-span-5 flex flex-col gap-6 pl-0 lg:pl-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            โปรโมชั่น / ส่วนลดพิเศษ
          </h2>

          <div className="space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <p className="flex items-start gap-3">
                <span className="text-paragraph font-bold">01.</span>
                <span className="">บันทึกการแพ้ยา ไลฟ์สไตล์ โรคประจำตัว</span>
              </p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <p className="flex items-start gap-3">
                <span className="text-paragraph font-bold">02.</span>
                <span className="">วิเคราะห์สุขภาพและแนะนำการเสริมสุขภาพ</span>
              </p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <p className="flex items-start gap-3">
                <span className="text-paragraph font-bold">03.</span>
                <span className="">
                  เตือนผลกระทบของยาแต่ละชนิดต่อโรคประจำตัว
                </span>
              </p>
            </div>
          </div>

          <div className="flex">
            <MediQButton label="สมัครสมาชิกฟรี" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
