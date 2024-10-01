import UserInformatonForm from "@components/ui/dynamic/UserInformatonForm";
import { facultyFormFields } from "@lib/helper/userManagement/userManagementHelper";

const CreateFaculty = () => {
  return (
    <div>
      <UserInformatonForm inputFields={facultyFormFields} />
    </div>
  );
};

export default CreateFaculty;
