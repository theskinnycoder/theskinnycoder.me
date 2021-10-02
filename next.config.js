const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: [
      'media.graphcms.com',
      'avatars.githubusercontent.com',
      'i.ytimg.com',
    ],
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
});
