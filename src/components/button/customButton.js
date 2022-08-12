import { Button } from "antd";
import React, { Children } from "react";

export const CustomButton = ({ children, type, className, onClick, disabled }) => {
  return (
    <Button
      className={`rounded-md ${className} px-4 py-2 bg-[#0178ff] disabled:bg-opacity-75 disabled:cursor-not-allowed outline-none`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};
