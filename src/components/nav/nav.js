import { Avatar } from "antd";
import Ic_Notifications from "../icons/ic_notifications";
import Ic_Menu from "../icons/ic_menu";
import Logo from "../icons/logo";
import { hideSideBar, showSideBar } from "../../app/actions/dashboardSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Nav() {
  const collapsed = useSelector((state) => state.tc.sidebar);
  const auth = useSelector((state) => state.auth.isLoggedIn)
  
  const dispatch = useDispatch();

  const logout = () => dispatch(auth.logout())

  if (!auth) return null

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
    <div className="p-4 h-16 bg-white shadow-black shadow-md top-0 z-50 flex items-center justify-center w-full">
      <div className="flex items-center justify-between w-full md:justify-end">
        <div className="flex w-auto md:hidden items-center">
          <Logo width={40} height={40}/>
        </div>
        <div className="flex items-center gap-2">
          <div className="md:flex items-center gap-2 w-full hidden md:gap-6">
            <button>
              <Ic_Notifications width={36} height={36} />
            </button>
            <Avatar
              className="bg-[#0178ff] p-2 rounded-full font-bold text-white shadow-md"
              size="circle"
              gap={4}
              shape="square"
            >
              SS
            </Avatar>
          </div>
          <div className="md:hidden flex">
            <button onClick={() => toggle()}>
              <Ic_Menu width={42} height={42} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
