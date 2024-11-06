import { SIDE_LINKS } from "../constants/data";
import PostCard from "./PostCard";
import SectionTile from "./SectionTitle";
import PostImage from "../assets/images/post_1.png";
import Tag from "./Tag";
import AdPlaceholder from "./AdPlaceholder";

const SideNav = () => {
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
        <div className=" w-full flex-wrap mt-[20px] md:mt-[28px]">
          <SectionTile title="Latest Posts" />
          <div className="grid grid-cols-2 md:flex flex-col gap-[20px] mt-[20px]">
            {[1, 2].map((_, index) => (
              <PostCard
                key={index}
                imageUrl={PostImage}
                date="12/03/2023"
                title="Lorem ipsum dolor sit amet."
              />
            ))}
          </div>
        </div>
        <div className="mt-[30px] md:mt-[49px] ">
          <SectionTile title="Tags" />
          <div className="flex gap-2 mt-[20px] w-full flex-wrap">
            {[1, 2, 3, 4, 6, 7, 8].map((_, index) => (
              <Tag key={index} title="Lorem ipsum" />
            ))}
          </div>
        </div>
        <div className="hidden md:block mt-[49px] ">
          <AdPlaceholder />
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
