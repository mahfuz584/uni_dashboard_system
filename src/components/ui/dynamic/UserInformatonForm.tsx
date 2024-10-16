import { PlusOutlined } from "@ant-design/icons";
import {
  Col,
  DatePicker,
  Divider,
  Form,
  Image,
  Input,
  Row,
  Select,
  Upload,
  UploadFile,
  UploadProps,
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
import { usePostAPiMutation } from "redux/api/genericApi";
import { closeOffcanvas } from "redux/features/offcanvas/offcanvasSlice";
import { useAppDispatch } from "redux/hooks";
import { toast } from "sonner";
import { ApiResponse } from "types/offcanvasTypes";
import CommonButton from "../common/CommonButton";

type TUserInformatonForm = {
  inputFields: any[];
  postApi: string;
};

const UserInformatonForm: React.FC<TUserInformatonForm> = ({
  inputFields,
  postApi,
}) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | undefined>(
    undefined
  );
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const { control, handleSubmit, setValue, trigger, reset } = useForm();
  const dispatch = useAppDispatch();
  const [onSubmitApi] = usePostAPiMutation();

  // blob image format
  const getBlobImg = (file: File) => {
    const blobUrl = URL.createObjectURL(file);
    return blobUrl;
  };

  // handle image preview
  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = getBlobImg(file.originFileObj as File);
    }
    setPreviewImage(file?.url || file.preview);
    setPreviewOpen(true);
  };

  // cleanup Blob URL
  const handleCancelPreview = () => {
    if (previewImage) {
      URL.revokeObjectURL(previewImage);
    }
    setPreviewImage(undefined);
    setPreviewOpen(false);
  };

  // handle file list change
  const handleChange: UploadProps["onChange"] = async ({
    fileList: newFileList,
  }) => {
    setFileList(newFileList);
    if (newFileList.length > 0) {
      const file = newFileList[0]?.originFileObj as File;
      setValue("image", file);
    } else {
      setValue("image", null);
    }
    await trigger("image");
  };
  const onSubmit: SubmitHandler<FieldValues> = async (submittedData) => {
    const toastId = toast.loading("Submitting Form ....");
    const formData = new FormData();
    Object.keys(submittedData).forEach((key) => {
      if (key === "image") {
        formData.append("file", submittedData[key]);
      } else {
        formData.append(key, JSON.stringify(submittedData[key]));
      }
    });
    try {
      const response = (await onSubmitApi({
        url: postApi,
        body: formData,
      })) as unknown as ApiResponse;
      if (response?.data?.success) {
        toast.success(response.data.message, { id: toastId });
        dispatch(closeOffcanvas());
        reset();
      } else {
        toast.error(response?.error?.data?.errorSources?.[0]?.message, {
          id: toastId,
        });
      }
    } catch (error: any) {
      console.log(error);
      toast.error("Something went wrong");
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
                { label, type, placeholder, name, required, options }: any,
                idx: number
              ) => (
                <Col xs={8} key={idx}>
                  <Controller
                    name={name}
                    control={control}
                    rules={{
                      required: required ? `${label} is required` : false,
                    }}
                    render={({ field, fieldState }) => (
                      <Form.Item
                        required
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
                        ) : type === "select" ? (
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
                        ) : type === "date" ? (
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
                              listType="picture-card"
                              fileList={fileList}
                              onPreview={handlePreview}
                              onChange={handleChange}
                              beforeUpload={() => false} // Prevent auto-uploading
                            >
                              {fileList.length >= 1 ? null : (
                                <button type="button">
                                  <PlusOutlined />
                                  <div>Upload</div>
                                </button>
                              )}
                            </Upload>
                            {previewImage && (
                              <Image
                                wrapperStyle={{ display: "none" }}
                                preview={{
                                  visible: previewOpen,
                                  onVisibleChange: (visible) => {
                                    if (!visible) {
                                      handleCancelPreview();
                                    }
                                  },
                                }}
                                src={previewImage}
                              />
                            )}
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
