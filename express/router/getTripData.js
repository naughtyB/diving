let Trip = require('../mongodb/index')['Trip'];

module.exports = (req, res) => {
  Trip.find({}, (err, response) => {
    if(err){
      res.json({isSuccessful: false, err: '网络连接发生错误，请重新连接'});
    }
    else{
      res.json({isSuccessful: true, tripData: response})
    }
  })
}