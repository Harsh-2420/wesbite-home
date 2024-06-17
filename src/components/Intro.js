import React from "react"
import { Row, Col } from "react-bootstrap"
import "../styles/Intro.css"
import Typist from "react-typist"
import "react-typist/dist/Typist.css"
import EmailRoundedIcon from "@material-ui/icons/EmailRounded"
import FadeInSection from "./FadeInSection"
import FractalTree from "./FractalTree"
import PoolIcon from "@material-ui/icons/Pool"
class Intro extends React.Component {
    constructor() {
        super()
        this.state = {
            expanded: true,
            activeKey: "1",
            visible: true,
        }
        this.handleSelect = this.handleSelect.bind(this)
    }
    handleSelect(eventKey) {
        this.setState({
            activeKey: eventKey,
        })
    }
    render() {
        return (
            <div id="intro">
                <FractalTree></FractalTree>
                <Typist avgTypingDelay={120}>
                    <span className="intro-title">
                        {"hi, "}
                        <span className="intro-name">{"harsh"}</span>
                        {" here."}
                    </span>
                </Typist>
                <FadeInSection>
                    <div className="intro-subtitle">
                        dive into data with me{" "}
                        <span style={{ color: "#64ffda" }}>
                            <PoolIcon></PoolIcon>
                        </span>
                    </div>
                    <div className="intro-desc">
                        I'm a data scientist from Toronto, Canada. I love
                        unlocking the power of data and constantly expanding my
                        expertise in data science, machine learning, and data
                        strategy. I thrive on tackling challenging projects,
                        both for clients and to fuel my own learning.
                    </div>
                    <a
                        href="mailto:harsh2420@gmail.com"
                        className="intro-contact"
                    >
                        <EmailRoundedIcon></EmailRoundedIcon>
                        {" Say hi!"}
                    </a>
                </FadeInSection>
            </div>
        )
    }
}

export default Intro
