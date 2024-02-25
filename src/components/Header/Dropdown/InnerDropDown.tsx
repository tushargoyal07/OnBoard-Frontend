import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { setGrouping, setOrdering } from "../../../redux/slices/navSlice";

export default function InnerDropdown() {
  const dispatch = useDispatch();
  const { grouping, ordering } = useSelector((state: RootState) => state.nav);

  const handleGrouping = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setGrouping(e.target.value));
  };

  const handleOrdering = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setOrdering(e.target.value));
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
          <option value="Status">Status</option>
          <option value="User">User</option>
          <option value="Priority">Priority</option>
        </select>
      </div>
      <div className="flex flex-row justify-between gap-24">
        <div className="">Ordering</div>
        <select
          className="border border-gray-200 rounded-md px-2 text-lg"
          value={ordering}
          onChange={handleOrdering}
        >
          <option value="Title">Title</option>
          <option value="Priority">Priority</option>
        </select>
      </div>
    </div>
  );
}
