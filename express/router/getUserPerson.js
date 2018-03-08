let User = require("../mongodb/index")["User"];

module.exports = (req, res) => {
  let userMessage={mobileNumber: req.cookies.mobileNumber, _id: req.cookies.userId};
  User.find(userMessage, (err,findUserResponse) => {
    if(err){
      res.json({err: '网络发生错误'})
    }
    else if(findUserResponse.length === 0){
      res.json({loginState: false});
    }
    else{
      res.json({loginState: true, person: findUserResponse[0]['person']})
    }
  })
}