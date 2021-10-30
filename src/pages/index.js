import React from 'react'
import Layout from '@global/layout/layout'
import Grid from '@components/home/grid/grid'
import MusicPlayer from '@components/home/musicPlayer/musicPlayer'

const IndexPage = () => {
	return (
		<Layout>
			<Grid />
			<MusicPlayer />
		</Layout>
	)
}

export default IndexPage
