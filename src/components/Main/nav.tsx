import Image from "next/image";
import plus from "../../../public/assets/plus.svg";
import dots from "../../../public/assets/dots.svg";
import Api from "../api";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store.ts";

interface Navbar {
  navTitle: string;

  navCount: number;
}

export default function Nav() {
  const { grouping, ordering } = useSelector((state: RootState) => state.nav);
  const ticketCounts = {};
  const data = Api();

  return (
    <>
      {data.users.map((user) => (
        <div className="flex flex-row justify-between py-4" key={user.id}>
          {/* Left Section */}
          <span>{grouping}</span>
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-row">
              <Image className="flex mx-2" alt="" src={user.priority} />
              <span className="flex text-lg font-normal px-1">{user.name}</span>
              {data.tickets.forEach((ticket) => {
                if (ticket.userId === user.id) {
                  ticketCounts[user.id] = ticketCounts[user.id]
                    ? ticketCounts[user.id] + 1
                    : 1;
                }
              })}
              <span
                key={user.id}
                className="flex text-lg font-normal text-gray-500 px-2"
              >
                {ticketCounts[user.id]}
              </span>
            </div>
            <div className="flex flex-row">
              <Image className="flex m-1" alt="" src={plus} />
              <p></p>
              <Image className="flex m-1" alt="" src={dots} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
