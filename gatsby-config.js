const path = require('path')

module.exports = {
	siteMetadata: {
		title: 'HAVE A NICE DAY',
		siteUrl: 'https://haveaniceday.wtf/',
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-google-analytics',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/assets/images/disscord-icons/cactuswink.png',
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				google: {
					families: ['Orbitron:900'],
				},
			},
		},
		{
			resolve: `gatsby-plugin-gdpr-cookies`,
			options: {
				googleAnalytics: {
					trackingId: 'G-BZ8W1BW6VJ', // leave empty if you want to disable the tracker
					cookieName: 'gatsby-gdpr-google-analytics', // default
					anonymize: true, // default
				},
				googleTagManager: {
					trackingId: '', // leave empty if you want to disable the tracker
					cookieName: 'gatsby-gdpr-google-tagmanager', // default
					dataLayerName: 'dataLayer', // default
				},
				facebookPixel: {
					pixelId: '', // leave empty if you want to disable the tracker
					cookieName: 'gatsby-gdpr-facebook-pixel', // default
				},
				// defines the environments where the tracking should be available  - default is ["production"]
				environments: ['production'],
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/assets/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './src/pages/',
			},
			__key: 'pages',
		},
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					'@components': path.resolve(__dirname, 'src/components'),
					'@global': path.resolve(__dirname, 'src/components/global'),
					'@images': path.resolve(__dirname, 'src/assets/images'),
					'@styles': path.resolve(__dirname, 'src/assets/styles/'),
				},
			},
		},
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: "G-BZ8W1BW6VJ",
				head: true,
				sampleRate: 5,
				siteSpeedSampleRate: 10,
				cookieDomain: "haveaniceday.wtf",
			}
		}
	],
}
