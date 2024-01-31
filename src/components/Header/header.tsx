'use client'

import Image from "next/image"
import darkMode from "../../../public/assets/darkMode.svg"
import Dropdown from "./Dropdown/dropdown"


export default function Header() {
    return (
        <div className="bg-white">
            <nav className="relative flex items-center justify-between">
                <Dropdown/>
                <button className="">
                    <Image className="flex size-4 m-5 " alt="" src={darkMode}/>
                </button>
            </nav>
        </div>
    )
}

 