import React from 'react';
import { Select, Form, InputNumber, Button, Spin, Modal, message } from 'antd';
import { connect } from 'react-redux';
import { doGetEquipmentDetailData, doChangeImgDisplayIndex, doChangeEquipmentAppointmentFields, doChangeEquipmentAppointmentModalVisible } from '../../../redux/action/equipment.js';
import { doChangeUserDeliverySelectedRowKeys, doChangeUserLoginModalVisible, doCreateEquipmentAppointmentOrder } from '../../../redux/action/user.js'
import AppContentUserDelivery from '../app-content-user/app-content-user-delivery/index.js';
import './index.css';

const { Option } = Select;
const FormItem = Form.Item; 
let transformHash = (hash) => {
  let hashData={};
  hash.slice(1).split("&").forEach((item,index)=>{
      let arr=item.split("=");
      hashData[arr[0]]=decodeURIComponent(arr[1]);
  });
  return hashData;
};


export class AppContentEquipmentAppointment extends React.Component{
  constructor(props){
    super(props);
    this.handleClickImg = this.handleClickImg.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectDelivery = this.handleSelectDelivery.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  componentWillMount(){
    this.props.onGetEquipmentDetailData(transformHash(this.props.location.hash)['equipmentId']);
  }
  handleOk(){
    if(this.props.deliverySelectedRowKeys.length > 0){
      this.props.onChangeEquipmentAppointmentModalVisible(false);
    }
    else{
      message.info('请选择相关收货信息')
    }
  }
  handleCancel(){
    this.props.onChangeUserDeliverySelectedRowKeys([]);
    this.props.onChangeEquipmentAppointmentModalVisible(false);
  }
  handleClickImg(displayIndex){
    this.props.onChangeImgDisplayIndex(displayIndex)
  }
  handleSelectDelivery(){
    if(!this.props.loginState){
      this.props.onChangeUserLoginModalVisible(true);
      message.info('未登录，请先登录')
    }
    else{
      this.props.onChangeEquipmentAppointmentModalVisible(true);
    }
  }
  handleSubmit(){
    let { onCreateEquipmentAppointmentOrder, equipmentAppointmentFields, delivery, deliverySelectedRowKeys, form, equipmentDetailData } = this.props;
    let equipmentColor = form.getFieldValue('equipmentColor');
    let equipment = equipmentDetailData.inventory.filter((item ,index) => {
      return item.color === equipmentColor
    })[0]
    if(equipment && equipment.size && equipment.size.length > 0){
      this.props.form.validateFields(["equipmentColor", "equipmentSize", "equipmentNum"], (err, values) => {
        if(!err){
          console.log(1)
        }
      })
    }
    else{
      this.props.form.validateFields(["equipmentColor", "equipmentNum"], (err, values) => {
        if(!err){
          let successCallback = () => {
            message.info('购买装备成功');
            this.props.history.push({
              pathname: '/user/userOrder'
            })
          }
          let otherErrCallback = () => {
            message.info('创建订单失败  请重新提交')
          }
          let loginErrCallback = () => {
            message.info('尚未登录  请先登录')
          }
          onCreateEquipmentAppointmentOrder(JSON.stringify({
            delivery: delivery.filter((item, index) => {
              return deliverySelectedRowKeys.includes(item['_id'])
            }).map((item, index) => {
              return {name: item.name, mobileNumber: item.mobileNumber, address: item.address}
            })[0],
            equipmentId: this.props.equipmentDetailData['_id'],
            num: form.getFieldValue('equipmentNum').toString(),
            price: Number(equipmentDetailData.inventory.filter((item ,index) => {
              return item.color === form.getFieldValue('equipmentColor')
            })[0]['price']) * form.getFieldValue('equipmentNum'),
            color: form.getFieldValue('equipmentColor'),
            size: form.getFieldValue('equipmentSize')
          }), successCallback, otherErrCallback, loginErrCallback)
        }
      })
    }
  }
  priceCalculate(equipmentDetailData){
    let priceArr = equipmentDetailData.inventory.map((item, index) => {
      return item.price;
    }).sort((a, b) => {
      return Number(a) - Number(b)
    });
    if(priceArr.length === 1 || priceArr[0] === priceArr[priceArr.length - 1]){
      return '￥' + priceArr[0]
    }
    else{
      return '￥' + priceArr[0] + '-' + '￥' + priceArr[priceArr.length - 1];
    }
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    const { equipmentDetailData, isGettingEquipmentDetailData, imgDisplayIndex, isCreatingEquipmentOrder, equipmentAppointmentModalVisible, deliverySelectedRowKeys, delivery } = this.props;
    if(equipmentDetailData){
      const equipmentColor = this.props.form.getFieldValue('equipmentColor');
      const equipment = equipmentDetailData.inventory.filter((item ,index) => {
        return item.color === equipmentColor
      })[0];
      let deliveryObj = {};
      if(deliverySelectedRowKeys.length > 0 && delivery.length > 0){
        deliveryObj = delivery.filter((item, index) => {
          return this.props.deliverySelectedRowKeys.includes(item['_id'])
        })[0]
        console.log(deliveryObj)
      }
      return (
        <Spin spinning={isGettingEquipmentDetailData}>
          <Form>
            <div className="app-content-equipment-appointment">
              <div className="app-content-equipment-appointment-purchase">
                <div className="app-content-equipment-appointment-purchase-img">
                  <div className="app-content-equipment-appointment-purchase-img-displayFrame">
                    <img className="app-content-equipment-appointment-purchase-img-displayFrame-content" src={equipmentDetailData['imgs'][imgDisplayIndex]}/>
                  </div>
                  <ul className="app-content-equipment-appointment-purchase-img-chooseFrame">
                    {equipmentDetailData.imgs.map((item, index) => {
                      return (
                        <li key={index} className="app-content-equipment-appointment-purchase-img-chooseFrame-each" onClick={()=>this.handleClickImg(index)}>
                          <img className="app-content-equipment-appointment-purchase-img-chooseFrame-each-image" style={{border: index === imgDisplayIndex ? '1px solid rgba(0, 0, 0, 0.3)' : '1px solid transparent'}} src={item}/>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <div className="app-content-equipment-appointment-purchase-synopsis">
                  <p className="app-content-equipment-appointment-purchase-synopsis-name">
                    {equipmentDetailData.name}
                  </p>
                  <p className="app-content-equipment-appointment-purchase-synopsis-feature">
                    {equipmentDetailData.feature ? equipmentDetailData.feature : ''}
                  </p>
                  <p className="app-content-equipment-appointment-purchase-synopsis-price">
                    <span className="app-content-equipment-appointment-purchase-synopsis-price-title">价格</span>
                    <span className="app-content-equipment-appointment-purchase-synopsis-price-content">
                      {
                        equipmentColor ? '￥' + (Number(equipment['price']) * this.props.form.getFieldValue('equipmentNum')) : this.priceCalculate(equipmentDetailData)
                      }
                    </span>
                  </p>
                  <p className="app-content-equipment-appointment-purchase-synopsis-postage">
                    <span className="app-content-equipment-appointment-purchase-synopsis-postage-title">运费</span>
                    <span className="app-content-equipment-appointment-purchase-synopsis-postage-content">￥{equipmentDetailData.deliveryPrice}</span>
                  </p>
                  <div className="app-content-equipment-appointment-purchase-synopsis-color">
                    <span className="app-content-equipment-appointment-purchase-synopsis-color-title">颜色</span>
                    <FormItem>
                        {getFieldDecorator('equipmentColor', {
                          validateFirst:true,
                          rules: [
                            { required: true, message: '请选择颜色!'}
                          ]
                          })(
                            <Select style={{width: '200px'}}>
                              {equipmentDetailData.inventory.map((item ,index) => {
                                return <Option key={index} value={item.color}>{item.color}</Option>
                              })}
                            </Select>
                        )}
                      </FormItem>
                  </div>
                  <div className="app-content-equipment-appointment-purchase-synopsis-size">
                    <span className="app-content-equipment-appointment-purchase-synopsis-size-title">尺寸</span>
                    <FormItem>
                        {getFieldDecorator('equipmentSize', {
                          validateFirst:true,
                          rules: [
                            { required: true, message: '请选择尺寸!'}
                          ]
                          })(
                            <Select style={{width: '200px'}} disabled={(equipment && equipment.size && equipment.size.length > 0) ? false : true}>
                              {
                                (equipment && equipment.size && equipment.size.length > 0) ? equipment.size.map((item, index) => {
                                  return <Option key={index} value={item}>{item}</Option>
                                }) : ''
                              }
                            </Select>
                        )}
                      </FormItem>
                  </div>
                  <div className="app-content-equipment-appointment-purchase-synopsis-number">
                    <span className="app-content-equipment-appointment-purchase-synopsis-number-title">数量</span>
                    <FormItem>
                        {getFieldDecorator('equipmentNum', {
                          validateFirst:true,
                          rules: [
                            { required: true, message: '请选择数量!'}
                          ]
                          })(
                            <InputNumber min={1}/>
                        )}
                      </FormItem>
                  </div>
                  <p className="app-content-equipment-appointment-purchase-synopsis-delivery">
                    <span className="app-content-equipment-appointment-purchase-synopsis-delivery-title">收货信息选择</span>
                    <span className="app-content-equipment-appointment-purchase-synopsis-delivery-content">
                      <Button onClick={this.handleSelectDelivery} className="app-content-equipment-appointment-purchase-synopsis-delivery-button">选择</Button>
                      <Modal 
                        visible={equipmentAppointmentModalVisible}
                        closable={false}
                        wrapClassName="app-content-equipment-appointment-purchase-synopsis-delivery-modal"
                        cancelText="取消"
                        okText="确认"
                        maskClosable={false}
                        onCancel={this.handleCancel}
                        onOk={this.handleOk}
                      >
                        <AppContentUserDelivery beCanSelected={true}/>
                      </Modal>
                    </span>
                  </p>
                  {
                    deliveryObj.name ? (
                      <div>
                        <p className="app-content-equipment-appointment-purchase-synopsis-delivery-detail">
                          <span className="app-content-equipment-appointment-purchase-synopsis-delivery-detail-title">收货人</span>
                          <span className="app-content-equipment-appointment-purchase-synopsis-delivery-detail-content">
                            {deliveryObj.name}
                          </span>
                        </p>
                        <p className="app-content-equipment-appointment-purchase-synopsis-delivery-detail">
                          <span className="app-content-equipment-appointment-purchase-synopsis-delivery-detail-title">联系方式</span>
                          <span className="app-content-equipment-appointment-purchase-synopsis-delivery-detail-content">
                            {deliveryObj.mobileNumber}
                          </span>
                        </p>
                        <p className="app-content-equipment-appointment-purchase-synopsis-delivery-detail">
                          <span className="app-content-equipment-appointment-purchase-synopsis-delivery-detail-title">收货地址</span>
                          <span className="app-content-equipment-appointment-purchase-synopsis-delivery-detail-content">
                            {deliveryObj.address}
                          </span>
                        </p>
                      </div>
                    ) : ''
                  }
                  <Button 
                    type="primary"
                    className="app-content-equipment-appointment-purchase-synopsis-buyButton"
                    onClick={this.handleSubmit}
                    loading={isCreatingEquipmentOrder}
                  >
                    立即购买
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        </Spin>
      )
    }
    else if(equipmentDetailData === undefined){
      return (
        <Spin spinning={isGettingEquipmentDetailData}>
          <div style={{height: '300px'}}>没有该商品信息</div>
        </Spin>
      )
    }
    else{
      return (
        <Spin spinning={isGettingEquipmentDetailData}>
          <div style={{height: '300px'}}>服务器发生错误  请重新刷新</div>
        </Spin>
      )
    }
  }
}

const option = {
  onFieldsChange(props, changedFields) {
    if(changedFields['equipmentColor']){
      props.onChangeEquipmentAppointmentFields({...changedFields, equipmentSize: {value: ''}})
    }
    else{
      props.onChangeEquipmentAppointmentFields(changedFields);
    }
  },
  mapPropsToFields(props) {
    return {
      equipmentColor: Form.createFormField({
        ...props.equipmentAppointmentFields.equipmentColor
      }),
      equipmentSize: Form.createFormField({
        ...props.equipmentAppointmentFields.equipmentSize
      }),
      equipmentNum: Form.createFormField({
        ...props.equipmentAppointmentFields.equipmentNum
      })
    };
  }
}

const mapStateToProps = (state) => {
  return {
    isGettingEquipmentDetailData: state.equipment.isGettingEquipmentDetailData,
    equipmentDetailData: state.equipment.equipmentDetailData,
    imgDisplayIndex: state.equipment.imgDisplayIndex,
    equipmentAppointmentFields: state.equipment.equipmentAppointmentFields,
    equipmentAppointmentModalVisible: state.equipment.equipmentAppointmentModalVisible,
    deliverySelectedRowKeys: state.user.deliverySelectedRowKeys,
    delivery: state.user.delivery,
    loginState: state.user.loginState,
    isCreatingEquipmentOrder: state.user.isCreatingEquipmentOrder
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetEquipmentDetailData: (equipmentId) => dispatch(doGetEquipmentDetailData(equipmentId)),
    onChangeImgDisplayIndex: (displayIndex) => dispatch(doChangeImgDisplayIndex(displayIndex)),
    onChangeEquipmentAppointmentFields: (equipmentAppointmentFields) => dispatch(doChangeEquipmentAppointmentFields(equipmentAppointmentFields)),
    onChangeEquipmentAppointmentModalVisible: (modalVisible) => dispatch(doChangeEquipmentAppointmentModalVisible(modalVisible)),
    onChangeUserDeliverySelectedRowKeys: (deliverySelectedRowKeys) => dispatch(doChangeUserDeliverySelectedRowKeys(deliverySelectedRowKeys)),
    onChangeUserLoginModalVisible: (modalVisible) => dispatch(doChangeUserLoginModalVisible(modalVisible)),
    onCreateEquipmentAppointmentOrder: (orderData, successCallback, otherErrCallback, loginErrCallback) => dispatch(doCreateEquipmentAppointmentOrder(orderData, successCallback, otherErrCallback, loginErrCallback))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Form.create(option)(AppContentEquipmentAppointment))