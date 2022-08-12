import "./App.css";
import "antd/dist/antd.less"; // eslint-disable-next-line
import LayoutContent from "./components/layout/layout";
import { Route, Routes } from "react-router-dom";
import Login from "./modules/auth/login";
import Dashboard from "./modules/dashboard";
import { Register } from "./modules/auth/register";
import { ForgotPassword } from "./modules/auth/forgotpassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element=""/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </>
  );
}

export default App;
