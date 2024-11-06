import { FC } from "react";

interface Props {
  message: string;
}

const BlockQuote: FC<Props> = ({ message }) => {
  return (
    <div className="flex items-center gap-1">
      <div className="h-[96px] md:h-[48px] w-[2px] bg-primary mr-[8px]"></div>
      <blockquote>
        <em>“{message}”</em>
      </blockquote>
    </div>
  );
};

export default BlockQuote;
