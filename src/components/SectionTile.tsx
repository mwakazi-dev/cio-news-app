import { FC } from "react";

interface Props {
  title: string;
}
const SectionTile: FC<Props> = ({ title }) => {
  return (
    <>
      <div className="flex-grow"></div>
      <div className="relative w-[197px]">
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-[#ff0000] w-[25%]"></div>
        <h2 className="text-[#1c1b21] font-[500] border-b border-[#d9d9d9] pb-[10px]">
          {title}
        </h2>
      </div>
    </>
  );
};

export default SectionTile;
