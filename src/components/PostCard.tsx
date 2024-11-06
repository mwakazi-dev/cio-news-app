import { FC } from "react";

interface Props {
  imageUrl?: any;
  date?: string;
  title?: string;
}
const PostCard: FC<Props> = ({ imageUrl, date, title }) => {
  return (
    <div className=" flex flex-col md:flex-row flex-wrap md:flex-nowrap gap-[19px] ">
      <div className="w-[100%] md:w-fit">
        <img src={imageUrl} alt="Post" className="w-full md:w-fit" />
      </div>
      <div className="flex flex-col gap-[6px] pt-[10px] pl-[2px] pb-[2px]">
        <p className="text-[#00000099] text-[12px] font-[400] leading-[17.28px]">
          {date}
        </p>
        <h2 className="text-[14px] font-[600] leading-[20.16px]">{title}</h2>
      </div>
    </div>
  );
};

export default PostCard;
