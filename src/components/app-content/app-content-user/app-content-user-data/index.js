import React from 'react';
import { Form, Input, Icon, Radio, Button } from 'antd';
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
  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <Form style={{width: '30%'}}>
        <FormItem
          {...formItemLayout} 
          hasFeedback
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
                <Input prefix={<Icon  type="mobile" style={{ fontSize: 13}} />} disabled={true} type="text"/>
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
          className="app-header-user-data-submit-input"
        >
          保存
        </Button>                
      </Form>
    )
  }
}

const options = {

}

export default Form.create(options)(AppContentUserData);