// 设置NODE_ENV:development开发者模式
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'development'
}

var opn = require('opn');
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var proxyMiddleware = require('http-proxy-middleware');
var webpackConfig = require('./webpack.config');

var port = 8099;
var autoOpenBrowser = true;
var proxyTable = {};
// express配置后台数据
var app = express();
var appData = require('../data.json');

var account = appData.account;
var objective = appData.objective;
var workExperience = appData.workExperience;
var education = appData.education;
var technology = appData.technology;
var projectExperience = appData.projectExperience;
var selfAssessment = appData.selfAssessment;

var apiRoutes = express.Router();

apiRoutes.get('/account', function (req, res) {
    res.json({
        data: account
    })
});
apiRoutes.get('/objective', function (req, res) {
    res.json({
        data: objective
    })
});
apiRoutes.get('/workExperience', function (req, res) {
    res.json({
        data: workExperience
    })
});
apiRoutes.get('/education', function (req, res) {
    res.json({
        data: education
    })
});
apiRoutes.get('/technology', function (req, res) {
    res.json({
        data: technology
    })
});
apiRoutes.get('/projectExperience', function (req, res) {
    res.json({
        data: projectExperience
    })
});
apiRoutes.get('/selfAssessment', function (req, res) {
    res.json({
        data: selfAssessment
    })
});
app.use('/api', apiRoutes);

// 加载webpack和配置webpack插件和热加载
var compiler = webpack(webpackConfig);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
});

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: () => { },
    heartbeat: 2000
});

compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    console.log(2)
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})
app.use(devMiddleware);
app.use(hotMiddleware);

// 服务器的设置路径放到express的static中
var staticPath = path.posix.join('/', 'static');
app.use(staticPath, express.static('./static'));
// 模块加载的结果
var _resolve;
var readyPromise = new Promise(resolve => {
    _resolve = resolve;
});

// 在浏览器中打开
var uri = 'http://localhost:' + port
devMiddleware.waitUntilValid(() => {
    if (autoOpenBrowser) {
        opn(uri);
    }
    _resolve();
});
var sever = app.listen(port);

module.exports = {
    ready: readyPromise,
    close: () => {
        sever.close();
    }
}