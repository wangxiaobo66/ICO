/**
 * Created by wangxiaobo on 17/8/31.
 */
var views = require('co-views');
var render = views(__dirname,{map: {html: 'swig'}});

module.exports = {
    message: function *(next){
        this.body = yield render('../template/message.html');
    }
};