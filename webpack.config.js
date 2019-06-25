const path = require('path');

module.exports = env => {
  const { NODE_ENV } = env;
  const isDev = NODE_ENV === 'development';
  console.log({ NODE_ENV });
  return {
    entry: './src/index.js',
    target: 'node',
    mode: NODE_ENV,
    watch: isDev,
    output: {
      path: path.resolve(__dirname, './build/api'),
      filename: 'index.js',
      library: 'index',
      libraryTarget: 'commonjs2'
    },
    externals: ['bufferutil', 'utf-8-validate'],
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      node: '10.15.3',
                      esmodules: true
                    }
                  }
                ]
              ]
            }
          }
        }
      ]
    }
  };
};
