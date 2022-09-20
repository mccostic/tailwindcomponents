import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "./customButton";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <CustomButton
      onClick={() => navigate(-1)}
      color="white"
      className="font-bold"
    >
      Back
    </CustomButton>
  );
};
