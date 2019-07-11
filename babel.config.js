module.exports = function(api) {
  api.cache(true);
  const presets = ['babel-preset-expo'];
  const plugins = [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./'],
        alias: {
          modules: './src/modules',
        },
        extensions: ['.tsx', '.js'],
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
