"use client";
import Nav from "./nav";
import Card from "../Card";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import Api from "../api";

const statusData = [
  { name: "Backlog" },
  { name: "Todo" },
  { name: "In progress" },
  { name: "Done" },
  { name: "Cancelled" },
];

const priorityData = [
  { id: 0, name: "No Priority" },
  { id: 1, name: "Low" },
  { id: 2, name: "Medium" },
  { id: 3, name: "High" },
  { id: 4, name: "Urgent" },
];

export default function Page() {
  const [filterType, setFilterType] = useState<any[]>(statusData);
  const { grouping, ordering } = useSelector((state: RootState) => state.nav);
  const data = Api();

  useEffect(() => {
    if (grouping === "Status") {
      setFilterType(statusData);
    } else if (grouping === "Priority") {
      setFilterType(priorityData);
    } else if (grouping === "User") {
      setFilterType(data.users);
    }
  }, [grouping, ordering, data.users]);

  const findUser = (ticketUserId: any) => {
    return data.users.find((user) => user.id === ticketUserId);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5">
          {filterType.map((filter) => (
            <div key={filter.id} className="">
              <Nav title={filter.name} id={filter.id} />
              <div className="">
                {data.tickets.map(
                  (ticket) =>
                    (filter.name === ticket.status ||
                      filter.id === ticket.priority ||
                      filter.id === ticket.userId) && (
                      <Card
                        key={ticket.id}
                        ticketProp={ticket}
                        userProp={findUser(ticket.userId)}
                      />
                    ),
                )}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}
