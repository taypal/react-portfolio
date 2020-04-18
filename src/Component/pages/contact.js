import React from "react";
import Header from "../header";
import Navbar from "../navbar";

function Contact() {
    return (
        <div classNameName="parent">
            <Header />
            <Navbar />
            <main role="main" className="container3">
                <h1>Contact</h1>

                <hr />

                <form>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Name</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="John Smith"></input>
                    </div>

                    <div className="form-group">
                        <label for="formGroupExampleInput2">Email</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="example@gmail.com"></input>
                    </div>

                    <div className="form-group">
                        <label for="formGroupExampleInput2">Message</label>
                        <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Write your message..."></input>
                    </div>

                    <p>
                        You Can Also
                <a href="mailto:tay.houk@yahoo.com" target="_top">Email</a>
                Or
                <a href="tel:+1-208-569-4213">Call</a>
                Me
                     </p>

                    <div className="form-group">
                        <button type="button">Submit</button>
                    </div>

                </form>

            </main>
        </div>
    )
}

export default Contact;