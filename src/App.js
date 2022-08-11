import "./App.css";
import "antd/dist/antd.less"; // eslint-disable-next-line
import LayoutContent from "./components/layout/layout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <LayoutContent></LayoutContent>
      </BrowserRouter>
    </>
  );
}

export default App;
