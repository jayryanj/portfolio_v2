import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

import * as styles from "../styles/socials.module.css"

const Socials = () => {
    return(
        <div>
            <ul className={styles.social}>

                <li className={styles.socialItem}>
                    <a target="_blank" rel="noreferrer" href="https://github.com/jayryanj">
                        <GitHubIcon className={styles.socialIcon} />
                    </a>
                </li>

                <li className={styles.socialItem}>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jayryanjamorabon/">
                        <LinkedInIcon className={styles.socialIcon} />
                    </a>
                </li>

                <li className={styles.socialItem}>
                    <a target="_blank" rel="noreferrer" href="mailto:jayrjamorabon@gmail.com">
                        <MailOutlinedIcon className={styles.socialIcon} />
                    </a>
                </li>
                
            </ul>
        </div>
    );
}

export default Socials;