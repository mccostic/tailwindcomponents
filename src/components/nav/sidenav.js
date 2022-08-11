import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import { hideSideBar, showSideBar } from "../../app/actions/actionTypes";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../icons/logo";
import Ic_Menu from "../icons/ic_menu";

export default function SideNav() {
  const collapsed = useSelector((state) => state.tc.sidebar);

  const dispatch = useDispatch();

  // console.log(dispatch(hideSideBar(collapsed)));

  const items = [
    { label: "dashboard", key: "dashboard", icon: "" },
    { label: "deals", key: "deals" },
  ];

  const toggle = () => {
    if (collapsed === false) {
      dispatch(showSideBar(collapsed));
      console.log(showSideBar(collapsed));
    } else {
      dispatch(hideSideBar(collapsed));
      console.log(hideSideBar(collapsed));
    }
  };

  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          className={`sidebar ${!collapsed ? "" : "open"}` }
          onCollapse={() => dispatch(hideSideBar(collapsed))}
          trigger={null}
        >
          <div className="bg-white h-16 flex justify-between items-center p-4">
            <Logo />
          </div>
          <div className="w-full text-white h-full p-4">
            {/* <Menu defaultSelectedKeys={["dashboard"]}>
              {items.map((i) => {
                return (
                  <Menu.Item
                    key={i.key}
                    className="my-4 hover:bg-red-400 w-full"
                  >
                    <a href="/">{i.label}</a>
                  </Menu.Item>
                );
              })}
            </Menu> */}
          </div>
        </Sider>
      </div>
    </>
  );
}
