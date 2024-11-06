import { useQuery } from "@tanstack/react-query";

import { SIDE_LINKS } from "../constants/data";
import Tag from "./Tag";
import { newsService } from "../services/newsService";
import { Post } from "../types/post";
import { convertDateToReadable } from "../lib/utils";
import AdPlaceholder from "./AdPlaceholder";
import PostCard from "./PostCard";
import SectionTile from "./SectionTitle";

const SideNav = () => {
  // I have utilized this for caching purposes to improve performance
  const { data, isLoading } = useQuery({
    queryKey: ["news"],
    queryFn: newsService.getNews,
  });

  return (
    <aside className="h-full pt-[35px]">
      <div className="flex flex-col  md:pt-[80px]">
        <SectionTile title="Categories" />
        <nav className="pt-[15px]">
          <ul className="flex md:flex-col flex-wrap gap-[20px]">
            {SIDE_LINKS.map((link) => (
              <li key={link.path}>
                <a
                  href={link.path}
                  className="text-[#1c1b21] text-[14px] font-[400] leading-[16.94px]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <>
          <div className=" w-full flex-wrap mt-[20px] md:mt-[28px]">
            <SectionTile title="Latest Posts" />
            {isLoading && <p className="text-xs mt-3">Loading...</p>}

            {!isLoading && (
              <div className="grid grid-cols-2 md:flex flex-col gap-[20px] mt-[20px]">
                {data?.data?.posts
                  ?.slice(0, 3) // get the latest 3 posts
                  .map((post: Post) => (
                    <PostCard
                      key={post.id}
                      imageUrl={post.thumbnail}
                      date={convertDateToReadable(post.publishedAt)}
                      title={post.title}
                    />
                  ))}
              </div>
            )}
          </div>
          <div className="mt-[30px] md:mt-[49px] ">
            <SectionTile title="Tags" />
            {isLoading && <p className="text-xs mt-3">Loading...</p>}
            {!isLoading && (
              <div className="flex gap-2 mt-[20px] w-full flex-wrap">
                {(data?.data?.tags || []).map((tag: string) => (
                  <Tag key={tag} title={tag} />
                ))}
              </div>
            )}
          </div>
        </>
        <div className="hidden md:block mt-[49px] ">
          <AdPlaceholder />
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
