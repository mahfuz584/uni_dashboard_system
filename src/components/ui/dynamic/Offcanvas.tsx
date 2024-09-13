import { Col, DatePicker, Drawer, Form, Input, Row, Select } from "antd";
import dayjs from "dayjs";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { closeOffcanvas } from "redux/features/offcanvas/offcanvasSlice";
import { useAppDispatch } from "redux/hooks";
import { toast } from "sonner";
import { TOfcanvasProps } from "types/offcanvasTypes";
import CommonButton from "../common/CommonButton";

const Offcanvas: React.FC<TOfcanvasProps> = ({
  open,
  formFields,
  onSubmitApi,
  onSemsterChange,
}) => {
  const { control, handleSubmit, setValue } = useForm();
  const dispatch = useAppDispatch();

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

  const onSubmit = async (data: any) => {
    const payload = createDynamicPayload(data);
    try {
      const response = onSubmitApi(payload) as unknown as { message: string };
      dispatch(closeOffcanvas());
      toast.success(`${response.message}`);
    } catch (error: any) {
      toast.error(`${error?.data?.message}`);
    }
  };

  return (
    <Drawer
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
