import React from 'react'
import Container from './container'
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image'

import Socials from './socials';

import * as styles from '../styles/footer.module.css'

const Footer = () => (
    <div className={styles.footer}>
        <Container as="footer">

            <StaticImage className={styles.logo} src="../images/cartoon_portrait_new.png" alt="Jay"/>

            <p className={styles.quote}>"Never stop learning, <br/>because life never stops teaching."</p>

            <Socials/>

            <p className={styles.copyright}>
                Created by Jay Ryan Jamorabon &#169; {new Date().getFullYear()}
            </p>

            <p className={styles.madeWith}>
                Made with <span><StaticImage className={styles.gatsbyLogo} src="../images/Gatsby_Logo_White.png" alt="Gatsby" /></span>
            </p>
            
        </Container>
    </div>

);

export default Footer
