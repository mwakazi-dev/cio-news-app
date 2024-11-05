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
        "text-base text-light py-[12px] px-[15px] rounded-[8px] min-w-[152px] min-h-[43px] leading-[19.2px] font-[400]",
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
