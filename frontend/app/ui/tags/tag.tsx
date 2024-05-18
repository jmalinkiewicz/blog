import React from "react";

export default function Tag({
  isActive,
  children,
}: {
  isActive: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`select-none py-[4px] min-w-[65px] grid place-items-center text-[12px] border-[1px] border-shark-950/80 text-shark-950/80 rounded-full ${
        isActive ? "bg-shark-900 text-white" : ""
      }`}
    >
      {children}
    </div>
  );
}
