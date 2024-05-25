"use client";

import React from "react";

export type variant = "primary" | "secondary";

export default function Button({
  action,
  variant,
  children,
}: {
  action: () => void;
  variant: variant;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={action}
      className="text-white px-4 py-[5px] rounded bg-shark-950 hover:bg-shark-900"
    >
      {children}
    </button>
  );
}
