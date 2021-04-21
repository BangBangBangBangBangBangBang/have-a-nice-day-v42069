import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({
	title = `HAVE A NICE DAY`,
	description = `HAVE A NICE DAY`,
	url = `https://haveaniceday.wtf`,
	article,
}) => {
	const data = useStaticQuery(graphql`
		query SEOQuery {
			file(relativePath: { eq: "disscord-icons/bnggng.png" }) {
				publicURL
			}
		}
	`)

	const imageUrl = url + data.file.publicURL

	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />

			{/***********  twitter cards ***********/}
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:image' content={imageUrl} />

			{/***********  open graph ***********/}
			<meta property='og:url' content={url} />
			<meta property='og:type' content={article ? 'article' : 'website'} />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:image' content={imageUrl} />
		</Helmet>
	)
}

export default SEO
