"use client";
import Nav from "./nav";
import Card from "../Card";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store.ts";

export default function Page() {
  const { grouping, ordering } = useSelector((state: RootState) => state.nav);

  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="">
        <div className="grid grid-cols-5">
          <Nav />
          <Card />
        </div>
      </nav>
    </div>
  );
}
