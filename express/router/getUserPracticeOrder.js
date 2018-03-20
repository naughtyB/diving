let User = require("../mongodb/index")["User"];
let PracticeOrder = require("../mongodb/index")["PracticeOrder"];

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
      PracticeOrder.find({'user': req.cookies.userId}).populate("practice user").exec((err, findPracticeOrderResponse) => {
        if(err){
          res.json({isSuccessful: false})
        }
        else{
          res.json({isSuccessful: true, practiceOrder: findPracticeOrderResponse})
        }
      })
    }
  })
}