import React from 'react';
import { Form , Radio } from 'antd';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
export class AppContentPracticeAppointment extends React.Component{
  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <Form>
        <FormItem
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
      </Form>
    )
  }
}

const options={
  mapPropsToFields(props) {
      return {
          sex:{
            ...props.sex
          }
      };
  }
};


export default Form.create(options)(AppContentPracticeAppointment);