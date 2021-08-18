import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'
import ReactAudioPlayer from 'react-audio-player'

import Layout from '@global/layout/layout'
import * as styles from '../components/index.module.scss'
import { Tag } from '../assets/images/icons'

const IndexPage = ({ data }) => {
	return (
		<Layout>
			<div className={styles.music}>
				<ReactAudioPlayer src={data.song.publicURL} autoPlay={true} controls />
			</div>
			<div className={styles.container}>
				<div className={styles.grid}>
					{data.hits.edges.map(({ node: hit }, i) => {
						const index = `00${i + 1}`.slice(-3)
						const imageMatch =
							hit.sold &&
							data.trippy.edges.find(
								({ node }) => node.name === `tburd_LSD_0${index}a`
							)
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
		song: file(name: { eq: "LSDAO" }) {
			publicURL
		}
	}
`
