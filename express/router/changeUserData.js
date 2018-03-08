let User = require("../mongodb/index")["User"];

module.exports = (req, res) => {
  let userMessage = {mobileNumber: req.cookies.mobileNumber, _id: req.cookies.userId};
  let updateMessage = {username: decodeURIComponent(req.body.username), sex: decodeURIComponent(req.body.sex)};
  User.update(userMessage, updateMessage, (err, response) => {
    console.log(response);
    if(err){
      res.json({isSuccessful: false, error: "发生错误!请重新提交", errorType: "sex"})
    }
    else if(response.n == 0){
      res.json({loginState: false});
    }
    else{
      User.find(userMessage, (err, findUserResponse) => {
        if(err){
          res.json({isSuccessful: false, loginState:false, error: "发生错误!请重新提交", errorType: "sex"})
        }
        else{
          res.json({isSuccessful: true, loginState:true, userDataFields: {username: findUserResponse[0]['username'], sex: findUserResponse[0]['sex']}})
        }
      })
    }
  })
};