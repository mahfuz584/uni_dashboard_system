import UserInformatonForm from "@components/ui/dynamic/UserInformatonForm";
import { studentFormFields } from "@lib/helper/userManagement/userManagementHelper";

const CreateStudent = () => {
  return (
    <div>
      <UserInformatonForm inputFields={studentFormFields} />
    </div>
  );
};

export default CreateStudent;
