var express = require("express");

var router = express.Router();

var { getStdService, regStdService } = require("../services/studentService");
//http://localhost:2020/std/reg-std
//post

router.post("/reg-std", async function (req, res) {
  //recived request
  //its a callback function

  //1.take the data from request
  //2.conn with db
  //perform required operations
  //perpare response
  //send res back to client

  //         const res=await fetch("http://localhost:2020/std/reg-std",{
  //     method:"post"
  // })
  // undefined
  // const result=await res.text()
  // undefined
  // result
  // 'reg-std'
  console.log("reg controller");
  var result = await regStdService(req);
  res.send(result);
  // console.log("executed")
});

//http://localhost:2020/std/get-std
//get

router.get("/get-std",async function (req, res) {
  //reciver the rquest first

  //1.take the data from request
  //2.conn with db
  //perform required operations
  //perpare response
  //send res back to client
  // console.log("get-std")

  //     obj.open("get","http://localhost:2020/std/get-std")
  // obj.send()
  // obj.onload=function () {
  //     console.log(obj.responseText)
  // }
  // obj.onerror=function () {
  //    console.log("error")
  // }
  // ƒ () {
  //    console.log("error")
  // }
  // VM889:4 get-std
  console.log("getStd Controlled");
  var result=await getStdService();
  res.send(result);
});

module.exports = router;
