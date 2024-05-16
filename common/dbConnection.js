 var mongo= require("mongodb")
 
 
async function getDBConn() {
    var mongoClient = mongo.MongoClient
    var url = "mongodb+srv://u3:p3@realone.k28ydsv.mongodb.net/";
    var server = await mongoClient.connect(url);
    var db = server.db("school");
    return db;
}

module.exports=getDBConn