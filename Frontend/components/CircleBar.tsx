import React from "react";

export const CircleBar = ({ percent }: { percent: number }) => {
  const circumference = 30 * 2 * Math.PI;

  return (
    <div className="flex items-center justify-center overflow-hidden rounded-full scale-150">
      <svg className="w-20 h-20 -rotate-90">
        <circle
          className="text-transparent"
          strokeWidth="5"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
        />
        <circle
          className="text-black"
          stroke-width="5"
          stroke-dasharray={circumference}
          stroke-dashoffset={circumference - (percent / 100) * circumference}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
        />
      </svg>
      <span className="absolute text-black font-bold">{percent}%</span>
    </div>
  );
};
