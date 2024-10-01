import React from 'react'
import { Link } from 'gatsby';
import { Grid } from '@mui/material';

import * as styles from "../styles/project-preview.module.css"

const ProjectPreview = (props) => {
    const project = props.project;

    return(
        <div className={styles.preview}>
            <Grid container spacing={6}>

                <Grid item sm={12} md={7}>
                    <Link to={`/projects/${project.slug}`}>
                        <img className={styles.coverImage} src={`https:${project.coverImage.file.url}`} alt="pic" />
                    </Link>
                </Grid>

                <Grid className={styles.rightColumn} item sm={12} md={5}>

                    <h2 className={styles.name}>
                        <Link to={`/projects/${project.slug}`}>{project.name}</Link>
                    </h2>
                    <p className={styles.summary}>{project.summary.summary}</p>

                    <ul className={styles.tags}>
                        {project.tags !== null ? project.tags.map((tag) => <li className={styles.tagItem}>{tag}</li>) : null}
                     </ul>

                </Grid>

            </Grid>
        </div>
    );
}

export default ProjectPreview;
