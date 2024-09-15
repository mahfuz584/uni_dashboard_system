const CreateFaculty = () => {
  const formFields = [
    {
      password: "faculty123",
      faculty: {
        designation: "Lecturer",
        name: {
          firstName: "Mridul ",
          middleName: "Das",
          lastName: "Rahman",
        },
        gender: "male",
        email: "faculty3@gmail.com",
        dateOfBirth: "1990-01-01",
        contactNo: "123",
        emergencyContactNo: "123",
        bloogGroup: "A+",
        presentAddress: "123 Main St, Cityville",
        permanentAddress: "456 Oak St, Townsville",
        academicDepartment: "65b00fb010b74fcbd7a25d8e",
      },
    },
  ];
  return <div>CreateFaculty</div>;
};

export default CreateFaculty;
