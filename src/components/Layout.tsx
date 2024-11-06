import { FC, ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";

import { newsService } from "../services/newsService";
import { Post } from "../types/post";
import { convertDateToReadable } from "../lib/utils";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import ReadingCard from "./ReadingCard";
import Button from "./Button";
import PageFooter from "./PageFooter";

interface Props {
  children?: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  // I have utilized this for caching purposes to improve performance
  const { data, isLoading } = useQuery({
    queryKey: ["news"],
    queryFn: newsService.getNews,
  });

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
          {isLoading && <div>Loading...</div>}
          {(data?.data.posts || []).slice(2, 6).map((post: Post) => (
            <ReadingCard
              key={post.id}
              title={post.title}
              author={post.author}
              authorImageUrl={post.profileImage}
              date={convertDateToReadable(post.publishedAt)}
            />
          ))}
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

export default Layout;
