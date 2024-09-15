import DataTable from "@components/ui/dynamic/DataTable";
import Offcanvas from "@components/ui/dynamic/Offcanvas";
import TitleAndBtn from "@components/ui/dynamic/TitleAndBtn";
import { academicDept } from "@lib/helper/AcademicDept/AcademicDeptHelper";
import { TableProps, Tag } from "antd";
import { IoIosEye } from "react-icons/io";
import {
  useCreateDeptMutation,
  useGetAllDeptQuery,
} from "redux/features/academicManagement/academicDeptApi";
import { useGetAllFacultyQuery } from "redux/features/academicManagement/academicFacultyAPI";

import { useAppSelector } from "redux/hooks";

const AcademicDept = () => {
  const { open } = useAppSelector((state) => state.modal);
  const { data: { data: facultyList = [] } = {}, isLoading } =
    useGetAllFacultyQuery(undefined, {
      skip: open,
    });
  const { data: { data: academicDeptList = [] } = {} } =
    useGetAllDeptQuery(undefined);
  const [createAcademicDept] = useCreateDeptMutation();

  //data table columns
  const columns: TableProps["columns"] = [
    {
      title: "Serial No",
      align: "center",
      key: "serial",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Department Name",
      align: "center",
      key: "name",
      filterSearch: true,
      render: (row) => (
        <Tag
          color={
            row?.academicFaculty?.name ===
            "Faculty of Science and Information Technology"
              ? "purple"
              : row?.academicFaculty?.name === "Faculty of Engineering"
              ? "cyan"
              : row?.academicFaculty?.name ===
                "Faculty of Humanities & Social Sciences"
              ? "pink"
              : "processing"
          }
        >
          {row?.name}
        </Tag>
      ),
    },
    {
      title: "Faculty Name",
      align: "center",
      key: "code",
      render: (row) => (
        <Tag
          color={
            row?.academicFaculty?.name ===
            "Faculty of Science and Information Technology"
              ? "purple"
              : row?.academicFaculty?.name === "Faculty of Engineering"
              ? "cyan"
              : row?.academicFaculty?.name ===
                "Faculty of Humanities & Social Sciences"
              ? "pink"
              : "processing"
          }
        >
          {row?.academicFaculty?.name}
        </Tag>
      ),
    },
    {
      title: "Action",
      align: "center",
      key: "action",
      render: (row) => (
        <div
          // onClick={() => dispatch(openModal(row?._id))}
          className="flex justify-center cursor-pointer"
        >
          <IoIosEye className="text-2xl text-[#112a41]" />
        </div>
      ),
    },
  ];

  const filteredFacultyList = facultyList.map((faculty: any) => {
    return {
      label: faculty.name,
      value: faculty._id,
    };
  });

  //form input fields
  const formFields = [
    {
      label: "Faculty Name",
      type: "select",
      options: filteredFacultyList,
      placeholder: "Enter Semester Name",
      name: "academicFaculty",
      rules: {
        required: "Semester Name is required",
      },
    },
    {
      label: "Department Name",
      type: "select",
      placeholder: "Enter End Month",
      options: academicDept,
      name: "name",
      rules: {
        required: "Semester Name is required",
      },
    },
  ];

  const dataTableProps = {
    columns: columns,
    datasource: academicDeptList,
    loading: isLoading,
    // setParams: setParams,
  };
  const offcanvasProps = {
    formFields: formFields,
    onSubmitApi: createAcademicDept,
    // onSemsterChange: handleSemesterChange,
  };
  return (
    <>
      <TitleAndBtn title="Academic Semester" />
      <DataTable {...dataTableProps} />
      <Offcanvas {...offcanvasProps} />
    </>
  );
};

export default AcademicDept;
