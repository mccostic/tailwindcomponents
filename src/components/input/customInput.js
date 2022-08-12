import { Input } from "antd";
import React from "react";

export const CustomInput = ({ type, placeholder }) => {
  return (
    <Input
      type={type}
      className="px-4 py-2.5 w-full outline-none focus:border-[#0178ff] 
                border-2 rounded-md border-gray-400 focus:shadow-md
                placeholder-gray-500 font-medium text-[#0178ff]"
      placeholder={placeholder}
    />
  );
};
