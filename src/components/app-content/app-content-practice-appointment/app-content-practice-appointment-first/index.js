import React from 'react';
import { Form, Select, DatePicker, Button, Spin } from 'antd';
import { connect } from 'react-redux';
import moment from 'moment';
import { doChangePracticeAppointmentFirstFields, doGetPracticeData, doChangePracticeAppointmentStep } from '../../../../redux/action/practice';
import './index.css';
const FormItem = Form.Item; 
const Option = Select.Option;

const formItemLayout = {
  labelCol: {
    sm: { span: 9 }
  },
  wrapperCol: {
    sm: { span: 15}
  },
};

export class AppContentPracticeAppointmentFirst extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      datePickerDisabled: true,
      practiceTimeDisabled: true
    }
    this.handleGymnasiumChange = this.handleGymnasiumChange.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.disabledDate = this.disabledDate.bind(this);
  }
  componentWillMount(){
    this.props.onGetPracticeData();
  }
  disabledDate(current){
    if(this.props.data.length > 0){
      let gymnasium = this.props.form.getFieldValue('gymnasium');
      let data = this.props.data.filter((item, index) => {
        return item.name === gymnasium;
      })[0]['practiceTime'].map((item, index) => {
        return item.date
      })
      return current && (!data.includes(current.format('YYYY-MM-DD')) || current < moment().endOf('day'));
    }
  }
  handleNext(){
    this.props.form.validateFields(["gymnasium", "practiceDate", "practiceTime"],(errors,values)=>{
      if(!errors){
        this.props.onChangePracticeAppointmentStep(1)
      }
    })
  }
  componentWillUpdate(nextProps, nextState){
    let nextForm = this.props.form;
    let nextPracticeDate = nextForm.getFieldValue('practiceDate');
    let nextGymnasium = nextForm.getFieldValue('gymnasium');
    if(nextGymnasium && nextPracticeDate && nextState.practiceTimeDisabled){
      this.setState(() => {
        return {
          practiceTimeDisabled: false
        }
      })
    }
    else if((!nextGymnasium || !nextPracticeDate) && !nextState.practiceTimeDisabled){
      this.setState(() => {
        return {
          practiceTimeDisabled: true
        }
      })
    }
  }
  handleGymnasiumChange(value){
    this.setState(() => {
      return {
        datePickerDisabled: value ? false : true
      }
    })
  }
  render(){
    const form = this.props.form;
    const { getFieldDecorator } = form;
    const { data, isGettingData } = this.props;
    if(data.length > 0){
      const practiceDate = form.getFieldValue('practiceDate') ? form.getFieldValue('practiceDate').format('YYYY-MM-DD') : '';
      const gymnasium = form.getFieldValue('gymnasium');
      return (
        <Spin spinning={this.props.isGettingData}>
          <div>
            <div className="app-content-practice-appointment-firstSteps-content">
              <Form style={{width: '30%', margin: '0 auto'}}>
                <FormItem {...formItemLayout} label="练习场馆">
                  {getFieldDecorator('gymnasium', {
                    validateFirst: true,
                    rules: [
                      { required: true, message: '请选择练习场馆' }
                    ]
                    })
                    (
                      <Select onChange={this.handleGymnasiumChange}>
                        {data.map((item, index) => {
                          return (<Option key={index} value={item.name}>{item.name}</Option>)
                        })}
                      </Select>
                    )
                  }
                </FormItem>
                <FormItem {...formItemLayout} label="练习日期">
                  {getFieldDecorator('practiceDate', {
                    validateFirst: true,
                    rules: [
                      { required: true, message: '请选择日期' }
                    ]
                    })
                    (
                      <DatePicker disabled={this.state.datePickerDisabled} disabledDate={this.disabledDate}/>
                    )
                  }
                </FormItem>
                <FormItem {...formItemLayout} label="练习时段">
                  {getFieldDecorator('practiceTime', {
                    validateFirst: true,
                    rules: [
                      { required: true, message: '请选择练习时段' }
                    ]
                    })
                    (
                      <Select disabled={this.state.practiceTimeDisabled}>
                        {(gymnasium && practiceDate) ? data.filter((item, index) => {
                          return item.name === gymnasium;
                        })[0]['practiceTime'].filter((item, index) => {
                          return item.date === practiceDate;
                        }).map((item, index) => {
                          return <Option key={item['_id']} value={item.time}>{item.time}</Option>
                        }) : ''}
                      </Select>
                    )
                  }
                </FormItem>
              </Form>
            </div>
            <div className="app-content-practice-appointment-firstSteps-action">
              <Button type="primary" onClick={this.handleNext}>下一步</Button>
            </div>
          </div>
        </Spin>
      )
    }
    else{
      return (
        <Spin spinning={isGettingData}>
          <div style={{height: '300px', lineHeight: '300px', fontSize: '30px', textAlign: 'center'}}>{isGettingData ? '加载数据中' : '加载失败'}</div>
        </Spin>
      )
    }
  }
}

const options = {
  onFieldsChange(props, changedFields) {
    if(changedFields['practiceDate']){
      props.onChangePracticeAppointmentFirstFields({...changedFields, practiceTime: {...props.firstFields.practiceTime, value: ''}})
    }
    else if(changedFields['gymnasium']){
      let date = new Date();
      date.setTime(date.getTime() + 86400000);
      props.onChangePracticeAppointmentFirstFields({...changedFields, practiceTime: {...props.firstFields.practiceTime, value: ''}, practiceDate: {...props.firstFields.practiceDate, value: moment(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(), 'YYYY-MM-DD')}})
    }
    else{
      props.onChangePracticeAppointmentFirstFields(changedFields);
    }
  },
  mapPropsToFields(props) {
    return {
      gymnasium: Form.createFormField({
        ...props.firstFields.gymnasium
      }),
      practiceDate: Form.createFormField({
        ...props.firstFields.practiceDate
      }),
      practiceTime: Form.createFormField({
        ...props.firstFields.practiceTime
      })
    };
  }
}

const mapStateToProps = (state) => {
  return {
    firstFields: state.practice.practiceAppointmentFirstFields,
    isGettingData: state.practice.isGettingData,
    data: state.practice.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangePracticeAppointmentFirstFields: (practiceAppointmentFirstFields) => dispatch(doChangePracticeAppointmentFirstFields(practiceAppointmentFirstFields)),
    onGetPracticeData: () => dispatch(doGetPracticeData()),
    onChangePracticeAppointmentStep: (practiceAppointmentStep) => dispatch(doChangePracticeAppointmentStep(practiceAppointmentStep))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create(options)(AppContentPracticeAppointmentFirst));