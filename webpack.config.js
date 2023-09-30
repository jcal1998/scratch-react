import HtmlWebpackPlugin from 'html-webpack-plugin'; // plugin para gerar o html
import MiniCssExtractPlugin, { loader } from 'mini-css-extract-plugin'; // plugin para gerar o css
import { resolve as _resolve, join } from 'path';
const prod = process.env.NODE_ENV === 'production'; // setar qual ambiente está rodando

export const mode = prod ? 'production' : 'development';
export const entry = './src/index.tsx';
export const output = {
  // modulo de saida para onde o webpack irá gerar o bundle
  path: _resolve(__dirname, './dist'),
  filename: 'index_bundle.js', // nome do bundle
};
export const module = {
  rules: [
    // regras para o webpack que descrevem como carregar os arquivos para o bundle
    {
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      resolve: {
        // extensões que serão carregadas
        extensions: ['.ts', '.tsx', '.js', '.json'],
      },
      use: 'ts-loader', // loader que será utilizado para carregar os arquivos
    },
    {
      test: /\.css$/,
      use: [loader, 'css-loader'], // loader para carregar o css
    },
  ],
};
export const devtool = prod ? undefined : 'source-map';
export const plugins = [
  // plugins que serão utilizados e suas configurações
  new HtmlWebpackPlugin({
    template: join(__dirname, 'public', 'index.html'),
  }),
  new MiniCssExtractPlugin(),
];
