import React from "react"
import "../styles/Projects.css"
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded"
import FadeInSection from "./FadeInSection"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Carousel from "react-bootstrap/Carousel"
import ExternalLinks from "./ExternalLinks"

class Projects extends React.Component {
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
        const spotlightProjects = {
            "EA F1 23 Dashboard": {
                title: "F1 Dashboard",
                desc:
                    "A dashboard that connects to EA's F1 23 game and generates real-time analytics and recording so you can improve your skill.",
                techStack: "React.js, Go",
                link: "https://github.com/Harsh-2420/f1-telemetry",

                image: "/assets/f1.png",
            },
            Spotty: {
                title: "Spotty",
                desc:
                    "A dashboard that connects to your Spotify account and displays detailed analytics about your listening history.",
                techStack: "Python, MongoDB",
                link: "https://github.com/Harsh-2420/spotify",

                image: "/assets/spotify.png",
            },
            Fixit: {
                title: "Fixit",
                desc:
                    "Publication: Recommendation System implemented to help CS1 students improve in their courses.",
                techStack: "Python, Node.js, React.js, Machine-Learning",
                open:
                    "https://cssplice.github.io/LAS20/proc/SPLICE_2020_LS_paper_2.pdf",

                image: "/assets/fixit2.png",
            },
            kaggle: {
                title: "Kaggle Competitions",
                desc:
                    "A collection of kaggle competitions and datasets I have worked with. These include data alaytics and machine learning projects.",
                techStack: "Python, Machine-Learning",
                link: "https://github.com/Harsh-2420/kaggle",

                image: "/assets/kaggle2.png",
            },
        }
        const projects = {
            "Football Analytics": {
                desc:
                    "A dashboard displaying the latest leaderboards from leagues across Europe. There's also match predictions from ML algorithms.",
                techStack: "React.js, Python",
                link:
                    "https://github.com/Harsh-2420/football-formula1-analytics",

                image: "/assets/talltales.png",
            },
        }

        return (
            <div id="projects">
                <div className="section-header ">
                    <span className="section-title">/ pet projects</span>
                </div>
                <Carousel>
                    {Object.keys(spotlightProjects).map((key, i) => (
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={spotlightProjects[key]["image"]}
                                alt={key}
                                style={{
                                    width: "500px",
                                    height: "500px",
                                    objectFit: "cover",
                                }}
                            />
                            <div
                                id="glass-effect"
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                                }}
                            ></div>
                            <div className="caption-bg">
                                <Carousel.Caption>
                                    <h3>{spotlightProjects[key]["title"]}</h3>
                                    <p>
                                        {spotlightProjects[key]["desc"]}
                                        <p className="techStack">
                                            {
                                                spotlightProjects[key][
                                                    "techStack"
                                                ]
                                            }
                                        </p>
                                    </p>
                                    <ExternalLinks
                                        githubLink={
                                            spotlightProjects[key]["link"]
                                        }
                                        openLink={
                                            spotlightProjects[key]["open"]
                                        }
                                    ></ExternalLinks>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
                <div className="project-container">
                    <ul className="projects-grid">
                        {Object.keys(projects).map((key, i) => (
                            <FadeInSection delay={`${i + 1}00ms`}>
                                <li className="projects-card">
                                    <div className="card-header">
                                        <div className="folder-icon">
                                            <FolderOpenRoundedIcon
                                                style={{ fontSize: 35 }}
                                            ></FolderOpenRoundedIcon>
                                        </div>
                                        <ExternalLinks
                                            githubLink={projects[key]["link"]}
                                            openLink={projects[key]["open"]}
                                        ></ExternalLinks>
                                    </div>

                                    <div className="card-title">{key}</div>
                                    <div className="card-desc">
                                        {projects[key]["desc"]}
                                    </div>
                                    <div className="card-tech">
                                        {projects[key]["techStack"]}
                                    </div>
                                </li>
                            </FadeInSection>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Projects
