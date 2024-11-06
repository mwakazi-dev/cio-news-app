import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { ButtonVariant } from "../types/enums";
interface Props {
  label: string;
  variant?: ButtonVariant;
  onClick?: () => void;
}

const Button: FC<Props> = ({
  label,
  variant = ButtonVariant.Default,
  onClick = () => null,
}) => {
  return (
    <button
      className={twMerge(
        "min-w-[152px] text-light px-[15px] py-[12px] rounded-[8px] font-[300] text-[16px] leading-[19.2px]",
        variant === "primary" && "bg-primary ",
        variant === "secondary" && "bg-secondary text-light",
        variant === "default" && "border  border-[#1c1b21]  text-darkest",
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
export default Button;
