const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Wordsco - Taking your content to the next level', // Navigation and Site Title
  siteTitleAlt: 'Wordsco', // Alternative Site title for SEO
  siteUrl: 'https://wordsco-front.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'Time to move on from ordinary Wordpress',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@companyofwords', // Twitter Username
  ogSiteName: 'wordsco', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
