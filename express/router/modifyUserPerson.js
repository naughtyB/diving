let User = require("../mongodb/index")["User"];

module.exports = (req, res) => {
  let userMessage={mobileNumber: req.cookies.mobileNumber, _id: req.cookies.userId};
  User.update(userMessage, {"$pull":{person: {_id: decodeURIComponent(req.body.personId)}}}, (err,response) => {
    if(err){
      res.json({isSuccessful: false, error: "发生错误!请重新提交", errorType: "mobileNumber"})
    }
    else if(response.n == 0){
      res.json({isSuccessful: false, loginState: false});
    }
    else{
      User.update(userMessage, {"$push":{person: {name: decodeURIComponent(req.body.name), mobileNumber: decodeURIComponent(req.body.mobileNumber)}}}, (err, response) => {
        User.find(userMessage, (err, findUserResponse) => {
          if(err){
            res.json({isSuccessful: false, error: "发生错误!请直接刷新页面", errorType: "mobileNumber"})
          }
          else{
            res.json({isSuccessful: true, loginState:true, person: findUserResponse[0]['person']})
          }
        })
      })
    }
  })
}