import React, { FC } from "react";

interface Props {
  message: string;
}

const BlockQuote: FC<Props> = ({ message }) => {
  return (
    <div className="flex items-center gap-1">
      <div className="h-[48px] w-[2px] bg-primary mr-[8px]"></div>
      <blockquote>“{message}”</blockquote>
    </div>
  );
};

export default BlockQuote;
