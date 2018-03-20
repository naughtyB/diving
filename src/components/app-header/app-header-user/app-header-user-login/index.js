import React from 'react';
import { Form, Input, Button, Icon } from 'antd';
import { connect } from 'react-redux';
import { doChangeUserLoginFields, doSubmitLogin } from '../../../../redux/action/user.js';
import './index.css';
const FormItem = Form.Item; 

class AppHeaderUserLogin extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount(){
    console.log(23)
  }
  handleSubmit(){
    this.props.form.validateFields(["mobileNumber","password"],(errors,values)=>{
      if(!errors && ! this.props.isLogging){
        this.props.onSubmitLogin(values["mobileNumber"],values["password"])
      }
    })
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className="app-header-user-login">
        <FormItem hasFeedback>
          {getFieldDecorator('mobileNumber', {
            validateFirst:true,
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
            validateFirst:true,
          rules: [
            { required: true, message: '请输入密码' },
            { pattern:/[a-zA-Z0-9\-_]{4,30}/,message:"密码为4-30个字符,且不包含除_和-以外的字符"}
          ]
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13}} />} type="password" placeholder="密码" />
          )}
        </FormItem>
        <Button
          type="primary"
          htmlType="submit"
          className="app-header-user-login-submit-input"
          loading={this.props.isLogging}
          onClick={this.handleSubmit}
        >
          登录
        </Button>
      </Form>                    
    )
  }
}

const options={
  onFieldsChange(props, changedFields) {
    props.onChangeUserLoginFields(changedFields);
  },
  mapPropsToFields(props) {
    return {
      mobileNumber: Form.createFormField({
        ...props.loginFields.mobileNumber
      }),
      password: Form.createFormField({
        ...props.loginFields.password
      })
    };
  }
};

const mapStateToProps = (state) => {
  return {
    isLogging: state.user.isLogging,
    loginFields: state.user.loginFields
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeUserLoginFields: (loginFieldsChanged) => dispatch(doChangeUserLoginFields(loginFieldsChanged)),
    onSubmitLogin: (mobileNumber, password) => dispatch(doSubmitLogin(mobileNumber, password))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Form.create(options)(AppHeaderUserLogin));