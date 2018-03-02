let Homepage = require("../mongodb/index")["Homepage"];

module.exports= (req, res) => {
  Homepage.find({},(err, findHomepageResponse) => {
    if(err){
      res.json({error:"发生错误!请重新提交"})
    }
    else{
      res.json({homepageData: findHomepageResponse[0]})
    }
  })
}