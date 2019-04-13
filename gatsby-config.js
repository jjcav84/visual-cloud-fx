module.exports = {
	// Customize me!
	siteMetadata: {
		company: 'Visual Cloud FX',
		domain: 'https://visualcloudfx.com',
		defaultTitle: 'Website Change Monitoring Products and Services',
		preamble: "We're a San  Antonio, Texas-based team of software engineers.",
		defaultDescription:
			'We develop our own products. And provide software engineering and consulting to select clients.',
		postamble: "Think we can help your project? We'd love to hear from you:",
		contact: {
			email: 'jacob@visualcloudfx.com',
		},
		menuLinks: [],
	},
	pathPrefix: '/tiny-agency',
	plugins: [
		'gatsby-transformer-remark',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-remove-serviceworker',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages',
			},
		},
		{
			resolve: `gatsby-plugin-favicon`,
			options: {
				logo: './images/logo.png',
			},
		},
		// {
		//   resolve: `gatsby-plugin-google-analytics`,
		//   options: {
		//     trackingId: "UA-120162676-1",
		//   },
		// },
	],
}
