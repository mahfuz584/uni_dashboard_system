import UserInformatonForm from "@components/ui/dynamic/UserInformatonForm";
import { useListApiQuery } from "redux/api/genericApi";

const CreateStudent = () => {
  // const [createStudent] = useCreateStudentMutation();
  const { data: { data: semseterList = [] } = {} } = useListApiQuery({
    url: "/academic-semesters",
  });

  const { data: { data: academicDeptList = [] } = {} } = useListApiQuery({
    url: "/academic-departments",
  });

  const studentFormFields = [
    {
      segment: "Personal Information", // Segment for personal info
      fields: [
        {
          name: "image",
          type: "img_file",
          label: "Profile Picture",
          required: true,
        },
        {
          label: "First Name",
          type: "text",
          placeholder: "Enter First Name",
          name: "data.student.name.firstName",
          required: true,
        },
        {
          label: "Middle Name",
          type: "text",
          placeholder: "Enter Middle Name",
          name: "data.student.name.middleName",
          required: true,
        },
        {
          label: "Last Name",
          type: "text",
          placeholder: "Enter Last Name",
          name: "data.student.name.lastName",
          required: true,
        },
        {
          label: "Gender",
          type: "select",
          options: [
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ],
          placeholder: "Select Gender",
          name: "data.student.gender",
          required: true,
        },
        {
          label: "Date of Birth",
          type: "date",
          placeholder: "Enter Date of Birth",
          name: "data.student.dateOfBirth",
          required: true,
        },
        {
          label: "Email",
          type: "email",
          placeholder: "Enter Email",
          name: "data.student.email",
          required: true,
        },
        {
          label: "Contact Number",
          type: "tel",
          placeholder: "Enter Contact Number",
          name: "data.student.contactNo",
          required: true,
        },
        {
          label: "Emergency Contact Number",
          type: "tel",
          placeholder: "Enter Emergency Contact Number",
          name: "data.student.emergencyContactNo",
          required: true,
        },
        {
          label: "Blood Group",
          type: "select",
          options: [
            { label: "A+", value: "A+" },
            { label: "O+", value: "O+" },
          ],
          placeholder: "Select Blood Group",
          name: "data.student.bloogGroup",
          required: true,
        },
        {
          label: "Present Address",
          type: "text",
          placeholder: "Enter Present Address",
          name: "data.student.presentAddress",
          required: true,
        },
        {
          label: "Permanent Address",
          type: "text",
          placeholder: "Enter Permanent Address",
          name: "data.student.permanentAddress",
          required: true,
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
          name: "data.student.guardian.fatherName",
          required: true,
        },
        {
          label: "Father's Occupation",
          type: "text",
          placeholder: "Enter Father's Occupation",
          name: "data.student.guardian.fatherOccupation",
          required: true,
        },
        {
          label: "Father's Contact Number",
          type: "tel",
          placeholder: "Enter Father's Contact Number",
          name: "data.student.guardian.fatherContactNo",
          required: true,
        },
        {
          label: "Mother's Name",
          type: "text",
          placeholder: "Enter Mother's Name",
          name: "data.student.guardian.motherName",
          required: true,
        },
        {
          label: "Mother's Occupation",
          type: "text",
          placeholder: "Enter Mother's Occupation",
          name: "data.student.guardian.motherOccupation",
          required: true,
        },
        {
          label: "Mother's Contact Number",
          type: "tel",
          placeholder: "Enter Mother's Contact Number",
          name: "data.student.guardian.motherContactNo",
          required: true,
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
          name: "data.student.localGuardian.name",
          required: true,
        },
        {
          label: "Local Guardian's Occupation",
          type: "text",
          placeholder: "Enter Local Guardian's Occupation",
          name: "data.student.localGuardian.occupation",
          required: true,
        },
        {
          label: "Local Guardian's Contact Number",
          type: "tel",
          placeholder: "Enter Local Guardian's Contact Number",
          name: "data.student.localGuardian.contactNo",
          required: true,
        },
        {
          label: "Local Guardian's Address",
          type: "text",
          placeholder: "Enter Local Guardian's Address",
          name: "data.student.localGuardian.address",
          required: true,
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
          name: "data.student.admissionSemester",
          required: true,
        },
        {
          label: "Academic Department",
          type: "select",
          options: academicDeptList?.map((depet: any) => ({
            label: depet.name,
            value: depet._id,
          })),
          placeholder: "Enter Academic Department",
          name: "data.student.academicDepartment",
          required: true,
        },
        {
          label: "Password",
          type: "password",
          placeholder: "Enter Password",
          name: "data.password",
          required: true,
        },
      ],
    },
  ];

  return (
    <>
      <UserInformatonForm
        inputFields={studentFormFields}
        postApi={"/users/create-student/"}
      />
    </>
  );
};

export default CreateStudent;
