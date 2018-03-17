let Practice = require("../mongodb/index")["Practice"];

module.exports= (req, res) => {
  let newPractice = new Practice({
    imgUrl: '/ban1.jpg',
    name: '番禺体育馆',
    address: '中环西路256号',
    detail: [{
      title: '场馆介绍',
      content: '使用21米x21米的跳水池，水深5米，采用国际先进的循环过滤和臭氧消毒设备净化水质。场馆配套装备齐全，支持各类型潜水练习。每个场次均有教练在场，能够提供专业教学和指导'
    }, {
      title: '联系场馆',
      content: '客服热线: 020-xxxxxxxx'
    }],
    practiceTime: [
      {
        date: '2018-03-17',
        time: '14:00-16:00'
      },
      {
        date: '2018-03-17',
        time: '16:00-18:00'
      },
      {
        date: '2018-03-17',
        time: '14:00-16:00'
      },
      {
        date: '2018-03-18',
        time: '15:00-17:00'
      },
      {
        date: '2018-03-19',
        time: '14:00-16:00'
      }
    ]
  })
  newPractice.save()
}