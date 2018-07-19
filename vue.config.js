module.exports = {
  outputDir: 'docs', // for Github pages
  baseUrl: process.env.NODE_ENV === 'production' ?
    '/random-awesome-idea':
    '/'
}