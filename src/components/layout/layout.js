import { Layout, Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Nav from "../nav/nav";

export default function LayoutContent({ children }) {
  const collapsed = useSelector((state) => state.tc.sidebar);

  const { Content } = Layout;

  const items = [
    { label: "Dashboard", key: "dashboard", link: "/" },
    { label: "Cards", key: "card", link: "card" },
    { label: "Buttons", key: "buttons", link: "buttons" },
    { label: "Testimonials", key: "testimonials", link: "testimonials" },
    { label: "Apps", key: "apps" },
    { label: "Works", key: "works" },
  ];

  const authMenuItems = [{ label: "Login", key: "login", link: "login" }];

  return (
    <Layout>
      <Nav />
      <Content className="lg:ml-[250px] z-10 text-black p-6">
        {children}
      </Content>
      <Sider className={`sidebar ${!collapsed ? "" : "open"} `}>
        <div className="h-screen w-full flex flex-col items-center justify-between">
          <div className="w-full mt-24">
            <Menu defaultSelectedKeys={["card"]}>
              {items.map((i) => {
                return (
                  <Menu.Item key={i.key} className="my-4 w-full">
                    <NavLink to={`/${i.link}`}>{i.label}</NavLink>
                  </Menu.Item>
                );
              })}
            </Menu>
          </div>
          <div className="w-full">
            <Menu>
              {authMenuItems.map((i) => {
                return (
                  <Menu.Item key={i.key} className="my-4 w-full">
                    <NavLink to={`/${i.link}`}>{i.label}</NavLink>
                  </Menu.Item>
                );
              })}
            </Menu>
          </div>
        </div>
      </Sider>
    </Layout>
  );
}
