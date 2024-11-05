import { FC, ReactNode } from "react";

import Navbar from "./Navbar";
import SideNav from "./SideNav";
import ReadingCard from "./ReadingCard";
import Button from "./Button";
import Readingmage from "../assets/images/reading_1.png";
import PageFooter from "./PageFooter";

interface Props {
  children?: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-full flex flex-col ">
      <div className="mx-[80px] flex-grow">
        <Navbar />
        <div className=" grid grid-cols-4 gap-8 mt-[75px]">
          <div className="col-span-1">
            <SideNav />
          </div>
          <main className="col-span-3 ">{children}</main>
        </div>
        <div className="flex justify-between items-center mt-[10.28px]">
          <h1>Keep Reading</h1>
          <Button label="See All" />
        </div>
        <div className="flex gap-8 mt-[75px]">
          {[1, 2, 3, 4].map((item, index) => (
            <ReadingCard
              key={index}
              imageUrl={Readingmage}
              title="The future of banking is open"
              author="John DOe"
              authorImageUrl={Readingmage}
              date="23/04/2023"
            />
          ))}
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

export default Layout;
// imageUrl?: string;
// date?: string;
// title?: string;
// author?: string;
