import DataTable from "@components/ui/dynamic/DataTable";
import Offcanvas from "@components/ui/dynamic/Offcanvas";
import TitleAndBtn from "@components/ui/dynamic/TitleAndBtn";
import { TableColumnType } from "antd";
import { useState } from "react";
import {
  useCreateSemesterMutation,
  useGetSemesterListQuery,
} from "redux/features/academicManagement/academicManagement";
import { useAppSelector } from "redux/hooks";

type TQueryParams = {
  name: string;
  value: string;
};
export type TDataTypes = {
  title: string;
  align: string;
  key: string;
  render?: any;
  dataIndex?: string;
  filters?: { text: string; value: string }[];
  // onFilter?: (value: any, record: any) => boolean;
  filterSearch?: boolean;
  // name?: string;
};

const AcademicSemester = () => {
  const [params, setParams] = useState<TQueryParams[]>([]);

  const { open } = useAppSelector((state) => state.offcanvas);
  const [createAcademicSemester] = useCreateSemesterMutation();
  const { data: { semseterList = [] } = {}, isLoading } =
    useGetSemesterListQuery(params);

  //data table columns
  const columns: TableColumnType<TDataTypes>[] = [
    {
      title: "Serial No",
      align: "center",
      key: "serial",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Semester Name",
      dataIndex: "name",
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
    },
    {
      title: "Semester Code",
      dataIndex: "code",
      align: "center",
      key: "code",
    },
    {
      title: "Start Month",
      dataIndex: "startMonth",
      align: "center",
      key: "startMonth",
    },
    {
      title: "End Month",
      dataIndex: "endMonth",
      align: "center",
      key: "endMonth",
    },
    {
      title: "Academic Year",
      dataIndex: "year",
      align: "center",
      key: "year",
      filters: [
        { text: "2021", value: "2021" },
        { text: "2022", value: "2022" },
        { text: "2023", value: "2023" },
      ],
      filterSearch: true,
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

  const props = {
    open: open,
    formFields: formFields,
    onSubmitApi: createAcademicSemester,
    onSemsterChange: handleSemesterChange,
  };

  return (
    <>
      <TitleAndBtn title="Academic Semester" />
      <DataTable
        setParams={setParams}
        columns={columns}
        datasource={semseterList}
        loading={isLoading}
      />
      <Offcanvas {...props} />
    </>
  );
};

export default AcademicSemester;
