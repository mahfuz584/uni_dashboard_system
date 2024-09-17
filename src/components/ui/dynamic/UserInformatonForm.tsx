import { Col, DatePicker, Divider, Form, Input, Row, Select } from "antd";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Ensure styles are imported
import CommonButton from "../common/CommonButton";

type TUserInformatonForm = {
  inputFields: any[];
};

const UserInformatonForm: React.FC<TUserInformatonForm> = ({ inputFields }) => {
  const { control, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("🚀 ~ payload:", data);
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
                              borderRadius: "5px",
                              border: fieldState.error
                                ? "1px solid #ff4d4f"
                                : "1px solid #d9d9d9",
                              padding: "4px 10px 3px 47px",
                              fontSize: "14px",
                            }}
                            buttonStyle={{
                              backgroundColor: "#f5f5f5",
                            }}
                            containerClass="ant-input"
                          />
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
