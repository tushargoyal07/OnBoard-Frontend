"use client";
import Image from "next/image";
import circleFill from "../../public/assets/circleFill.svg";
import Api from "./api";

export default function Card({ ticketProp, userProp }: { ticketProp: any, userProp: any }) {
  const data = Api();
  return (
    <>
      <div className="flex flex-col overflow-hidden border rounded-lg m-5 bg-white shadow-xl dark:bg-gray-800 dark:text-gray-100">
        <div className="flex items-center justify-between space-x-2 bg-gray-50 px-5 py-4 dark:bg-gray-700/50">
          <div className="">
            <span className="flex text-sm text-gray-500">{ticketProp.id}</span>
          </div>
          <div className="relative -my-4">
            <div className=" inline-flex items-center justify-center space-x-2">
              <div className="inline-flex size-8 items-center justify-center rounded-full bg-gray-100 text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-500">
                {userProp.name[0]}
                
              </div>
            </div>
            <div className="absolute right-1 -translate-y-2">
              {userProp.available
              ?<div className="w-2 h-2 bg-green-500 rounded-full" />:
              <div className="w-2 h-2 bg-red-500 rounded-full" />}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center grow px-5">
          <Image
            className="flex size-4"
            alt=""
            src={`/assets/status/${ticketProp.status}.svg`}
            width={16}
            height={16}
          />
          <span className="flex grow px-1 mx-3">{ticketProp.title}</span>
        </div>
        <div className="flex flex-row px-5 py-4 dark:bg-gray-700/50 dark:text-gray-400">
          <Image
            src={`/assets/priority/${ticketProp.priority}.svg`}
            alt="priority"
            width={16}
            height={16}
          />
          <div className="flex border rounded-md px-1 mx-3 items-center">
            <Image
              className="flex size-3 mr-1 items fill-gray-600"
              alt=""
              src={circleFill}
            />
            <div className="flex text-sm text-gray-500">Feature Request</div>
          </div>
        </div>
      </div>
    </>
  );
}
