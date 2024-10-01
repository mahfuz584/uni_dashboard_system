import DataTable from "@components/ui/dynamic/DataTable";
import Offcanvas from "@components/ui/dynamic/Offcanvas";
import RetriveModal from "@components/ui/dynamic/RetriveModal";
import TitleAndBtn from "@components/ui/dynamic/TitleAndBtn";
import { acadFaculty } from "@lib/helper/academicManagement/academicnManagementHelper";

import { TableProps, Tag } from "antd";
import { FaEdit } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { useListApiQuery, useRetrieveApiQuery } from "redux/api/genericApi";

import { openModal } from "redux/features/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

const AcademicFaculty = () => {
  const dispatch = useAppDispatch();
  const { open } = useAppSelector((state) => state.modal);
  //form input fields

  const { data: { data: facultyList = [] } = {}, isLoading } = useListApiQuery({
    url: "/academic-faculties",
  });
  const { data: { data: retriveData = {} } = {} } = useRetrieveApiQuery(
    {
      url: "/academic-faculties",
      id: open,
    },
    {
      skip: !open,
    }
  );

  //table columns
  const columns: TableProps["columns"] = [
    {
      title: "Serial No",
      align: "center",
      key: "serial",
      render: (_, __, index) => index + 1,
    },

    {
      title: "name",
      align: "center",
      key: "name",
      render: (row) => (
        <Tag
          color={
            row?.name === "Faculty of Science and Information Technology"
              ? "purple"
              : row?.name === "Faculty of Engineering"
              ? "cyan"
              : row?.name === "Faculty of Humanities & Social Sciences"
              ? "pink"
              : "processing"
          }
        >
          {row?.name}
        </Tag>
      ),
    },
    {
      title: "Action",
      align: "center",
      key: "action",
      render: (row) => (
        <div className="flex justify-center gap-x-4">
          <div
            onClick={() => dispatch(openModal(row?._id))}
            className="flex justify-center cursor-pointer"
          >
            <IoIosEye className="text-2xl text-[#112a41]" />
          </div>
          <div className="flex justify-center cursor-pointer">
            <FaEdit className="text-[23px] text-[#112a41]" />
          </div>
        </div>
      ),
    },
  ];

  //input fields
  const formFields = [
    {
      label: "Faculty Name",
      type: "select",
      options: acadFaculty,
      placeholder: "Enter Semester Name",
      name: "name",
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
            row?.name === "Faculty of Science and Information Technology"
              ? "purple"
              : row?.name === "Faculty of Engineering"
              ? "cyan"
              : row?.name === "Faculty of Humanities & Social Sciences"
              ? "pink"
              : "processing"
          }
        >
          {row?.name}
        </Tag>
      ),
    },
  ];

  const dataTableProps = {
    columns: columns,
    datasource: facultyList,
    loading: isLoading,
  };

  const offcanvasProps = {
    formFields: formFields,
    postApi: "/academic-faculties/create-academic-faculty",
  };

  const retrivedData = {
    retriveData: retriveData,
    title: " Academic Semester Details",
    columns: retrivedDatacolumns,
  };
  return (
    <>
      <TitleAndBtn title="Academic Faculty" />
      <Offcanvas {...offcanvasProps} />
      <DataTable {...dataTableProps} />
      <RetriveModal {...retrivedData} />
    </>
  );
};

export default AcademicFaculty;
