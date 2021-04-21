import React from 'react'
import { Link } from 'gatsby'
import * as styles from './footer.module.scss'
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => (
	<footer className={styles.footer}>
		<div className='wrapper'>
			<nav className={styles.nav}>
				<a href="https://twitter.com/timtime" target="_blank" rel="noreferrer">Art banged by Timburdick</a>
				<a href="https://github.com/stormcloud266" target="_blank" rel="noreferrer">Site banged by Stormcloud266</a>
			</nav>
		</div>
	</footer>
)

export default Footer
