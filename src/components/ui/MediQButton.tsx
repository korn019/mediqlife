import React from "react";

// นิยามขนาดต่างๆ สำหรับปุ่ม
const sizeConfigs = {
  xs: {
    container: "min-w-[120px] pl-4 pr-1 py-1 text-xs",
    circle: "w-6 h-6",
    icon: "w-3 h-3",
    text: "text-xs",
  },
  sm: {
    container: "min-w-[160px] pl-6 pr-1.5 py-1.5 text-sm",
    circle: "w-8 h-8",
    icon: "w-4 h-4",
    text: "text-sm",
  },
  md: {
    container: "min-w-[200px] pl-8 pr-2 py-2 text-base",
    circle: "w-10 h-10",
    icon: "w-5 h-5",
    text: "text-base",
  },
  lg: {
    container: "min-w-[240px] pl-10 pr-2.5 py-2.5 text-lg",
    circle: "w-12 h-12",
    icon: "w-6 h-6",
    text: "text-lg",
  },
  xl: {
    container: "min-w-[280px] pl-12 pr-3 py-3 text-xl",
    circle: "w-14 h-14",
    icon: "w-7 h-7",
    text: "text-xl",
  },
  "2xl": {
    container: "min-w-[320px] pl-14 pr-4 py-4 text-2xl",
    circle: "w-16 h-16",
    icon: "w-8 h-8",
    text: "text-2xl",
  },
};

interface MediQButtonProps {
  label: string;
  size?: keyof typeof sizeConfigs; // รับค่า xs, sm, md, lg, xl, 2xl
  onClick?: () => void;
  className?: string;
}

const MediQButton = ({
  label,
  size = "sm",
  onClick,
  className = "",
}: MediQButtonProps) => {
  const config = sizeConfigs[size];

  return (
    <button
      onClick={onClick}
      className={`
        group flex items-center justify-between 
        bg-gradient-to-r from-[#4CC7AB] via-[#5ED4BC] to-[#71E2CD] 
        text-white  rounded-full 
        shadow-[0_4px_15px_rgba(76,199,171,0.3)] 
        hover:shadow-[0_8px_25px_rgba(76,199,171,0.5)] 
        active:scale-95 transition-all duration-300 cursor-pointer 
        ${config.container}
        ${className}
      `}
    >
      {/* Label */}
      <span className={`${config.text} tracking-tight`}>{label}</span>

      {/* Circle Icon Container */}
      <div
        className={`
        ${config.circle} 
        bg-white rounded-full flex items-center justify-center 
        shadow-sm group-hover:scale-110 transition-transform duration-300 ml-2
      `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className={`${config.icon} text-[#4CC7AB]`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </button>
  );
};

export default MediQButton;
