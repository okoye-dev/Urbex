import { FC, ReactNode } from "react";

interface PopupProps {
  openMe?: boolean;
  closeMe?: () => void;
  children?: ReactNode;
}

const Popup: FC<PopupProps> = ({ openMe, children }: PopupProps) => {
  return (
    <div
      className={`z-10 absolute w-screen h-screen bg-white/50 backdrop-blur-sm justify-center items-center ${
        openMe ? "flex" : "hidden"
      }`}
    >
      {children}
    </div>
  );
};

export default Popup;
