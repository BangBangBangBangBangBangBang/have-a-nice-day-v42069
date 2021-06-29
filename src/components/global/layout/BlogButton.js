import React from 'react'
import * as styles from './button.module.scss'

const BlogButton = () => {
    return (
        <a className={styles.button} href="https://lovesocietydao.medium.com/the-beginning-c9481035339e" target='_blank' rel='noreferrer'>
            LSDAO Blog
        </a>
    );

}

export default BlogButton;
