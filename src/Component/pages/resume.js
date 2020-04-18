import React from "react";
import Header from "../header";
import Navbar from "../navbar";

function Resume() {
    return (
        <div classNameName="parent">
            <Header />
            <Navbar />
            <main role="main" className="container">
                <h1>Resume</h1>

                <hr />

                <img id="resumeImg" src="./assets/Images/IMAGE 1-21-20 AT 11.45 PM.jpeg" alt=" "
                    style="width:100%;max-width:300px"></img>

                <div id="response" className="modal">

                    <span className="close">&times;</span>

                    <img className="content" id="img01"></img>

                    <div id="caption"></div>
                </div>
            </main>
        </div>
    )
}

export default Resume;