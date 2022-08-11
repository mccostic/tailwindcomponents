import { Layout } from "antd";
import { useDispatch } from "react-redux";
import Nav from "../nav/nav";
import SideNav from "../nav/sidenav";

export default function LayoutContent({ children }) {

    const {Content} = Layout

  return (
    <Layout className="flex w-full">
      <SideNav />
      <Layout className="w-full">
        <Nav />
        <Content  className="md:mx-60 h-full text-black p-6 bg-white w-full">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
