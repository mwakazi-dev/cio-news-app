import { FC } from "react";
import { ReactComponent as LogoSvgDark } from "../assets/images/logo.svg";
import { ReactComponent as LogoSvgLight } from "../assets/images/logo_light.svg";

interface Props {
  color?: "light" | "dark";
}
const Logo: FC<Props> = ({ color = "dark" }) => {
  if (color === "light") {
    return <LogoSvgLight />;
  }
  return <LogoSvgDark />;
};

export default Logo;
