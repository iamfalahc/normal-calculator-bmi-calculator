const { log } = require("console");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/bmiCalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", (req, res) => {
    var num1=Number(req.body.n1)
    var num2=Number(req.body.n2)
    var outPut = num1 + num2
  res.send("The answer is :" + outPut);
});
app.post("/bmiCalculator", (req, res) => {
    var num1=Number(req.body.height)
    var num2=Number(req.body.weight)
    var outPut = num2/(num1*num1)
  res.send("The answer is :" + outPut);
});

app.listen(3000, () => {
  console.log("server is running");
});
