const path = require('path');

module.exports = {
  entry: './src/App.js', // Passe den Pfad zu deinem Haupteinstiegspunkt an
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
      // andere Loader können hier hinzugefügt werden
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', 'html'], // Erlaubt das Weglassen der Dateierweiterungen bei Importen
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
  },
};