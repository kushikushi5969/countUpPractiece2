module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/, // 拡張子がjsかjsxで
      exclude: /node_modules/, // node_modulesフォルダ配下は除外
      use: {
        loader: 'babel-loader', // babel-loaderを使って変換する
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'], // env presetでES2015向けに変換、react presetでReactのJSX文法を変換
          plugins: [
            ['@babel/plugin-proposal-class-properties', { loose: true }], // 追加
          ],
        }
      }
    }]
  }
};
