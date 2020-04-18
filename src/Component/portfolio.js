import React from "react";
import Header from "./header";
import Navbar from "./navbar";

function Portfolio() {
    return (
        <div className="parent">
            <Header />
            <Navbar />

            <div role="main" className="container2">
                <h1>Portfolio</h1>

                <hr />


                <div className="row">
                    <a href="https://meta-byte.github.io/Ski_Resort_Weather_Report/">
                        <div className="col-lg-8">
                            <img src="./assets/Images/grey.png" className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Ski Report</h5>
                            </div>
                        </div>
                    </a>

                    <a href="https://taypal.github.io/Password-Generator-/">
                        <div className="col-lg-8">
                            <img src="./assets/Images/blue.png" className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Password Generator</h5>
                            </div>
                        </div>
                    </a>

                    <a href="https://taypal.github.io/WeatherDashboard/">
                        <div className="col-lg-8">
                            <img src="./assets/Images/pink.png" className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Weather Dashboard</h5>
                            </div>
                        </div>
                    </a>
                    <a href="https://project-2-cocktail-search.herokuapp.com/">
                        <div className="col-lg-8">
                            <img src="./assets/Images/purple.png" className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Cocktail Search</h5>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;