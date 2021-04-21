import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Hamburger, Times, Logo } from '@images/icons'
import * as styles from './header.module.scss'
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Header = () => {
	const [isOpen, toggleNav] = useState(false)
	const data = useStaticQuery(graphql`
	query MyQuery {
		file(relativePath: {eq: "haveanicedaytrip1.jpeg"}) {
		  childImageSharp {
			fluid(quality: 100, maxWidth: 2600) {
				...GatsbyImageSharpFluid_withWebp
			  }
		  }
		}
	  }	  
  `)
	return (

		<BackgroundImage
			fluid={data.file.childImageSharp.fluid}
			className={styles.banner}
		>

		</BackgroundImage>


	)
}

export default Header
