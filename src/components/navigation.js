import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import * as styles from '../styles/navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">

    <Link to="/" className={styles.logoLink}>
      < StaticImage className={styles.logo} src="../images/cartoon_portrait_new.png" alt="Jay"/>
      <span className={styles.navigationItem}>jayryanj.dev</span>
    </Link>

    <ul className={styles.navigation}>
    
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      
      <li className={styles.navigationItem}>
        <AnchorLink to="/#about" activeClassName='active'>
          About
        </AnchorLink>
      </li>

      <li className={styles.navigationItem}>
        <Link to="/projects/" activeClassName="active">
          Projects
        </Link>
      </li>

    </ul>
  </nav>
)

export default Navigation
