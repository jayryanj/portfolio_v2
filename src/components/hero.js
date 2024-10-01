import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { Container } from '@mui/material';
import Socials from './socials';

import * as styles from '../styles/hero.module.css'

const Hero = () => {
    return(
        <div className={styles.hero}>
            <Container>

                <StaticImage className={styles.picture} src="../images/cartoon_portrait_new.png" alt="Cartoon Portrait"/>

                <div data-sal="slide-left" data-sal-delay="1000" className={styles.divider}></div>

                <h1 data-sal="slide-up" className={styles.aloha}>
                    <span className={styles.angleBracket}>&#62;</span> Aloha, I'm Jay.
                </h1>

                <p data-sal="slide-up" data-sal-delay="300" className={styles.description}>
                    I'm a Software Developer from Hawai'i.
                </p>

                <div data-sal="slide-right" data-sal-delay="1000" className={styles.divider}></div>

                <div data-sal="slide-up" data-sal-delay="600" className={styles.socials}>
                    <Socials />
                </div>

            </Container>
        </div>
    );
}

export default Hero;
