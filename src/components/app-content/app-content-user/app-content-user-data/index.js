import React from 'react';
import { Form, Input, Icon, Radio, Button, message, Spin } from 'antd';
import { connect } from 'react-redux';
import { doGetUserDataFields, doChangeUserDataFields, doSubmitUserData } from '../../../../redux/action/user'
import './index.css';
const FormItem = Form.Item; 
const RadioGroup = Radio.Group;

const formItemLayout = {
  labelCol: {
    sm: { span: 8 }
  },
  wrapperCol: {
    sm: { span: 16 }
  },
};

export class AppContentUserData extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount(){
    this.props.onGetUserDataFields(() => {
      message.info('尚未登录，请先登录')
    })
  }
  handleSubmit(){
    this.props.form.validateFields(["username", "sex"],(errors,values)=>{
      if(!errors && !this.props.isSubmittingUserData){
        this.props.onSubmitUser(values["username"], values["sex"])
      }
    })
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    const {isGettingUserDataFields, isGettingUserDataFieldsSuccessful} = this.props;
    if(!isGettingUserDataFields && isGettingUserDataFieldsSuccessful){
      return (
        <Form style={{width: '30%'}}>
          <FormItem
            {...formItemLayout} 
            label='昵称'
          >
            {getFieldDecorator('username', {
              validateFirst: true,
              rules: [
                { required: true, message: '请输入手机号!'},
                { pattern:/^\S+$/,message:"手机号不能包含空格"},
                { pattern:/^\d+$/,message:"请输入正确的手机号"},
                { len:11,message:"请输入11位数字的手机号"}
              ]
              })(
                  <Input disabled={true} type="text"/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout} 
            label="性别"
          >
            {getFieldDecorator('sex')(
              <RadioGroup>
                <Radio value="secret">保密</Radio>
                <Radio value="male">男</Radio>
                <Radio value="female">女</Radio>
              </RadioGroup>
            )}
          </FormItem>
          <Button
            type="primary"
            htmlType="submit"
            className="app-content-user-data-submit-input"
            loading={this.handleSubmit}
          >
            保存
          </Button>                
        </Form>
      )
    }
    else if(isGettingUserDataFields){
      return (
        <Spin spinning={true}>
          <div style={{height: '300px'}}></div>
        </Spin>
      )
    }
    else{
      return (
        <div>网络连接失败  请重新刷新</div>
      )
    }
  }
}

const options = {
  onFieldsChange(props, changedFields) {
    props.onChangeUserDataFields(changedFields);
  },
  mapPropsToFields(props) {
    return {
      username: Form.createFormField({
        ...props.userDataFields.username
      }),
      sex: Form.createFormField({
        ...props.userDataFields.sex
      })
    };
  }
}

const mapStateToProps = (state) => {
  return {
    isGettingUserDataFields: state.user.isGettingUserDataFields,
    isGettingUserDataFieldsSuccessful: state.user.isGettingUserDataFieldsSuccessful,
    userDataFields: state.user.userDataFields,
    isSubmittingUserData: state.user.isSubmittingUserData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetUserDataFields: (errCallback) => dispatch(doGetUserDataFields(errCallback)),
    onChangeUserDataFields: (userDataFieldsChanged) => dispatch(doChangeUserDataFields(userDataFieldsChanged)),
    onSubmitUserData: (username, sex) => dispatch(doSubmitUserData(username, sex))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Form.create(options)(AppContentUserData))