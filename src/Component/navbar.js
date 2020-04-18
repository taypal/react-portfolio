import React from "react";

function Navbar() {
    return (
        <div className="container">
            <div className="open-overlay">
                <span className="bar-top"></span>
                <span className="bar-middle"></span>
                <span className="bar-bottom"></span>
            </div>

            <div className="overlay-navigation">
                <nav role="navigation">
                    <ul>
                        <li><a href="#" data-content="The beginning">Home</a></li>
                        <li><a href="./about.js" data-content="Want to know?">About</a></li>
                        <li><a href="./portfolio.js" data-content="What I've made">Projects</a></li>
                        <li><a href="./contact.js" data-content="Don't Hesitate">Contact</a></li>
                        <li><a href="#" data-content="More To Come">More To Come..</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;