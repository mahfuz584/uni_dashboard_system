import DataTable from "@components/ui/dynamic/DataTable";
import TitleAndBtn from "@components/ui/dynamic/TitleAndBtn";
import { TableProps } from "antd";
import { useState } from "react";
import { useListApiQuery } from "redux/api/genericApi";

const AllStudents = () => {
  const [page, setPage] = useState<number>(1);
  console.log("🚀 ~ AllStudents ~ page:", page);
  const { data: { data: studentList = [], meta = {} } = {}, isLoading } =
    useListApiQuery({
      url: "/students",
    });

  //data table columns
  const columns: TableProps["columns"] = [
    {
      title: "Serial No",
      align: "center",
      key: "serial",
      render: (_, __, index) => index + 1,
    },
    {
      title: " Student Name",
      align: "center",
      key: "student_name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      align: "center",
      key: "student_email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      align: "center",
      key: "student_phone",
      dataIndex: "contactNo",
    },
  ];

  const dataTableProps = {
    total: meta?.total,
    limit: meta?.limit,
    page: page,
    setPage: setPage,
    columns: columns,
    datasource: studentList || [],
    loading: isLoading,

    //  setParams: setParams,
  };
  return (
    <>
      <TitleAndBtn title="Students List" />
      <DataTable {...dataTableProps} />
    </>
  );
};

export default AllStudents;
