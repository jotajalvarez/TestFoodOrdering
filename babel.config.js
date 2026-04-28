module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // Keep this plugin last.
      "react-native-reanimated/plugin",
    ],
  };
};

