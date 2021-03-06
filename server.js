var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var PORT = 8080;
var HOST = '127.0.0.1';
var args = process.argv;
var hot = args.indexOf('--hot') > -1;
var deploy = args.indexOf('--deploy') > -1;

// 本地环境静态资源路径
var localPublicPath = 'http://' + HOST + ':' + PORT + '/';
config.output.publicPath = localPublicPath;


config.entry.app.unshift('webpack-dev-server/client?' + localPublicPath);


new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  inline: true,
  compress: true,
  stats: {
    chunks: false,
    children: false,
    colors: true
  },
  // Set this as true if you want to access dev server from arbitrary url.
  // This is handy if you are using a html5 router.
  historyApiFallback: true,
}).listen(PORT, HOST, function(err, result) {
    if (err) {
      console.log(err);
    }
    console.log(localPublicPath)
});
