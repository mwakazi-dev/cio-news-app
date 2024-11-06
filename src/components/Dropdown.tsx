import { FC, ReactNode } from "react";

import { ReactComponent as HiChevronDown } from "../assets/images/downward-arrow.svg";

interface Props {
  icon?: ReactNode;
  label?: string;
}

const Dropdown: FC<Props> = ({ icon, label }) => {
  return (
    <div className="relative inline-block text-left">
      <div>
        <button className="flex gap-1 items-center ">
          <span className="font-[300] text-base">{label && label}</span>
          {icon && icon}
          <HiChevronDown />
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
