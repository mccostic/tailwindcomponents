import { Form } from "antd";
import { useForm } from "antd/lib/form/Form";
import React from "react";
import { BackButton } from "../../components/button/backButton";
import { CustomButton } from "../../components/button/customButton";
import Logo from "../../components/icons/logo";
import { CustomInput } from "../../components/input/customInput";
import { CustomItem } from "../../style/styledComponents";

export const ForgotPassword = () => {
  const { form } = useForm();

  const onFinish = () => {
    alert("i finished");
  };
  return (
    <div className="min-h-screen h-screen flex flex-col w-full">
      <div className="p-5">
        <BackButton />
      </div>
      <div className="w-full p-5 mt-16 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full max-w-xl">
          <Logo width={72} height={72} />
          <div className="w-full max-w-sm mt-6 md:mt-10">
            <Form
              className="w-full"
              layout="vertical"
              onFinish={onFinish}
              form={form}
            >
              <div className="flex flex-col gap-4">
                <CustomItem label="email" className="w-full">
                  <CustomInput type="email" placeholder="johndoe@xyz.com" />
                </CustomItem>
                <div className="flex items-center mt-3 justify-between">
                  <CustomButton
                    disabled
                    type="submit"
                    className="text-white w-full"
                  >
                    Submit
                  </CustomButton>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
