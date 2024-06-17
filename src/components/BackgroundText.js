import React from "react"

const BackgroundText = () => {
    return (
        <div className="background-text">
            {/* Render multiple instances of text */}
            <span style={{ top: "120%", left: "20%", z: "2" }}>
                Your Text Here
            </span>
            <span style={{ top: "50%", left: "50%" }}>More Text Here</span>
            {/* Add more text elements as needed */}
        </div>
    )
}

export default BackgroundText
