import React from "react";
import { ArrowRight, ThumbsUp } from "lucide-react";
import { Button } from "@mantine/core";
import MediQButton from "@/components/ui/MediQButton";

const KnowledgeSection = () => {
  const categories = [
    { title: "บทความเกี่ยวกับสุขภาพ", active: true },
    { title: "บทความเกี่ยวกับสุขภาพ", active: false },
    { title: "บทความเกี่ยวกับสุขภาพ", active: false },
    { title: "บทความเกี่ยวกับสุขภาพ", active: false },
    { title: "บทความเกี่ยวกับสุขภาพ", active: false },
  ];

  return (
    <section className=" bg-[#f2f2f2]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header Badge */}
        <div className="flex justify-center mb-6">
          <Button
            color="white"
            leftSection={
              <img
                src="/conversation.png"
                alt="Conversation"
                className="w-auto h-5"
              />
            }
            classNames={{
              root: "hover:bg-[#f2f2f2] border-[#f2f2f2]",
              label: "text-primary",
            }}
            radius={"xl"}
          >
            Q Health Knowledge Zone
          </Button>
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          ทำไมร้านยาเพราะสุขภาพดี เริ่มต้นจากความเข้าใจ
        </h2>

        {/* Image Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-10">
          <div className="md:col-span-4 h-[400px] overflow-hidden rounded-2xl">
            <img
              src="/pharmacist-checking-medicines-drugstore.png"
              alt="Pharmacist looking at shelves"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-8 h-[400px]  rounded-2xl relative">
            <img
              src="/pharmacists-smiling-happy-service-drugstore.png"
              alt="Smiling pharmacists"
              className="w-full h-full object-cover rounded-2xl"
            />
            {/* Floating Mascot (3D Character) */}
            <div className="absolute -bottom-20 right-0 w-44 h-44">
              <img
                src="/mascot-img.png"
                alt="Mascot"
                className="animate-bounce-slow"
              />
            </div>
          </div>
        </div>

        {/* Description & Social Proof */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div className="flex-1 space-y-4">
            <p className="text-paragraph text-sm leading-relaxed max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
            <h3 className="text-xl font-bold text-gray-800 leading-snug">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br />
              sed do eiusmod tempor incididunt ut labore
            </h3>
            <MediQButton label="ทั้งหมด" className="font-medium" />
          </div>

          {/* Happy Clients (Avatars) */}
          <div className="flex items-center gap-3 self-end md:self-center  p-3 rounded-2xl">
            <div className="bg-teal-500 p-1.5 rounded-lg text-white">
              <ThumbsUp size={16} />
            </div>
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200"
                >
                  <img
                    src={`https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png`}
                    alt="User"
                  />
                </div>
              ))}
            </div>
            <span className="text-paragraph text-sm font-medium">
              99K+ Happy Client
            </span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-4 p-4 rounded-2xl border transition-all cursor-pointer
              ${
                cat.active
                  ? "bg-primary border-primary text-white"
                  : "bg-white border-gray-100 text-primary shadow-sm hover:border-teal-200"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center
              ${cat.active ? "bg-white/20" : "bg-teal-50"}`}
              >
                {/* Icon Placeholder */}
                <div
                  className={`w-6 h-6 rounded-full border-2 ${cat.active ? "border-white" : "border-teal-400"}`}
                />
              </div>
              <span className="font-semibold flex-1 text-lg">{cat.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;
