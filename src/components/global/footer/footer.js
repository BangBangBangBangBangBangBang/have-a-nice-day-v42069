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

	return (
		<footer className={styles.footer}>
			<div className={`wrapper ${styles.inner}`}>
				<nav className={styles.nav}>
					<p>
						Art banged out by{' '}
						<a
							href='https://twitter.com/timtime'
							target='_blank'
							rel='noreferrer'
						>
							Timburdick
						</a>
					</p>

					<p>
						Site banged out by{' '}
						<a
							href='https://github.com/stormcloud266'
							target='_blank'
							rel='noreferrer'
						>
							Stormcloud266
						</a>
					</p>
				</nav>

				<div className={styles.discord}>
					{icons.map(({ node }) => {
						const imageData = getImage(node)
						return (
							<div className={styles.img} key={node.id}>
								<GatsbyImage image={imageData} alt='my gatsby image' />
							</div>
						)
					})}
				</div>
			</div>
		</footer>
	)
}

export default Footer
