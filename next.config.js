const withPlugins = require('next-compose-plugins')
const withVideos = require('next-videos')

module.exports = withPlugins([
  withVideos
],
{
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
  async redirects() {
    return [
      {
        source: '/crawle',
        destination: '/redirects/crawle',
        permanent: true
      },
      {
        source: '/superstatic',
        destination: '/redirects/superstatic',
        permanent: true
      },
      {
        source: '/scrunk',
        destination: '/redirects/scrunk',
        permanent: true
      }
    ]
  },
  images: {
    domains: ['trytalo.com']
  }
})
