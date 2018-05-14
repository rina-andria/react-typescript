module.exports = {
  // entry point
  entry: './src/index.tsx',
  // output bundle
  output: {
    filename: 'bundle.js'
  },
  // generate source map
  devtool: 'source-map',
  resolve: {
    // js should also be added for the dependencies
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        // compile typescript code
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ]
  }
};
