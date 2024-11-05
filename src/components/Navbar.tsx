import { NAV_LINKS } from "../constants/data";
import { ButtonVariant } from "../types/enums";
import Button from "./Button";
import Dropdown from "./Dropdown";
import Logo from "./Logo";
import OnlineAvatar from "./OnlineAvatar";
import { ReactComponent as AccountIcon } from "../assets/images/account.svg";
import { ReactComponent as SearchIcon } from "../assets/images/search.svg";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center  gap-[20px] mt-[24px]">
      <Logo />
      <nav>
        <ul className="list-none flex justify-between items-center gap-[25px]">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <a href={link.path}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-[20px] items-center ">
        <Button label="Latest Magazine" variant={ButtonVariant.Primary} />
        <OnlineAvatar />
        <Dropdown icon={<AccountIcon />} />
        <SearchIcon />
      </div>
    </header>
  );
};

export default Navbar;
