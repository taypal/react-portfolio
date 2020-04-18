import React from "react";
var createReactClass = require('create-react-class');

var Navbar = createReactClass({
    render: function () {
        return (
            <div>
                <section className="home">
                    <div className="open-overlay">
                        <span className="bar-top" />
                        <span className="bar-middle" />
                        <span className="bar-bottom" />
                    </div>
                </section>
                <div className="overlay-navigation">
                    <nav role="navigation">
                        <ul>
                            <li><a href="#" data-content="The beginning">Home</a></li>
                            <li><a href="./pages/about.js" data-content="Want to know?">About</a></li>
                            <li><a href="./pages/portfolio.js" data-content="What I've made">Projects</a></li>
                            <li><a href="./pages/contact.js" data-content="Don't Hesitate">Contact</a></li>
                            <li><a href="#" data-content="More To Come">More To Come..</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
});

export default Navbar;