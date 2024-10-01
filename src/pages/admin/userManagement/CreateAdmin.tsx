import UserInformatonForm from "@components/ui/dynamic/UserInformatonForm";
import { adminFormFields } from "@lib/helper/userManagement/userManagementHelper";

const CreateAdmin = () => {
  return (
    <div>
      <UserInformatonForm inputFields={adminFormFields} />
    </div>
  );
};

export default CreateAdmin;
