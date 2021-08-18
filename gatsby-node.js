const fetch = require(`node-fetch`)

exports.sourceNodes = async ({
	actions: { createNode },
	createNodeId,
	createContentDigest,
}) => {
	const options = {
		method: 'GET',
		headers: { 'X-API-KEY': process.env.API_KEY },
	}

	const hits = []

	return fetch(
		'https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=50&collection=have-a-nice-day-tburd',
		options
	)
		.then((response) => response.json())
		.then((response) => {
			hits.push(...response.assets)
			return fetch(
				'https://api.opensea.io/api/v1/assets?order_direction=desc&offset=50&limit=50&collection=have-a-nice-day-tburd',
				options
			)
		})
		.then((response) => response.json())
		.then((response) => hits.push(...response.assets))
		.then(() => {
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
		})
		.catch((err) => console.error(err))
}
