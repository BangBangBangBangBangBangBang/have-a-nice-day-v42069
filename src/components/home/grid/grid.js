import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'
import { Tag } from '@images/icons'

import * as styles from './grid.module.scss'

const Grid = () => {
	const data = useStaticQuery(graphql`
		query GridQuery {
			trippy: allFile(filter: { sourceInstanceName: { eq: "trippy" } }) {
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
			hits: allHits(sort: { fields: name, order: ASC }) {
				edges {
					node {
						id
						name
						sold
						url
					}
				}
			}
		}
	`)

	const matchImage = (index) => {
		return data.trippy.edges.find(
			({ node }) => node.name === `tburd_LSD_0${index}a`
		)
	}

	return (
		<div className={styles.container}>
			<div className={styles.grid}>
				{data.hits.edges.map(({ node: hit }, i) => {
					const index = `00${i + 1}`.slice(-3)
					const imageMatch = hit.sold && matchImage(index)
					const image = hit.sold && getImage(imageMatch.node)
					return (
						<a
							href={hit.url}
							key={hit.id}
							target='_blank'
							rel='noreferrer'
							className={`${styles.item} ${hit.sold && styles.sold}`}
							aria-label={`Go to Have a Nice Day #${i}`}
						>
							{hit.sold && (
								<>
									<GatsbyImage image={image} key={hit.url} alt='' />
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
				src='../../../assets/images/reveal/10-rows-revealed__tburd_trip_full_web.jpg'
				alt='not a sheet of acid'
				placeholder='blurred'
				layout='fullWidth'
			/>
		</div>
	)
}

export default Grid
