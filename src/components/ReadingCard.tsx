import { FC } from "react";

import Tag from "./Tag";

interface Props {
  imageUrl?: string;
  date?: string;
  title?: string;
  author?: string;
  authorImageUrl?: string;
}

const ReadingCard: FC<Props> = ({
  imageUrl,
  date,
  title,
  author,
  authorImageUrl,
}) => {
  return (
    <div className="flex flex-col max-w-[317px] max-h-[354px] w-full flex-wrap">
      <div>
        <img src={imageUrl} alt="Banner" />
      </div>
      <div className="flex gap-1 py-2">
        <Tag title="News" />
        <Tag title="Smart banking summit" />
      </div>
      <div>
        <p className="text-[16px] text-[#1c1b21] font-[400] leading-[23.04px]">
          {title}
        </p>
      </div>
      <div className="flex justify-between items-center gap-1 mt-[6px]">
        <div className="flex items-center gap-1 ">
          <img
            src={authorImageUrl}
            className="w-[24px] h-[24px] rounded-full"
            alt="Author"
          />
          <p className="text-[#000000B2] text-[12px] leading-[17.28px]">
            {author}
          </p>
        </div>
        <p className="text-[#000000B2] text-[12px] leading-[17.28px] font-[400]">
          {date}
        </p>
      </div>
    </div>
  );
};

export default ReadingCard;
