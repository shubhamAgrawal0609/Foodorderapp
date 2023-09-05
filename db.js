const mongoose = require("mongoose");
//const mongoURI =
 // "mongodb+srv://gofood:GOFOOd123@cluster0.miu9haf.mongodb.net/gofoodmern?retryWrites=true&w=majority";

  const mongoURI =
  "mongodb://gofood:GOFOOd123@ac-1hppzyi-shard-00-00.miu9haf.mongodb.net:27017,ac-1hppzyi-shard-00-01.miu9haf.mongodb.net:27017,ac-1hppzyi-shard-00-02.miu9haf.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-130ps6-shard-0&authSource=admin&retryWrites=true&w=majority"
const mongoDB = async () => {
  mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(
      () => {
        // console.log("value", value);
        console.log("Connection successful");

        const FoodItem = mongoose.model(
          "food_item",
          new mongoose.Schema({}, { strict: false, collection: "food_item" })
        );

        /* FoodItem.find().then((arr) => {
          //console.log(arr);
        }); */

        // const db = mongoose.connection.db;
        // const collection = db.collection("food_item");
        // // console.log(colle)
        // console.log(collection.find());
        // collection.find().toArray((err, result) => {
        //   console.log(result);
        // });
      },
      (reason) => {
        console.log("reason", reason);
      }
    )
    .catch((err) => {
      console.log("err", err);
    });
};
module.exports = mongoDB;

//a mongoose model is the wrapper on the mongooose schema
