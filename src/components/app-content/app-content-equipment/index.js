import React from 'react';
import { Menu, Card, Spin } from 'antd';
import { connect } from 'react-redux';
import { doGetEquipmentData, doChangeEquipmentSelectedKeys } from '../../../redux/action/equipment.js';
import './index.css';
const { Meta } = Card;

export class AppContentEquipment extends React.Component{
  constructor(props){
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(equipmentId){
    this.props.history.push({
      pathname: '/equipment/appointment',
      hash: 'equipmentId=' + encodeURIComponent(equipmentId)
    })
  }
  componentWillMount(){
    this.props.onGetEquipmentData(this.props.selectedKeys[0]);
  }
  handleSelect({item, key, selectedKeys}){
    this.props.onChangeEquipmentSelectedKeys([key]);
    this.props.onGetEquipmentData(key);
  }
  render(){
    const { selectedKeys, isGettingEquipmentData, equipmentData } = this.props;
    return (
      <div className="app-content-equipment">
        <div className="app-content-equipment-menu">
          <Menu
            style={{ width: 256 }}
            selectedKeys={selectedKeys}
            onSelect={this.handleSelect}
            mode="inline"
          >
            <Menu.Item key="浮潜套装" className="app-content-equipment-menu-each">
              浮潜套装
            </Menu.Item>
            <Menu.Item key="深潜套装" className="app-content-equipment-menu-each">
              深潜套装
            </Menu.Item>
            <Menu.Item key="潜水镜" className="app-content-equipment-menu-each">
              潜水镜
            </Menu.Item>
            <Menu.Item key="呼吸管" className="app-content-equipment-menu-each">
              呼吸管
            </Menu.Item>
            <Menu.Item key="脚蹼" className="app-content-equipment-menu-each">
              脚蹼
            </Menu.Item>
          </Menu>
        </div>
        <div className="app-content-equipment-introduce">
          <Spin spinning={isGettingEquipmentData}>
            {
              equipmentData.length > 0 ? (
                <ul className="app-content-equipment-introduce-display">
                  {equipmentData.map((item, index) => {
                    let priceArr = item.inventory.map((item, index) => {
                      return item.price
                    }).sort((a, b) => {
                      return Number(a) - Number(b);
                    });
                    let isSame = Number(priceArr[0]) === Number(priceArr[priceArr.length - 1]) || priceArr.length === 1 ? true : false
                    return (
                      <li 
                        key={index} 
                        className="app-content-equipment-introduce-display-each"
                        onClick={()=>this.handleClick(item['_id'])}
                      >
                        <Card
                          hoverable
                          style={{ width: 240 }}
                          cover={<img alt="example" className="app-content-equipment-introduce-display-each-img" src={item.imgUrl} />}
                        >
                          <Meta
                            title={
                              <div className="app-content-equipment-introduce-display-each-name">
                                {item.name}
                              </div>
                            }
                            description={
                              <div className="app-content-equipment-introduce-display-each-content">
                                <span className="app-content-equipment-introduce-display-each-content-price">
                                  {isSame ? '￥'+ priceArr[0] : '￥' + priceArr[0] + '-' + '￥' + priceArr[priceArr.length-1]}
                                </span>
                                <span className="app-content-equipment-introduce-display-each-content-postage">运费：￥{item.deliveryPrice}</span>
                              </div>
                            }
                          />
                        </Card>
                      </li>
                    )
                  })}
                </ul>
              ) : (
                <div style={{height: '300px'}}></div>
              )
            }
          </Spin>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isGettingEquipmentData: state.equipment.isGettingEquipmentData,
    equipmentData: state.equipment.equipmentData,
    selectedKeys: state.equipment.selectedKeys
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetEquipmentData: (equipmentType) => dispatch(doGetEquipmentData(equipmentType)),
    onChangeEquipmentSelectedKeys: (selectedKeys) => dispatch(doChangeEquipmentSelectedKeys(selectedKeys))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContentEquipment);