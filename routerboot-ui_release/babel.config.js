// 预设
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-typescript'],
  overrides: [
    {
      test: /\.vue$/,
      plugins: ['@babel/transform-typescript']
    }
  ],
  env: {
    utils: {
      plugins: [
        [
          'babel-plugin-module-resolver', //配置正确找到ui模块
          {
            root: 'rb-ui'
          }
        ]
      ]
    }
  }
}
