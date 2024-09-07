import { Col, DatePicker, Drawer, Form, Input, Row } from "antd";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { closeOffcanvas } from "redux/features/offcanvas/offcanvasSlice";
import { useAppDispatch } from "redux/hooks";
import CommonButton from "../common/CommonButton";
type TformFields = {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  rules: {
    required: string;
  };
};
type TOfcanvasProps = {
  open: boolean;
  formFields: TformFields[];
};

const Offcanvas: React.FC<TOfcanvasProps> = ({ open, formFields }) => {
  const { control, handleSubmit } = useForm();
  const dispatch = useAppDispatch();

  const onSubmit = (data: any) => {
    console.log(data);
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
              ({ label, name, placeholder, type, rules }, idx) => (
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
                        ) : null}
                      </Form.Item>
                    )}
                  />
                </div>
              )
            )}
            <Form.Item>
              <CommonButton title="Submit" variant="primary" />
            </Form.Item>
          </Col>
        </Row>
      </form>
    </Drawer>
  );
};

export default Offcanvas;
