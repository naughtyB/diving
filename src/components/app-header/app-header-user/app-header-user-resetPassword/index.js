import React from 'react';
import { Form, Input, Button, Icon, message } from 'antd';
import { connect } from 'react-redux';
import { doChangeUserResetPasswordFields, doSubmitResetPassword } from '../../../../redux/action/user.js';
import './index.css';
const FormItem = Form.Item; 

export class AppHeaderUserResetPassword extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
    this.checkConfirm = this.checkConfirm.bind(this);
  }
  checkPassword(rule, value, callback){
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次密码输入必须一致');
    } else {
      callback();
    }
  }
  checkConfirm(rule, value, callback){
    const form = this.props.form;
    const repeatPassword = form.getFieldValue('confirm');
    if(repeatPassword){
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }
  handleSubmit(){
    this.props.form.validateFields(["mobileNumber", "password", "confirm" , "captcha"],(errors,values)=>{
      if(!errors && !this.props.isResettingPassword){
        this.props.onSubmitResetPassword(values["mobileNumber"], values["password"], values["captcha"])
      }
    })
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className="app-header-user-reset-password">
        <FormItem hasFeedback>
          {getFieldDecorator('mobileNumber', {
            validateFirst: true,
            rules: [
              { required: true, message: '请输入手机号!'},
              { pattern:/^\S+$/,message:"手机号不能包含空格"},
              { pattern:/^\d+$/,message:"请输入正确的手机号"},
              { len:11,message:"请输入11位数字的手机号"}
            ]
            })(
                <Input prefix={<Icon  type="mobile" style={{ fontSize: 13}} />} type="text" placeholder="手机号" />
          )}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('password', {
            validateFirst: true,
            rules: [
              { required: true, message: '请输入密码' },
              { pattern:/[a-zA-Z0-9\-_]{4,30}/,message:"密码为4-30个字符,且不包含除_和-以外的字符"},
              { validator: this.checkConfirm }
            ]
            })(
              <Input prefix={<Icon type="lock" style={{ fontSize: 13}} />} type="password" placeholder="密码" />
          )}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('confirm', {
            validateFirst: true,
            rules: [
              { required: true, message: '请再次输入密码' },
              { validator: this.checkPassword }
            ]
            })(
              <Input prefix={<Icon type="lock" style={{ fontSize: 13}} />} type="password" placeholder="请再次输入密码" />
          )}
        </FormItem>
        <FormItem>
          <div className="app-header-user-reset-password-captcha">
            {getFieldDecorator('captcha', {
              validateFirst: true,
              rules: [{ required: true, message: '请输入验证码' }]
              })(
                <Input
                  className="app-header-user-reset-password-captcha-input"
                  prefix={<Icon type="captcha" style={{ fontSize: 13}} />}
                  placeholder="验证码"
                />
            )}
            <Button
              className="app-header-user-reset-password-captcha-button"
              onClick={()=>{message.info("暂时没钱买这个功能，测试验证码为5257")}}
            >
              获取验证码
            </Button>
          </div>
        </FormItem>                    
        <Button
          type="primary"
          htmlType="submit"
          className="app-header-user-reset-password-submit-input"
          loading={this.props.isResettingPassword}
          onClick={this.handleSubmit}
        >
          确认修改
        </Button>
      </Form>
    )     
  }
}

const options = {
  onFieldsChange(props, changedFields) {
    props.onChangeUserResetPasswordFields(changedFields);
  },
  mapPropsToFields(props) {
    return {
      mobileNumber: Form.createFormField({
        ...props.resetPasswordFields.mobileNumber
      }),
      password: Form.createFormField({
        ...props.resetPasswordFields.password
      }),
      confirm: Form.createFormField({
        ...props.resetPasswordFields.confirm
      }),
      captcha: Form.createFormField({
        ...props.resetPasswordFields.captcha
      })
    };
  }
}

const mapStateToProps = (state) => {
  return {
    isResettingPassword: state.user.isResettingPassword,
    resetPasswordFields: state.user.resetPasswordFields
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeUserResetPasswordFields: (resetPasswordFieldsChanged) => dispatch(doChangeUserResetPasswordFields(resetPasswordFieldsChanged)),
    onSubmitResetPassword: (mobileNumber, password, captcha) => dispatch(doSubmitResetPassword(mobileNumber, password, captcha))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Form.create(options)(AppHeaderUserResetPassword));