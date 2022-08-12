import { Avatar } from "antd";
import Ic_Notifications from "../icons/ic_notifications";
import Ic_Menu from "../icons/ic_menu";
import Logo from "../icons/logo";
import { hideSideBar, showSideBar } from "../../app/actions/dashboardSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Nav() {
  const collapsed = useSelector((state) => state.tc.sidebar);
  const auth = useSelector((state) => state.auth.isLoggedIn);

  const dispatch = useDispatch();

  const logout = () => dispatch(auth.logout());

  console.log(auth);

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
      <div className="p-4 h-16 bg-white flex items-center z-40 shadow-md top-0 left-0 justify-center w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex w-auto items-center">
            <Logo width={40} height={40} />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center w-full gap-6">
              <button>
                <Ic_Notifications width={36} height={36} />
              </button>
              <Avatar
                shape="circle"
                style={{ backgroundColor: "#0178ff" }}
                size={40}
                className="font-bold"
              >
                SS
              </Avatar>
            </div>
            <div className="lg:hidden flex">
              <button onClick={() => toggle()}>
                <Ic_Menu width={42} height={42} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
