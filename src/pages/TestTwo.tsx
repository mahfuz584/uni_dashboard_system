import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Modal, Upload, UploadFile, UploadProps } from "antd";
import { useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";

const TestTwo = () => {
  const { control, handleSubmit, setValue } = useForm();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Convert image to base64
  const getBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  // Handle image preview
  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as File);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  // Handle file change
  const handleChange: UploadProps["onChange"] = async ({
    fileList: newFileList,
  }) => {
    setFileList(newFileList);
    if (newFileList.length > 0) {
      const file = newFileList[0].originFileObj as File;
      setValue("file", file);
    }
  };

  const handleCancel = () => setPreviewOpen(false);

  // Handle form submission
  const onSubmit = async (data: FieldValues) => {
    const file = data?.file as File;
    const base64Format = await getBase64(file);
    const payload = {
      file: base64Format,
    };
    console.log(payload);
  };

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
              onChange={handleChange}
              onPreview={handlePreview}
              beforeUpload={() => false}
            >
              {fileList.length >= 1 ? null : <PlusOutlined />}
            </Upload>
            <Modal open={previewOpen} footer={null} onCancel={handleCancel}>
              <img alt="Preview" className="w-full" src={previewImage || ""} />
            </Modal>
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

export default TestTwo;
