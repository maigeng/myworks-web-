var express=require('express')
var app=express()
var fs=require('fs')
const path = require('path')
var mysql=require("mysql")
// var bodyparser=require('body-parser')
// var urlencodeParser = bodyparser.urlencoded({extended: true})
// app.use(urlencodeParser);

// 解析post body
const bodypraser = require('body-parser');
app.use(bodypraser.urlencoded({ extended: true }));
app.use(bodypraser.json())

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'3454123',
    database:'text_demo'
});
app.use(express.static(path.join(__dirname, 'leading'),))

console.log(__dirname)
connection.connect();
app.get('/hello',function (req,res) {
    res.send("hello")
    // res.sendFile(__dirname+"/leading/Register.html")

})

app.get('/index',function (req,res) {
     fs.readFile('../leading/bandai_register.html',function (err,data) {
         if(err){throw err;}
         else{res.end(data)}
     })
    // res.readFile("Register.html")
})
app.post('/login',function (req,res) {
    var name=req.query.name
    var pwd=req.query.pwd
    var selectSQL = "select * from users where username = '"+name+"' and password = '"+pwd+"'";
    connection.query(selectSQL,function (err,rs) {
        if(err) {res.send("failed");throw err};
        // if(err){res.send("failed")}
        console.log(rs);
        console.log('OK');
        res.sendFile(__dirname+"/leading/"+'ok.html')
    })
})
app.get('/bandai_register',function (req,res) {
    res.render("bandai_register.html")
})


app.post('/register',function (req,res) {
    var name=req.body.name
    var pwd=req.body.pwd
    var user={username:name,password:pwd}
    connection.query("insert into users set ?",user,function (err,rs) {
        if(err) throw err
        console.log('ok')
    })
    // res.sendFile(__dirname+"/leading/"+'register_ok.html');
   res.sendFile(__dirname+"/leading/"+'register_ok.html')
})


app.post('/shop_submit',function (req,res) {
    console.log('ok')
    console.log(req.body)
    var shop_name=req.body.shop_name
    var shop_address=req.body.shop_address
    var shop_price=req.body.shop_price
    var shops={shop_name:shop_name,shop_address:shop_address,shop_price:shop_price}
    connection.query("insert into shop set ?",shops,function (err,rs) {
        if(err) throw err
        console.log('ok')
        // res.send(rs)
    })
})
var server=app.listen(8080,function () {
    console.log("runing http://localhost:8080")
})

