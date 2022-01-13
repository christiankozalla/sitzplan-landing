module.exports = {
	title: 'Seaty',
	description: 'Seaty App Landing Page',
	url: 'https://seaty.s3-website.nl-ams.scw.cloud/',
	author: 'Christian Kozalla',
	meta_data: {
		twitter: '@CKozalla',
		opengraph_default: '/static/opengraph-default.jpg'
	},
	env: process.env.ELEVENTY_ENV === 'production'
};
