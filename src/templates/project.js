import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import { Button, Container } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import * as styles from "../styles/project.module.css"


const ProjectTemplate = (props) => {
    const project = props.data.contentfulProject
    return(
        <Layout>
            <div className={styles.project}>
                
                <Container className={styles.projectContainer}>
                    
                    <Link to="/projects/">
                        <Button className={styles.backButton}>
                            <ArrowBackIosNewIcon className={styles.backIcon}/>
                            <p>Back</p>
                        </Button>
                    </Link>

                    <h1 className={styles.name}>{project.name}</h1>
                    
                    <p className={styles.summary}>{project.summary.summary}</p>

                    <ul className={styles.tags}>
                        {project.tags.map((tag) => <li className={styles.tagItem}>{tag}</li>)}
                    </ul>

                    <img className={styles.coverImage} src={`https:${project.coverImage.file.url}`} alt="pic" />

                    <h2 className={styles.header2}>Overview</h2>
                    <p className={styles.objective}>{project.objective.objective}</p>

                    <h2 className={styles.header2}>Results</h2>
                    <p className={styles.results}>{project.results.results}</p>

                    <h2 className={styles.header2}>Technologies</h2>
                    <ul className={`${styles.tags} ${styles.technologies}`}>
                        { project.technologies !== null ?
                         (project.technologies.map((tech) => <li className={`${styles.tagItem} ${styles.techItem}`}>{tech}</li>)) 
                        :
                          null
                        }
                    </ul>

                    {project.links !== null ?
                        <div>
                            <h2 className={styles.header2}>Links</h2>
                            <ul className={styles.links}>
                                {
                                    project.links.map((link) => 
                                        <li>
                                            <a href={link} target="_blank" rel="noreferrer">
                                            <span>&#62;</span> {link}
                                            </a>
                                        </li>)
                                }
                            </ul>
                        </div>
                    :
                        null
                    }
                </Container>
            </div>
        </Layout>
    );
}

export const query = graphql`
    query ($slug: String!) {
        contentfulProject(slug: {eq: $slug}) {
            name
            slug
            date
            coverImage {
                file {
                url
                }
            }
            summary {
                summary
            }
            objective {
                objective
            }
            results {
                results
            }
            technologies
            links
            media {
                file {
                url
                fileName
                }
            }
            tags
        }
    }
`

export default ProjectTemplate;