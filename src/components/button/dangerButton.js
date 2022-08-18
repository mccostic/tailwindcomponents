import { Button } from "antd";
import React from "react";
import { StyledButton } from "../../style/styledComponents";

export const DangerButton = ({
  children,
  type,
  className,
  onClick,
  disabled,
  color,
  bg
}) => {
  return (
    <StyledButton
      className={className}
      type={type}
      color={color}
      bg={bg}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};
