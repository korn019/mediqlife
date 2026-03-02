import { Button } from "@mantine/core";
import { NextPage } from "next";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import MediQButton from "@/components/ui/MediQButton";
interface Props {}

const WhyMustUseMediQ: NextPage<Props> = () => {
  const features = [
    { id: "01", text: "บันทึกการแพ้ยา ไลฟ์สไตล์ โรคประจำตัว" },
    { id: "02", text: "วิเคราะห์สุขภาพและแนะนำการเสริมสุขภาพ" },
    { id: "03", text: "เตือนผลกระทบของยาแต่ละชนิดต่อโรคประจำตัว" },
  ];

  const systemBadges = [
    { name: "Q Book — สมุดสุขภาพส่วนตัว", active: true },
    { name: "Q Box — กล่องยาอัจฉริยะ", active: false },
    { name: "Q Labs — ห้องแล็บส่วนตัว", active: false },
    { name: "Q Health — แหล่งความรู้สุขภาพ", active: false },
    { name: "Pharmacist Anywhere — เภสัชกรใกล้คุณ", active: false },
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-white font-sans overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: หัวข้อและ Badge รายการระบบ */}
        <div className=" lg:col-span-4 space-y-8">
          <Button
            color="#f2f2f2"
            leftSection={
              <img src="/medicine.png" alt="Medicine" className="w-auto h-5" />
            }
            classNames={{
              label: "text-primary",
            }}
            radius={"xl"}
          >
            ทำไมต้องใช้ MediQ
          </Button>

          <div className="space-y-4">
            <h2 className="heading-section font-semibold">
              5 ระบบอัจฉริยะ เพื่อดูแลคุณ
              <br />
              และครอบครัวครบวงจร
            </h2>
            <p className="text-body text-paragraph">
              ระบบโปรแกรมอัจฉริยะของ UniqQ
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {systemBadges.map((badge, idx) => (
              <div
                key={idx}
                className={`px-6 py-3 rounded-full border transition-all cursor-pointer w-fit font-medium
                  ${
                    badge.active
                      ? "bg-primary border-primary text-white shadow-md"
                      : "bg-white border-primary text-title hover:bg-primary/10"
                  }`}
              >
                {badge.name}
              </div>
            ))}
          </div>

          <MediQButton label="Learn More" className="font-medium" />
        </div>

        {/* Center Column: Mobile Mockups */}
        <div className="lg:col-span-4 relative h-[500px] flex justify-center items-center">
          {/* เครื่องหลัง */}
          <div>
            <img src="/reflection.png" alt="Reflection" />
          </div>
          {/* <div className="absolute -rotate-12 translate-x-[-40px] z-10 w-56 shadow-2xl rounded-[2.5rem] border-[6px] border-gray-800 overflow-hidden bg-white">
            <img
              src="/api/placeholder/400/850"
              alt="Mobile App Screen 1"
              className="w-full"
            />
          </div> */}
          {/* เครื่องหน้า */}
          {/* <div className="absolute rotate-6 translate-x-[40px] z-20 w-56 shadow-2xl rounded-[2.5rem] border-[6px] border-gray-900 overflow-hidden bg-white">
            <img
              src="/api/placeholder/400/850"
              alt="Mobile App Screen 2"
              className="w-full"
            />
          </div> */}
        </div>

        {/* Right Column: List รายละเอียด */}
        <div className="lg:col-span-4 space-y-0">
          {features.map((item, index) => (
            <div
              key={index}
              className="group border-b border-teal-200 py-6 flex items-center justify-between hover:bg-teal-50/30 px-4 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-paragraph group-hover:text-teal-400 transition-colors">
                  {item.id}.
                </span>
                <p className="text-title font-medium">{item.text}</p>
              </div>
              <div className="border-2 border-teal-400 rounded-full p-1 text-teal-500">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMustUseMediQ;
