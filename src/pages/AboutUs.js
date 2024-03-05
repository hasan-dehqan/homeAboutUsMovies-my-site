import React, { Component } from "react";
import "../styles/about.css";

class AboutMe extends Component {
    state = {};
    render() {
        return (
            <>

                <div className="about_me">

                    <div className="about-img"></div>

                    <div className="about-text">
                        <h3>About Me</h3>
                        <h2>Hassan Dehqan</h2>
                        <p>
                            I am Hasan Dehqan a member of the Front-End course at Darsman Academy. I am currently in my third term of learning React.js taught by the esteemed instructor,<span className="mr">Mr. Mahdi Abbasi</span> , and the helpful support team at Darsman.<br /> I am striving to be an effective team member upon completing the course and contribute to the success of projects by employing creativity and finding good solutions.
                        </p>
                    </div>
                </div>

            </>
        );
    }
}
export default AboutMe;








