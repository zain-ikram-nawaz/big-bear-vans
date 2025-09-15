"use client";
import React from "react";

export default function CustomButton({ bgColor = "bg-gray-300", text, icon: Icon, }) {
  return (
    <button
      className={`flex items-center gap-2 px-4 py-1 rounded-sm hover:opacity-80 text-sm font-sans transition ${bgColor}`}
    >
      {Icon && <Icon className="text-lg" />}
      <span className="font-medium">{text}</span>
    </button>
  );
}
