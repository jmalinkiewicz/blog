import Link from "next/link";
import HomeIcon from "../icons/home";
import CubeIcon from "../icons/cube";
import SettingsIcon from "../icons/settings";
import AirplaneIcon from "../icons/airplane";

export default function Menu() {
  return (
    <div className="hidden lg:block sticky top-32 py-6 px-4 bg-[#FDF3DB] self-start rounded-lg">
      <nav className="flex flex-col gap-2 text-[14px] font-semibold">
        <Link href="/">
          <div className="flex gap-2 items-center hover:bg-honey-50 p-1">
            <HomeIcon />
            Home
          </div>
        </Link>
        <Link href="/">
          <div className="flex gap-2 items-center hover:bg-honey-50 p-1">
            <CubeIcon />
            Portfolio Website
          </div>
        </Link>
        <Link href="/">
          <div className="flex gap-2 items-center hover:bg-honey-50 p-1">
            <SettingsIcon />
            Settings
          </div>
        </Link>
        <Link href="/">
          <div className="flex gap-2 items-center hover:bg-honey-50 p-1">
            <AirplaneIcon />
            Contact
          </div>
        </Link>
      </nav>
    </div>
  );
}
