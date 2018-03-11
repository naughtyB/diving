let User = require("../mongodb/index")["User"];

module.exports = (req, res) => {
  let userMessage={mobileNumber: req.cookies.mobileNumber, _id: req.cookies.userId};
  User.update(userMessage, {"$push":{delivery: {name: decodeURIComponent(req.body.name), mobileNumber: decodeURIComponent(req.body.mobileNumber), address: decodeURIComponent(req.body.address)}}}, (err,response) => {
    if(err){
      res.json({isSuccessful: false, error: "发生错误!请重新提交", errorType: "address"})
    }
    else if(response.n == 0){
      res.json({isSuccessful: false, loginState: false});
    }
    else{
      User.find(userMessage, (err, findUserResponse) => {
        if(err){
          res.json({isSuccessful: false, error: "发生错误!请直接刷新页面", errorType: "address"})
        }
        else{
          res.json({isSuccessful: true, loginState:true, delivery: findUserResponse[0]['delivery']})
        }
      })
    }
  })
}