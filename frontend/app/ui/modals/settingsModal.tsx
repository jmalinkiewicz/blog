"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import CheckIcon from "../icons/check";
import Button from "../buttons/button";

export default function SettingsModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { setTheme, resolvedTheme } = useTheme();

  let theme;
  if (typeof window !== "undefined") {
    theme = localStorage.getItem("theme");
  }

  if (isOpen)
    return (
      <div className="fixed z-[60] inset-0 bg-black/90 flex justify-center items-center">
        <div className="bg-honey-50 dark:bg-shark-950 max-w-lg flex-grow px-8 py-5 rounded-md">
          <h2 className=" text-2xl font-medium">
            Let's enhance your experience
          </h2>
          <div className="flex flex-col gap-2.5">
            <h3 className="text-base">Color scheme:</h3>
            <button
              onClick={() => setTheme("system")}
              className="flex justify-between items-center max-h-[35px] px-2 py-1.5 bg-white dark:bg-shark-700 dark:border-white dark:hover:bg-shark-900 hover:bg-slate-50 border-black border-2 rounded-lg"
            >
              System {theme === "system" && <CheckIcon />}
            </button>
            <button
              onClick={() => setTheme("light")}
              className="flex justify-between items-center max-h-[35px] py-1.5 px-2 bg-white dark:bg-shark-700 dark:border-white dark:hover:bg-shark-900 hover:bg-slate-50 border-black border-2 rounded-lg"
            >
              Light {theme === "light" && <CheckIcon />}
            </button>
            <button
              onClick={() => setTheme("dark")}
              className="flex justify-between items-center max-h-[35px] px-2 py-1.5 bg-white dark:bg-shark-700 dark:border-white dark:hover:bg-shark-900 hover:bg-slate-50 border-black border-2 rounded-lg"
            >
              Dark {theme === "dark" && <CheckIcon />}
            </button>
          </div>
          <div className="flex justify-end mt-8">
            <Button
              variant="primary"
              action={() => {
                onClose();
              }}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    );
}
