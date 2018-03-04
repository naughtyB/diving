let User = require("../mongodb/index")["User"];

module.exports = (req, res) => {
  let userMessage = {mobileNumber: decodeURIComponent(req.body.mobileNumber), password: decodeURIComponent(req.body.password)};
  User.find(userMessage, (err,findUserResponse) => {
    if(err){
      res.json({isCorrect: false, error: "发生错误!请重新提交", errorType: "password"})
    }
    else if(findUserResponse.length == 0){
      res.json({isCorrect: false, error: "密码错误", errorType: "password"})
    }
    else{
      res.json({isCorrect: true, userData: findUserResponse[0]})
    }
  })
  // let newUser = new User({
  //   mobileNumber: '13542829555',
  //   password: 'zzr7765767'
  // });
  // newUser.save()
};