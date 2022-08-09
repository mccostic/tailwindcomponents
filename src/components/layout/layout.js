import Nav from "../nav/nav";
import SideNav from "../nav/sidenav";

export default function Layout() {
    return(
        <div className="flex w-full justify-center">
            <SideNav/>
            <div className="w-full flex  items-center flex-col">
                <Nav/>
                <div>COntent</div>
                <div>Footer</div>
            </div>
        </div>
    )
}