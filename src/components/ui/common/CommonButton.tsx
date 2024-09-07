import React from "react";
import { openOffcanvas } from "redux/features/offcanvas/offcanvasSlice";
import { useAppDispatch } from "redux/hooks";

type TButton = {
  variant: "primary" | "secondary" | "default";
  title: string;
};
const CommonButton: React.FC<TButton> = ({ variant, title }) => {
  const dispatch = useAppDispatch();
  const getVariant = (variant: TButton["variant"]) => {
    switch (variant) {
      case "primary":
        return (
          <button className="bg-[#112a41]" type="submit">
            <p>{title}</p>
          </button>
        );
      case "secondary":
        return (
          <button
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
