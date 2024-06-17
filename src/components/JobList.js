import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import FadeInSection from "./FadeInSection"

const isHorizontal = window.innerWidth < 600

function TabPanel(props) {
    const { children, value, index, ...other } = props

    if (isHorizontal) {
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`full-width-tabpanel-${index}`}
                aria-labelledby={`full-width-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box p={3}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        )
    } else {
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel`}
                {...other}
            >
                {value === index && (
                    <Box p={3}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        )
    }
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
}

function a11yProps(index) {
    if (isHorizontal) {
        return {
            id: `full-width-tab-${index}`,
            "aria-controls": `full-width-tabpanel-${index}`,
        }
    } else {
        return {
            id: `vertical-tab-${index}`,
        }
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "theme.palette.background.paper",
        display: "flex",
        height: 300,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}))

const JobList = () => {
    const classes = useStyles()
    const [value, setValue] = React.useState(0)

    const experienceItems = {
        "Publicis Sapient": {
            jobTitle: "Data Science Consultant @",
            duration: "2022 - present",
            desc: [
                "Generative AI and Data Science: Leveraged RAG and Few-Shot learning to design and build multi-model architectures with Langchain and Pinecone; driving a 30% reduction in model hallucinations and 5% reduction in project cost. Developed multi-agent Generative AI architechtures, resulting in multiple client conversions.",
                "Machine Learning: Employed PCA and Lasso Regression for feature selection and audience segmentation and worked on recommendation systems. Also tested various supervised and unsupervised techinques with clients for driving growth and sales.",
                "Data Analysis and Engineering: Developed interactive dashboards with Adobe Analytics and aided teams in executing data migration to AWS and ensuring data governance.",
            ],
        },
        "Execusoft Solutions": {
            jobTitle: "Data and Software Consultant @",
            duration: "2021 - present",
            desc: [
                "Streamlined data processes and designed infrastructure for efficient data ingestion and deployment.",
                "Optimized real-time data ingestion, analytics solutions on AWS and Azure, enabling real-time analytics",
                "Implemented CI/CD pipelines using Docker, resulting in a 50% reduction in deployment time for data-driven applications.",
                "Developed and deployed 3 scalable applications using Flask, Node.js, and React, each serving active users monthly.",
            ],
        },
        "University of Toronto": {
            jobTitle: "Research Analyst @",
            duration: "2020 - 2021",
            desc: [
                "Led a team to design and implement a personalized question recommendation engine, leveraging Collaborative Filtering",
                "Designed and built robust ETL processes to integrate, cleanse, and transform diverse data sources.",
                "Conducted A/B hypothesis testing, feature selection and extensive data analysis on the user base of over 800 students",
            ],
        },
    }

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <div className={classes.root}>
            <Tabs
                orientation={!isHorizontal ? "vertical" : null}
                variant={isHorizontal ? "fullWidth" : "scrollable"}
                value={value}
                onChange={handleChange}
                className={classes.tabs}
            >
                {Object.keys(experienceItems).map((key, i) => (
                    <Tab
                        label={isHorizontal ? `0${i}.` : key}
                        {...a11yProps(i)}
                    />
                ))}
            </Tabs>
            {Object.keys(experienceItems).map((key, i) => (
                <TabPanel value={value} index={i}>
                    <span className="joblist-job-title">
                        {experienceItems[key]["jobTitle"] + " "}
                    </span>
                    <span className="joblist-job-company">{key}</span>
                    <div className="joblist-duration">
                        {experienceItems[key]["duration"]}
                    </div>
                    <ul className="job-description">
                        {experienceItems[key]["desc"].map(function (
                            descItem,
                            i
                        ) {
                            return (
                                <FadeInSection delay={`${i + 1}00ms`}>
                                    <li key={i}>{descItem}</li>
                                </FadeInSection>
                            )
                        })}
                    </ul>
                </TabPanel>
            ))}
        </div>
    )
}

export default JobList
