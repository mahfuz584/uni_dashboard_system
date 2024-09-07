import { Table } from "antd";
import { ColumnsType } from "antd/es/table";

const DataTable = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];
  const columns: ColumnsType = [
    {
      title: "Name",
      dataIndex: "name",
      align: "center",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      align: "center",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      align: "center",
      key: "address",
    },
  ];
  return (
    <>
      <Table dataSource={dataSource} columns={columns} bordered />
    </>
  );
};

export default DataTable;
