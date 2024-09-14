import { Modal, Table, TableProps } from "antd";
import { closeModal } from "redux/features/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

const RetriveModal = <T extends Record<string, any>>({
  retriveData,
  title,
  columns,
}: {
  retriveData: T;
  title: string;
  columns: TableProps["columns"];
}) => {
  const { open } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  const modifiedData = [retriveData];

  return (
    <Modal
      title={title}
      centered
      open={open}
      onOk={() => dispatch(closeModal())}
      onCancel={() => dispatch(closeModal())}
      width={1000}
    >
      <Table
        columns={columns}
        dataSource={modifiedData}
        className="my-14"
        pagination={false}
      />
    </Modal>
  );
};

export default RetriveModal;
