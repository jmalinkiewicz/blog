"use client";

import Link from "next/link";
import HomeIcon from "../icons/home";
import SettingsIcon from "../icons/settings";
import LoginIcon from "../icons/login";
import SettingsModal from "../modals/settingsModal";
import { useState } from "react";

export default function Nav() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  function onClose() {
    setIsSettingsOpen(false);
  }

  return (
    <>
      <SettingsModal isOpen={isSettingsOpen} onClose={onClose} />
      <nav className="bg-honey-50 dark:bg-shark-950 fixed z-50 top-0 right-0 left-0 p-5 border-b-2 border-black/30 dark:border-white/30">
        <div className="flex justify-between max-w-screen-xl m-auto">
          <Link href="/">
            <HomeIcon />
          </Link>
          <div className="flex">
            <button
              onClick={() => setIsSettingsOpen(true)}
              className="pr-2 border-r-2 border-black/30 dark:border-white/30"
            >
              <SettingsIcon />
            </button>
            <Link className="pl-2" href="/login">
              <LoginIcon />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
