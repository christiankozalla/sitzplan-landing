module.exports = {
	title: 'Puroviva',
	description: 'Puroviva App Landing Page',
	url: 'http://localhost:8080',
	author: 'Christian Kozalla',
	meta_data: {
		twitter: '@CKozalla',
		opengraph_default: '/static/opengraph-default.jpg'
	},
	env: process.env.ELEVENTY_ENV === 'production'
};
