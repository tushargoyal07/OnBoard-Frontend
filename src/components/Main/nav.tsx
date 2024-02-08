import Image from "next/image";
import plus from "../../../public/assets/plus.svg";
import dots from "../../../public/assets/dots.svg";

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

export default function Nav({ title, id }) {
  return (
    <>
      <div className="flex flex-row justify-between py-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-row">
            <Image
              className="flex mx-2"
              alt=""
              src={
                grouping === "Status"
                  ? `/assets/status/${title}.svg`
                  : grouping === "User"
                    ? "/assets/dots.svg"
                    : `/assets/priority/${id}.svg`
              }
              width={16}
              height={16}
            />
            <span className="flex text-lg font-normal px-1">{title}</span>
          </div>
          <div className="flex flex-row">
            <Image className="flex m-1" alt="" src={plus} />
            <p></p>
            <Image className="flex m-1" alt="" src={dots} />
          </div>
        </div>
      </div>
    </>
  );
}
