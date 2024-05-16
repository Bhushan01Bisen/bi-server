 var {getStdDAO,regStdDAO}=require("../dao/studentDAO")
 
 async function regStdService(req) {
    const {data}=req.body 
    console.log("reg service");
 var result= await regStdDAO(data)
 return result;
 }
async function getStdService() {
    console.log("get std service");
   var result=await getStdDAO()
   return result;
 }

//  module.exports=regStdService
//  module.exports=getStdService


 module.exports={
    regStdService,
    getStdService
 }