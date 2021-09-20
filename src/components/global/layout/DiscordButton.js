import React from 'react'
import * as styles from './discordbutton.module.scss'

const DiscordButton = () => {
    return (
        <a className={styles.button} href="https://discord.gg/GdmFAgtaYm" target='_blank' rel='noreferrer'>
            Discord
        </a>
    );

}

export default DiscordButton;
