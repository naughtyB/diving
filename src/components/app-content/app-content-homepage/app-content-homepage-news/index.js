import React from 'react';
import ScrollAnim from 'rc-scroll-anim'
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import './index.css';

const OverPack = ScrollAnim.OverPack;

export class AppContentHomePageNews extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="app-content-homepage-news">
        <OverPack className="app-content-homepage-news-frame" replay>
          <TweenOne key="0"
            className="app-content-homepage-news-frame-title"
            component="h2"
            animation={{opacity: 1}}
          >
            资讯分享
          </TweenOne>
          <QueueAnim key="queue1"
            className="app-content-homepage-news-contents"
            component="ul"
            delay={300}
            type={['left','right']}
          >
            <li key="1" className="app-content-homepage-news-contents-each"><span className="app-content-homepage-news-contens-each-left">新华社北京2月10日电(记者 张玉清、张汨汨)新春将至，空军连奏两曲“强军战歌”——“苏－35战机飞赴南海参加</span><span>2018-02-10</span></li>
            <li key="2" className="app-content-homepage-news-contents-each"><span className="app-content-homepage-news-contens-each-left">平强军思想引领空军转型发展，展现的都是维护新时代空天安全的有力支撑。10日，他向新华社</span><span>2018-02-10</span></li>
            <li key="3" className="app-content-homepage-news-contents-each"><span className="app-content-homepage-news-contens-each-left">在南海方向进行联合战巡，传递出什么信号？
  　　王明志：这次在南海方向进行的联合战巡，空军派出了苏－35先进战机参加，这既是空军年度战备训练计划的既定安排，也向外界传递出三个方面的重要信息：一是空军有效履行新时代使命任务、坚定维护国家主权安全和海洋权益的决心；二是空军在维护国家主权安全与海洋权益方面的能</span><span>2018-02-10</span></li>
            <li key="4" className="app-content-homepage-news-contents-each"><span className="app-content-homepage-news-contens-each-left">已经常态化展开远洋远海训练。空军在南海方向进行带有实战化背景的战巡行动，既是提高</span><span>2018-02-10</span></li>
            <li key="5" className="app-content-homepage-news-contents-each"><span className="app-content-homepage-news-contens-each-left">解“列装作战部队”这一表述？
  　　王明志：歼－20战机于2011年首飞。交付空</span><span>2018-02-10</span></li>
            <li key="6" className="app-content-homepage-news-contents-each"><span className="app-content-homepage-news-contens-each-left">中国噶第三方队</span><span>2018-02-10</span></li>
          </QueueAnim>
        </OverPack>
      </div>
    )
  }
}

export default AppContentHomePageNews;