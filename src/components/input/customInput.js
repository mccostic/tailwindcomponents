import { Input } from "antd";
import React from "react";
import { StyledInput } from "../../style/styledComponents";

export const CustomInput = ({
  type,
  placeholder,
  refs,
  value,
  onChange,
  name,
}) => {
  return (
    <StyledInput
      type={type}
      ref={refs}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};
