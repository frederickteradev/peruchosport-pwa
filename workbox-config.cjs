module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,html,json,webp,vue,js,css,cjs}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
	
};