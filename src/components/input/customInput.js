import { Input } from "antd";
import React from "react";
import { StyledInput } from "../../style/styledComponents";

export const CustomInput = ({ type, placeholder }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
    />
  );
};
