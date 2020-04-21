import React from "react";
import Header from "../header";
import Navbar from "../navbar";
var createReactClass = require('create-react-class');


var About = createReactClass({

    render: function () {
        return (

            //functions for the websites   

            <main role="main" className="container1">
                <Header />
                <Navbar />

                <h1>About Me</h1>
                <hr />
                <img className="img1" src="./assets/Images/F142C128-5496-4C81-A984-576CE8019927.jpeg" alt="goutes" />
                <p>I am a Utah Man Sir! I love my Utah Utes! My husband and I go to all the home football games
                and away games. No matter the score, I will always cheer them on. The away games
                help fill in the "traveling" hole in my heart. I love to travel and explore. Utah is not my end destination!
                I will live and travel EVERYWHERE! Well that's the goal! I am a hard-working college student (in Computer
                Engineering) currently attending University of Utah. It was originally Nursing with an emphasis on
                dermatology. This was always the plan, till I started working for Henry Schein ONE. This got me to love
            all the things that you could do with technology. So I changed my major.</p>
                <p>During the course of my academic career, I also managed to accrue nearly 4 years of work experience. I have
                had the privilege of working for Henry Schein ONE in a Support Technician role full time, where I learned
                valuable professional skills such as conflict resolution, customer communications, and customer
                satisfaction. In both my academic and professional life, I have been consistently praised as proactive by my
                coworkers and peers. Whether working on academic, extracurricular, or professional projects, I apply proven
            organizational, multitasking, and problem-solving skills.</p>
                <hr />
                {/* <button className="col-sm-4" onClick={window.location = 'https://www.linkedin.com/in/taylor-p-804498134/'}>Linkedin
            Profile</button>
                <button className="col-sm-4" onClick={window.location = 'resume.html'
                } > Resume</button>
                <button className="col-sm-4" onClick={window.location = 'https://github.com/taypal'}> GitHub Profile</button > */}
            </main >
        );
    }
});

export default About;

