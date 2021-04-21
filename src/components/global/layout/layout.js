import React from 'react'
import PropTypes from 'prop-types'

import Header from '@global/header/header'
import Footer from '@global/footer/footer'
// import CookieBanner from '@global/cookieBanner'

import './global.scss'

import {Helmet} from 'react-helmet'

const Layout = ({ children }) => (
	<>

<Helmet>
		<title>HAVE A NICE DAY</title>
		<meta name='description' content="Bang Bang" />

	</Helmet>

		<Header />
		<main>{children}</main>
		<Footer />
		{/* <CookieBanner /> */}
	</>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
