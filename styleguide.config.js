// Add the names of components we don't want to see in Styleguidist here
// No paths or file extensions necessary; just the case-sensitive component name.
const IGNORED_COMPONENTS = ['App']
const ignore = IGNORED_COMPONENTS.map(file => `src/app/**/${file}.tsx`)

module.exports = {
  components: 'src/app/**/*.tsx',
  ignore: ['src/**/*.ts', ...ignore],
  webpackConfig: require('./config/webpack.config.dev.js'),
}
