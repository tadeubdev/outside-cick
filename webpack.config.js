module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: './outside-click.js'
    },
    watch: true,
    module: {
    rules: [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }]
    }
};
