import { Form } from "antd";
import { useForm } from "antd/lib/form/Form";
import React from "react";
import { Link } from "react-router-dom";
import { CustomButton } from "../../components/button/customButton";
import Logo from "../../components/icons/logo";
import { CustomInput } from "../../components/input/customInput";

export const Register = () => {
  const { form } = useForm();

  const onFinish = () => {
    alert("I have finished");
  };

  return (
    <div className="min-h-screen h-screen w-full">
      <div className="w-full p-5 h-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-6 justify-center w-full max-w-xl">
          <Logo width={72} height={72} />
          <div className="w-full max-w-sm">
            <Form
              className="w-full"
              layout="vertical"
              onFinish={onFinish}
              form={form}
            >
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <Form.Item label="firstname" className="w-full">
                    <CustomInput type="text" />
                  </Form.Item>
                  <Form.Item label="lastname" className="w-full">
                    <CustomInput type="text" />
                  </Form.Item>
                </div>
                <Form.Item label="displayname" className="w-full">
                  <CustomInput type="text" />
                </Form.Item>
                <Form.Item label="email" className="w-full">
                  <CustomInput type="email" />
                </Form.Item>
                <Form.Item label="password" className="w-full">
                  <CustomInput type="password" />
                </Form.Item>
                <div className="flex items-center mt-4 justify-between">
                  <CustomButton
                    disabled
                    type="submit"
                    className="text-white w-full"
                  >
                    Submit
                  </CustomButton>
                </div>
                <div className="flex items-center mt-6 justify-center">
                  <p className="text-center w-full">
                    Already have an account{" "}
                    <Link to="/login" className="font-bold text-[#0178ff]">
                      Login
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
