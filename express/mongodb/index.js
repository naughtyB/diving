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
  price: String,
  detail: [{title: String, content: String}],
  practiceTime: [{date: String, time: String}]
})

let Practice = mongoose.model("practice", PracticeSchema);

let UserSchema = new Schema({
  mobileNumber: String,
  password: String,
  username: String,
  sex: String,
  person: [{name: String, mobileNumber: String}],
  delivery: [{name: String, mobileNumber: String, address: String}]
})

let User = mongoose.model("user", UserSchema);

let PracticeOrderSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: "user"},
  person: [{name: String, mobileNumber: String}],
  practiceTime: {date: String, time: String},
  practice: {type: Schema.Types.ObjectId, ref: "practice"},
  createTime: String,
  status: String
})

let PracticeOrder = mongoose.model("practiceOrder", PracticeOrderSchema)

module.exports={
  Homepage,
  Practice,
  User,
  PracticeOrder
};