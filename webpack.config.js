const path = require('path');

module.exports = {
  entry: './src/index.ts', // Entry point of your application
  target: 'node', // Target environment (Node.js)
  mode: 'production', // Use 'production' mode for optimizations
  module: {
    rules: [
      {
        test: /\.ts$/, // Test for .ts files
        use: 'ts-loader', // Use ts-loader to transpile TypeScript
        exclude: /node_modules/, // Exclude node_modules
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'], // Resolve these extensions
  },
  output: {
    filename: 'bundle.js', // Name of the output bundle
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  externals: {},
};
