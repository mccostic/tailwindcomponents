import { Input } from "antd";
import React from "react";
import { StyledInput } from "../../style/styledComponents";

export const CustomInput = ({ type, placeholder, refs, value, onChange }) => {
  return (
    <StyledInput
      type={type}
      ref={refs}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
