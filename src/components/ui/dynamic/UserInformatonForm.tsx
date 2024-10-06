import { PlusOutlined } from "@ant-design/icons";
import {
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Upload,
  UploadFile,
} from "antd";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Ensure styles are imported
import { usePostAPiMutation } from "redux/api/genericApi";
import { useAppDispatch } from "redux/hooks";
import CommonButton from "../common/CommonButton";

type TUserInformatonForm = {
  inputFields: any[];
  postApi: string;
};

const uploadButton = (
  <div>
    <PlusOutlined />
    <div style={{ marginTop: 8 }}>Upload</div>
  </div>
);

const UserInformatonForm: React.FC<TUserInformatonForm> = ({
  inputFields,
  postApi,
}) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const dispatch = useAppDispatch();
  const { control, handleSubmit, reset, setValue } = useForm();
  const [onSubmitApi] = usePostAPiMutation();

  const handleChange = ({ fileList }: { fileList: UploadFile[] }) => {
    console.log(fileList, "fileList");
    fileList.forEach((file) => {
      if (!file.url && !file.preview) {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as Blob);
        reader.onload = () => {
          file.preview = reader.result as string; // Set the preview URL
          setFileList([...fileList]);
        };
      }
    });
    setFileList(fileList);
    setValue("image", fileList); // Register the uploaded file
  };

  const handlePreview = async (file: UploadFile) => {
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleCancel = () => setPreviewOpen(false);

  const onSubmit = (data: any) => {
    console.log(data); // Access uploaded file(s) here
  };
  // const onSubmit: SubmitHandler<FieldValues> = async (data) => {
  //   // const toastId = toast.loading("Submitting Form ....");
  //   // const formData = new FormData();
  //   // console.log(
  //   //   "🚀 ~ constonSubmit:SubmitHandler<FieldValues>= ~ formData:",
  //   //   formData
  //   // );
  //   // formData.append("data", JSON.stringify(data));
  //   // const response = await onSubmitApi({
  //   //   url: postApi,
  //   //   body: formData,
  //   // });
  //   // if (response?.data?.success) {
  //   //   toast.success(response.data.message, { id: toastId });
  //   //   dispatch(closeOffcanvas());
  //   //   reset();
  //   // } else {
  //   //   toast.error(response?.error?.data?.errorSources?.[0]?.message, {
  //   //     id: toastId,
  //   //   });
  //   // }
  //   console.log("data", data);
  // };

  return (
    <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
      {inputFields?.map(({ segment, fields }, inputIdx: number) => (
        <div key={inputIdx}>
          <Divider
            style={{
              borderColor: "#112a41",
              color: "#112a41",
              fontSize: "20px",
              fontWeight: "bold",
            }}
            orientation="left"
          >
            {segment}
          </Divider>
          <Row gutter={18}>
            {fields?.map(
              (
                { label, type, placeholder, name, rules, options }: any,
                idx: number
              ) => (
                <Col xs={8} key={idx}>
                  <Controller
                    name={name}
                    control={control}
                    rules={rules}
                    render={({ field, fieldState }) => (
                      <Form.Item
                        label={label}
                        validateStatus={fieldState?.error ? "error" : ""}
                        help={fieldState?.error?.message}
                      >
                        {type === "text" ? (
                          <Input {...field} placeholder={placeholder} />
                        ) : type === "email" ? (
                          <Input
                            type="email"
                            {...field}
                            placeholder={placeholder}
                          />
                        ) : type === "select_" ? (
                          <Select
                            {...field}
                            showSearch
                            placeholder={placeholder}
                            filterOption={(input, option: any) =>
                              (option?.label ?? "")
                                .toLowerCase()
                                .includes(input.toLowerCase())
                            }
                            options={options}
                          />
                        ) : type === "date_" ? (
                          <DatePicker className="w-full" {...field} />
                        ) : type === "tel" ? (
                          <PhoneInput
                            {...field}
                            country={"bd"}
                            enableSearch={true}
                            inputStyle={{
                              width: "100%",
                              height: "32px",
                              borderRadius: "6px",
                              border: fieldState.error
                                ? "1px solid #ff4d4f"
                                : "1px solid #d9d9d9",
                              padding: "4px 10px 3px 47px",
                              fontSize: "14px",
                            }}
                            buttonStyle={{
                              backgroundColor: "#f5f5f5",
                              borderTopLeftRadius: "6px",
                              borderBottomLeftRadius: "6px",
                            }}
                            containerClass="ant-input"
                          />
                        ) : type === "img_file" ? (
                          <>
                            <Upload
                              {...field}
                              listType="picture-card"
                              fileList={fileList}
                              onChange={handleChange}
                              onPreview={handlePreview}
                              beforeUpload={() => false} // Prevent default upload
                            >
                              {fileList.length >= 1 ? null : <PlusOutlined />}
                            </Upload>
                            <Modal
                              open={previewOpen}
                              footer={null}
                              onCancel={handleCancel}
                            >
                              <img
                                alt="Preview"
                                style={{ width: "100%" }}
                                src={previewImage}
                              />
                            </Modal>
                          </>
                        ) : (
                          <Input {...field} placeholder={placeholder} />
                        )}
                      </Form.Item>
                    )}
                  />
                </Col>
              )
            )}
          </Row>
        </div>
      ))}
      <Form.Item>
        <CommonButton type="submit" title="Submit" variant="secondary" />
      </Form.Item>
    </Form>
  );
};

export default UserInformatonForm;
