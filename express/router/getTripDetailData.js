let TripLine = require("../mongodb/index")["TripLine"];
let Trip = require("../mongodb/index")["Trip"];

module.exports = (req, res) => {
  let findMessage = {'_id': decodeURIComponent(req.body.tripId)};
  console.log(findMessage)
  Trip.find(findMessage).populate("tripLine").exec((err, findTripDetailResponse) => {
    console.log(err);
    if(err){
      res.json({isSuccessful: false, err: '网络发生错误，请重新刷新'})
    }
    else if(findTripDetailResponse.length === 0){
      res.json({isSuccessful: true, err: '没有找到相关资料'})
    }
    else{
      res.json({isSuccessful: true, tripDetailData: findTripDetailResponse[0]})
    }
  })
}