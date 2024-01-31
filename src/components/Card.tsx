import React, { useEffect, useState } from "react";
import Image from "next/image";
import darkMode from "../../public/assets/darkMode.svg";
import circleFill from "../../public/assets/circleFill.svg";
import axios from "axios";

interface User {
  id: string;
  name: string;
  available: boolean;
}

interface Ticket {
  id: string;
  title: string;
  tag: string[];
  userId: string;
  status: string;
}

export default function Card() {
  const [data, setData] = useState<{ tickets: Ticket[]; users: User[] }>({
    tickets: [],
    users: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers"
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {data.tickets.map((ticket) => (
        <div
          key={ticket.id}
          className="flex flex-col overflow-hidden border rounded-lg m-5 bg-white shadow-xl dark:bg-gray-800 dark:text-gray-100"
        >
          <div className="flex items-center justify-between space-x-2 bg-gray-50 px-5 py-4 dark:bg-gray-700/50">
            <div>
                <span className="flex text-sm text-gray-500">{ticket.id}</span>
            </div>
           { data.users.map((user) => user.id === ticket.userId &&
            <div key={user.id} className="-my-4">
              <div className="inline-flex items-center justify-center space-x-2">
                <div className="inline-flex size-8 items-center justify-center rounded-full bg-gray-100 text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-500">
                  {user.name[0]}
                </div>
              </div>
              <div >
                {user.available?(<div className="w-10 h-10 bg-blue-500 rounded-full"/>):(<div className="w-10 h-10 bg-red-500 rounded-full"/>)}
              </div>
            </div>)}
          </div>

          <div className="flex flex-row justify-center items-center grow">
            <div className="flex">
              <Image className="flex size-4 m-3" alt="" src={darkMode} />
            </div>

            <span className="flex grow p-3">
             {ticket.title}
            </span>
          </div>

          <div className="flex  flex-row  px-2 py-4  dark:bg-gray-700/50 dark:text-gray-400">
            <div className="flex  border rounded-md  px-1 items-center">
              <Image
                className="flex size-3 mr-3 items fill-gray-600"
                alt=""
                src={circleFill}
              />
              <div className="flex text-sm text-gray-500">Feature Request</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
