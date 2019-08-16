//jshint esversion:6
var Express = require("express");
var app = Express();
app.set('view engine','ejs');

app.get('/',(req,res) => {
  res.render("home");
});

app.get('/login',(req,res) => {
  res.render("login");
});

app.get("/registration", (req,res) => {
  res.render("registration",{"district":["Thiruvananthapuram","Kollam","Alappuzha","Pathanamthitta","Kottayam","Idukki","Ernakulam","Thrissur","Palakkad","Malappuram","Kozhikode","Wayanadu","Kannur","Kasaragod"]});
});

app.listen(3000,() => {
  console.log("Server is UP and Running");
});
