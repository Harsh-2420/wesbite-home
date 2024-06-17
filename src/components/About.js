import React from "react"
import "../styles/About.css"
import FadeInSection from "./FadeInSection"
import PetsIcon from "@material-ui/icons/Pets"

class About extends React.Component {
    constructor() {
        super()
        this.state = {
            expanded: true,
            activeKey: "1",
        }
        this.handleSelect = this.handleSelect.bind(this)
    }
    handleSelect(eventKey) {
        this.setState({
            activeKey: eventKey,
        })
    }
    render() {
        const one = (
            <p>
                I'm currently a <b>Data Scientist</b> at
                <a href="http://publicissapient.com/"> Publicis Sapient</a>,
                where I dive into various industries. Beyond my main role, I
                delve into side projects and research papers, constantly
                expanding my expertise in the realm of data.
            </p>
        )
        const two = (
            <p>
                If you find me at an F1 bar repping a{" "}
                <span style={{ color: "orange", fontWeight: "bold" }}>
                    {" "}
                    McLaren{" "}
                </span>
                jersey, come say hi! Just look for the one standing next to a
                cute furry friend{" "}
                <span style={{ color: "#64ffda" }}>
                    <PetsIcon></PetsIcon>
                </span>
                .
            </p>
        )

        const tech_stack = [
            "Python and SQL",
            "Machine Learning",
            "Data Analysis",
            "Generative AI",
            "Data Strategy",
            "Full Stack",
        ]

        return (
            <div id="about">
                <FadeInSection>
                    <div className="section-header ">
                        <span className="section-title">/ about me</span>
                    </div>
                    <div className="about-content">
                        <div className="about-description">
                            {[one]}
                            {"Here's a snapshot of what I've been upto:"}
                            <ul className="tech-stack">
                                {tech_stack.map(function (tech_item, i) {
                                    return (
                                        <FadeInSection delay={`${i + 1}00ms`}>
                                            <li>{tech_item}</li>
                                        </FadeInSection>
                                    )
                                })}
                            </ul>
                            {[two]}
                        </div>
                        <div className="about-image">
                            <img
                                alt="Harsh Jhunjhunwala"
                                src={"/assets/me3.jpeg"}
                            />
                        </div>
                    </div>
                </FadeInSection>
            </div>
        )
    }
}

export default About
