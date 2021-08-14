const fetch = require(`node-fetch`)

exports.sourceNodes = async ({
	actions: { createNode },
	createNodeId,
	createContentDigest,
}) => {
	const result = await fetch(
		`https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20&collection=have-a-nice-day-tburd`
	)
	const resultData = await result.json()

	return resultData.assets.map((hit) => {
		createNode({
			sold: hit.num_sales > 0,
			name: hit.name,
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
