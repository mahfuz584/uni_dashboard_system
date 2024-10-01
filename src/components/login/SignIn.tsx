import { verifyToken } from "@utils/verifyToken";
import { Button, Col, Form, Input, Row } from "antd";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { usePostAPiMutation } from "redux/api/genericApi";
import { setUser, TUser } from "redux/features/auth/authSlice";
import { useAppDispatch } from "redux/hooks";
import { toast } from "sonner";

const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm();
  const [login] = usePostAPiMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in...");
    const userInfo = {
      id: data.id,
      password: data.password,
    };
    try {
      const res = await login({
        url: "/auth/login",
        body: userInfo,
      }).unwrap();
      const { accessToken } = res?.data;
      const user = verifyToken(accessToken) as TUser;
      dispatch(setUser({ user: user, token: accessToken }));
      toast.success("Logged in successfully", { id: toastId });
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      toast.error(`${(error as any)?.data?.message}`, { id: toastId });
      console.log(error);
    }
  };

  // Form input fields
  const formFields = [
    {
      name: "id",
      type: "text",
      placeholder: "Enter ID",
      label: "ID",
      rules: { required: "Please input your ID!" },
    },
    {
      name: "password",
      type: "password",
      placeholder: "Enter Password",
      label: "Password",
      rules: { required: "Please input your Password!" },
    },
  ];

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row justify="center" align="middle" className="min-h-[100vh]">
          <Col
            xs={24}
            sm={20}
            md={18}
            lg={11}
            className="rounded-lg  border-2 lg:px-28 sm:px-20 px-10 py-20"
          >
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
                        ) : (
                          <Input.Password
                            {...field}
                            placeholder={placeholder}
                          />
                        )}
                      </Form.Item>
                    )}
                  />
                </div>
              )
            )}
            <Form.Item style={{ marginTop: "24px" }}>
              <Button htmlType="submit">Log in</Button>
            </Form.Item>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default SignIn;
