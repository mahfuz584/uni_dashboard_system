import DataTable from "@components/ui/dynamic/DataTable";
import Offcanvas from "@components/ui/dynamic/Offcanvas";
import RetriveModal from "@components/ui/dynamic/RetriveModal";
import TitleAndBtn from "@components/ui/dynamic/TitleAndBtn";
import { TableProps, Tag } from "antd";
import { useState } from "react";
import { IoIosEye } from "react-icons/io";
import { useListApiQuery, useRetrieveApiQuery } from "redux/api/genericApi";
// import {
//   useCreateSemesterMutation,
//   useGetSemesterListQuery,
//   useGetSingleSemesterQuery,
// } from "redux/features/academicManagement/academicSemesterApi";

import { openModal } from "redux/features/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

type TQueryParams = {
  name: string;
  value: string;
};

const AcademicSemester = () => {
  const [params, setParams] = useState<TQueryParams[]>([]);
  const dispatch = useAppDispatch();

  const { open: modalOpen } = useAppSelector((state) => state.modal);

  const { data: { data: semseterList = [] } = {}, isLoading } = useListApiQuery(
    {
      url: "/academic-semesters",
      // params: params,
    }
  );

  const { data: { data: retriveData = {} } = {} } = useRetrieveApiQuery(
    {
      url: "/academic-semesters",
      id: modalOpen,
    },
    {
      skip: !modalOpen,
    }
  );

  //data table columns
  const columns: TableProps["columns"] = [
    {
      title: "Serial No",
      align: "center",
      key: "serial",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Semester Name",
      // dataIndex: "name",
      align: "center",
      key: "name",
      filters: [
        { text: "Autumn", value: "Autumn" },
        { text: "Summer", value: "Summer" },
        { text: "Fall", value: "Fall" },
      ],
      // onFilter: (value, record) => {
      //   return record.name === value;
      // },
      filterSearch: true,
      render: (row) => (
        <Tag
          color={
            row?.name === "Fall"
              ? "purple"
              : row?.name === "Summer"
              ? "cyan"
              : "processing"
          }
        >
          {row?.name}
        </Tag>
      ),
    },
    {
      title: "Semester Code",
      align: "center",
      key: "code",
      render: (row) => (
        <Tag
          color={
            row?.name === "Fall"
              ? "purple"
              : row?.name === "Summer"
              ? "cyan"
              : "processing"
          }
        >
          {row?.code}
        </Tag>
      ),
    },
    {
      title: "Start Month",
      align: "center",
      key: "startMonth",
      render: (row) => (
        <Tag
          color={
            row?.name === "Fall"
              ? "purple"
              : row?.name === "Summer"
              ? "cyan"
              : "processing"
          }
        >
          {row?.startMonth}
        </Tag>
      ),
    },
    {
      title: "End Month",
      align: "center",
      key: "endMonth",
      render: (row) => (
        <Tag
          color={
            row?.name === "Fall"
              ? "purple"
              : row?.name === "Summer"
              ? "cyan"
              : "processing"
          }
        >
          {row?.endMonth}
        </Tag>
      ),
    },
    {
      title: "Academic Year",
      align: "center",
      key: "year",
      filters: [
        { text: "2021", value: "2021" },
        { text: "2022", value: "2022" },
        { text: "2023", value: "2023" },
      ],
      filterSearch: true,
      render: (row) => (
        <Tag
          color={
            row?.name === "Fall"
              ? "purple"
              : row?.name === "Summer"
              ? "cyan"
              : "processing"
          }
        >
          {row?.year}
        </Tag>
      ),
    },
    {
      title: "Action",
      align: "center",
      key: "action",
      render: (row) => (
        <div
          onClick={() => dispatch(openModal(row?._id))}
          className="flex justify-center cursor-pointer"
        >
          <IoIosEye className="text-2xl text-[#112a41]" />
        </div>
      ),
    },
  ];

  //form input fields
  const formFields = [
    {
      label: "Semester Name",
      type: "select",
      options: [
        { label: "Autumn", value: "Autumn" },
        { label: "Summer", value: "Summer" },
        { label: "Fall", value: "Fall" },
      ],
      placeholder: "Enter Semester Name",
      name: "name",
      rules: {
        required: "Semester Name is required",
      },
    },
    {
      label: "Semester Code",
      type: "select",
      placeholder: "Enter Semester Code",
      options: [
        { label: "01", value: "01" },
        { label: "02", value: "02" },
        { label: "03", value: "03" },
      ],
      name: "code",
      rules: {
        required: "Semester Name is required",
      },
    },
    {
      label: "Academic Year",
      type: "year",
      placeholder: "Enter Academic Year",
      name: "year",
      rules: {
        required: "Semester Name is required",
      },
    },
    {
      label: "Start Month",
      type: "month",
      placeholder: "Enter Start Month",
      name: "startMonth",
      rules: {
        required: "Semester Name is required",
      },
    },
    {
      label: "End Month",
      type: "month",
      placeholder: "Enter End Month",
      name: "endMonth",
      rules: {
        required: "Semester Name is required",
      },
    },
  ];

  //single semester columns
  const retrivedDatacolumns: TableProps["columns"] = [
    {
      title: "Name",
      key: "name",
      align: "center",
      render: (row) => (
        <Tag
          color={
            row?.name === "Fall"
              ? "purple"
              : row?.name === "Summer"
              ? "cyan"
              : "processing"
          }
        >
          {row?.name}
        </Tag>
      ),
    },
    {
      title: "Code",
      key: "code",
      align: "center",
      render: (row) => (
        <Tag
          color={
            row?.name === "Fall"
              ? "purple"
              : row?.name === "Summer"
              ? "cyan"
              : "processing"
          }
        >
          {row?.code}
        </Tag>
      ),
    },
    {
      title: "Start Month",
      // dataIndex: "startMonth",
      key: "startMonth",
      align: "center",
      render: (row) => (
        <Tag
          color={
            row?.name === "Fall"
              ? "purple"
              : row?.name === "Summer"
              ? "cyan"
              : "processing"
          }
        >
          {row?.startMonth}
        </Tag>
      ),
    },
    {
      title: "End Month",

      key: "endMonth",
      align: "center",
      render: (row) => (
        <Tag
          color={
            row?.name === "Fall"
              ? "purple"
              : row?.name === "Summer"
              ? "cyan"
              : "processing"
          }
        >
          {row?.endMonth}
        </Tag>
      ),
    },
    {
      title: "Year",

      key: "year",
      align: "center",
      render: (row) => (
        <Tag
          color={
            row?.name === "Fall"
              ? "purple"
              : row?.name === "Summer"
              ? "cyan"
              : "processing"
          }
        >
          {row?.year}
        </Tag>
      ),
    },
  ];

  const handleSemesterChange = (
    value: string,
    setValue: (name: string, value: any) => void
  ) => {
    if (value === "Autumn") {
      setValue("code", "01");
    } else if (value === "Summer") {
      setValue("code", "02");
    } else if (value === "Fall") {
      setValue("code", "03");
    }
  };

  const dataTableProps = {
    columns: columns,
    datasource: semseterList,
    loading: isLoading,
    setParams: setParams,
  };

  const offcanvasProps = {
    formFields: formFields,
    postApi: "/academic-semesters/create-academic-semester",
    onSemsterChange: handleSemesterChange,
  };

  const retrivedData = {
    retriveData: retriveData,
    title: " Academic Semester Details",
    columns: retrivedDatacolumns,
  };

  return (
    <>
      <TitleAndBtn title="Academic Semester" />
      <DataTable {...dataTableProps} />
      <Offcanvas {...offcanvasProps} />
      <RetriveModal {...retrivedData} />
    </>
  );
};

export default AcademicSemester;
