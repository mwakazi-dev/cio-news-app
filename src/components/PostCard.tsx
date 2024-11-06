import { FC } from "react";

interface Props {
  imageUrl?: any;
  date?: string;
  title?: string;
}
const PostCard: FC<Props> = ({ imageUrl, date, title }) => {
  return (
    <div className=" flex gap-[19px] bg-light ">
      <div className="h-full">
        <img src={imageUrl} alt="Post" className="min-w-[95px] h-full" />
      </div>
      <div className="flex flex-col gap-[6px] pt-[16px]">
        <p className="text-[#00000099] text-[12px] font-[400] leading-[17.28px]">
          {date}
        </p>
        <h2 className="text-[14px] font-[600] leading-[20.16px]">{title}</h2>
      </div>
    </div>
  );
};

export default PostCard;
