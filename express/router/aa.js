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
  // let newTripLine = new TripLine({
  //   name: '斯米兰群岛 - 邦岛 - 达差岛 - 黎塞留岩 - Boon Sung 号沉船',
  //   totalTime: '5 天 4 晚',
  //   embark: '塔普拉姆，Khao Lak',
  //   disembark: '塔普拉姆，Khao Lak',
  //   dives: '15次',
  //   Des: 'West of Eden 基本上是巨大的花岗岩，其中有漂亮的峡谷，并覆盖着鲜艳的珊瑚和大海扇。你能在这里发现色彩艳丽的螳螂虾、大量的花菜软珊瑚、彩虹鳗等生物。',
  //   Route: [
  //     {
  //       title: 'Day 1',
  //       process: [
  //         {
  //           step: '0',
  //           do: '抵达马累机场'
  //         },
  //         {
  //           step: '1',
  //           do: '入关，提取行李'
  //         },
  //         {
  //           step: '2',
  //           do: '前往马累的接驳航班，在环礁机场登船'
  //         },
  //         {
  //           step: '3',
  //           do: '抵达，提取行李'
  //         },
  //         {
  //           step: '4',
  //           do: '介绍船、船舱分布、潜水和行程'
  //         },
  //         {
  //           step: '5',
  //           do: '旅程开始'
  //         }
  //       ]
  //     },
  //     {
  //       title: 'Day 2-7',
  //       process: [
  //         {
  //           step: '0',
  //           do: '在 Laamu、Gaaf Alif、Foamulah 和 Addu 潜水'
  //         },
  //         {
  //           step: '1',
  //           do: '每天约有 3 潜，每星期有 1 到 2 次夜潜'
  //         },
  //         {
  //           step: '2',
  //           do: '若当晚没有安排夜潜，下午将作陆上游览'
  //         },
  //         {
  //           step: '3',
  //           do: '晚餐后安排了团体活动'
  //         },
  //         {
  //           step: '4',
  //           do: '亦可在船上休息放松、玩游戏、看电影、唱卡拉 OK、享用按摩浴池、做个 SPA 或是按摩'
  //         },
  //         {
  //           step: '5',
  //           do: '最后一天抵达 Gan 或 Gaaf Atoll'
  //         }
  //       ]
  //     }
  //   ],
  //   facilities: ['220V 插座', '日光甲板', '吧台，休闲室', '影音娱乐'],
  //   amusement: ['潜水课程'],
  //   diet: ['西式美食', '当地美食', '自助餐', '酒精饮料'],
  //   equipmentLeasing: [
  //     {
  //       name: '全套装备',
  //       value: '22 欧元/天'
  //     },
  //     {
  //       name: '高氧',
  //       value: '5 欧元/瓶；65 欧元/周'
  //     },
  //     {
  //       name: '潜水电脑',
  //       value: '7 欧元/天'
  //     },
  //     {
  //       name: '潜水手电',
  //       value: '6 欧元/天'
  //     }
  //   ],
  //   qualification: [
  //     {
  //       name: '长度',
  //       value: '36 米'
  //     },
  //     {
  //       name: '宽度',
  //       value: '8 米'
  //     },
  //     {
  //       name: '建造时间',
  //       value: '2003'
  //     },
  //     {
  //       name: '客舱容量',
  //       value: '20 人'
  //     }
  //   ]
  // })
  // newTripLine.save((err, saveRes) => {
  //   if(!err){
  //     let newTrip = new Trip({
  //       name: 'Carpe vita',
  //       areaName: '马尔代夫',
  //       price: '￥16000',
  //       imgUrl: '/image/tripDetail/ship/5794812bf2525.jpg',
  //       imgs: ['/image/tripDetail/ship/5794812a03f10.jpg', '/image/tripDetail/ship/57948133b1fa2.jpg', '/image/tripDetail/ship/57948150b022d.jpg', '/image/tripDetail/ship/579481375208c.jpg'],
  //       wifi: false,
  //       nitrox: true,
  //       ac: true,
  //       luxury: true,
  //       size: '38米/10米',
  //       guest: '20人',
  //       about: '2016 被 CNN 评选为“全球最豪华的船宿之一”的 Carpe Vita，意为“把握人生”，于2011年启航，由 Carpe Diem 的拥有者 Amir Mansoor 打造，是她的姐妹船 Carpe Diem 的升级版。Carpe Vita 全长 38 米，内外装修豪华，拥有 3 层甲板和 10 间客舱，每趟航程能招待 20 位客人。Carpe Vita 不仅为客人提供深潜行程，还有海钓、冲浪和其他按客人喜好定制的娱乐活动。<br/><br/>在 Carpe Vita，你可以在配有平板电视和其他娱乐设施的休闲室放松自己，也可以躺在日光甲板上或者泡在按摩浴缸里欣赏印度洋壮观的海景。每天你将享用厨师准备的半自助餐饮，有当地风味和西式美食任你选择。<br/><br/>船上的5名潜导专业而且经验丰富，给你绝对安全的潜水体验。Carpe Vita 精心设计的航线从南到北涵盖马尔代夫的热门潜点，提供最好玩的活动。如果你喜欢海底洞穴和沉船潜水，Carpe Vita 将带你探索神秘的海底；而对于热爱海底生物的潜友，Carpe Vita 将跟你一起邂逅海龟、蝠鲼、鲸鲨和色彩斑斓的珊瑚等海洋生物。',
  //       tripLine: saveRes["_id"]
  //     });
  //     newTrip.save((err, saveRes) => {
  //       if(err){
  //         console.log(err);
  //       }
  //       else{
  //         res.json({a:saveRes})
  //       }
  //     })
  //   }
  //   else{
  //     console.log(err);
  //   }
  // })
  let a = [
    '{"name":"索科罗 9 天船宿之旅","totalTime":"9 天 8 晚","embark":"Cabo San Lucas","disembark":"Cabo San Lucas","dives":"约 22 潜次","Des":"以下为行程样本，具体行程视出行时的天气和海洋状况而定。我们旨在为你提供，以安全为第一，最舒服的一流潜水体验。","Route":[{"title":"Day 1","process":[{"step":"0","do":"集中地点为 Hotel Gachoo 的一间套房，你可放下行李，游览小镇"},{"step":"1","do":"享受阳光灿烂的卡波圣卢卡斯（Cabo San Lucas）和一顿美好的晚餐"},{"step":"2","do":"晚上 8 点登船"}]},{"title":"Day 2","process":[{"step":"0","do":"在海上，夜晚抵达圣贝内迪克托岛（San Benedicto Island）"},{"step":"1","do":"活动：安全简报、潜水员介绍、魔鬼鱼知识入门"}]},{"title":"Day 3","process":[{"step":"0","do":"全天时间潜水"},{"step":"1","do":"圣贝内迪克托，Revillagegido Archipelago 三座岛屿中的一座"},{"step":"2","do":"这里生活着世界上最友好的巨型魔鬼鱼"},{"step":"3","do":"享受上层甲板的著名墨西哥煎玉米卷盛宴"},{"step":"4","do":"活动：魔鬼鱼知识入门"}]},{"title":"Day 4","process":[{"step":"0","do":"三大岛屿中最大的一座，索科罗岛，潜水"},{"step":"1","do":"一月到四月间，1200 头座头鲸迁徙到索科罗"},{"step":"2","do":"可观赏到水面上的鲸鱼、听鲸鱼唱歌，有时还会在潜水时见到它们"},{"step":"3","do":"活动：魔鬼鱼种类识别"}]},{"title":"Day 5","process":[{"step":"0","do":"在索科罗岛潜水"},{"step":"1","do":"夜晚有一趟夜潜，观赏丝鲨"},{"step":"2","do":"活动：在夜潜灯光下观赏丝鲨、鲨鱼行为观察、魔鬼鱼种类识别"}]},{"title":"Day 6","process":[{"step":"0","do":"罗卡帕蒂达岛（Roca Partida）潜水"},{"step":"1","do":"一个巨大火山上的火山栓，这座火山位于水下 11，800 英尺深处"},{"step":"2","do":"活动：魔鬼鱼种类识别、观鸟"}]},{"title":"Day 7","process":[{"step":"0","do":"在罗卡帕蒂达（Roca Partida）潜水"},{"step":"1","do":"活动：参与 chase the ace 彩票活动；魔鬼鱼种类识别"}]},{"title":"Day 8","process":[{"step":"0","do":"起航回家，返回卡波圣卢卡斯（Cabo San Lucas）"},{"step":"1","do":"活动：船上礼品店、旅程幻灯片放映、和好友一起享受鸡尾酒"}]},{"title":"Day 9","process":[{"step":"0","do":"早上 8 点 30 分离船"},{"step":"1","do":"船将停泊在 Cabo San Lucas IGY Marina"},{"step":"2","do":"如果你计划在同一天离开，我们建议你预订中午 12 点以后的航班"}]}],"facilities":["110V 插座","空调","Wi-Fi","日光甲板","吧台，休闲室","影音娱乐","泡泡浴"],"amusement":["鸡尾酒/红酒派对","皮划艇","单桨冲浪"],"diet":["西式美食","当地美食","自助餐","酒精饮料"],"equipmentLeasing":[{"name":"浮潜装备  ","value":"(含头套) 25 美元"},{"name":"潜水服  ","value":"50 美元"},{"name":"高氧  ","value":"20 美元/天"},{"name":"小型气瓶  ","value":"20 美元"},{"name":"调节器  ","value":"45 美元"},{"name":"潜水电脑  ","value":"25 美元"},{"name":"钢制气瓶  ","value":"36 美元"},{"name":"氩气填充剂  ","value":"15 美元"},{"name":"吸附剂  ","value":"5.45 美元/磅"},{"name":"密闭式循环呼吸系统气瓶  ","value":"20 美元"},{"name":"CCR  ","value":"6 美元/天"},{"name":"SCR  ","value":"9 美元/天"},{"name":"CCR  ","value":"50 美元"}],"qualification":[{"name":"长度  ","value":"41 米"},{"name":"宽度  ","value":"10 米"},{"name":"建造时间  ","value":"2005"},{"name":"客舱容量  ","value":"32 人"}]}',
    '{"name":"Raja Ampat-Misool (8D7N)","totalTime":"8 Days, 7 Nights","embark":"Sorong","disembark":"Sorong","dives":"21次","Des":"Raja Ampat is all about diversity - not only diversity of species, but also of dive sites. There are some areas where soft corals and sea fans dominate, others with hard corals, seagrass beds, mangroves, shallow reefs, drop offs, caves, black sand and white sand… And there are more species of fish life here anywhere else in the world.","Route":[],"facilities":["220V 插座","空调","日光甲板","吧台，休闲室","影音娱乐","摄影装备室"],"amusement":["BBQ 烧烤","潜水课程","浮潜"],"diet":["西式美食","当地美食","自助餐"],"equipmentLeasing":[{"name":"全套装备  ","value":"50 美元/天"},{"name":"浮潜装备  ","value":"5 美元/天"},{"name":"潜水服  ","value":"8 美元/天"},{"name":"脚蹼  ","value":"5 美元/天"},{"name":"高氧  ","value":"6 美元/次"},{"name":"加大气瓶  ","value":"12 美元/天"},{"name":"调节器  ","value":"12 美元/天"},{"name":"浮力背心  ","value":"12 美元/天"},{"name":"潜水电脑  ","value":"12 美元/天"},{"name":"潜水手电  ","value":"12 美元/天"}],"qualification":[{"name":"长度  ","value":"37 米"},{"name":"宽度  ","value":"7.5 米"},{"name":"建造时间  ","value":"2011"},{"name":"客舱容量  ","value":"24 人"}]}',
    '{"name":"马尔代夫船宿 8 天精华之旅","totalTime":"8 天 7 晚","embark":"马累","disembark":"马累","dives":"18次","Des":"North Malé - Ari - Vaavu - South Malé","Route":[{"title":"Day 1","process":[{"step":"0","do":"下午 2 点登船"},{"step":"1","do":"欢迎会后用午餐，行程简介"},{"step":"2","do":"在北马累进行 check dive"},{"step":"3","do":"晚餐"}]},{"title":"Days 2 - 7","process":[{"step":"0","do":"每天有 3 潜"},{"step":"1","do":"围绕北马累、阿里环礁、Vaavu 及南马累附近"},{"step":"2","do":"丰富多彩的海洋生物，如海龟、珊瑚鱼、鲸鲨、魔鬼鱼"},{"step":"3","do":"小丑鱼、八爪鱼、海鳝、绸带鳗、襞鱼、和蝎子鱼"}]},{"title":"Day 8","process":[{"step":"0","do":"最晚上午 8 点离船"},{"step":"1","do":"由于我们需要为下次航行做准备，我们必须严格执行这项早离船政策"}]}],"facilities":["220V 插座","空调","Wi-Fi","日光甲板","吧台，休闲室","影音娱乐","电视"],"amusement":["水疗/按摩","BBQ 烧烤","海钓","潜水课程","浮潜"],"diet":["西式美食","当地美食","素食","自助餐","酒精饮料"],"equipmentLeasing":[{"name":"全套装备  ","value":"220 美元/周"},{"name":"浮潜装备  ","value":"30 美元/周"},{"name":"潜水服  ","value":"40 美元/周"},{"name":"高氧气瓶  ","value":"100 美元/周"},{"name":"15 升高氧  ","value":"150 美元/周"},{"name":"调节器  ","value":"50 美元/周"},{"name":"象拔  ","value":"免费"},{"name":"浮力背心  ","value":"50 美元/周"},{"name":"流钩  ","value":"7 美元/周"},{"name":"潜水电脑  ","value":"65 美元/周"},{"name":"潜水手电  ","value":"30 美元/周"}],"qualification":[{"name":"长度  ","value":"43 米"},{"name":"宽度  ","value":"11 米"},{"name":"建造时间  ","value":"2016"},{"name":"客舱容量  ","value":"22 人"}]}',
    '{"name":"南半球船宿之旅（深南线）","totalTime":"8 天 7 晚","embark":"Gan 或 Kooddoo","disembark":"Gan 或 Kooddoo","dives":"20次","Des":"在马尔代夫南半球的众多传统潜水航线中，我们向你推荐这艘马尔代夫 Blue Force One 游艇及其航线。<br>马尔代夫 Blue Force One 团队，根据马尔代夫的南半球部分在这几个月的最佳情况，计划了接下来的航行季路线。<br>该趟船宿之旅在一月底出发，前往群岛的南部，并将在赤道带呆 8 周，随后返回 Malé。<br>这条航线独特，与其他任何一条传统环形航线不同。潜水质量一流，海洋生物种类丰富。能看到成群结队的鱼、鲨鱼群、中上层鱼群、夜晚观赏的鲸鲨、魔鬼鱼、虎鲨、翻车鱼和旗鱼等。礁石又多又美，还有25年不变的珊瑚山，以及 British Royalty（马尔代夫最大的沉船遗迹），这些都使这条航线成为马尔代夫的精华之旅。<br>南半球（中间阶段）: Gaaf Alif – Foamulah – Addu / Addu – Foamulah – Gaaf Alif。在 Gan 和 Kooddoo 上下船，具体情况看航程阶段。","Route":[{"title":"Day 1","process":[{"step":"0","do":"抵达马累机场"},{"step":"1","do":"入关，提取行李"},{"step":"2","do":"前往马累的接驳航班，在环礁机场登船"},{"step":"3","do":"抵达，提取行李"},{"step":"4","do":"搭乘多尼船前往主船 Blue Force One"},{"step":"5","do":"介绍船、船舱分布、潜水和行程"},{"step":"6","do":"旅程开始"}]},{"title":"Day 2-7","process":[{"step":"0","do":"在 Laamu、Gaaf Alif、Foamulah 和 Addu 潜水"},{"step":"1","do":"每天约有 3 潜，每星期有 1 到 2 次夜潜"},{"step":"2","do":"保证一星期内共有 18 潜"},{"step":"3","do":"若当晚没有安排夜潜，下午将作陆上游览"},{"step":"4","do":"晚餐后安排了团体活动"},{"step":"5","do":"亦可在船上休息放松、玩游戏、看电影、唱卡拉 OK、享用按摩浴池、做个 SPA 或是按摩"},{"step":"6","do":"最后一天抵达 Gan 或 Gaaf Atoll"},{"step":"7","do":"可做清洁、在船上休息、摄影总结和每周一次的晚餐后视频总结"}]},{"title":"Day 8","process":[{"step":"0","do":"上午离船，乘坐当地航班前往马累"},{"step":"1","do":"抵达马累机场"},{"step":"2","do":"若时间允许，可逛马累市区"},{"step":"3","do":"游览首都，购物"},{"step":"4","do":"客人也可自由选择在马累机场附近的酒店休息"}]}],"facilities":["220V 插座","空调","Wi-Fi","日光甲板","吧台，休闲室","影音娱乐","按摩浴缸","桑拿"],"amusement":["浮潜","水上运动"],"diet":["西式美食","当地美食","素食","自助餐","酒精饮料"],"equipmentLeasing":[{"name":"潜水服  ","value":"25 美元"},{"name":"高氧填充  ","value":"免费"},{"name":"高氧气瓶  ","value":"免费"},{"name":"15 升气瓶  ","value":"免费"},{"name":"调节器  ","value":"40 美元"},{"name":"浮力背心  ","value":"40 美元"},{"name":"潜水电脑  ","value":"50 美元"}],"qualification":[{"name":"长度  ","value":"42 米"},{"name":"宽度  ","value":"12 米"},{"name":"建造时间  ","value":"2013"},{"name":"客舱容量  ","value":"22 人"}]}',
    '{"name":"马尔代夫船宿精华之旅","totalTime":"8 天 7 晚","embark":"马累","disembark":"马累","dives":"17次","Des":"马尔代夫四座最著名的环礁是 北马累，南马累，Felidhe Atoll 和阿里环礁。当你在探索这四个环礁时，一定要参加 Azalea 船宿之旅。在马尔代夫的环礁中穿行，你将观赏到深而见底的清澈大海，海里的各种生物：海豚、中上层鱼群，其中有梭鱼群、鲹群和吞拿鱼群，还有大群的鲷、红鲷和鲨鱼，都共同和平生活在一起。最精彩的是不时出现的魔鬼鱼、鲸鲨、鲼、灰礁鲨和巨大的鲹。","Route":[{"title":"Day 1","process":[{"step":"0","do":"到达"},{"step":"1","do":"机场接机，游览马累"},{"step":"2","do":"在船上用午餐"},{"step":"3","do":"安全说明"},{"step":"4","do":"Check Dive"},{"step":"5","do":"在船上用晚餐"},{"step":"6","do":"在北马累环礁过夜"}]},{"title":"Day 2","process":[{"step":"0","do":"早晨在北马累环礁潜水"},{"step":"1","do":"船上用早餐"},{"step":"2","do":"前往南马累环礁"},{"step":"3","do":"在 Enbudhu Express 或 Kandooma Thila 进行当天第二潜"},{"step":"4","do":"船上用午餐"},{"step":"5","do":"在 Guraidho Kandu 进行第三潜"},{"step":"6","do":"接着去瓦武环礁"},{"step":"7","do":"第四潜为夜潜，观赏鲨鱼"},{"step":"8","do":"船上用晚餐"},{"step":"9","do":"在瓦武环礁过夜"}]},{"title":"Day 3","process":[{"step":"0","do":"早晨在 Miyaru Kandu 潜水"},{"step":"1","do":"船上用早餐"},{"step":"2","do":"在 Golden Wall 进行当天第二潜"},{"step":"3","do":"船上用午餐"},{"step":"4","do":"在 Fotteyo 进行第三潜"},{"step":"5","do":"船上用晚餐"},{"step":"6","do":"在瓦武环礁过夜"}]},{"title":"Day 4","process":[{"step":"0","do":"早晨在 Fotteyo 潜水，观赏锤头鲨"},{"step":"1","do":"船上用早餐"},{"step":"2","do":"在 Fushi Kandu 进行当天第二潜"},{"step":"3","do":"船上用午餐"},{"step":"4","do":"在 Dhevana Kandu 进行第三潜"},{"step":"5","do":"前往南阿里环礁"},{"step":"6","do":"船上用晚餐"},{"step":"7","do":"在南阿里环礁过夜"}]},{"title":"Day 5","process":[{"step":"0","do":"早晨在 Kuda Rah Thila 潜水"},{"step":"1","do":"船上用早餐"},{"step":"2","do":"在南阿里环礁外航行，寻找鲸鲨"},{"step":"3","do":"第二潜在 Bodufinolhu Thila，观赏鲸鲨"},{"step":"4","do":"船上用午餐"},{"step":"5","do":"在 Rangali Madivaru 进行第三潜"},{"step":"6","do":"沙滩上 BBQ 晚餐"},{"step":"7","do":"在南阿里环礁过夜"}]},{"title":"Day 6","process":[{"step":"0","do":"早晨在 Panatone 潜水"},{"step":"1","do":"船上用早餐"},{"step":"2","do":"在 Moofushi Kandu 进行当天第二潜"},{"step":"3","do":"船上用午餐"},{"step":"4","do":"在 Himendhoo Thila 进行第三潜"},{"step":"5","do":"前往北阿里环礁"},{"step":"6","do":"第四潜为夜潜，观赏魔鬼鱼"},{"step":"7","do":"船上用晚餐"},{"step":"8","do":"在北阿里环礁过夜"}]},{"title":"Day 7","process":[{"step":"0","do":"早晨在 Fish Head 潜水"},{"step":"1","do":"船上用早餐"},{"step":"2","do":"在 Kan Thila 进行当天第二潜"},{"step":"3","do":"船上用午餐"},{"step":"4","do":"前往北马累环礁"},{"step":"5","do":"游览马累市区"},{"step":"6","do":"船上用晚餐"},{"step":"7","do":"在北马累环礁过夜"}]},{"title":"Day 8","process":[{"step":"0","do":"用早餐"},{"step":"1","do":"前往机场"}]}],"facilities":["空调","Wi-Fi","日光甲板","吧台，休闲室","影音娱乐","摄影装备室","按摩浴缸"],"amusement":["瑜伽","陆上活动","BBQ 烧烤","海钓","浮潜","冲浪","皮划艇","水上滑板","摩托艇","水上高尔夫"],"diet":["西式美食","当地美食","素食","自助餐","酒精饮料"],"equipmentLeasing":[{"name":"高氧  ","value":"100 美元/周"},{"name":"海钓装备  ","value":"免费"}],"qualification":[{"name":"长度  ","value":"38 米"},{"name":"宽度  ","value":"8 米"},{"name":"建造时间  ","value":"2015"},{"name":"客舱容量  ","value":"18 人"}]}',
    '{"name":"四方线：马尔代夫船宿精华之旅","totalTime":"8 天 7 晚","embark":"马累，22:00","disembark":"马累，07:00","dives":"17次","Des":" ","Route":[{"title":"Day 1","process":[{"step":"0","do":"10:00后 机场接机，免费交通前往主船 （当天24点前任意时间到达马累机场都可以安排接机，晚上到达仅错过午餐、晚餐）"},{"step":"1","do":"10:45 欢迎小会"},{"step":"2","do":"10:50 办理登船手续"},{"step":"3","do":"13:00 午餐"},{"step":"4","do":"17:00 Spa 公开答疑，接受预订"},{"step":"5","do":"18:00 船员介绍，安全说明"},{"step":"6","do":"19:00 在 Al Fresco 餐厅享用欢迎晚餐"},{"step":"7","do":"20:00 出发前往 North Male Atoll 的 Coco Palm Bodu Hithi 度假区"},{"step":"8","do":"22:30 船停泊"}]},{"title":"Day 2","process":[{"step":"0","do":"06:00 早晨在 Boduhithi Thila 进行测试潜"},{"step":"1","do":"07:00 瑜伽课"},{"step":"2","do":"08:00 - 09:30 早餐"},{"step":"3","do":"09:00 Spa "},{"step":"4","do":"10:30 当天第二潜在 Boduhithi Manta Point，魔鬼鱼潜水点进行"},{"step":"5","do":"12:15 出发前往 Rasdhoo Atoll"},{"step":"6","do":"13:00 午餐"},{"step":"7","do":"15:30 第三潜在 Rasdu Madivaru Channel 进行"},{"step":"8","do":"15:30 - 18:00浮潜，水上运动，Madivaru Finolhu 漫步沙滩"},{"step":"9","do":"19:00 Al Fresco 餐厅享用「周日烧烤」主题晚餐"}]},{"title":"Day 3","process":[{"step":"0","do":"05:45 早晨在 Kuramathi Kandu 与锤头鲨潜水"},{"step":"1","do":"07:00 瑜伽课"},{"step":"2","do":"08:00 - 09:30 早餐"},{"step":"3","do":"09:00 Spa"},{"step":"4","do":"10:00 - 13:00 浮潜，水上运动，在 Picnic 岛漫步沙滩"},{"step":"5","do":"10:30 当天第二潜在 Rasdhoo Madivaru 进行"},{"step":"6","do":"13:00自助餐式午餐"},{"step":"7","do":"14:30 出发前往北阿里环礁"},{"step":"8","do":"17:30 Forecaster 区域伴着日落练瑜伽"},{"step":"9","do":"18:00Maaya Thila 有一次夜潜"},{"step":"10","do":"19:00享用海陆大餐作为晚餐"},{"step":"11","do":"出发前往 Alikoirah 区域"}]},{"title":"Day 4","process":[{"step":"0","do":"06:30 早晨在 Fish Head 和鲨鱼潜水"},{"step":"1","do":"07:00 在 Meeruvenfushi 岛有沙滩瑜伽课"},{"step":"2","do":"08:00 - 09:30 早餐"},{"step":"3","do":"09:00 Spa"},{"step":"4","do":"09:00 随后前往 Constance Moofushi 度假区"},{"step":"5","do":"10:30 当天第二潜在 Moofushi Manta Point，魔鬼鱼潜水点进行"},{"step":"6","do":"10:30 - 13:00 浮潜，水上运动"},{"step":"7","do":"13:00 自助午餐"},{"step":"8","do":"14:30 接着前往 Innafushi 岛"},{"step":"9","do":"14:30 当天第三潜在 Bulhalhohi Caves 进行"},{"step":"10","do":"18:30 夜晚在沙滩上 BBQ"},{"step":"11","do":"Lagoon Bar 开派对"},{"step":"12","do":"随后前往南阿里环礁的首府 Maamigili "}]},{"title":"Day 5","process":[{"step":"0","do":"07:00 瑜伽课"},{"step":"1","do":"08:00 - 09:30 早餐"},{"step":"2","do":"09:00 Spa"},{"step":"3","do":"09:00 - 12:45 第一次寻找鲸鲨，浮潜或深潜"},{"step":"4","do":"13:00 自助午餐"},{"step":"5","do":"14:00 - 17:45 第二次寻找鲸鲨，浮潜或深潜"},{"step":"6","do":"14:30 出发前往 Dhigurah Lagoon"},{"step":"7","do":"14:00 - 17:45 浮潜，水上运动，漫步当地小岛上的沙滩"},{"step":"8","do":"19:00「墨西哥狂欢节」主题的晚餐，在 Al Fresco 餐厅"},{"step":"9","do":"20:30 马尔代夫鲸鲨研究计划（MWSRP) 在 Spa 甲板上办一场现场展示报告"}]},{"title":"Day 6","process":[{"step":"0","do":"06:30 当天第一潜在 Kudhima Wreck 沉船遗迹进行"},{"step":"1","do":"07:00 瑜伽课"},{"step":"2","do":"08:00 - 09:30 早餐"},{"step":"3","do":"09:00 Spa"},{"step":"4","do":"10:30 第二潜在 Broken Rock 进行"},{"step":"5","do":"12:30 出发前往瓦武环礁的 Alimatha"},{"step":"6","do":"12:30 在 Al Fresco 餐厅用 BBQ 午餐"},{"step":"7","do":"17:00 浮潜，水上运动，漫步沙滩"},{"step":"8","do":"18:00 第二次夜潜在 Alimatha House Reef 进行，观赏护士鲨"},{"step":"9","do":"19:00 在 Al Fresco 餐厅享用意大利晚餐"},{"step":"10","do":"20:45 晚饭后在太阳甲板上公开放映电影大片"}]},{"title":"Day 7","process":[{"step":"0","do":"06:30 早晨在 Miyaru Kandu 和鲨鱼一起潜水"},{"step":"1","do":"07:00 瑜伽课"},{"step":"2","do":"08:00 - 09:30 早餐"},{"step":"3","do":"08:30 出发前往南马累环礁"},{"step":"4","do":"09:00 Spa"},{"step":"5","do":"10:30 当天第二潜在 Kandooma Thila 进行"},{"step":"6","do":"11:00 浮潜，游览 Sexy Beach 沙滩"},{"step":"7","do":"13:00 自助午餐"},{"step":"8","do":"14:00 - 15:00 游览当地岛屿 Maafushi"},{"step":"9","do":"15:00 第三潜在 Kuda Giri 沉船遗迹进行"},{"step":"10","do":"16:45 随后前往马累附近的 Kurumba"},{"step":"11","do":"18:00 日落鸡尾酒派对"},{"step":"12","do":"19:00 在 Al Fresco 餐厅举办送行亚洲晚宴"}]},{"title":"Day 8","process":[{"step":"0","do":"06:30 - 08:30 早餐"},{"step":"1","do":"07:00 第一批免费交通前往马累国际机场"},{"step":"2","do":"07:00 - 08:30 办理离船手续"},{"step":"3","do":"08:45 最后一批免费交通前往马累国际机场"}]}],"facilities":["空调","Wi-Fi","日光甲板","吧台，休闲室","影音娱乐","按摩浴缸","健身房"],"amusement":["水疗/按摩","卡拉OK","迪斯科","瑜伽","BBQ 烧烤","海钓","潜水课程","浮潜"],"diet":["西式美食","当地美食","素食","自助餐","菜单点餐","酒精饮料"],"equipmentLeasing":[{"name":"潜水服  ","value":"60 美元/周"},{"name":"调节器  ","value":"60 美元/周"},{"name":"浮力背心  ","value":"60 美元/周"},{"name":"流钩  ","value":"30 美元/周"},{"name":"潜水电脑  ","value":"60 美元/周"},{"name":"潜水手电  ","value":"100 美元/周"}],"qualification":[{"name":"长度  ","value":"50 米"},{"name":"宽度  ","value":"11 米"},{"name":"建造时间  ","value":"2014"},{"name":"客舱容量  ","value":"42 人"}]}',
    '{"name":"阿里环礁之旅","totalTime":"8 天 7 晚","embark":"马累","disembark":"马累","dives":"17次","Des":"","Route":[],"facilities":["220V 插座","空调","Wi-Fi","日光甲板","吧台，休闲室","影音娱乐","按摩浴缸"],"amusement":["BBQ 烧烤","浮潜"],"diet":["西式美食","亚洲美食","当地美食","自助餐","酒精饮料"],"equipmentLeasing":[{"name":"浮潜装备  ","value":"5 美元/天"},{"name":"潜水服  ","value":"10 美元/天"},{"name":"高氧填充  ","value":"25 美元/天"},{"name":"15 升高氧  ","value":"15 美元/天"},{"name":"15 升气瓶  ","value":"20 美元/天"},{"name":"调节器  ","value":"10 美元/天"},{"name":"浮力背心  ","value":"10 美元/天"},{"name":"潜水电脑  ","value":"10 美元/天"},{"name":"潜水手电  ","value":"10 美元/天"}],"qualification":[{"name":"长度  ","value":"35.62米"},{"name":"宽度  ","value":"10.2米"},{"name":"建造时间  ","value":"2009"},{"name":"客舱容量  ","value":"20 人"}]}'
  ];
  let b = [
    '{"name":"贝利艾米号 (Nautilus Belle Amie)","areaName":"墨西哥","price":"¥17,347","imgUrl":"https://img10-cdn.innfins.com/20160929/57ece6179cbce.jpeg!c1424x840","imgs":["https://img10-cdn.innfins.com/20160929/57ece60f75ca6.jpeg!c300x300","https://img10-cdn.innfins.com/20160929/57ece61c3e033.jpeg!c300x300","https://img10-cdn.innfins.com/20160929/57ece6204d201.jpeg!c300x300","https://img10-cdn.innfins.com/20160929/57ece6245ec56.jpeg!c300x300"],"wifi":true,"nitrox":true,"luxury":true,"ac":true,"size":"41 米/10 米","guest":"32 人","about":"Nautilus Belle Amie 是世界著名的船宿公司 Nautilus Fleet 旗下的豪华游艇，提供前往瓜达卢佩岛和索科罗群岛的潜水冒险之旅，带你探索墨西哥海底天堂。与它的姐妹船 Nautilus Explorer 相比，Nautilus Belle Amie 拥有 4 层甲板，全长 41 米，是一艘大型豪华游艇，而且在墨西哥航行的经验更丰富，熟悉墨西哥各潜点和环境，能提供兼顾专业性和舒适性的航线。<br> <br>船上共有 16 间客房，都配有独立卫浴和私人设施，其中包括 1 间豪华套房，内设休闲室且直接连通按摩浴缸甲板层，还有经济型的混宿 3 人间。每次充实的潜水运动后，船上有丰富的娱乐活动，你可以在按摩浴缸舒服地泡泡澡，在迷人的海景中享受个日光浴，参加船上的红酒派对，也可以在夜空下看部电影，度过闲逸时光。<br> <br>Nautilus Belle Amie 拥有超过 25 年的船宿运营经验，熟悉大自然的韵律，能在最佳时间以最佳方式把最美的墨西哥海底世界呈现在你面前。船上专业的潜导将带你深潜入索科罗岛，和蝠鲼，海豚和鲨鱼近距离共游；或者到瓜达卢佩岛看神秘的大白鲨。            "}', 
    '{"name":"蝠鲼之王号 (Raja Manta)","areaName":"印度尼西亚","price":"¥8,068","imgUrl":"https://img10-cdn.innfins.com/20161107/58202b083fd341.jpg!c1424x840","imgs":["https://img10-cdn.innfins.com/20160724/579486a56e8ca.jpg!c300x300","https://img10-cdn.innfins.com/20160724/5794869f29e6c.jpg!c300x300","https://img10-cdn.innfins.com/20160724/5794861ec0a9a.JPG!c300x300","https://img10-cdn.innfins.com/20160724/5794861f28551.JPG!c300x300"],"wifi":false,"nitrox":true,"luxury":true,"ac":true,"size":"37 米/7.5 米","guest":"24 人","about":"Raja Manta 是一艘专门为潜水爱好者设计的豪华游艇，长 37 米，宽 7.5 米，内部装修典雅精致，白色饰品搭配棕色原木地板，给人温馨舒适的感觉。<br> <br>船上共有 11 间客房，有温馨的经济房及典雅的豪华套房可供选择。大部分客房均配备有独立卫浴与空调，明亮宽敞，并有大窗让你在客房休息时能边欣赏美丽的印尼海景。<br> <br>在主甲板上设有室内休息区及用餐区，装修豪华典雅，拥有全套多媒体系统及宽屏电视。在一天刺激的潜水探险后，你可以品尝到主厨精心烹饪的当地美食或西式佳肴，也可以宽敞的甲板上享受温暖日光浴，又或者在空调房里等待专业按摩师为你做个正宗的印尼按摩。<br> <br>这艘船上配备有宽敞的潜水平台，专业潜水团队会给你全方位的潜水指导，保证你在畅游海底世界时的人身安全。Raja Manta全年提供印度尼西亚多条航线，前往 Komodo、Alor、Raja Ampa、Banda Sea 等著名潜点，将与你一起探寻美丽奇妙的印度尼西亚。            "}',
    '{"name":"Carpe Novo","areaName":"马尔代夫","price":"¥11,563","imgUrl":"https://img10-cdn.innfins.com/20160724/579396520f615.jpg!c1424x840","imgs":["https://img10-cdn.innfins.com/20160724/5793964e535a7.jpg!c300x300","https://img10-cdn.innfins.com/20160724/579396580ac6f.jpg!c300x300","https://img10-cdn.innfins.com/20160805/57a3fbb48a09e.jpg!c300x300","https://img10-cdn.innfins.com/20160805/57a3fbc01c5e9.jpg!c300x300"],"wifi":true,"nitrox":true,"luxury":true,"ac":true,"size":"43 米/11 米","guest":"22 人","about":"Carpe Novo 长 43 米，是一艘提供马尔代夫潜水之旅的豪华船宿游艇，由 Carpe Diem 和 Carpe Vita 的拥有者 Amir Mansoor 建造，航海历程从 2016 年 3 月开始，是 Carpe Diem 船队中最年轻、最大的船，拥有 3 层甲板和 12 间宽敞舒适的客舱，一趟航程能招待多达 22 位客人。除了为客人提供深潜行程，Carpe Novo 还提供冲浪、海钓、浮潜、BBQ 等娱乐。<br> <br>Carpe Novo 的主甲板上有室内休闲区，配有平板电视、娱乐设施和图书室，室外的遮阳休息区有舒适沙发。你可以在上层甲板的室外用餐区享用厨师为你准备的晚餐，当地风味和西式美食任你选择。还可以躺在日光甲板沐浴阳光欣赏海景，或是享受水疗按摩。<br> <br>在专业潜导的陪同下，每天你将有 3 次绝对安全而刺激的深潜。Carpe Novo 精心设计 11 条精华航线，潜点涵盖马尔代夫的北、中、南部，让你有机会跟海龟、蝠鲼、鲸鲨、吉他鲨、五颜六色的珊瑚等海洋生物近距离触。            "}',
    '{"name":"Blue Force One","areaName":"马尔代夫","price":"¥11,110","imgUrl":"https://img10-cdn.innfins.com/20160727/579834a3111fb.jpg!c1424x840","imgs":["https://img10-cdn.innfins.com/20160727/579834ab5cbea.jpg!c300x300","https://img10-cdn.innfins.com/20160723/57938e2584ce0.jpg!c300x300","https://img10-cdn.innfins.com/20160723/57938e4cf30b2.jpg!c300x300","https://img10-cdn.innfins.com/20160723/57938e550d94f.jpg!c300x300"],"wifi":true,"nitrox":true,"luxury":true,"ac":true,"size":"42 米/12 米","guest":"22 人","about":"Blue Force One 是一艘 42 米长的豪华游艇，船上设施应有尽有。Blue Force One 一共有 11 间能够容纳 22 名游客的船舱，包括 7 间宽敞的标准套间、1 间普通套房、1 间主人间和 2 间主人套房。每间房都有独立卫浴和空调，还有 32 寸的家庭影音设备，让你倍感家的温馨。<br> <br>Blue Force One 有着各式各样的休闲设施，从室外按摩浴缸、日光甲板、船上按摩、桑拿、蒸汽浴、露天甲板吧台到配备软沙发和 65 寸大电视的休息区以及配有卡拉OK的迪斯科室，随时为你提供舒适和有趣娱乐活动。<br> <br>除此之外，Maldives Blue Force One 还有一艘 18 米长的潜水工作船，里面独立存放空气压缩机、高氧瓶和潜水装备，确保主艇宁静舒适的环境。对于潜水爱好者的你来说，这一定是首选，因为你能够探索马尔代夫美丽的水域和迷人的潜点，去找寻一年四季中最不同寻常的美景，欣赏不同季节下水底世界的原始之美。你还会与魔鬼鱼、锤头鲨、鲸鲨来一场亲密邂逅。            "}',
    '{"name":"杜鹃花号 (Azalea)","areaName":"马尔代夫","price":"¥16,100","imgUrl":"https://img10-cdn.innfins.com/20170113/5878d873e9f0f1.png!c1424x840","imgs":["https://img10-cdn.innfins.com/20160723/579362fb40b5d.jpg!c300x300","https://img10-cdn.innfins.com/20170113/5878d4df668111.png!c300x300","https://img10-cdn.innfins.com/20171028/59f49a34b57101.png!c300x300","https://img10-cdn.innfins.com/20170113/5878d3ac7ec6f1.jpg!c300x300"],"wifi":true,"nitrox":true,"luxury":true,"ac":true,"size":"38 米/8 米","guest":"18 人","about":"Azalea 是一艘拥有三层主甲板的豪华游艇，长达 38 米，外观高端现代，住宿豪华前卫，星级定制美食，将带给你极致的马尔代夫船宿潜水体验。<br> <br>船上共有 9 间精美套房，共可容纳 18 名旅客，从温馨舒适的标准间到带有超大海景窗的奢华套房，每间客舱均配备有独立卫浴及空调，还有免费卫浴用品及洗衣服务。<br> <br>主甲板上设有清静典雅的室内休息区，精品餐厅有西式佳肴及当地风味供应。游客们可以在宽阔的甲板上晒一个日光浴，也可以在一天的潜水活动后，躺在按摩泳池里放松身心。Azalea 还为各位游客提供各类娱乐设施如海上高尔夫，皮划艇，冲浪滑板，影音设备，电子游戏等。<br> <br>船上潜导均通过 PADI 国际认证，将保证您在海底世界探索的安全，Azalea 有四条航线可供选择，将分别把您带进马尔代夫的南部、中部、北部环形礁岛。珊瑚礁群岛具有多层次的生态系统，营养物质丰富，您将会欣赏到各类色彩丰富的珊瑚礁与海绵，有机会与各种与海豚，蝠鲼、白鲨等多种大型鱼类零距离接触。            "}',
    '{"name":"ScubaSpa Ying","areaName":"马尔代夫","price":"¥11,736","imgUrl":"https://img10-cdn.innfins.com/20180123/5a66fc873ac2d1.jpg!c1424x840","imgs":["https://img10-cdn.innfins.com/20180123/5a66feb3a3b6e1.jpg!c300x300","https://img10-cdn.innfins.com/20180123/5a66ff5d28d6d1.jpg!c300x300","https://img10-cdn.innfins.com/20180129/5a6e229d4e2401.jpg!c300x300","https://img10-cdn.innfins.com/20180129/5a6e22946bcd71.jpg!c300x300"],"wifi":true,"nitrox":true,"luxury":true,"ac":true,"size":"50 米/11 米","guest":"42 人","about":"ScubaSPA Ying 是一艘长 50 米的豪华欧式船宿游艇，它与姐妹船 ScubaSPA Yang 同属于 ScubaSPA Maldives，Ying 和 Yang 连续获得 2016、2017 年马尔代夫最佳船宿等诸多国际奖项，也是马代唯一获 PADI 五星认证的船宿。其以独特的「海上度假村」理念，赢得了大量潜水员和非潜水员的喜爱，跻身全球顶级船宿行列。值得一提的是，ScubaSPA Yang &amp; Ying 是马代唯二拥有中文潜导的船宿，让您的船宿之旅沟通无碍。<br> <br>打造以潜水 (Scuba) 和 SPA 为主题的豪华船宿游艇的理念来自热爱潜水的波兰籍船东和他的新娘，新郎拥有丰富的五星级酒店运营经验，而新娘是一位出色的理疗师。他们希望为潜水员和非潜水员提供世界级的潜水、SPA 体验，同时也照顾潜水员的家庭旅行需求。经历几年的筹划、建造后，Ying 于 2013 年下水，Yang 在其后 1 年开启处女航，Yang 配备了一间健身房，这也是二者几乎唯一的区别。<br> <br>Ying 拥有 4 层宽敞的甲板，19 个舒适宽敞、内饰讲究的现代化套房能轻松容纳 40人。位于底层甲板的是 10 间海星房和船头的 1 间海贝房，主甲板有 5 间 1.8 米床的 Manta 套房和 3 间 1.5 米床的海豚套房，Manta 和海豚套房都有一面 3 米无敌海景大窗，非常值得推荐。除了海豚套房外，其他房型都提供大床、双床的选择，适合朋友或者独自旅行的潜水员选择。获得南非 Butler 国际管家学院认证的管家每天会为整理房间，如果需要蜜月或新婚布景的话，也记得提前告诉船宿公司，精心的准备会让你度过一次美好的假期。<br> <br>餐厅、酒吧以及沙发休息区也位于主甲板。4 位大厨为大家提供「异常」丰富的饮食，早餐有各种面包、牛奶、酸奶、沙拉、煎蛋、面条等，正餐提供牛排、羊排、鸡肉、烤鱼、大虾、刺身、寿司等世界各地风味的美食，可选果汁、啤酒、欧洲或智利不同产区的红酒、亦或是中国的五粮液、日本的梅酒佐餐，餐后还有不同的甜品、水果作为点心，一周的行程你可能吃到超过 10 种不同的水果，草莓、牛油果、奇异果、杨桃、哈密瓜、火龙果、木瓜、香蕉、芒果等等。另外，星空下可以去酒吧要一杯红酒与朋友畅聊，每周还会有一次无人岛 BBQ 晚会的机会。<br> <br>第三层甲板拥有 6 个水疗室，包括 1 间专为情侣/夫妻设计的水疗室。4 位经验丰富的理疗师可以提供本地、泰式、巴厘岛式等不同风格的 SPA。值得一提的是，大多数水疗室可以把门打开，直面大海享受难忘的 SPA 时光。船头在水疗室前方，ScubaSPA 「最棒」的体验之一是一个人坐在船头最前方吹着风，看着日落或星空，相信你一定不会错过。<br> <br>第四层甲板尾部有一个瑜伽亭，感兴趣的话，大家可以跟着专业的瑜伽师一起做瑜伽或者冥想。再往前有一个 Jacuzzi 泡泡浴缸，傍晚的时候，享受着泡泡浴、鸡尾酒的同时，你有机会看到马尔代夫最美的风景。<br> <br>值得一提的是，船的空间「非常」大，即使住满 40 人也不会觉得拥挤、吵闹。然而，大多数行程只有 20 人左右预订，让我们拥有足够的空间去享受我们的假期。<br> <br>马尔代夫是一个全年适合潜水的目的地，ScubaSPA 主要运营 The Best of Maldives 线路（俗称：四方线），经验丰富的当地潜导（1 : 2~5）会让你在一周 7 天每天都有不同的惊喜：海豚、Manta 群、鲸鲨群、礁鲨群、夜潜护士鲨群、沉船、黄绸鱼等大鱼群、夜潜数十只的真鲨群、苏梅...另外，夏天 6、7 月偶尔会有去往北部 Hanifaru Bay 看 Manta (数百只) 和鲸鲨的行程，冬季 2、3 月份也会有深南线看大货的行程。Ying 还配备了一艘长 19 米的潜水接驳船，要知道，很多斯米兰住 25 人的船宿也就只有 25 米左右，这让船上有足够的活动空间，潜水之余还可以在第二层甲板晒晒日光浴。~<br> <br>除了潜水套餐外，同行不潜水的朋友、家人可以选择 SPA 套餐（ 8 次 SPA）或 SPA + 潜水套餐（ 4 次 SPA + 6 次潜水），丰富的浮潜、瑜伽、无人岛 BBQ、水上舢板、海钓、居民岛游览、Jacuzzi、日光浴等让你的假期变得更加生动有趣。            "}',
    '{"name":"Fun Azul","areaName":"马尔代夫","price":"¥11,668","imgUrl":"https://img10-cdn.innfins.com/20161201/583fb8d2d39311.jpeg!c1424x840","imgs":["https://img10-cdn.innfins.com/20160930/57edcea201a7e.jpeg!c300x300","https://img10-cdn.innfins.com/20160930/57edceae22245.jpeg!c300x300","https://img10-cdn.innfins.com/20160930/57edceb355901.jpeg!c300x300","https://img10-cdn.innfins.com/20160930/57edceb94cc55.jpeg!c300x300"],"wifi":true,"nitrox":true,"luxury":true,"ac":true,"size":"35.62米/10.2米","guest":"20 人","about":"Fun Azul 长 35 米，拥有 3 层甲板，是一艘专注于探索马尔代夫的豪华船宿游艇。长期以来，Fun Azul 在保证最高安全标准的同时，不断提高服务质量，设计更值得一潜的航线。至今，每年有超过 500 位潜水爱好者同 Fun Azul 一起深潜入马尔代夫的海底世界。<br> <br>船上共有 10 间豪华双人房，都配有空调、独立卫浴，选用木质地板和家具，装修风格温馨且充满马尔代夫当地风情。位于主甲板的休闲室和用餐区每天以自助餐形式供应亚洲、欧洲菜式和马尔代夫当地风味美食，包括刺身和寿司等地道日式料理。除了美食享受，Fun Azul 还会依你的喜好为你定制活动，比如在无人岛上举办 BBQ 派对等。<br> <br>马尔代夫水下世界栖息着数不胜数的海洋生物，从色彩斑斓的珊瑚到海鳐、鲨鱼和成群的蝠鲼，让热爱潜水和水下摄影的你目不暇接。Fun Azul 提供的精华航线涵盖马尔代夫所有著名的潜水区，专业的潜导将带你到阿里环礁跟鲸鲨共游、到马累的南北部畅游真正的「珊瑚王国」、在芭环礁的水底世界穿梭于鲸鲨和蝠鲼群间。            "}'
  ];

  let newTripLine = new TripLine(JSON.parse(a[6]));
  newTripLine.save((err, saveRes) => {
    if(!err){
      let data = JSON.parse(b[6]);
      data.tripLine = saveRes["_id"];
      let newTrip = new Trip(data);
      newTrip.save((err, saveRes) => {
        if(err)console.log(err);
        else{
          res.json({a:saveRes})
        }
      })
    }
  })
}