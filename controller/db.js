
function savemsg(obj) {
    //引包
    var mongoose = require('mongoose');
    //连接数据库，数据库叫做/studentmanagement。如果数据库不存在会自动创建。
    let db = mongoose.connect('mongodb://127.0.0.1:27017/ewtErrlib');
    if (obj.query.type == 1) {
        //创建一个schema
        var jserrSchema = {
            "type": String,
            "pageUrl": String,
            "scriptUrp": String,
            "errLine": String,
            "errCol": String,
            "errMsg": String
        };

        //创建一个模型（就是一个类）
        let page = null
        page = mongoose.model("page", jserrSchema);
        var errmsg = new page(obj.query);
        //new一个实例
        //持久化
        errmsg.save();
    } else if (obj.query.type == 2) {
        //创建一个schema
        var httpErrSchema = {
            "type": String,
            "pageUrl": String,
            "responseURL": String,
            "status": String,
        };

        //创建一个模型（就是一个类）
        let httpErr = null
        httpErr = mongoose.model("httpErr", httpErrSchema);
        var errmsg = new httpErr(obj.query);
        //new一个实例
        //持久化
        errmsg.save();
    }

}
module.exports = savemsg