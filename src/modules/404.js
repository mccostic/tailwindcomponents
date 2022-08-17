import React from "react";
import { useNavigate } from "react-router-dom";
import { DangerButton } from "../components/button/dangerButton";
import Logo from "../components/icons/logo";
import ErrorImage from "../assets/svg/error.svg";

const ErrorPage = ({ message, backMessage }) => {
  const navigate = useNavigate();

  return (
    <div className="h-full min-h-screen w-full bg-red-600 flex justify-center items-center p-4">
      <div className="absolute top-0 left-0 p-6 hidden md:flex">
        <Logo width={70} height={70} color="white" />
      </div>
      <div className="flex flex-col items-center justify-center shadow-md p-4 bg-white rounded-md w-full max-w-md h-[30rem] gap-4">
        <h2 className="font-bold text-3xl">{message}</h2>
        <img src={ErrorImage} alt="error" width={500} height={500} />
        <div className="flex gap-4 items-center justify-around w-full mt-4">
          <DangerButton
            className=""
            onClick={() => navigate(-1)}
            color="white"
            bg={true}
          >
            {backMessage}
          </DangerButton>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
