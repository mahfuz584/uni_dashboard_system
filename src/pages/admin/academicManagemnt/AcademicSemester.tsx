import DataTable from "@components/ui/dynamic/DataTable";
import Offcanvas from "@components/ui/dynamic/Offcanvas";
import TitleAndBtn from "@components/ui/dynamic/TitleAndBtn";
import { useAppSelector } from "redux/hooks";

const AcademicSemester = () => {
  const { open } = useAppSelector((state) => state.offcanvas);
  return (
    <>
      <TitleAndBtn title="Academic Semester" />
      <DataTable />
      <Offcanvas open={open} />
    </>
  );
};

export default AcademicSemester;
