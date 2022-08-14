import { Form } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CustomButton } from "../../components/button/customButton";
import Logo from "../../components/icons/logo";
import { CustomInput } from "../../components/input/customInput";
import { CustomItem } from "../../style/styledComponents";

const Login = () => {
  const { form } = useForm();
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  },[]);
  // const handleChange = () => {};

  const onFinish = (data) => {
    console.log(data.email);
  };

  return (
    <div className="min-h-screen h-screen w-full">
      <div className="w-full p-5 h-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full max-w-xl">
          <Logo width={72} height={72} />
          <div className="w-full max-w-sm mt-6">
            <Form
              className="w-full"
              layout="vertical"
              onFinish={onFinish}
              form={form}
            >
              <div className="flex flex-col gap-4">
                <CustomItem label="email">
                  <CustomInput refs={inputRef} type="email" />
                </CustomItem>
                <CustomItem label="password">
                  <CustomInput type="password" />
                </CustomItem>
                <div className="flex items-center mt-4 justify-center flex-col gap-4">
                  <CustomButton
                    type="submit"
                    className="w-full font-medium"
                    color="white"
                    disabled
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
