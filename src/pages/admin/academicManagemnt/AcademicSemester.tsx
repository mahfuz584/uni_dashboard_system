import DataTable from "@components/ui/dynamic/DataTable";
import Offcanvas from "@components/ui/dynamic/Offcanvas";
import TitleAndBtn from "@components/ui/dynamic/TitleAndBtn";
import { useAppSelector } from "redux/hooks";

const AcademicSemester = () => {
  const { open } = useAppSelector((state) => state.offcanvas);

  //form input fields
  const formFields = [
    {
      label: "Semester Name",
      type: "text",
      placeholder: "Enter Semester Name",
      name: "name",
      rules: {
        required: "Semester Name is required",
      },
    },
    {
      label: "Semester Code",
      type: "text",
      placeholder: "Enter Semester Code",
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

  return (
    <>
      <TitleAndBtn title="Academic Semester" />
      <DataTable />
      <Offcanvas open={open} formFields={formFields} />
    </>
  );
};

export default AcademicSemester;
