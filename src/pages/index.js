import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import Layout from '@global/layout/layout'
import SEO from '@global/seo'
import * as styles from '../components/index.module.scss'
import { links } from '../data'


const IndexPage = () => (
	<Layout>
		<div className={styles.container}>
			<div className={styles.grid}>
				{links.map(link => (
					<div className={`${styles.item} ${link.blurred && styles.blurredStyle}`}>
						<a>{link.url}</a>
					</div>
				))}
			</div>
			<StaticImage
				src="../assets/images/tburd_trip_full_texturefinal.jpeg"
				alt="not a sheet of acid"
				placeholder="blurred"
				layout="fullWidth"
			/>
		</div>
	</Layout>
)

export default IndexPage
