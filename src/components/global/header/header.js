import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './header.module.scss'

const Header = () => {
	const links = [
		{
			text: 'Tburd Blog',
			url: 'https://tburd.medium.com/teh-lsdao-story-c4f48be09cc0',
			color: '#5ce288',
		},
		{
			text: 'LSDAO Blog',
			url: 'https://lovesocietydao.medium.com/were-coming-together-a758a6839c6b',
			color: 'orangered',
		},
		{ text: 'Discord', url: 'https://discord.gg/GdmFAgtaYm', color: '#7289d9' },
	]

	return (
		<header>
			<StaticImage
				src='../../../assets/images/haveanicedaytrip1.jpeg'
				alt='not a sheet of acid'
				placeholder='blurred'
				layout='fullWidth'
			/>

			<div className={styles.buttonContainer}>
				{links.map(({ text, url, color }) => (
					<a
						className={styles.button}
						href={url}
						target='_blank'
						rel='noreferrer'
						key={text}
						style={{ backgroundColor: color }}
					>
						{text}
					</a>
				))}
			</div>
		</header>
	)
}

export default Header
