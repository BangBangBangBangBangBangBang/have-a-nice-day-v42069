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
						Art + Music:{' '}
						<a
							href='https://twitter.com/timtime'
							target='_blank'
							rel='noreferrer'
						>
							TBurd
						</a>
					</p>

					<p>
						Lead Dev: {' '}
						<a
							href='https://github.com/stormcloud266'
							target='_blank'
							rel='noreferrer'
						>
							Stormcloud266
						</a>
					</p>

					<p>
						Here to prop you up: {' '}
						<a
							href='https://twitter.com/vrycmfy'
							target='_blank'
							rel='noreferrer'
						>
							chair
						</a>
					</p>

					<p>
						Duck Commander: {' '}
						<a
							href='https://twitter.com/duckcmdr'
							target='_blank'
							rel='noreferrer'
						>
							Kilgore
						</a>
					</p>

					<p>
						Kittyslasher: {' '}
						<a
							href='https://twitter.com/Kittyslashr'
							target='_blank'
							rel='noreferrer'
						>
							Meow
						</a>
					</p>

					<p>
						Love Society DAO: {' '}
						<a
							href='https://twitter.com/lovesocietydao'
							target='_blank'
							rel='noreferrer'
						>
							Loves You
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
