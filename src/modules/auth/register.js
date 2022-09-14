import { Form } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../app/actions/auth/authActions";
import { CustomButton } from "../../components/button/customButton";
import Logo from "../../components/icons/logo";
import { CustomInput } from "../../components/input/customInput";
import { CustomItem } from "../../style/styledComponents";

export const Register = () => {
  
  const initialState = {
    firstname: "",
    lastname: "",
    displayname: "",
    email: "",
    password: "",
  };

  const inputRef = useRef(null);

  const [form] = Form.useForm();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = () => {};

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishError = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="h-full flex items-center justify-center min-h-screen w-full">
      <div className="w-full p-5 h-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-6 justify-center w-full max-w-xl">
          <Logo width={72} height={72} />
          <div className="w-full max-w-sm">
            <Form
              className="w-full"
              layout="vertical"
              form={form}
              onFinish={onFinish}
              onFinishFailed={onFinishError}
            >
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <CustomItem
                    name="firstname"
                    label="firstname"
                    rules={[
                      {
                        required: true,
                        message: "please input firstname",
                      },
                    ]}
                    className="w-full"
                  >
                    <CustomInput
                      onChange={handleChange}
                      refs={inputRef}
                      type="text"
                    />
                  </CustomItem>
                  <CustomItem
                    name="lastname"
                    label="lastname"
                    rules={[
                      {
                        required: true,
                        message: "please input lastname",
                      },
                    ]}
                    className="w-full"
                  >
                    <CustomInput
                      onChange={handleChange}
                      type="text"
                    />
                  </CustomItem>
                </div>
                <CustomItem
                  name="displayname"
                  label="displayname"
                  className="w-full"
                >
                  <CustomInput
                    type="text"
                    onChange={handleChange}
                  />
                </CustomItem>
                <CustomItem
                  name="email"
                  label="email"
                  className="w-full"
                  rules={[
                    {
                      required: true,
                      message: "please input email",
                    },
                  ]}
                >
                  <CustomInput
                    type="email"
                    onChange={handleChange}
                  />
                </CustomItem>
                <CustomItem
                  name="password"
                  label="password"
                  className="w-full"
                  rules={[
                    {
                      required: true,
                      message: "please input password",
                    },
                  ]}
                >
                  <CustomInput
                    type="password"
                    onChange={handleChange}
                  />
                </CustomItem>
                <div className="flex items-center mt-4 justify-between">
                  <CustomButton
                    type="submit"
                    className="text-white w-full"
                    color="white"
                    htmlType="submit"
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
