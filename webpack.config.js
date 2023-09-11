const prod = process.env.NODE_ENV === 'production'; // setar qual ambiente está rodando

const HtmlWebpackPlugin = require('html-webpack-plugin'); // plugin para gerar o html
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // plugin para gerar o css
const path = require('path');

module.exports = {
  mode: prod ? 'production' : 'development', // setar o modo de desenvolvimento
  entry: './src/index.tsx', // modulo de entrada executado primeiramente apos a aplicação ser carregada
  output: {
    // modulo de saida para onde o webpack irá gerar o bundle
    path: path.resolve(__dirname, './dist'), // caminho para a pasta onde será gerado o bundle
    filename: 'index_bundle.js', // nome do bundle
  },
  module: {
    rules: [
      // regras para o webpack que descrevem como carregar os arquivos para o bundle
      {
        test: /\.(ts|tsx)$/, // expressão regular para identificar os arquivos que serão carregados
        exclude: /node_modules/,
        resolve: {
          // extensões que serão carregadas
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        use: 'ts-loader', // loader que será utilizado para carregar os arquivos
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // loader para carregar o css
      },
    ],
  },
  devtool: prod ? undefined : 'source-map', // setar o source map para debugar o codigo
  plugins: [
    // plugins que serão utilizados e suas configurações
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
    new MiniCssExtractPlugin(),
  ],
};
