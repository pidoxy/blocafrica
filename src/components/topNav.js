import user from "../images/user_icon.svg";
import notification from "../images/notification.svg";
import logo from "../images/logo.svg";



function TopNav() {
    return (
        <nav class="navbar navbar-expand navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo" />ribbon</a>

                <div className=" navbar-collapse ms-auto" >
                    <div className="text-left ms-auto justify-content-end"><img className="nav-image px-1" alt="image1" src={user} /><img className="px-1 nav-img" alt="image1" src={notification} /></div>

                </div>
            </div>
        </nav>

    );
}

export default TopNav;