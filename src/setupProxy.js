//feat(proxy): configure dev server to proxy API requests to backend

//Implemented proxy middleware using http-proxy-middleware to forward requests from /api to the backend server running on localhost:5000. 
//This change resolves CORS issues during development by ensuring API requests appear to come from the same origin. Additionally,
// it simplifies API request URLs in the frontend code by allowing the omission of the backend server's address and port.



const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
      pathRewrite: {'^/api' : ''}
    })
  );
};
