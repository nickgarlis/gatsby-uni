'use strict';

module.exports = {
  coursesDir: 'courses', // The name of directory that contains your courses.
  peopleDir: 'people', // The name of directory that contains your people.
  postsDir: 'posts', // The name of directory that contains your people.
  siteTitle: 'Gatsby Uni', // Site title.
  siteTitleAlt: 'GatsbyJS Uni Theme', // Alternative site title for SEO.
  siteLogo:
    'https://raw.githubusercontent.com/ioniodi/site-en/master/assets/images/logo.png', // Logo used for SEO and manifest.
  siteUrl: '', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-uni/.
  siteDescription: 'A Gatsby theme meant to be used by Universities.', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteRssAuthor: 'Nick Garlis', // The author name used in the RSS file
  googleAnalyticsID: '', // GA tracking ID.
  // Links to the pages you want to display in the navigation bar.
  siteNav: [
    {
      title: 'Courses',
      path: '/courses/',
    },
    {
      title: 'People',
      path: '/people/',
    },
    {
      title: 'Laboratories',
      path: '/labs/',
    },
    {
      title: 'News',
      path: '/news/',
    },
  ],
  // Icons and links of the social media you want to appear on the Footer.
  siteSocial: [
    {
      label: 'Email',
      icon: 'mail', // Semantic UI Icon Fonts: https://react.semantic-ui.com/elements/icon/
      url: 'mailto:your.name@email.com',
    },
    {
      label: 'Facebook',
      icon: 'facebook f', // Semantic UI Icon Fonts: https://react.semantic-ui.com/elements/icon/
      url: 'https://facebook.com/',
    },
    {
      label: 'Twitter',
      icon: 'twitter', // Semantic UI Icon Fonts: https://react.semantic-ui.com/elements/icon/
      url: 'https://twitter.com/',
    },
    {
      label: 'Instagram',
      icon: 'instagram', // Semantic UI Icon Fonts: https://react.semantic-ui.com/elements/icon/
      url: 'https://instagram.com/',
    },
    {
      label: 'Youtube',
      icon: 'youtube', // Semantic UI Icon Fonts: https://react.semantic-ui.com/elements/icon/
      url: 'https://youtube.com/',
    },
    {
      label: 'Github',
      icon: 'github', // Semantic UI Icon Fonts: https://react.semantic-ui.com/elements/icon/
      url: 'https://github.com/',
    },
  ],
};
