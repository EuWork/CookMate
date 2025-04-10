// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  'react-native-gesture-handler': require.resolve(
    'react-native-gesture-handler',
  ),
};

module.exports = config;
