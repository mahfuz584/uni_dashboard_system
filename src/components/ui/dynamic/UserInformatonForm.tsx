import { Col, Divider, Form, Input, Row } from "antd";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import CommonButton from "../common/CommonButton";

type TUserInformatonForm = {
  inputFields: any[];
};

const UserInformatonForm: React.FC<TUserInformatonForm> = ({ inputFields }) => {
  const { control, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
      {inputFields?.map(
        ({ segment, fields }, inputIdx: number) => (
          console.log("segment", fields),
          (
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
                    { label, type, placeholder, name, rules }: any,
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
                            <Input {...field} placeholder={placeholder} />
                          </Form.Item>
                        )}
                      />
                    </Col>
                  )
                )}
              </Row>
            </div>
          )
        )
      )}
      <Form.Item>
        <CommonButton type="submit" title="Submit" variant="secondary" />
      </Form.Item>
    </Form>
  );
};

export default UserInformatonForm;
