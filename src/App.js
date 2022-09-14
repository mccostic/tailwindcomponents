import "./App.css";
import "antd/dist/antd.css"; // eslint-disable-next-line
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./modules/auth/login";
import Dashboard from "./modules/dashboard";
import { Register } from "./modules/auth/register";
import { ForgotPassword } from "./modules/auth/forgotpassword";
import ErrorPage from "./modules/404";
import PrivateRoute from "./components/utils/privateRoute";
import Home from "./modules/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<ErrorPage message="error 404" backMessage="please take a step back"/>} />
      </Routes>
    </>
  );
}

export default App;
