import { graphql, useStaticQuery } from 'gatsby';
import React from 'react'
import { Link } from 'gatsby';

import { Container, Divider } from '@mui/material';
import Layout from "../components/layout";
import ProjectPreview from '../components/project-preview';

import * as styles from "../styles/projects.module.css";

const Projects = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        allContentfulProject(sort: {fields: date, order: DESC}) {
          nodes {
            name
            slug
            summary {
              summary
            }
            date
            coverImage {
              file {
                url
              }
            }
            tags
          }
        }
      }
`)
    return(
        <Layout>
          <div className={styles.projects}>
            <Container>
                    <Divider className={styles.headerDivider}><h1 className={styles.header}>Projects</h1></Divider>

                    {data !== null ? 
                        <ul className={styles.projectList}>
                        {data.allContentfulProject.nodes.map((project) => 
                            <li className={styles.projectListItem}>
                                <ProjectPreview project={project}/>
                            </li>
                            )}
                      </ul>
                    :
                      <h2>Sorry! Looks like connection to the CMS is down.</h2>
                    }

              </Container>
          </div>
        </Layout>
    );
}

export default Projects;