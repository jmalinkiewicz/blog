import Link from "next/link";
import HomeIcon from "../icons/home";
import SettingsIcon from "../icons/settings";
import LoginIcon from "../icons/login";

export default function Nav() {
  return (
    <nav className="bg-honey-50 fixed z-50 top-0 right-0 left-0 flex justify-between p-5 border-b-2 border-black/30">
      <Link href="/">
        <HomeIcon />
      </Link>
      <div className="flex">
        <Link className="pr-2 border-r-2 border-black/30" href="/settings">
          <SettingsIcon />
        </Link>
        <Link className="pl-2" href="/login">
          <LoginIcon />
        </Link>
      </div>
    </nav>
  );
}
