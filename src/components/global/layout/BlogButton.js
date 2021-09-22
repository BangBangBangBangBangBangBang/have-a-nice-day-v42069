import React from 'react'
import * as styles from './button.module.scss'

const BlogButton = () => {
    return (
        <a className={styles.button} href="https://lovesocietydao.medium.com/were-coming-together-a758a6839c6b" target='_blank' rel='noreferrer'>
            LSDAO Blog
        </a>
    );

}

export default BlogButton;
