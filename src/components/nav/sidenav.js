import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import { useState } from "react";
import Icon from "@ant-design/icons";
import Ic_Menu from "../icons/ic_menu";
import { useSelector } from "react-redux";

export default function SideNav({mobilecollapsed}) {

  const sideNav = useSelector((state) => state.sidebar)
  
  const initialState = false;
  const [collapsed, setCollapsed] = useState(initialState);
  const items = [
    { label: "dashboard", key: "dashboard", icon: "" },
    { label: "deals", key: "deals" },
  ];

  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        <Sider
          collapsed={collapsed}
          collapsible
          trigger={null}
          className={"bg-red-400 h-screen hidden md:block" }
          onCollapse={(value) => setCollapsed(value)}
        >
          <div
            className={
              collapsed
                ? "bg-white w-full p-4 flex items-center flex-col"
                : "bg-white w-full p-4 flex items-center justify-between"
            }
          >
            <button className="flex items-center" onClick={() => setCollapsed(!collapsed)}>
              <Icon component={Ic_Menu} />
              {collapsed ? "" : <p>Menu</p>}
            </button>
          </div>
          <div className="bg-black text-white h-full p-4 border-t-2">
          <Menu defaultSelectedKeys={['dashboard']}>
            {items.map((i, index) => {
              return (
                <Menu.Item key={i.key} className="my-4 hover:bg-red-400 w-full">
                  <a href="/">{i.label}</a>
                </Menu.Item>
              );
            })}
          </Menu>
          </div>
        </Sider>
      </div>
    </>
  );
}
