module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'sample.js'
  },
};
