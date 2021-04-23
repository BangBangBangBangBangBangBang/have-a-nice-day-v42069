import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '@global/layout/layout'
import * as styles from '../components/index.module.scss'
import { links } from '../data'

const IndexPage = () => (
	<Layout>
		<div className={styles.container}>
			<div className={styles.grid}>
				{links.map((link, i) => {
					return link.url ? (
						<a
							href={link.url}
							key={link.url}
							target='_blank'
							rel='noreferrer'
							className={styles.item}
							aria-label={`Go to Have a Nice Day #${i}`}
						/>
					) : (
						<div key={i} className={styles.item} />
					)
				})}
			</div>
			<StaticImage
				src='../assets/images/reveal/2-rows-revealed__tburd_trip_full_web.jpg'
				alt='not a sheet of acid'
				placeholder='blurred'
				layout='fullWidth'
			/>
		</div>
	</Layout>
)

export default IndexPage
