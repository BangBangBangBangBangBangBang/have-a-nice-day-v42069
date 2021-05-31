import React from 'react'
import PropTypes from 'prop-types'

import Header from '@global/header/header'
import Footer from '@global/footer/footer'
import SEO from '@global/seo'

import './global.scss'

import BlogButton from './BlogButton'

const Layout = ({ children }) => (
	<>
		<SEO />
		<BlogButton />
		<Header />
		<main>{children}</main>
		<Footer />
	</>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
