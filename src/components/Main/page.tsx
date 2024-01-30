"use client";

import Nav from "./nav";
import Card from "../Card";

export default function Page() {
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
