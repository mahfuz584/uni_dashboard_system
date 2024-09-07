import { Drawer } from "antd";
import React from "react";
import { closeOffcanvas } from "redux/features/offcanvas/offcanvasSlice";
import { useAppDispatch } from "redux/hooks";

type TOfcanvasProps = {
  open: boolean;
};

const Offcanvas: React.FC<TOfcanvasProps> = ({ open }) => {
  const dispatch = useAppDispatch();

  return (
    <Drawer
      title="Basic Drawer"
      placement={"right"}
      onClose={() => dispatch(closeOffcanvas())}
      open={open}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

export default Offcanvas;
