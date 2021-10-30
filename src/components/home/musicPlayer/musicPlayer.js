import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import song from '@assets/LSDAO.mp3'
import * as styles from './musicPlayer.module.scss'

const MusicPlayer = () => {
	return (
		<div className={styles.music}>
			<ReactAudioPlayer src={song} autoPlay={true} controls />
		</div>
	)
}

export default MusicPlayer
