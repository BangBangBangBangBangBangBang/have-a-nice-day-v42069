import React from 'react'
import * as styles from './footer.module.scss'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { useStaticQuery, graphql } from 'gatsby'

const Footer = () => {
	const data = useStaticQuery(graphql`
		query FooterQuery {
			allFile(
				filter: {
					extension: { regex: "/(jpg)|(png)|(jpeg)/" }
					relativePath: { regex: "/disscord-icons/" }
				}
				sort: { fields: name }
			) {
				edges {
					node {
						id
						childImageSharp {
							gatsbyImageData(width: 49)
						}
					}
				}
			}
		}
	`)

	const icons = data.allFile.edges

	const links = [
		{
			label: 'Art + Music',
			linkText: 'TBurd',
			url: 'https://twitter.com/timtime',
		},
		{
			label: 'Lead Dev',
			linkText: 'Stormcloud266',
			url: 'https://github.com/stormcloud266',
		},
		{
			label: 'Here to prop you up',
			linkText: 'chair',
			url: 'https://twitter.com/vrycmfy',
		},
		{
			label: 'Duck Commander',
			linkText: 'Kilgore',
			url: 'https://twitter.com/duckcmdr',
		},
		{
			label: 'Kittyslasher',
			linkText: 'Meow',
			url: 'https://twitter.com/Kittyslashr',
		},
		{
			label: 'Love Society DAO',
			linkText: 'Loves You',
			url: 'https://twitter.com/lovesocietydao',
		},
	]

	return (
		<footer className={styles.footer}>
			<div className={`wrapper ${styles.inner}`}>
				<nav className={styles.nav}>
					{links.map(({ label, linkText, url }) => (
						<p key={label}>
							{label}:{' '}
							<a href={url} target='_blank' rel='noreferrer'>
								{linkText}
							</a>
						</p>
					))}
				</nav>

				<div className={styles.discord}>
					{icons.map(({ node }) => (
						<div className={styles.img} key={node.id}>
							<GatsbyImage image={getImage(node)} alt='' />
						</div>
					))}
				</div>
			</div>

			<div className={styles.disclaimer}>
				<div className='wrapper-sm'>
					<p>
						DISCLAIMER: THIS IS ART ONLY, NOT LSD. THERE ARE NO DRUGS OF ANY
						KIND OFFERED FOR PURCHASE, OR OTHERWISE. THIS IS JUST ART. ok cool.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
