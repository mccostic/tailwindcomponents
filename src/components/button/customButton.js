import { Button } from "antd";
import React from "react";
import { StyledButton } from "../../style/styledComponents";

export const CustomButton = ({ children, type, className, onClick, disabled, color }) => {
  return (
    <StyledButton
      className={className}
      type={type}
      color={color}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};
