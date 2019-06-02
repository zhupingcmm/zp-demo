let express = require('express');

let app = express();

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/api/todo',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Origin","*");
    res.json({name:'hello,zp'})
});

app.listen(5000);
