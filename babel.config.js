module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic' // 不用导出也可使用react，创建组件时需要用到react.createClass
      }
    ]
  ]
};
