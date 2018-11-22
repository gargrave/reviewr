const path = require('path');

// Add the names of components we don't want to see in Styleguidist here
// No paths or file extensions necessary; just the case-sensitive component name.
const IGNORED_COMPONENTS = [
  'App',
  'ReviewForm',
  'ReviewList',
  'ReviewListPage',
];
const ignore = IGNORED_COMPONENTS.map(file => `src/app/**/${file}.tsx`);

module.exports = {
  components: 'src/app/**/*.tsx',
  ignore: ['src/**/*.ts', 'src/**/*.spec.{ts,tsx}', '**/*.d.ts', ...ignore],
  propsParser: require('react-docgen-typescript').withDefaultConfig([{}]).parse,
  require: [
    path.join(__dirname, 'node_modules/bootstrap/dist/css/bootstrap.css'),
  ],
  webpackConfig: require('./config/webpack.config.dev.js'),
};
