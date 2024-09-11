import DataTable from "@components/ui/dynamic/DataTable";
import Offcanvas from "@components/ui/dynamic/Offcanvas";
import TitleAndBtn from "@components/ui/dynamic/TitleAndBtn";
import {
  useCreateSemesterMutation,
  useGetSemesterListQuery,
} from "redux/features/academicManagement/academicManagement";
import { useAppSelector } from "redux/hooks";

const AcademicSemester = () => {
  const { open } = useAppSelector((state) => state.offcanvas);
  const [createAcademicSemester] = useCreateSemesterMutation();
  const { data } = useGetSemesterListQuery(undefined);
  console.log("🚀 ~ AcademicSemester ~ data:", data);

  // const data = [
  //   {
  //     id: 1,
  //     name: "Autumn",
  //     code: "01",
  //     year: "2021",
  //     startMonth: "January",
  //     endMonth: "June",
  //   },
  //   {
  //     id: 2,
  //     name: "Summer",
  //     code: "02",
  //     year: "2021",
  //     startMonth: "July",
  //     endMonth: "December",
  //   },
  //   {
  //     id: 3,
  //     name: "Fall",
  //     code: "03",
  //     year: "2021",
  //     startMonth: "January",
  //     endMonth: "June",
  //   },
  // ];

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
      <DataTable />
      <Offcanvas {...props} />
    </>
  );
};

export default AcademicSemester;
