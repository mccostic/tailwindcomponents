import { Button } from "antd";
import React from "react";
import { StyledButton } from "../../style/styledComponents";

export const CustomButton = ({
  children,
  className,
  onClick,
  disabled,
  color,
  bg,
  htmlType
}) => {
  return (
    <StyledButton
      className={className}
      color={color}
      onClick={onClick}
      disabled={disabled}
      bg={bg}
      htmlType={htmlType}
    >
      {children}
    </StyledButton>
  );
};
