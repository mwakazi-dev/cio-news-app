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
      <div className="mx-[16px] md:mx-[80px] flex-grow">
        <Navbar />
        <div className=" flex flex-col md:flex-row mt-[75px] gap-[60px]">
          <div className="md:col-span-1 order-2 md:order-1">
            <SideNav />
          </div>
          <main className=" order-1  md:order-2">{children}</main>
        </div>
        <div className="flex justify-between items-center mt-[40px]">
          <h1 className="text-[20px] font-[500] leading-[22.33px]">
            Keep Reading
          </h1>
          <Button label="See All" />
        </div>
        <div className="flex flex-col md:flex-row gap-8 mt-[75px]">
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
