import React from 'react';
import { Form, Input, Button, Icon } from 'antd';
import { doChangeUserDeliveryModalFields , doSubmitUserDeliveryModalFields } from '../../../../../../redux/action/user';
import { connect } from 'react-redux';
import './index.css'
const FormItem = Form.Item; 

const formItemLayout = {
  labelCol: {
    sm: { span: 4 }
  },
  wrapperCol: {
    sm: { span: 20 }
  },
};

export class AppContentUserDeliveryChangeForm extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(){
    this.props.form.validateFields(["name","mobileNumber","address"],(errors,values)=>{
      if(!errors && ! this.props.isSubmittingDeliveryModalFields){
        this.props.onSubmitUserDeliveryModalFields(this.props.deliveryModalType, values["name"], values["mobileNumber"], values["address"], this.props.currentPersonId)
      }
    })
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className="app-content-user-delivery-change-form">
        <FormItem hasFeedback label="姓名" {...formItemLayout}>
          {getFieldDecorator('name', {
            validateFirst:true,
            rules: [
              { required: true, message: '请输入姓名' },
              { pattern:/[\u4e00-\u9fa5a-zA-Z0-9\-_]{1,30}/,message:"昵称为4-30个字,且不包含出_和-以外的字符"}
            ]
            })(
              <Input type="text"/>
          )}
        </FormItem>
        <FormItem hasFeedback label="手机号" {...formItemLayout}>
          {getFieldDecorator('mobileNumber', {
            validateFirst:true,
            rules: [
              { required: true, message: '请输入手机号!'},
              { pattern:/^\S+$/,message:"手机号不能包含空格"},
              { pattern:/^\d+$/,message:"请输入正确的手机号"},
              { len:11,message:"请输入11位数字的手机号"}
            ]
            })(
              <Input type="text"/>
          )}
        </FormItem>
        <FormItem hasFeedback label="地址" {...formItemLayout}>
          {getFieldDecorator('address', {
            validateFirst:true,
            rules: [
              { required: true, message: '请输入地址'}
            ]
            })(
              <Input type="text"/>
          )}
        </FormItem>
        <Button
          type="primary"
          htmlType="submit"
          className="app-content-user-delivery-change-form-submit-input"
          loading={this.props.isSubmittingDeliveryModalFields}
          onClick={this.handleSubmit}
        >
          保存
        </Button>
      </Form>
    )
  }
}

const options = {
  onFieldsChange(props, changedFields) {
    props.onChangeUserDeliveryModalFields(changedFields);
  },
  mapPropsToFields(props) {
    return {
      name: Form.createFormField({
        ...props.deliveryModalFields.name
      }),
      mobileNumber: Form.createFormField({
        ...props.deliveryModalFields.mobileNumber
      }),
      address: Form.createFormField({
        ...props.deliveryModalFields.address
      })
    };
  }
}

const mapStateToProps = (state) => {
  return {
    deliveryModalFields: state.user.deliveryModalFields,
    deliveryModalType: state.user.deliveryModalType,
    isSubmittingDeliveryModalFields: state.user.isSubmittingDeliveryModalFields,
    currentDeliveryId: state.user.currentDeliveryId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeUserDeliveryModalFields: (userDeliveryModalFieldsChanged) => dispatch(doChangeUserDeliveryModalFields(userDeliveryModalFieldsChanged)),
    onSubmitUserDeliveryModalFields: (submitType, name, mobileNumber, address, deliveryId) => dispatch(doSubmitUserDeliveryModalFields(submitType, name, mobileNumber, address, deliveryId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create(options)(AppContentUserDeliveryChangeForm));