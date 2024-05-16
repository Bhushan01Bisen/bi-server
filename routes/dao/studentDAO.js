var mongo = require("mongodb");
var getDBConn=require('../../common/dbConnection')

async function regStdDAO(data) {
  try {
    console.log("reg DAO");
   var db= await getDBConn()
   
    var collection = db.collection("students");
    var result = await collection.insertOne(data);
    return result;
  } catch (ex) {
    console.log("regStdDAO", ex.message);
  } finally {
  }
}
async function getStdDAO() {
  // console.log("get std DAO");x
  try {
    // var mongoClient = mongo.MongoClient;
    // var url = "mongodb+srv://u3:p3@realone.k28ydsv.mongodb.net/";
    // var server = await mongoClient.connect(url);
    var db= await getDBConn()

    // =============we added on dbConnection======
    var collection = db.collection("students");
    var result = await collection.find().toArray();
    return result;
  } catch (ex) {
    console.error("getStdDAO", ex.message);
  } finally {
  }
}

module.exports = {
  regStdDAO,
  getStdDAO,
};

//in this uper reson to much comman code is there so we made a dbConnection.js file so tha we add the code there
