
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');


let mode = 'development';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

const plugins = [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Данный html будет использован как шаблон
    }),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css', // Формат имени файла
      }), 
  ];

if (process.env.SERVE) { // Используем плагин только если запускаем devServer
  plugins.push(new ReactRefreshWebpackPlugin());
} // Данный код должен быть размещен после объявления массива plugins  

module.exports = {
    mode,
    plugins,
    entry: './src/index.js', //стоит по умолчанию, можно не писать
    devtool: 'source-map', //убираем минифицированный вывод в бандле
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/[hash][ext][query]', //сюда буду складываться ассеты
        clean: true
    },

    devServer: {
        hot: true, //Включение перезапуска страницы при изменениях
        open: true,
        port: 8888,
    },

    module: {
        rules: 
        [
            { 
              test: /\.(html)$/,
              use: ['html-loader']
            }, // Добавляем загрузчик для html
            {
              test: /\.(sa|sc|c)ss$/,
              // exclude: /node_modules/,
              use: [
                'isomorphic-style-loader',
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1,
                    modules: {
                      localIdentName: '[name]_[local]_[hash:base64:5]'
                    },
                    esModule: false
                  }
                },
                'postcss-loader'
              ]
            },        
            {
              test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
              type: mode === 'production' ? 'asset' : 'asset/resource', // В продакшен режиме
              // изображения размером до 8кб будут инлайнится в код
              // В режиме разработки все изображения будут помещаться в dist/assets
            },
            {
              test: /\.(woff2?|eot|ttf|otf)$/i,
              type: 'asset/resource',
            },
            {
              test: /\.(js|jsx)$/,// обновляем регулярное выражение для поддержки jsx/js
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  cacheDirectory: true,
                },
              },    
            },
        ],
    }
}
