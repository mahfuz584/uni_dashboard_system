import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Image, Upload, UploadFile, UploadProps } from "antd";
import { useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";

const TestThree = () => {
  const { control, handleSubmit, setValue, trigger } = useForm();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | undefined>(
    undefined
  );
  const [fileList, setFileList] = useState<UploadFile[]>([]);

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
      setValue("file", file); // Set the file to react-hook-form state
    } else {
      // If the file list is empty, remove the file from react-hook-form state
      setValue("file", null); // Clear the value in the form
    }
    await trigger("file"); // Manually trigger validation for the file input
  };

  // handle form submission
  const onSubmit = async (data: FieldValues) => {
    console.log("🚀 ~ fileData", data);
  };

  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      <Controller
        name="file"
        control={control}
        rules={{ required: "Profile picture is required" }} // Validation rule
        render={({ field, fieldState }) => (
          <Form.Item
            label="Profile Picture"
            required
            validateStatus={fieldState.error ? "error" : ""}
            help={fieldState.error?.message} // Show validation message
          >
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
          </Form.Item>
        )}
      />

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TestThree;
