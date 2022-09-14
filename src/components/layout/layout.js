import { Layout, Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { CustomMenuItem } from "../../style/styledComponents";
import { Ic_Apps } from "../icons/ic_apps";
import { Ic_Components } from "../icons/ic_components";
import { Ic_Dashboard } from "../icons/ic_dashboard";
import { Ic_InteractiveCard } from "../icons/ic_interactivecard";
import { Ic_Login } from "../icons/ic_login";
import { Ic_Works } from "../icons/ic_works";
import Nav from "../nav/nav";

export default function LayoutContent({ children }) {
  const collapsed = useSelector((state) => state.tc.sidebar);

  const { Content } = Layout;

  const items = [
    {
      label: "Dashboard",
      key: "dashboard",
      link: "/dashboard",
      icon: <Ic_Dashboard width={32} height={32} />,
    },
    {
      label: "Components",
      key: "component",
      link: "component",
      icon: <Ic_Components width={32} height={32} />,
    },
    {
      label: "Interactive Card",
      key: "interactivecard",
      link: "cards",
      icon: <Ic_InteractiveCard width={32} height={32} />,
    },
    { label: "Apps", key: "apps", icon: <Ic_Apps width={32} height={32} /> },
    { label: "Works", key: "works", icon: <Ic_Works width={32} height={32} /> },
  ];

  const authMenuItems = [{ label: "Login", key: "login", link: "login", icon: <Ic_Login width={32} height={32}/> }];

  return (
    <Layout>
      <Nav />
      <Content className="lg:ml-[250px] z-10 text-black h-screen mt-16 min-h-screen p-6">
        {children}
      </Content>
      <Sider className={`sidebar ${!collapsed ? "" : "open"} `}>
        <div className="h-screen w-full flex flex-col items-center justify-between">
          <div className="w-full mt-24">
            <Menu defaultSelectedKeys={["card"]}>
              {items.map((i) => {
                return (
                  <CustomMenuItem key={i.key} icon={i.icon} className="gap-4">
                    <NavLink to={`/${i.link}`}>{i.label}</NavLink>
                  </CustomMenuItem>
                );
              })}
            </Menu>
          </div>
          <div className="w-full">
            <Menu>
              {authMenuItems.map((i) => {
                return (
                  <CustomMenuItem key={i.key} icon={i.icon} className="gap-4">
                    <NavLink to={`/${i.link}`}>{i.label}</NavLink>
                  </CustomMenuItem>
                );
              })}
            </Menu>
          </div>
        </div>
      </Sider>
    </Layout>
  );
}
