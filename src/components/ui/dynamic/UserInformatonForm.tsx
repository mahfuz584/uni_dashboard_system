import { PlusOutlined } from "@ant-design/icons";
import {
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Upload,
} from "antd";
import { useState } from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Ensure styles are imported
import { closeOffcanvas } from "redux/features/offcanvas/offcanvasSlice";
import { useAppDispatch } from "redux/hooks";
import { toast } from "sonner";
import CommonButton from "../common/CommonButton";

type TUserInformatonForm = {
  inputFields: any[];
  onSubmitApi: any;
};

const uploadButton = (
  <div>
    <PlusOutlined />
    <div style={{ marginTop: 8 }}>Upload</div>
  </div>
);

const UserInformatonForm: React.FC<TUserInformatonForm> = ({
  inputFields,
  onSubmitApi,
}) => {
  const [fileList, setFileList] = useState<any[]>([]);
  const dispatch = useAppDispatch();
  const { control, handleSubmit, reset } = useForm();

  const handleChange = ({ fileList: newFileList }: any) => {
    setFileList(newFileList);
  };

  const beforeUpload = (_file: any) => {
    return false;
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Submitting Form ....");
    const formData = new FormData();
    console.log(
      "🚀 ~ constonSubmit:SubmitHandler<FieldValues>= ~ formData:",
      formData
    );
    formData.append("data", JSON.stringify(data));
    const response = await onSubmitApi(formData);
    if (response?.data?.success) {
      toast.success(response.data.message, { id: toastId });
      dispatch(closeOffcanvas());
      reset();
    } else {
      toast.error(response?.error?.data?.errorSources?.[0]?.message, {
        id: toastId,
      });
    }
  };

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
                        ) : type === "tel_" ? (
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
                          <Upload
                            listType="picture-card"
                            fileList={fileList}
                            onChange={handleChange}
                            beforeUpload={beforeUpload} // Prevent automatic upload
                          >
                            {fileList.length >= 1 ? null : uploadButton}
                          </Upload>
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
