module.exports = {
  pathPrefix: "/deep-web",

  // TODO - Update site metadata to reflect your site's info
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Deep Sheth`,
    // Default title of the page
    siteTitleAlt: `Deep Sheth`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Deep Sheth`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://deepsheth.com/`,
    // Used for SEO
    siteDescription: `Building the future of fintech.`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.png`,
    // Twitter Handle
    author: `@itdeepends`,
  },
  plugins: [
    {
      resolve: `@shetharp/gatsby-theme-polaroid`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-56753882-3",
      },
    },
    `gatsby-plugin-sitemap`,
    {
      // TODO - Update manifest options for your site
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Deep Sheth`,
        short_name: `deep-web`,
        description: `Building the future of fintech.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/favicon-192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      // TODO - Update webfonts for your site.
      // Alternatively, you can install Google Fonts as npm packages with the Typefaces Project
      // Learn more: https://github.com/KyleAMathews/typefaces
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: "gul0ccw",
        },
      },
    },
  ],
};
