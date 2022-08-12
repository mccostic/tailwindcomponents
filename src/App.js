import "./App.css";
import "antd/dist/antd.css"; // eslint-disable-next-line
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./modules/auth/login";
import Dashboard from "./modules/dashboard";
import { Register } from "./modules/auth/register";
import { ForgotPassword } from "./modules/auth/forgotpassword";
import { useSelector } from "react-redux";
import ErrorPage from "./modules/404";

function App() {

  const auth = useSelector((state) => state.auth.isLoggedIn)

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="*" element={<ErrorPage/> }/>
      </Routes>
    </>
  );
}

export default App;
