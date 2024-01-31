import React, { useState } from "react";

interface InnerDropdownProps {
  selectGrouping: (value: string) => void;
  selectOrdering: (value: string) => void;
}
export default function InnerDropdown() {
  const [grouping, setGrouping] = useState<string>("");
  const [ordering, setOrdering] = useState<string>("");

  const handleGrouping = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGrouping(e.target.value);
    // selectGrouping(e.target.value);
  };
  const handleOrdering = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrdering(e.target.value);
    // selectOrdering(e.target.value);
  };
  return (
    <div className="mt-3 flex flex-col gap-6 px-6 py-5 bg-white rounded border border-gray-100 shadow">
      <div className="flex flex-row justify-between gap-24">
        <p>Grouping</p>
        <select
          value={grouping}
          onChange={handleGrouping}
          className="border border-gray-200 rounded-md text-lg px-2"
        >
          <option value="groupOption1">Status</option>
          <option value="groupOption1">User</option>
          <option value="groupOption2">Priority</option>
        </select>
      </div>
      <div className="flex flex-row justify-between gap-24">
        <div className="">Ordering</div>
        <select
          className="border border-gray-200 rounded-md px-2 text-lg"
          value={ordering}
          onChange={handleOrdering}
        >
          <option value="groupOption1">Title</option>
          <option value="groupOption2">Priority</option>
        </select>
      </div>
    </div>
  );
}
