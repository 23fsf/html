const express = require('express')
const https=require("https")
const bodyParser = require('body-parser')//const or var
const { setServers } = require('dns')
const app=express()
app.use(bodyParser.urlencoded({extended:true}))//for work with vars in html file and express true for touch the vars in html like inbuts

app.get('/',function(req,res){
    res.sendFile(__dirname+"/loginin.html")
})
app.post('/',function(req,res){
    var num1=(req.body.num1)
    var num2=(req.body.num2)
    res.send("<h2>your email is ("+num1+") and your password is ("+num2+")</h2>")
})
app.listen(process.env.post || post,() => console.log("Example app listening at http://localhost:(post)"));