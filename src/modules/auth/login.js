import { Form } from "antd";
import { useForm } from "antd/lib/form/Form";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CustomButton } from "../../components/button/customButton";
import Logo from "../../components/icons/logo";
import { CustomInput } from "../../components/input/customInput";
import { CustomItem } from "../../style/styledComponents";

const Login = () => {
  const baseUrl = "http://localhost:4000";

  const initialState = {
    email: "",
    password: "",
    error: "",
    redirectToDashboard: false,
  };

  const { form } = useForm();
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // const handleChange = (name) => (e) => {
  //   setValues({
  //     ...values,
  //     [name]: e.target.value,
  //   });
  // };

  const onFinish = (values) => {
    try {
      axios.post(`${baseUrl}/login`, values).then((res) => {
        localStorage.setItem("token", res.data.token)
        console.log(res.data)
      }).catch((err) => {
        if (err.response) {
          console.log(err.response.data);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onFinishError = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="min-h-screen h-full flex items-center justify-center w-full">
      <div className="w-full p-5 h-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full max-w-xl">
          <Logo width={72} height={72} />
          <div className="w-full max-w-sm mt-6">
            <Form
              className="w-full"
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishError}
              autoComplete="off"
              form={form}
            >
              <div className="flex flex-col gap-4">
                <CustomItem
                  label="email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "please input email address",
                    },
                  ]}
                >
                  <CustomInput refs={inputRef} type="email" />
                </CustomItem>

                <CustomItem label="password" name="password" rules={[{
                  required: true,
                  message: "please input password"
                }]}>
                  <CustomInput name="password" type="password" />
                </CustomItem>
                <div className="flex items-center mt-4 justify-center flex-col gap-4">
                  <CustomButton
                    className="w-full font-medium"
                    color="white"
                    htmlType="submit"
                  >
                    Submit
                  </CustomButton>
                  <Link
                    to="/forgotpassword"
                    className="text-[#0178ff] font-semibold"
                  >
                    forgot password?
                  </Link>
                </div>
              </div>
            </Form>
            <div className="flex items-center mt-6 justify-center">
              <p className="text-center w-full max-w-md">
                Don’t have an account?{" "}
                <Link to="/register" className="font-bold text-[#0178ff]">
                  Create Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
