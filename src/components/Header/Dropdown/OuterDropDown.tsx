import React, { useState, useRef, useEffect } from "react";
import InnerDropdown from "./InnerDropDown";
import Image from "next/image";

export default function OuterDropDown() {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <button
        onClick={handleDropdown}
        className=" flex justify-center items-centre border border-gray-100 rounded-md px-4 py-1 text-base font-semibold text-gray-500 shadow"
      >
        <Image
          src={"/assets/settings.svg"}
          alt="dropdownarrow"
          height={16}
          width={16}
          className="self-center mr-1"
        />
        Details
        <Image
          className="self-center ml-3"
          src={"/assets/cDown.svg"}
          alt="dropdownarrow"
          height={16}
          width={16}
        />
      </button>

      <div className="pt-1" ref={dropdownRef}>
        {showDropdown && <InnerDropdown />}
      </div>
    </>
  );
}
