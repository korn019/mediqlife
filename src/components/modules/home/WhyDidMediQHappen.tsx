import { Button } from "@mantine/core";
import { NextPage } from "next";
import { ChevronRight, Star } from "lucide-react";
import MediQButton from "@/components/ui/MediQButton";
interface Props {}

const WhyDidMediQHappen: NextPage<Props> = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Button
              color="#f2f2f2"
              leftSection={
                <img
                  src="/conversation.png"
                  alt="Conversation"
                  className="w-auto h-5"
                />
              }
              classNames={{
                label: "text-primary",
              }}
              radius={"xl"}
            >
              ทำไมถึงเกิด MediQ
            </Button>
          </div>
          <div>
            <h2 className="subheading">{`เพราะ "สุขภาพ" คือของขวัญที่เราห่วงใยที่สุด`}</h2>
            <p className="heading-section">
              MediQ เกิดขึ้นจากทีมเภสัชกรและนักพัฒนาซอฟต์แวร์
              ที่มีประสบการณ์กว่า 30 ปี <br />{" "}
              เพื่อสร้างสิ่งเชื่อมโยงของความรักและความห่วงใย
            </p>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row gap-8 items-center">
          {/* ส่วนของรูปภาพซ้ายและกลาง */}
          <div className="flex flex-1 gap-4 w-full">
            {/* รูปด้านซ้าย (มือประสานกัน) */}
            <div className="flex-1 flex flex-col gap-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                <img
                  src="/teamwork-hands-collaboration-with-team-business-people-holding-arms-circle-huddle-blue-sky-from-motivation-trust-support-with-group-unity-solidarity-outside.png" // แทนที่ด้วย path รูปภาพของคุณ
                  alt="Togetherness"
                  className="object-cover w-full h-full"
                />
              </div>
              {/* ข้อความใต้รูปซ้าย */}
              <div className="bg-gray-100 p-6 rounded-2xl">
                <p className="text-gray-800 text-sm leading-relaxed">
                  เพราะ <span className="font-bold">"สุขภาพ"</span>
                  <br />
                  คือของขวัญที่เราห่วงใยที่สุด
                </p>
              </div>
            </div>

            {/* รูปกลาง (เภสัชกร/หมอ) */}
            <div className="flex-1 relative aspect-[4/7] overflow-hidden rounded-3xl">
              <img
                src="/portrait-female-pharmacist-working-drugstore.png" // แทนที่ด้วย path รูปภาพของคุณ
                alt="Pharmacist"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* ส่วนเนื้อหาด้านขวา */}
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <h3 className="text-gray-500 text-xl">
                ให้คุณมั่นใจได้ว่า
                <br />
                ทุกคนในครอบครัว
              </h3>

              {/* ส่วนของดาว 5 ดวง */}
              <div className="flex gap-1 py-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="fill-yellow-400 text-yellow-400 w-6 h-6"
                  />
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                ได้รับการดูแลสุขภาพ
                <br />
                อย่างต่อเนื่องและถูกต้องเสมอ
              </h1>
            </div>

            {/* ปุ่ม Learn More */}
            {/* <button className="group flex items-center gap-3 bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300">
              <span className="font-medium">Learn More</span>
              <div className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                <ChevronRight className="w-5 h-5" />
              </div>
            </button> */}
            <MediQButton label="Learn More" className="font-medium" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDidMediQHappen;
