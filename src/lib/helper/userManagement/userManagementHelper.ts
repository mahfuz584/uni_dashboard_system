//student information form fields
export const studentFormFields = [
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
        options: [
          { label: "Autumn", value: "65b0104110b74fcbd7a25d92" },
          { label: "Spring", value: "65b0104110b74fcbd7a25d92" },
        ],
        placeholder: "Select Admission Semester",
        name: "student.admissionSemester",
        rules: {
          required: "Admission Semester is required",
        },
      },
      {
        label: "Academic Department",
        type: "text",
        placeholder: "Enter Academic Department",
        name: "student.academicDepartment",
        rules: {
          required: "Academic Department is required",
        },
      },
    ],
  },
];

//faculty information form fields
export const facultyFormFields = [
  {
    segment: "Personal Information", // Segment for personal info
    fields: [
      {
        label: "First Name",
        type: "text",
        placeholder: "Enter First Name",
        name: "faculty.name.firstName",
        rules: {
          required: "First Name is required",
        },
      },
      {
        label: "Middle Name",
        type: "text",
        placeholder: "Enter Middle Name",
        name: "faculty.name.middleName",
        rules: {
          required: "Middle Name is required",
        },
      },
      {
        label: "Last Name",
        type: "text",
        placeholder: "Enter Last Name",
        name: "faculty.name.lastName",
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
        name: "faculty.gender",
        rules: {
          required: "Gender is required",
        },
      },
      {
        label: "Date of Birth",
        type: "date",
        placeholder: "Enter Date of Birth",
        name: "faculty.dateOfBirth",
        rules: {
          required: "Date of Birth is required",
        },
      },
      {
        label: "Email",
        type: "email",
        placeholder: "Enter Email",
        name: "faculty.email",
        rules: {
          required: "Email is required",
        },
      },
      {
        label: "Contact Number",
        type: "tel",
        placeholder: "Enter Contact Number",
        name: "faculty.contactNo",
        rules: {
          required: "Contact Number is required",
        },
      },
      {
        label: "Emergency Contact Number",
        type: "tel",
        placeholder: "Enter Emergency Contact Number",
        name: "faculty.emergencyContactNo",
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
        name: "faculty.bloogGroup",
        rules: {
          required: "Blood Group is required",
        },
      },
      {
        label: "Present Address",
        type: "text",
        placeholder: "Enter Present Address",
        name: "faculty.presentAddress",
        rules: {
          required: "Present Address is required",
        },
      },
      {
        label: "Permanent Address",
        type: "text",
        placeholder: "Enter Permanent Address",
        name: "faculty.permanentAddress",
        rules: {
          required: "Permanent Address is required",
        },
      },
    ],
  },
  {
    segment: "Professional Information", // Segment for professional info
    fields: [
      {
        label: "Designation",
        type: "text",
        placeholder: "Enter Designation",
        name: "faculty.designation",
        rules: {
          required: "Designation is required",
        },
      },
      {
        label: "Academic Department",
        type: "text",
        placeholder: "Enter Academic Department",
        name: "faculty.academicDepartment",
        rules: {
          required: "Academic Department is required",
        },
      },
    ],
  },
];

//admin information form fields
export const adminFormFields = [
  {
    segment: "Personal Information", // Segment for personal info
    fields: [
      {
        label: "First Name",
        type: "text",
        placeholder: "Enter First Name",
        name: "admin.name.firstName",
        rules: {
          required: "First Name is required",
        },
      },
      {
        label: "Middle Name",
        type: "text",
        placeholder: "Enter Middle Name",
        name: "admin.name.middleName",
        rules: {
          required: "Middle Name is required",
        },
      },
      {
        label: "Last Name",
        type: "text",
        placeholder: "Enter Last Name",
        name: "admin.name.lastName",
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
        name: "admin.gender",
        rules: {
          required: "Gender is required",
        },
      },
      {
        label: "Date of Birth",
        type: "date",
        placeholder: "Enter Date of Birth",
        name: "admin.dateOfBirth",
        rules: {
          required: "Date of Birth is required",
        },
      },
      {
        label: "Email",
        type: "email",
        placeholder: "Enter Email",
        name: "admin.email",
        rules: {
          required: "Email is required",
        },
      },
      {
        label: "Contact Number",
        type: "tel",
        placeholder: "Enter Contact Number",
        name: "admin.contactNo",
        rules: {
          required: "Contact Number is required",
        },
      },
      {
        label: "Emergency Contact Number",
        type: "tel",
        placeholder: "Enter Emergency Contact Number",
        name: "admin.emergencyContactNo",
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
        name: "admin.bloogGroup",
        rules: {
          required: "Blood Group is required",
        },
      },
      {
        label: "Present Address",
        type: "text",
        placeholder: "Enter Present Address",
        name: "admin.presentAddress",
        rules: {
          required: "Present Address is required",
        },
      },
      {
        label: "Permanent Address",
        type: "text",
        placeholder: "Enter Permanent Address",
        name: "admin.permanentAddress",
        rules: {
          required: "Permanent Address is required",
        },
      },
    ],
  },
  {
    segment: "Professional Information", // Segment for professional info
    fields: [
      {
        label: "Designation",
        type: "text",
        placeholder: "Enter Designation",
        name: "admin.designation",
        rules: {
          required: "Designation is required",
        },
      },
    ],
  },
];
