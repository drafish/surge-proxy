const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
  const target = 'https://surge.surge.sh';

  // 创建代理对象并传入参数
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      [`^/api`]: '',
    },
    onProxyRes: function(proxyRes, req, res) {
      // 实现跨域访问
      proxyRes.headers['Access-Control-Allow-Origin'] = '*';
      proxyRes.headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Connection, User-Agent, Cookie';
      proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, PATCH, OPTIONS';
    },
  })(req, res);
}
