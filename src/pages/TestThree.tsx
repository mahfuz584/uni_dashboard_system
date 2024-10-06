import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Image, Upload, UploadFile, UploadProps } from "antd";
import { useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";

const TestThree = () => {
  const { control, handleSubmit, setValue } = useForm();
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
  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    if (newFileList.length > 0) {
      const file = newFileList[0]?.originFileObj as File;
      setValue("file", file);
    }
  };

  // handle form submission
  const onSubmit = (data: FieldValues) => {
    const formData = new FormData();
    if (data.file) {
      formData.append("file", data?.file);
    }
    const payload = {
      file: formData.get("file"),
    };
    console.log(payload);
  };

  // upload button content
  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="file"
        render={({ field }) => (
          <>
            <Upload
              {...field}
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
              beforeUpload={() => false}
            >
              {fileList.length >= 1 ? null : uploadButton}
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
