let Practice = require("../mongodb/index")["Practice"];

module.exports= (req, res) => {
  // let newPractice = new Practice({
  //   imgUrl: '/ban2.jpg',
  //   name: '白云体育馆',
  //   address: '白云大道300号',
  //   detail: [{
  //     title: '场馆介绍',
  //     content: '使用21米x21米的跳水池，水深5米，采用国际先进的循环过滤和臭氧消毒设备净化水质。场馆配套装备齐全，支持各类型潜水练习。每个场次均有教练在场，能够提供专业教学和指导'
  //   }, {
  //     title: '联系场馆',
  //     content: '客服热线: 020-xxxxxxxx'
  //   }]
  // })
  // newPractice.save()
  Practice.find({},(err, findPracticeResponse) => {
    if(err){
      res.json({error:"发生错误!请重新提交"})
    }
    else{
      res.json({practiceData: findPracticeResponse})
    }
  })
}