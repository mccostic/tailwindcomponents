import { Form, Input } from "antd";
import { useForm } from "antd/lib/form/Form";
import React from "react";
import { Link } from "react-router-dom";
import { CustomButton } from "../../components/button/customButton";
import Logo from "../../components/icons/logo";
import { CustomInput } from "../../components/input/customInput";

const Login = () => {
  const { form } = useForm();

  const handleChange = () => {}

  const onFinish = () => {
    alert("I have finished")
  }

  return (
    <div className="min-h-screen h-screen w-full">
      <div className="w-full p-5 h-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full max-w-xl">
          <Logo width={72} height={72} />
          <div className="w-full max-w-sm mt-6">
            <Form className="w-full" layout="vertical" onFinish={onFinish} form={form}>
              <div className="flex flex-col gap-4">
                <Form.Item label="email" className="w-full">
                  <CustomInput type="email" />
                </Form.Item>
                <Form.Item label="password" className="w-full">
                  <CustomInput type="password" />
                </Form.Item>
                <div className="flex items-center mt-4 justify-center flex-col gap-4">
                  <CustomButton
                    type="submit"
                    className="text-white w-full"
                    disabled
                  >
                    Submit
                  </CustomButton>
                  <Link to="/forgotpassword" className="text-[#0178ff] font-semibold">
                    forgot password?
                  </Link>
                </div>
                <div className="flex items-center mt-6 justify-center">
                  <p className="text-center w-full max-w-[13rem]">
                    Don’t have an account?{" "}
                    <Link to="/register" className="font-bold text-[#0178ff]">
                      Create Account
                    </Link>
                  </p>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
