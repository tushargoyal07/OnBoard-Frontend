import Image from "next/image"
import darkMode from "../../../public/assets/darkMode.svg"
import details from "../../../public/assets/details.svg"
import cDown from "../../../public/assets/cDown.svg"
export default function Header() {
    return (
        <div className="bg-white">
            <nav className="relative flex items-center justify-between">
                <button className="flex flex-row mx-5 my-4 text-xs bg-white shadow justify-between items-center border border-gray-200 rounded-md px-3 font-normal text-gray-700 hover:text-gray-700">
                    <Image className="size-4 my-2 mr-2" alt="" src={details}/>
                    <span className="flex">Details</span>
                    <Image className="size-4 my-2 ml-2 " alt="" src={cDown}/>
                </button>
                <button className="">
                    <Image className="flex size-4 m-5 " alt="" src={darkMode}/>
                </button>
            </nav>
        </div>
    )
}

 