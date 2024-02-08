"use client";
import Nav from "./nav";
import Card from "../Card";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store.ts";
import { useEffect, useState } from "react";
import Api from "../api";

const statusData = [
  { id: 1, name: "Backlog" },
  { id: 2, name: "Todo" },
  { id: 3, name: "In progress" },
  { id: 4, name: "Done" },
  { id: 5, name: "Cancelled" },
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

  /*
  const handleCards = () => {
    if (grouping === 'User') {
      return data.tickets.userId === data.users.id
    }else if(grouping === 'Priority')
  };
  */
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="">
        <div className="grid grid-cols-5">
          {filterType.map((filter) => (
            <div className="" key={filter.id}>
              <Nav title={filter.name} id={filter.id} />
              {/* {data.tickets.map(
                handleCards
              )} */}
              <Card />
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}
