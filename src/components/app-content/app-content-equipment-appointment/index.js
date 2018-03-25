import React from 'react';
import { Select, Form } from 'antd';
import { connect } from 'react-redux';
import './index.css';
const { Option } = Select;
const FormItem = Form.Item; 

export class AppContentEquipmentAppointment extends React.Component{
  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <Form>
        <div className="app-content-equipment-appointment">
          <div className="app-content-equipment-appointment-titleFrame">
            <div className="app-content-equipment-appointment-titleFrame-name">防晒浮潜服YONSUB韩款成人儿童潜水游泳长袖连体显瘦男女水母衣</div>
            <div className="app-content-equipment-appointment-titleFrame-priceDetail">¥ 88.00-118.00</div>
          </div>
          <div className="app-content-equipment-appointment-purchase">
            <div className="app-content-equipment-appointment-purchase-img">
              <div className="app-content-equipment-appointment-purchase-img-displayFrame">
                <img className="app-content-equipment-appointment-purchase-img-displayFrame-content" src="/image/equipment/20180325163627.jpg"/>
              </div>
              <ul className="app-content-equipment-appointment-purchase-img-chooseFrame">
                <li className="app-content-equipment-appointment-purchase-img-chooseFrame-each">
                  <img className="app-content-equipment-appointment-purchase-img-chooseFrame-each-image" src="/image/equipment/20180325163627.jpg"/>
                </li>
                <li className="app-content-equipment-appointment-purchase-img-chooseFrame-each">
                  <img className="app-content-equipment-appointment-purchase-img-chooseFrame-each-image" src="/image/equipment/20180325163627.jpg"/>
                </li>
                <li className="app-content-equipment-appointment-purchase-img-chooseFrame-each">
                  <img className="app-content-equipment-appointment-purchase-img-chooseFrame-each-image" src="/image/equipment/20180325163627.jpg"/>
                </li>
                <li className="app-content-equipment-appointment-purchase-img-chooseFrame-each">
                  <img className="app-content-equipment-appointment-purchase-img-chooseFrame-each-image" src="/image/equipment/20180325163627.jpg"/>
                </li>
                <li className="app-content-equipment-appointment-purchase-img-chooseFrame-each">
                  <img className="app-content-equipment-appointment-purchase-img-chooseFrame-each-image" src="/image/equipment/20180325163627.jpg"/>
                </li>
              </ul>
            </div>
            <div className="app-content-equipment-appointment-purchase-synopsis">
              <p className="app-content-equipment-appointment-purchase-synopsis-name">
                防晒浮潜服YONSUB韩款成人儿童潜水游泳长袖连体显瘦男女水母衣
              </p>
              <p className="app-content-equipment-appointment-purchase-synopsis-feature">
                弹性好不走光 防晒防紫外 色牢度升级
              </p>
              <p className="app-content-equipment-appointment-purchase-synopsis-postage">
                <span className="app-content-equipment-appointment-purchase-synopsis-postage-title">运费</span>
                <span className="app-content-equipment-appointment-purchase-synopsis-postage-content">￥12</span>
              </p>
              <p className="app-content-equipment-appointment-purchase-synopsis-size">
                <span className="app-content-equipment-appointment-purchase-synopsis-size-title">尺寸</span>
                <FormItem>
                    {getFieldDecorator('equipmentSize', {
                      validateFirst:true,
                      rules: [
                        { required: true, message: '请选择尺寸!'}
                      ]
                      })(
                        <Select style={{width: '200px'}}>
                          <Option value="M">M</Option>
                          <Option value="L">L</Option>
                        </Select>
                    )}
                  </FormItem>
              </p>
              <p className="app-content-equipment-appointment-purchase-synopsis-color">
                <span className="app-content-equipment-appointment-purchase-synopsis-color-title">颜色</span>
                <FormItem>
                    {getFieldDecorator('equipmentColor', {
                      validateFirst:true,
                      rules: [
                        { required: true, message: '请选择颜色!'}
                      ]
                      })(
                        <Select style={{width: '200px'}}>
                          <Option value="红色">红色</Option>
                          <Option value="蓝色">蓝色</Option>
                        </Select>
                    )}
                  </FormItem>
              </p>
            </div>
          </div>
        </div>
      </Form>
    )
  }
}

const option = {

}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default Form.create(option)(connect(mapStateToProps, mapDispatchToProps)(AppContentEquipmentAppointment));