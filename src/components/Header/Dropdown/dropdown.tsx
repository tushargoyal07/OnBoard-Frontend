// import React, { useState } from 'react'
// import Image from "next/image"
// import details from "../../../../public/assets/details.svg"
// import cDown from "../../../../public/assets/cDown.svg"

// const Dropdown = () => {
//   const [open, setOpen] = useState(false)
//   const handlOpen
//   return (
//     <button className="flex flex-row mx-5 my-4 text-xs bg-white shadow justify-between items-center border border-gray-200 rounded-md px-3 font-normal text-gray-700 hover:text-gray-700">
//       <Image className="size-4 my-2 mr-2" alt="" src={details} />
//       <span className="flex">Details</span>
//       <Image className="size-4 my-2 ml-2 " alt="" src={cDown} />
//     </button>
//   )
// }

// export default Dropdown

// DropDownComponent.tsx
import { useState } from 'react';

const Dropdown: React.FC = () => {
  const [firstDropdownValue, setFirstDropdownValue] = useState<string>('');

  const handleFirstDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFirstDropdownValue(event.target.value); 
  };

 

  return (
    <div>
      <label>
        <select value={firstDropdownValue} onChange={handleFirstDropdownChange}>
          <option value="">Select Option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          {/* Add more options as needed */}
        </select>
      </label>

      
     
    </div>
  );
};

export default Dropdown;