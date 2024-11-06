import { NAV_LINKS } from "../constants/data";
import { ButtonVariant } from "../types/enums";
import { ReactComponent as AccountIcon } from "../assets/images/account.svg";
import { ReactComponent as SearchIcon } from "../assets/images/search.svg";
import { ReactComponent as Hamburger } from "../assets/images/Hamburger.svg";
import OnlineAvatar from "./OnlineAvatar";
import Logo from "./Logo";
import Button from "./Button";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");

  return (
    <>
      <header className="hidden lg:flex  justify-between items-center  mt-[24px] w-full">
        <div>
          <Logo />
        </div>
        <nav className="w-full">
          <ul className="list-none flex justify-between items-center  ml-[100px] gap-[25px]">
            {NAV_LINKS.map((link) => (
              <li
                key={link.label}
                tabIndex={0}
                className={twMerge(
                  "cursor-pointer w-fit",
                  activeLink === link.path && "text-primary",
                )}
                onClick={() => setActiveLink(link.path)}
              >
                {link.showDropdown && (
                  <span>
                    <Dropdown label={link.label} />
                  </span>
                )}
                {!link.showDropdown && (
                  <span className="font-[300] text-base ">{link.label}</span>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex  gap-[16px] items-center  ml-[41px] ">
          <Button label="Latest Magazine" variant={ButtonVariant.Primary} />
          <OnlineAvatar />
          <Dropdown icon={<AccountIcon />} />
          <SearchIcon />
        </div>
      </header>
      <header className="hidden md:flex lg:hidden justify-between items-center  mt-[24px] w-full">
        <Button label="Latest Magazine" variant={ButtonVariant.Primary} />
        <div className="">
          <Logo />
        </div>
        <div className="flex  gap-[16px] items-center  ml-[41px] ">
          <OnlineAvatar />
          <Dropdown icon={<AccountIcon />} />
          <SearchIcon />
          <Hamburger />
        </div>
      </header>

      <header className="flex md:hidden lg:hidden justify-between items-center  mt-[24px] w-full">
        <div className="flex  gap-[16px] items-center  ">
          <Dropdown icon={<AccountIcon />} />
          <SearchIcon />
        </div>
        <div className="">
          <Logo />
        </div>
        <div className="flex  gap-[16px] items-center  ">
          <OnlineAvatar />
          <Hamburger />
        </div>
      </header>
    </>
  );
};

export default Navbar;
