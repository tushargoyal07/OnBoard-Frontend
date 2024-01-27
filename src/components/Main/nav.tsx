import Image from "next/image";
import nPriority from "../../../public/assets/priority.svg";
import plus from "../../../public/assets/plus.svg";
import dots from "../../../public/assets/dots.svg";
import Api from "../axios";
import { useEffect, useState } from "react";
import { Ticket } from "@/types/ticket";

export default function Nav() {
  return (
    <div className="flex flex-row justify-between py-4">
      {/* Left Section */}
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-row">
          <Image className="flex mx-2" alt="" src={nPriority} />
          <span className="flex text-lg font-normal px-1"></span>
          <span className="flex text-lg font-normal text-gray-500 px-2">1</span>
        </div>
        <div className="flex flex-row">
          <Image className="flex m-1" alt="" src={plus} />
          <p></p>
          <Image className="flex m-1" alt="" src={dots} />
        </div>
      </div>
    </div>
  );
}
