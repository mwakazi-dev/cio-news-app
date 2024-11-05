import { SIDE_LINKS } from "../constants/data";
import PostCard from "./PostCard";
import SectionTile from "./SectionTile";
import PostImage from "../assets/images/post_1.png";
import Tag from "./Tag";
import AdPlaceholder from "./AdPlaceholder";

const SideNav = () => {
  return (
    <aside className="h-full pt-16">
      <div className="flex flex-col ">
        <SectionTile title="Categories" />
        <nav className="pt-4">
          <ul className="flex flex-col">
            {SIDE_LINKS.map((link) => (
              <li key={link.path} className="pb-[20px]">
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
        <div className="min-w-[246px] min-h-[95px] w-full flex-wrap">
          <SectionTile title="Latest Stories" />
          <div className="flex flex-col gap-[20px] mt-[20px] h-full">
            {[1, 2, 3].map((_, index) => (
              <PostCard
                key={index}
                imageUrl={PostImage}
                date="12/03/2023"
                title="Lorem ipsum dolor sit amet."
              />
            ))}
          </div>
        </div>
        <div className="mt-[49px] ">
          <SectionTile title="Tags" />
          <div className="flex gap-2 mt-[20px] w-full flex-wrap">
            {[1, 2, 3, 4, 6, 7, 8].map((_, index) => (
              <Tag key={index} title="Lorem ipsum" />
            ))}
          </div>
        </div>
        <div className="mt-[49px] ">
          <AdPlaceholder></AdPlaceholder>
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
