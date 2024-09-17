import UserInformatonForm from "@components/ui/dynamic/UserInformatonForm";
import { useGetAllDeptQuery } from "redux/features/academicManagement/academicDeptApi";
import { useGetSemesterListQuery } from "redux/features/academicManagement/academicSemesterApi";

const CreateStudent = () => {
  const { data: { semseterList = [] } = {} } =
    useGetSemesterListQuery(undefined);

  const { data: { data: academicDeptList = [] } = {} } =
    useGetAllDeptQuery(undefined);

  const studentFormFields = [
    {
      segment: "Personal Information", // Segment for personal info
      fields: [
        {
          label: "First Name",
          type: "text",
          placeholder: "Enter First Name",
          name: "student.name.firstName",
          rules: {
            required: "First Name is required",
          },
        },
        {
          label: "Middle Name",
          type: "text",
          placeholder: "Enter Middle Name",
          name: "student.name.middleName",
          rules: {
            required: "Middle Name is required",
          },
        },
        {
          label: "Last Name",
          type: "text",
          placeholder: "Enter Last Name",
          name: "student.name.lastName",
          rules: {
            required: "Last Name is required",
          },
        },
        {
          label: "Gender",
          type: "select",
          options: [
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ],
          placeholder: "Select Gender",
          name: "student.gender",
          rules: {
            required: "Gender is required",
          },
        },
        {
          label: "Date of Birth",
          type: "date",
          placeholder: "Enter Date of Birth",
          name: "student.dateOfBirth",
          rules: {
            required: "Date of Birth is required",
          },
        },
        {
          label: "Email",
          type: "email",
          placeholder: "Enter Email",
          name: "student.email",
          rules: {
            required: "Email is required",
          },
        },
        {
          label: "Contact Number",
          type: "tel",
          placeholder: "Enter Contact Number",
          name: "student.contactNo",
          rules: {
            required: "Contact Number is required",
          },
        },
        {
          label: "Emergency Contact Number",
          type: "tel",
          placeholder: "Enter Emergency Contact Number",
          name: "student.emergencyContactNo",
          rules: {
            required: "Emergency Contact Number is required",
          },
        },
        {
          label: "Blood Group",
          type: "select",
          options: [
            { label: "A+", value: "A+" },
            { label: "O+", value: "O+" },
          ],
          placeholder: "Select Blood Group",
          name: "student.bloogGroup",
          rules: {
            required: "Blood Group is required",
          },
        },
        {
          label: "Present Address",
          type: "text",
          placeholder: "Enter Present Address",
          name: "student.presentAddress",
          rules: {
            required: "Present Address is required",
          },
        },
        {
          label: "Permanent Address",
          type: "text",
          placeholder: "Enter Permanent Address",
          name: "student.permanentAddress",
          rules: {
            required: "Permanent Address is required",
          },
        },
      ],
    },
    {
      segment: "Guardian Information", // Segment for guardian info
      fields: [
        {
          label: "Father's Name",
          type: "text",
          placeholder: "Enter Father's Name",
          name: "student.guardian.fatherName",
          rules: {
            required: "Father's Name is required",
          },
        },
        {
          label: "Father's Occupation",
          type: "text",
          placeholder: "Enter Father's Occupation",
          name: "student.guardian.fatherOccupation",
          rules: {
            required: "Father's Occupation is required",
          },
        },
        {
          label: "Father's Contact Number",
          type: "tel",
          placeholder: "Enter Father's Contact Number",
          name: "student.guardian.fatherContactNo",
          rules: {
            required: "Father's Contact Number is required",
          },
        },
        {
          label: "Mother's Name",
          type: "text",
          placeholder: "Enter Mother's Name",
          name: "student.guardian.motherName",
          rules: {
            required: "Mother's Name is required",
          },
        },
        {
          label: "Mother's Occupation",
          type: "text",
          placeholder: "Enter Mother's Occupation",
          name: "student.guardian.motherOccupation",
          rules: {
            required: "Mother's Occupation is required",
          },
        },
        {
          label: "Mother's Contact Number",
          type: "tel",
          placeholder: "Enter Mother's Contact Number",
          name: "student.guardian.motherContactNo",
          rules: {
            required: "Mother's Contact Number is required",
          },
        },
      ],
    },
    {
      segment: "Local Guardian Information", // Segment for local guardian info
      fields: [
        {
          label: "Local Guardian's Name",
          type: "text",
          placeholder: "Enter Local Guardian's Name",
          name: "student.localGuardian.name",
          rules: {
            required: "Local Guardian's Name is required",
          },
        },
        {
          label: "Local Guardian's Occupation",
          type: "text",
          placeholder: "Enter Local Guardian's Occupation",
          name: "student.localGuardian.occupation",
          rules: {
            required: "Local Guardian's Occupation is required",
          },
        },
        {
          label: "Local Guardian's Contact Number",
          type: "tel",
          placeholder: "Enter Local Guardian's Contact Number",
          name: "student.localGuardian.contactNo",
          rules: {
            required: "Local Guardian's Contact Number is required",
          },
        },
        {
          label: "Local Guardian's Address",
          type: "text",
          placeholder: "Enter Local Guardian's Address",
          name: "student.localGuardian.address",
          rules: {
            required: "Local Guardian's Address is required",
          },
        },
      ],
    },
    {
      segment: "Academic Information", // Segment for academic info
      fields: [
        {
          label: "Admission Semester",
          type: "select",
          options: semseterList?.map((semester: any) => ({
            label: `${semester.name} ${semester.year}`,
            value: semester._id,
          })),
          placeholder: "Select Admission Semester",
          name: "student.admissionSemester",
          rules: {
            required: "Admission Semester is required",
          },
        },
        {
          label: "Academic Department",
          type: "select",
          options: academicDeptList?.map((depet: any) => ({
            label: depet.name,
            value: depet._id,
          })),
          placeholder: "Enter Academic Department",
          name: "student.academicDepartment",
          rules: {
            required: "Academic Department is required",
          },
        },
      ],
    },
  ];

  return (
    <div>
      <UserInformatonForm inputFields={studentFormFields} />
    </div>
  );
};

export default CreateStudent;
