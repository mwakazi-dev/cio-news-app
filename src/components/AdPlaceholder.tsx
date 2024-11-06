import { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const AdPlaceholder: FC<Props> = ({ children }) => {
  return (
    <div className="min-h-[100px] md:min-h-[600px] w-[300px] bg-light">
      {children}
    </div>
  );
};

export default AdPlaceholder;
