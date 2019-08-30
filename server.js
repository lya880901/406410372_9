//var express=require("express");
var http= require('http');
//var app=express();
var app = require('./app');
//var module01= require('./module01');
//var module02= require('./module02');
/*function onRequest(request,response){
   response.writeHead(200,{'Content-Type':'text/html'});
   fs.readFile('./exsample.html',null,function(error,data){
      if(error){
         response.writeHead(404);
         response.write('File not found!');
      }
      else{
         response.write(data);
      }
      response.end();
   });
   //response.write(module01.myString);
   //response.write(module02.myVariable);
   //module01.myFunction();
   //module02.myFunction();
}*/
//http.createServer(onRequest).listen(8888);
/*app.get("/",function(req,res){
   res.send("<u>架設成功</u>");
});
app.get("/first",function(req,res){
   res.send("<b>第一道口</b>");
});
app.listen(8888,function(){
   console.log("啟動成功 http://localhost:8888/");
   
});*/
http.createServer(app.handleRequest).listen(8888);