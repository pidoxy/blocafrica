

import home from "../images/home.svg";
import activity from "../images/activity.svg";
import market from "../images/market.svg";
import wallet from "../images/wallet.svg";
import earn from "../images/earn.svg";

function bottomNav() {
    return (
        <div className="App">
            <nav className="navbar fixed-bottom navbar-expand navbar-light bg-light">
                <div className="container">
                    <div className="navbar navbar-nav ">
                        <div className="row ">

                            <div className="col nav-item text-center">
                                <img src={home} alt="image1" />
                                <a className="nav-link red" href="#">Home</a>
                            </div>
                            <div className="col nav-item text-center">
                                <img src={activity} alt="image1" />

                                <a className="nav-link red" href="#">Activity</a>
                            </div>
                            <div className="col nav-item text-center">
                                <img src={market} alt="image1" />

                                <a className="nav-link red" href="#" >Wallet </a>
                            </div>
                            <div className="col nav-item  text-center">
                                <img src={wallet} alt="image1" />

                                <a className="nav-link red" href="#" >Market</a>
                            </div>
                            <div className="col nav-item  text-center">
                                <img src={earn} alt="image1" />

                                <a className="nav-link red" href="#" >Earn</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default bottomNav;


