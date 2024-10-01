import { useForm } from "react-hook-form";

const About = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    const file = data.file[0];
    const base64File = await convertBase64(file);
    console.log("🚀 ~ onSubmit ~ base64File:", base64File);
  };

  const convertBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });
  };

  // const onSubmit = async (data: any) => {
  //   const file = data.file[0];
  //   const binaryFile = await file.arrayBuffer();
  //   console.log("🚀 ~ onSubmit ~ binaryFile:", binaryFile);
  // };

  // const onSubmit = async (data: any) => {
  //   const file = data.file[0];
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   console.log("🚀 ~ onSubmit ~ formData:", formData);
  // };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form-group">
          <label htmlFor="file" className="form-label">
            File:
          </label>
          <input
            type="file"
            id="file"
            {...register("file")}
            className="form-input border-2"
          />
        </div>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default About;
