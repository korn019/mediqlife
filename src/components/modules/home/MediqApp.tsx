import React from "react";

import {
  CheckCircle2,
  Layout,
  ShieldCheck,
  BellRing,
  Users,
} from "lucide-react";
import { Button } from "@mantine/core";
const MediQApp = () => {
  const features = [
    { id: "01", title: "ลงทะเบียนผู้ใช้", icon: <Users className="w-5 h-5" /> },
    {
      id: "02",
      title: "กรอกข้อมูลสุขภาพ",
      icon: <Layout className="w-5 h-5" />,
    },
    {
      id: "03",
      title: "ระบบจัดยา มีเภสัชกรดูแล",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
    { id: "04", title: "แจ้งเตือน", icon: <BellRing className="w-5 h-5" /> },
  ];
  return (
    <div id="service" className=" bg-white  text-[#2D3748] overflow-hidden">
      {/* Navigation / Logo Area */}
      <nav className="py-6 flex flex-col items-center">
        <Button
          color="#f2f2f2"
          leftSection={<HeartPulseIcon />}
          classNames={{
            label: "text-primary font-normal",
          }}
          radius={"xl"}
        >
          MediQ ดูแลยังไง
        </Button>
        <h2 className="text-2xl md:text-3xl font-bold text-center px-4 leading-tight mt-4">
          การใช้งานระบบอัจฉริยะ เพื่อดูแลคุณ
          <br className="hidden md:block" /> และครอบครัวครบวงจร
        </h2>
      </nav>

      {/* Main Content: App Mockups */}
      <main className="max-w-7xl mx-auto px-4 pt-10">
        {/* <div className="grid grid-cols-4 grid-rows-5 gap-4">
          <div className="row-span-3">
            {" "}
            <img
              src="/display-1.png"
              alt="Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="row-span-2">
            <img
              src="/display-2.png"
              alt="Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="row-span-2">
            <img
              src="/display-3.png"
              alt="Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="row-span-2">
            <img
              src="/display-4.png"
              alt="Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3 col-start-2 row-start-3">5</div>
        </div> */}

        <div className="flex flex-wrap justify-center items-start gap-4 md:gap-8 mb-16">
          {/* Mockup 1: Dashboard */}
          <div className="w-[240px] md:w-[280px] overflow-hidden relative">
            <img
              src="/display-1.png"
              alt="Dashboard"
              className="w-full h-full object-cover"
            />
            {/* จำลองหน้า Dashboard */}
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap justify-center items-start gap-4 md:gap-8 ">
              {/* Mockup 2: Splash */}
              <div className="block w-[220px]  overflow-hidden">
                <img src="/display-2.png" />
              </div>

              {/* Mockup 3: Login */}
              <div className="block w-[220px] overflow-hidden">
                <img src="/display-3.png" />
              </div>

              {/* Mockup 4: Success Pop-up */}
              <div className=" w-[220px]  overflow-hidden relative">
                <img src="/display-4.png" alt="Dashboard Backdrop" />
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 01 & 02 Row */}
                <div className="flex flex-col md:flex-row gap-3 md:gap-6 col-span-3 md:col-span-2">
                  <div className="flex items-center  bg-[#56C596] text-white px-4 py-2 rounded-md gap-2 min-w-[240px]">
                    <span className="text-2xl">01.</span>
                    <span className=" text-white  rounded-md  text-xl ">
                      ลงทะเบียนผู้ใช้
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-paragraph text-2xl">02.</span>
                    <span className="text-title text-xl">กรอกข้อมูลสุขภาพ</span>
                  </div>
                </div>

                {/* 03 Row */}
                <div className="flex items-center gap-3">
                  <span className="text-paragraph text-2xl ">03.</span>
                  <span className="text-title text-xl">
                    ระบบจัดยา มีเภสัชกรดูแล
                  </span>
                </div>

                {/* 04 & Closing Row */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 col-span-3 md:mt-4">
                  <div className="flex items-center gap-3">
                    <span className="text-paragraph text-2xl">04.</span>
                    <span className="text-title text-xl">แจ้งเตือน</span>
                  </div>
                  <div className="text-primary  text-xl  tracking-tight">
                    คุณและครอบครัวสุขภาพดีขึ้น
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section (01-04) */}
      </main>
    </div>
  );
};
function HeartPulseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#22ab99"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M12 9v6" />
      <path d="M9 12h6" />
    </svg>
  );
}

export default MediQApp;
