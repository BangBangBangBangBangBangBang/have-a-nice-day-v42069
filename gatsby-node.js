const fetch = require(`node-fetch`)
require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
})

exports.sourceNodes = async ({
	actions: { createNode },
	createNodeId,
	createContentDigest,
}) => {
	const options = {
		method: 'GET',
		headers: { 'X-API-KEY': process.env.API_KEY },
	}

	const results1 = await fetch(
		'https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=50&collection=have-a-nice-day-tburd',
		options
	)
	const hits1 = await results1.json()

	const results2 = await fetch(
		'https://api.opensea.io/api/v1/assets?order_direction=desc&offset=50&limit=50&collection=have-a-nice-day-tburd',
		options
	)
	const hits2 = await results2.json()

	const hits = [...hits1.assets, ...hits2.assets]

	return hits.map((hit) => {
		createNode({
			sold: hit.num_sales > 0,
			name: hit.name,
			url: hit.permalink,
			// required fields
			id: createNodeId(hit.id),
			parent: null,
			children: [],
			internal: {
				type: `Hits`,
				contentDigest: createContentDigest(hit),
			},
		})
	})
}
