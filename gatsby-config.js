module.exports = {
  siteMetadata: {
    title: 'LD Drones',
    description: 'A Drone Service based in Tribeca',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/depositphotos_125531074-stock-illustration-drone-logo-concept-design.jpg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}


