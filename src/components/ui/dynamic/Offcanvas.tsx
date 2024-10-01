import { Col, DatePicker, Drawer, Form, Input, Row, Select } from "antd";
import dayjs from "dayjs";
import React from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { usePostAPiMutation } from "redux/api/genericApi";
import { closeOffcanvas } from "redux/features/offcanvas/offcanvasSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { toast } from "sonner";
import { ApiResponse, TOfcanvasProps } from "types/offcanvasTypes";
import CommonButton from "../common/CommonButton";

const Offcanvas: React.FC<TOfcanvasProps> = ({
  formFields,
  postApi,
  onSemsterChange,
}) => {
  const { control, handleSubmit, setValue, reset } = useForm();
  const dispatch = useAppDispatch();
  const { open } = useAppSelector((state) => state.offcanvas);
  const [onSubmitApi] = usePostAPiMutation();

  ///building the dynamic payload
  const createDynamicPayload = (data: any) => {
    const dynamicPayload: any = {};

    formFields.forEach(({ name, type }) => {
      const fieldValue = data[name];
      if (type === "year" || type === "month") {
        dynamicPayload[name] = fieldValue
          ? dayjs(fieldValue).format(type === "year" ? "YYYY" : "MMMM")
          : null;
      } else if (fieldValue) {
        dynamicPayload[name] = fieldValue;
      }
    });
    return dynamicPayload;
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const payload = createDynamicPayload(data);
    try {
      const response = (await onSubmitApi({
        url: postApi,
        body: payload,
      })) as unknown as ApiResponse;
      if (response?.data?.success) {
        toast.success(response.data.message);
        dispatch(closeOffcanvas());
        reset();
      } else {
        toast.error(response?.error?.data?.errorSources?.[0]?.message);
      }
    } catch (error: any) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Drawer
      width={400}
      title="Basic Drawer"
      placement={"right"}
      onClose={() => dispatch(closeOffcanvas())}
      open={open}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row justify={"center"}>
          <Col xs={23}>
            {formFields.map(
              ({ label, name, placeholder, type, rules, options }, idx) => (
                <div key={idx} style={{ marginBottom: "16px" }}>
                  <Controller
                    name={name}
                    control={control}
                    rules={rules}
                    render={({ field, fieldState }) => (
                      <Form.Item
                        label={label}
                        required={!!rules?.required}
                        validateStatus={fieldState?.error ? "error" : ""}
                        help={fieldState?.error?.message}
                        labelCol={{ span: 24 }}
                      >
                        {type === "text" ? (
                          <Input {...field} placeholder={placeholder} />
                        ) : type === "year" ? (
                          <DatePicker
                            className="w-full"
                            picker="year"
                            {...field}
                            placeholder={placeholder}
                          />
                        ) : type === "month" ? (
                          <DatePicker
                            className="w-full"
                            picker="month"
                            {...field}
                            placeholder={placeholder}
                          />
                        ) : type === "select" ? (
                          <Select
                            {...field}
                            showSearch
                            placeholder={placeholder}
                            filterOption={(input, option) =>
                              (option?.label ?? "")
                                .toLowerCase()
                                .includes(input.toLowerCase())
                            }
                            options={options}
                            onChange={(value) => {
                              field.onChange(value);
                              if (onSemsterChange) {
                                onSemsterChange(value, setValue);
                              }
                            }}
                          />
                        ) : type === "select" && name === "code" ? (
                          <Select
                            disabled
                            {...field}
                            showSearch
                            placeholder={placeholder}
                            options={options}
                          />
                        ) : type === "textArea" ? (
                          <Input.TextArea
                            {...field}
                            placeholder={placeholder}
                          />
                        ) : null}
                      </Form.Item>
                    )}
                  />
                </div>
              )
            )}
            <Form.Item>
              <CommonButton type="submit" title="Submit" variant="secondary" />
            </Form.Item>
          </Col>
        </Row>
      </form>
    </Drawer>
  );
};

export default Offcanvas;
