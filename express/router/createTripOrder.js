let User = require("../mongodb/index")["User"];
let TripOrder = require("../mongodb/index")["TripOrder"];

module.exports = (req, res) => {
  let userMessage = {mobileNumber: req.cookies.mobileNumber, _id: req.cookies.userId};
  User.find(userMessage, (err,findUserResponse) => {
    if(err){
      res.json({isSuccessful: false, error: "发生错误!请重新提交"})
    }
    else if(findUserResponse.length == 0){
      res.json({isSuccessful: false, loginState: false})
    }
    else{
      let data = {
        tripTime: req.body.tripTime,
        user: req.cookies.userId,
        trip: req.body.tripId,
        person: req.body.person,
        createTime: new Date().getTime().toString(),
        status: '官方预约中'
      };
      let newTripOrder = new TripOrder(data);
      newTripOrder.save((err, saveRes) => {
        console.log(err);
        if(err){
          res.json({isSuccessful: false, error: "发生错误!请重新提交"})
        }
        else{
          res.json({isSuccessful: true})
        }
      })
    }
  })
}