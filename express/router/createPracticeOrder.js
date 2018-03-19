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
      let data = {
        practiceTime: req.body.practiceTime,
        user: req.cookies.userId,
        practice: req.body.practiceId,
        person: req.body.person
      };
      let newPracticeOrder = new PracticeOrder(data);
      newPracticeOrder.save((err, saveRes) => {
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