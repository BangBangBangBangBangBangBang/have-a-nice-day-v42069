import React, { useEffect, useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import ReactPlayer from 'react-player/lazy'
import videoFile from '@videos/lsdaopamp.mp4'
import * as styles from './header.module.scss'

const Header = () => {
	const [reducedMotion, setReducedMotion] = useState(false)

	useEffect(() => {
		const QUERY = '(prefers-reduced-motion: no-preference)'
		const mediaQueryList = window.matchMedia(QUERY)
		const prefersReducedMotion = !mediaQueryList.matches
		setReducedMotion(prefersReducedMotion)
	}, [])

	return (
		<div className={styles.container}>
			<StaticImage
				src='../../../assets/images/haveanicedaytrip1.jpeg'
				alt='not a sheet of acid'
				placeholder='blurred'
				layout='fullWidth'
				className={styles.image}
				style={{ position: 'absolute' }}
			/>

			{!reducedMotion && (
				<ReactPlayer
					url={videoFile}
					width={'100%'}
					height='500px'
					volume={0}
					controls
					autoPlay={true}
					muted={true}
					playing
					loop
				/>
			)}
		</div>
	)
}

export default Header
