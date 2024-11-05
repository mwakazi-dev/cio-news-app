import React, { FC, ReactNode, useState } from "react";

import { ReactComponent as HiChevronDown } from "../assets/images/downward-arrow.svg";

interface Props {
  icon?: ReactNode;
}

const Dropdown: FC<Props> = ({ icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="relative inline-block text-left">
      <div>
        <button onClick={toggleDropdown} className="flex items-center ">
          {icon}
          <HiChevronDown />
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 z-10 w-40 mt-2 origin-top-right bg-white border border-light rounded-md shadow-lg">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Option 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Option 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Option 3
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
