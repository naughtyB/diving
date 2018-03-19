let User = require("../mongodb/index")["User"];

module.exports = (req, res) => {
  let userMessage={mobileNumber: req.cookies.mobileNumber, _id: req.cookies.userId};
  User.update(userMessage, {"$pull":{delivery: {_id: decodeURIComponent(req.body.deliveryId)}}}, (err,response) => {
    if(err){
      res.json({isSuccessful: false, error: "发生错误!请重新删除"})
    }
    else if(response.n == 0){
      res.json({isSuccessful: false, loginState: false});
    }
    else{
      User.find(userMessage, (err, findUserResponse) => {
        if(err){
          res.json({isSuccessful: false, error: "发生错误!请直接刷新页面"})
        }
        else{
          res.json({isSuccessful: true, loginState:true, delivery: findUserResponse[0]['delivery']})
        }
      })
    }
  })
}