import { Button, Modal } from "antd";

const LogOutWarnModal = () => {
  const warning = () => {
    Modal.warning({
      title: "Session Expired",
      content: "Your session has expired. Please log in again.",
    });
  };
  return <Button onClick={warning}>OK</Button>;
};

export default LogOutWarnModal;
