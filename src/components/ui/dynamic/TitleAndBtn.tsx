import React from "react";
import CommonButton from "../common/CommonButton";
type TTitleAndBtnProps = {
  title: string;
};
const TitleAndBtn: React.FC<TTitleAndBtnProps> = ({ title }) => {
  return (
    <>
      <div className="flex items-center justify-between ">
        <p className="font-bold text-xl">{title}</p>
        <CommonButton title="+ Add Semester" variant="secondary" />
      </div>
      <hr className="my-8" />
    </>
  );
};

export default TitleAndBtn;
