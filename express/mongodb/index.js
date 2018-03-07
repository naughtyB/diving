const mongoose = require("mongoose");
const DB_URL = "mongodb://127.0.0.1:27017/diving";

mongoose.connect(DB_URL);

mongoose.connection.on("connected",() => {
    console.log("Mongoose connection open to "+DB_URL)
});

mongoose.connection.on("error",(err) => {
    console.log("Mongoose connection error: "+err)
});

mongoose.connection.on("disconnected",() => {
    console.log('Mongoose connection disconnected');
});

let Schema=mongoose.Schema;


let HomepageSchema = new Schema({
  banner: [{type: String}]
})

let Homepage = mongoose.model("homepage", HomepageSchema);

let PracticeSchema = new Schema({
  imgUrl: String,
  name: String,
  address: String,
  detail: [{title: String, content: String}]
})

let Practice = mongoose.model("practice", PracticeSchema);

let UserSchema = new Schema({
  mobileNumber: String,
  password: String,
  username: String,
  sex: String
})

let User = mongoose.model("user", UserSchema);

module.exports={
  Homepage,
  Practice,
  User
};