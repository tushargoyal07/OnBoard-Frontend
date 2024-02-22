"use client";
import Image from "next/image";
import darkMode from "../../../public/assets/darkMode.svg";
import OuterDropdown from "./Dropdown/OuterDropDown";
export default function Header() {
  return (
    <div className="bg-white">
      <nav className="px-8 py-4 items-center">
        <div className="absolute left-2">
          <OuterDropdown />
        </div>
        <button className="">
          <Image
            className="-translate-y-3 absolute right-2 size-4"
            alt=""
            src={darkMode}
          />
        </button>
      </nav>
    </div>
  );
}
