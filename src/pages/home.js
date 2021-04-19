import zar from "../images/ZAR.svg";
import afya from "../images/AFYA.svg";
import image1 from "../images/image-1.svg";
import image2 from "../images/image-2.svg";
import image3 from "../images/image-3.svg";


function Home() {
    return (
        <div>

            <div className="row m-0">
                <div className="col-6 col-sm-6">
                    <div className="card card1 text-center">
                        <div className="card-body">
                            <h5 className="card-title"><img alt="image" src={zar} /></h5>
                            <p className="card-text">143.00</p>
                            <p className="white">Balance</p>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-sm-6">
                    <div className="card card2 text-center">
                        <div className="card-body">
                            <h5 className="card-title"><img alt="image" src={afya} /></h5>
                            <p className="card-text">R21.00</p>
                            <p className="white">Equivalent</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grey blue pe-2 pb-2 pt-3 my-3">
                <p className="mb-0 container">Select currency:</p>

            </div>
            <div class="input-group mb-3">
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">AFYA</button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">AFYA</a></li>
                    <li><a class="dropdown-item" href="#">ZAR</a></li>
                    <li><a class="dropdown-item" href="#">USD</a></li>
                    <li><a class="dropdown-item" href="#">NNA</a></li>
                    <li><a class="dropdown-item" href="#">GBP</a></li>
                    <li><a class="dropdown-item" href="#">EUR</a></li>
                    <li><a class="dropdown-item" href="#">YEN</a></li>
                    <li><a class="dropdown-item" href="#">MMA</a></li>
                </ul>
                <input type="text" class="form-control" placeholder="0.000000001" aria-label="Text input with dropdown button" />
            </div>
            <div className="d-flex justify-content-around pt-4 pb-3" >
                <button className="btn btn-primary pill px-4 ">Send</button>

                <button className="btn btn-primary pill px-3">Receive</button>
            </div>
            <div className="grey pe-2 py-3 my-3">
                <p className="container white mb-0">Recent activity</p>
            </div>
            <div className="container pb-5 my-5">

                <div className="row py-4 border-bottom">
                    <div className="col-3 image1">
                        <img className="image1" alt="image" src={image1} />
                    </div>
                    <div className="col-6">
                        Hiv Blood Draw Test
                </div>
                    <div className="col-3">
                        A100
                </div>

                </div>
                <div className="row py-4 border-bottom">
                    <div className="col-3">
                        <img className="image1" alt="image" src={image2} />
                    </div>
                    <div className="col-6">
                        TB Radiology XRay
                </div>
                    <div className="col">
                        A30
                </div>

                </div>
                <div className="row py-4 border-bottom">
                    <div className="col-3">
                        <img className="image1" alt="image1" src={image3} />
                    </div>
                    <div className="col-6">
                        Blood Pressure Check
                </div>
                    <div className="col-3">
                        A10
                </div>

                </div>
            </div>
        </div>
    );
}

export default Home;
