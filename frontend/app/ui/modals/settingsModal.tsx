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
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const theme = localStorage?.getItem("theme");

  if (!mounted) return null;

  if (isOpen)
    return (
      <div className="fixed z-[60] inset-0 bg-blue-500/50 flex justify-center items-center">
        <div className="bg-honey-50 max-w-lg flex-grow px-8 py-5">
          <h2 className=" text-2xl font-medium">
            Let's enhance your experience
          </h2>
          <div className="flex flex-col gap-2.5">
            <h3 className="text-base">Color scheme:</h3>
            <button
              onClick={() => setTheme("system")}
              className="flex justify-between items-center max-h-[35px] px-2 py-1.5 bg-white hover:bg-slate-50 border-black border-2 rounded-lg"
            >
              System {theme === "system" && <CheckIcon />}
            </button>
            <button
              onClick={() => setTheme("light")}
              className="flex justify-between items-center max-h-[35px] py-1.5 px-2 bg-white hover:bg-slate-50 border-black border-2 rounded-lg"
            >
              Light {theme === "light" && <CheckIcon />}
            </button>
            <button
              onClick={() => setTheme("dark")}
              className="flex justify-between items-center max-h-[35px] px-2 py-1.5 bg-white hover:bg-slate-50 border-black border-2 rounded-lg"
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
