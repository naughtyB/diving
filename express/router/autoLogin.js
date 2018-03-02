let User = require("../mongodb/index")["User"];

module.exports=(req, res) => {
  let userMessage={mobileNumber: decodeURIComponent(req.body.mobileNumber), _id: decodeURIComponent(req.body['userId'])};
  User.find(userMessage, (err,findUserResponse) => {
    if(err || findUserResponse.length === 0){
      res.json({isCorrect: false});
    }
    else{
      res.json({isCorrect: true, userData: findUserResponse[0]})
    }
  })
};