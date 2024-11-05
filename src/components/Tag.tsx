import { FC } from "react";

interface Props {
  title: string;
}

const Tag: FC<Props> = ({ title }) => {
  return (
    <div className="bg-[#f9f9f9] w-fit px-[13px] py-[9px] rounded-[4px]">
      <p className="w-fit font-[400] text-[#5f5f5f] text-[12px] leading-[13.72px]  ">
        # {title}
      </p>
    </div>
  );
};

export default Tag;
