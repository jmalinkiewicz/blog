import React from "react";

export default function Tag({
  isButton,
  isActive,
  children,
}: {
  isButton?: true;
  isActive?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={` 
      ${isButton ? "tag-button" : "tag"} ${isActive ? "tag-active" : ""}
      ${!isActive && isButton ? "tag-inactive" : ""}`}
    >
      {children}
    </div>
  );
}
