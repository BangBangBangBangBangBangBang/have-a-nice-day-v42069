import React from 'react'
import { graphql } from 'gatsby'
import ReactAudioPlayer from 'react-audio-player'

import Layout from '@global/layout/layout'
import Grid from '@components/home/grid/grid'
import * as styles from '../components/index.module.scss'

const IndexPage = ({ data }) => {
	return (
		<Layout>
			<Grid />
			<div className={styles.music}>
				<ReactAudioPlayer src={data.song.publicURL} autoPlay={true} controls />
			</div>
		</Layout>
	)
}

export default IndexPage

export const query = graphql`
	query {
		song: file(name: { eq: "LSDAO" }) {
			publicURL
		}
	}
`
