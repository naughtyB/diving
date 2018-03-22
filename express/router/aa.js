let Practice = require("../mongodb/index")["Practice"];
let TripLine = require("../mongodb/index")["TripLine"];
let Trip = require("../mongodb/index")["Trip"];

module.exports= (req, res) => {
  // let newPractice = new Practice({
  //   imgUrl: '/ban1.jpg',
  //   name: '番禺体育馆',
  //   address: '中环西路256号',
  //   detail: [{
  //     title: '场馆介绍',
  //     content: '使用21米x21米的跳水池，水深5米，采用国际先进的循环过滤和臭氧消毒设备净化水质。场馆配套装备齐全，支持各类型潜水练习。每个场次均有教练在场，能够提供专业教学和指导'
  //   }, {
  //     title: '联系场馆',
  //     content: '客服热线: 020-xxxxxxxx'
  //   }],
  //   practiceTime: [
  //     {
  //       date: '2018-03-17',
  //       time: '14:00-16:00'
  //     },
  //     {
  //       date: '2018-03-17',
  //       time: '16:00-18:00'
  //     },
  //     {
  //       date: '2018-03-17',
  //       time: '14:00-16:00'
  //     },
  //     {
  //       date: '2018-03-18',
  //       time: '15:00-17:00'
  //     },
  //     {
  //       date: '2018-03-19',
  //       time: '14:00-16:00'
  //     }
  //   ]
  // })
//   抵达马累机场
// 入关，提取行李
// 前往马累的接驳航班，在环礁机场登船
// 抵达，提取行李
// 搭乘多尼船前往主船 Blue Force One
// 介绍船、船舱分布、潜水和行程
// 旅程开始
  let newTripLine = new TripLine({
    name: '斯米兰群岛 - 邦岛 - 达差岛 - 黎塞留岩 - Boon Sung 号沉船',
    totalTime: '5 天 4 晚',
    embark: '塔普拉姆，Khao Lak',
    disembark: '塔普拉姆，Khao Lak',
    dives: '15次',
    Des: 'West of Eden 基本上是巨大的花岗岩，其中有漂亮的峡谷，并覆盖着鲜艳的珊瑚和大海扇。你能在这里发现色彩艳丽的螳螂虾、大量的花菜软珊瑚、彩虹鳗等生物。',
    Route: [
      {
        title: 'Day 1',
        process: [
          {
            step: '0',
            do: '抵达马累机场'
          },
          {
            step: '1',
            do: '入关，提取行李'
          },
          {
            step: '2',
            do: '前往马累的接驳航班，在环礁机场登船'
          },
          {
            step: '3',
            do: '抵达，提取行李'
          },
          {
            step: '4',
            do: '介绍船、船舱分布、潜水和行程'
          },
          {
            step: '5',
            do: '旅程开始'
          }
        ]
      },
      {
        title: 'Day 2-7',
        process: [
          {
            step: '0',
            do: '在 Laamu、Gaaf Alif、Foamulah 和 Addu 潜水'
          },
          {
            step: '1',
            do: '每天约有 3 潜，每星期有 1 到 2 次夜潜'
          },
          {
            step: '2',
            do: '若当晚没有安排夜潜，下午将作陆上游览'
          },
          {
            step: '3',
            do: '晚餐后安排了团体活动'
          },
          {
            step: '4',
            do: '亦可在船上休息放松、玩游戏、看电影、唱卡拉 OK、享用按摩浴池、做个 SPA 或是按摩'
          },
          {
            step: '5',
            do: '最后一天抵达 Gan 或 Gaaf Atoll'
          }
        ]
      }
    ],
    facilities: ['220V 插座', '日光甲板', '吧台，休闲室', '影音娱乐'],
    amusement: ['潜水课程'],
    diet: ['西式美食', '当地美食', '自助餐', '酒精饮料'],
    equipmentLeasing: [
      {
        name: '全套装备',
        value: '22 欧元/天'
      },
      {
        name: '高氧',
        value: '5 欧元/瓶；65 欧元/周'
      },
      {
        name: '潜水电脑',
        value: '7 欧元/天'
      },
      {
        name: '潜水手电',
        value: '6 欧元/天'
      }
    ],
    qualification: [
      {
        name: '长度',
        value: '36 米'
      },
      {
        name: '宽度',
        value: '8 米'
      },
      {
        name: '建造时间',
        value: '2003'
      },
      {
        name: '客舱容量',
        value: '20 人'
      }
    ]
  })
  newTripLine.save((err, saveRes) => {
    if(!err){
      let newTrip = new Trip({
        name: 'Carpe vita',
        areaName: '马尔代夫',
        price: '￥16000',
        imgUrl: '/image/tripDetail/ship/5794812bf2525.jpg',
        imgs: ['/image/tripDetail/ship/5794812a03f10.jpg', '/image/tripDetail/ship/57948133b1fa2.jpg', '/image/tripDetail/ship/57948150b022d.jpg', '/image/tripDetail/ship/579481375208c.jpg'],
        wifi: false,
        nitrox: true,
        ac: true,
        luxury: true,
        size: '38米/10米',
        guest: '20人',
        about: '2016 被 CNN 评选为“全球最豪华的船宿之一”的 Carpe Vita，意为“把握人生”，于2011年启航，由 Carpe Diem 的拥有者 Amir Mansoor 打造，是她的姐妹船 Carpe Diem 的升级版。Carpe Vita 全长 38 米，内外装修豪华，拥有 3 层甲板和 10 间客舱，每趟航程能招待 20 位客人。Carpe Vita 不仅为客人提供深潜行程，还有海钓、冲浪和其他按客人喜好定制的娱乐活动。<br/><br/>在 Carpe Vita，你可以在配有平板电视和其他娱乐设施的休闲室放松自己，也可以躺在日光甲板上或者泡在按摩浴缸里欣赏印度洋壮观的海景。每天你将享用厨师准备的半自助餐饮，有当地风味和西式美食任你选择。<br/><br/>船上的5名潜导专业而且经验丰富，给你绝对安全的潜水体验。Carpe Vita 精心设计的航线从南到北涵盖马尔代夫的热门潜点，提供最好玩的活动。如果你喜欢海底洞穴和沉船潜水，Carpe Vita 将带你探索神秘的海底；而对于热爱海底生物的潜友，Carpe Vita 将跟你一起邂逅海龟、蝠鲼、鲸鲨和色彩斑斓的珊瑚等海洋生物。',
        tripLine: saveRes["_id"]
      });
      newTrip.save((err, saveRes) => {
        if(err){
          console.log(err);
        }
        else{
          res.json({a:saveRes})
        }
      })
    }
    else{
      console.log(err);
    }
  })
}