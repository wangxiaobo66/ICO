/**
 * Created by wangxiaobo on 17/8/31.
 */
var koa = require('koa');
var app = new koa();
var router = require('koa-router')();
var Router = require('koa-router');
var koaBody = require('koa-body')();
var path = require('path');
//var staticCache = require('koa-static-cache');//静态文件

var icoController = require('./controller/cio-controller');
var routerController = require('./controller/router-controller');

//页面
router.get('/message',routerController.message);

app
    .use(router.routes())
    .use(router.allowedMethods());
/*
app.use(staticCache(path.join(__dirname), {
    maxAge: 365 * 24 * 60 * 60
}));
*/
app.listen(10002);