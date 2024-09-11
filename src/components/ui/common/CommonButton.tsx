import React from "react";
import { openOffcanvas } from "redux/features/offcanvas/offcanvasSlice";
import { useAppDispatch } from "redux/hooks";

type TButton = {
  variant: "primary" | "secondary" | "default";
  title: string;
  type?: "button" | "submit" | "reset";
};
const CommonButton: React.FC<TButton> = ({ variant, title, type }) => {
  const dispatch = useAppDispatch();
  const getVariant = (variant: TButton["variant"]) => {
    switch (variant) {
      case "primary":
        return (
          <button className="bg-[#112a41] rounded-md" type={type}>
            <p className="text-white px-3 py-2">{title}</p>
          </button>
        );
      case "secondary":
        return (
          <button
            type={type}
            onClick={() => dispatch(openOffcanvas())}
            className="bg-[#112a41] rounded-md"
          >
            <p className="text-white px-3 py-2">{title}</p>
          </button>
        );
      default:
        return (
          <button>
            <p>{title}</p>
          </button>
        );
    }
  };
  return <>{getVariant(variant)}</>;
};

export default CommonButton;
