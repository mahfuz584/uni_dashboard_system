const CreateAdmin = () => {
  const formFields = [
    {
      password: "admin123",
      admin: {
        designation: "Admin",
        name: {
          firstName: "Mr. Mezbaul",
          middleName: "Abedin",
          lastName: "Forhan",
        },
        gender: "male",
        dateOfBirth: "1998-04-24",
        email: "mezbaul2@programming-hero.com",
        contactNo: "12356789",
        emergencyContactNo: "12356789",
        bloogGroup: "O+",
        presentAddress: "123 Main St, Cityville",
        permanentAddress: "456 Oak St, Townsville",
      },
    },
  ];
  return <div>CreateAdmin</div>;
};

export default CreateAdmin;
