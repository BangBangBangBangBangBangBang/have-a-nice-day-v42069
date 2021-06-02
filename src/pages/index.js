import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'

import Layout from '@global/layout/layout'
import * as styles from '../components/index.module.scss'
import { links } from '../data'
import { Tag } from '../assets/images/icons'

const IndexPage = ({ data }) => {
	return (
		<Layout>
			<div className={styles.container}>
				<div className={styles.grid}>
					{links.map((link, i) => {
						const index = `00${i + 1}`.slice(-3)
						const imageMatch =
							link.sold &&
							data.allFile.edges.find(
								({ node }) => node.name === `tburd_LSD_0${index}a`
							)
						const image = link.sold && getImage(imageMatch.node)
						return (
							<a
								href={link.url}
								key={link.url}
								target='_blank'
								rel='noreferrer'
								className={`${styles.item} ${link.sold && styles.sold}`}
								aria-label={`Go to Have a Nice Day #${i}`}
							>
								{link.sold && (
									<>
										<GatsbyImage image={image} key={link.url} alt='' />
										<p>SOLD</p>
										<span>
											<Tag />
										</span>
									</>
								)}
							</a>
						)
					})}
				</div>
				<StaticImage
					src='../assets/images/reveal/10-rows-revealed__tburd_trip_full_web.jpg'
					alt='not a sheet of acid'
					placeholder='blurred'
					layout='fullWidth'
				/>
			</div>
		</Layout>
	)
}

export default IndexPage

export const query = graphql`
	query {
		allFile(filter: { sourceInstanceName: { eq: "trippy" } }) {
			edges {
				node {
					id
					name
					childImageSharp {
						gatsbyImageData(
							width: 200
							placeholder: BLURRED
							layout: CONSTRAINED
						)
					}
				}
			}
		}
	}
`
