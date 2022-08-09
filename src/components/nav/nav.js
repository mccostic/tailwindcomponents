import Icon from "@ant-design/icons";
import { Avatar } from "antd";
import Ic_Notifications from "../icons/ic_notifications"
import avatar from "../../assets/png/Avatar.png"
import Ic_Menu from "../icons/ic_menu";
import Logo from "../icons/logo";

export default function Nav() {
    return (
        <div className="p-4 h-16 bg-white shadow-md flex items-center justify-center w-full">
            <div className="flex items-center justify-between w-full max-w-[1440px]">
            <div>
                <Logo/>
            </div>
            <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 md:gap-4">
                    <Icon component={Ic_Notifications}/>
                    <Avatar src={avatar}/>
                    <p className="p_color">Micheal Hogan</p>
                </div>
                <div className="md:hidden flex">
                    <button>
                        <Icon component={Ic_Menu}/>
                    </button>
                </div>
            </div>

            </div>
        </div>
    )
}