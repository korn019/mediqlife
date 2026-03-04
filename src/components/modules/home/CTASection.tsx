import React from "react";
import { ArrowRight, Download, MessageCircle } from "lucide-react";
import { Button } from "@mantine/core";
import MediQButton from "@/components/ui/MediQButton";

const CTASection = () => {
  return (
    <section id="start" className="max-w-6xl mx-auto px-4 py-20">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-12">
        {/* Left Side: Text & Actions */}
        <div className="flex-1 space-y-2">
          {/* Badge */}

          <Button
            color="#f2f2f2"
            leftSection={
              <img src="/check-up.png" alt="Check-up" className="w-6 h-6" />
            }
            classNames={{
              label: "text-primary font-medium",
            }}
            radius={"xl"}
          >
            เริ่มต้นกับ MediQ วันนี้
          </Button>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            เพราะสุขภาพของครอบครัวคุณ
            <br />
            คือสิ่งที่เราห่วงใยที่สุด
          </h2>

          {/* QR Code Section */}
          <div className="flex flex-col items-center sm:items-start   gap-8 pt-4">
            <div className="">
              {/* แทนที่ด้วยรูป QR Code จริงของคุณ */}
              <img
                src="/qr.png"
                alt="MediQ QR Code"
                className=" w-32 h-32 md:w-40 md:h-40 object-contain"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 w-full sm:w-auto">
              <MediQButton
                label={`ดาวน์โหลดแอป MediQ \n (iOS / Android)`}
                className="whitespace-pre-wrap text-left"
              />
              <MediQButton label="พูดคุยกับเภสัชกร MediQ" />
            </div>
          </div>
        </div>

        {/* Right Side: Family/Team Image */}
        <div className="flex-1 w-full ">
          <div className=" overflow-hidden ">
            <img
              src="/Gemini_Generated_Image_82kq3g82kq3g82kq.png"
              alt="MediQ Healthcare Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
