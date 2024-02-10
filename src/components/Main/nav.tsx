import Image from "next/image";
import plus from "../../../public/assets/plus.svg";
import dots from "../../../public/assets/dots.svg";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";

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


export default function Nav({ title, id }: { title: string; id: number }) {
  const { grouping, ordering } = useSelector((state: RootState) => state.nav);
  const [color, setColor] = useState<any>();
  
  useEffect(() => {
    const getRandomColor = () => {
      // Generate a random hexadecimal color code
      return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    setColor(getRandomColor());
  }, [])
  
 
  console.log(color);
  return (
    <>
      <div className="flex flex-row justify-between py-4 px-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-row items-center">
            {
              grouping === "User" ?
              <div className={`inline-flex size-4 me-1 items-center justify-center rounded-full bg-${[color]} text-[10px] text-gray-500 `}>
                {title[0]}{title[1]}
                </div>
              :
              <Image
              className="flex mx-2"
              alt=""
              src={
                grouping === "Status"
                  ? `/assets/status/${title}.svg`
                  :  `/assets/priority/${id}.svg` 
              }
              width={16}
              height={16}
            />
            }
           
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
