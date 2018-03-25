import React from 'react';
import { Form, Select, DatePicker, Button, Spin, message } from 'antd';
import { connect } from 'react-redux';
import moment from 'moment';
import { doChangeTripAppointmentFirstFields, doGetTripData, doChangeTripAppointmentStep } from '../../../../redux/action/trip';
import { doChangeUserLoginModalVisible } from '../../../../redux/action/user';
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

export class AppContentTripAppointmentFirst extends React.Component{
  constructor(props){
    super(props);
    this.handleNext = this.handleNext.bind(this);
    this.disabledDate = this.disabledDate.bind(this);
  }
  componentWillMount(){
    this.props.onGetTripData();
  }
  disabledDate(current){
    if(this.props.data.length > 0){
      let tripName = this.props.form.getFieldValue('tripName');
      let data = this.props.data.filter((item, index) => {
        return item.name === tripName;
      })[0]['tripTime'].map((item, index) => {
        return item.month
      })
      return current && (!data.includes(current.format('YYYY-MM')) || current < moment().endOf('month'));
    }
  }
  handleNext(){
    this.props.form.validateFields(["tripName", "tripMonth", "tripDate"],(errors,values)=>{
      if(!errors){
        if(this.props.loginState){
          this.props.onChangeTripAppointmentStep(1)
        }
        else{
          message.info('请先登录');
          this.props.onChangeUserLoginModalVisible(true);
        }
      }
    })
  }
  render(){
    const form = this.props.form;
    const { getFieldDecorator } = form;
    const { data, isGettingData } = this.props;
    if(data.length > 0){
      const tripMonth = form.getFieldValue('tripMonth') ? form.getFieldValue('tripMonth').format('YYYY-MM') : '';
      const tripName = form.getFieldValue('tripName');
      return (
        <Spin spinning={this.props.isGettingData}>
          <div>
            <div className="app-content-trip-appointment-firstSteps-content">
              <Form style={{width: '30%', margin: '0 auto'}}>
                <FormItem {...formItemLayout} label="航船名称">
                  {getFieldDecorator('tripName', {
                    validateFirst: true,
                    rules: [
                      { required: true, message: '请选择航船' }
                    ]
                    })
                    (
                      <Select>
                        {data.map((item, index) => {
                          return (<Option key={index} value={item.name}>{item.name}</Option>)
                        })}
                      </Select>
                    )
                  }
                </FormItem>
                <FormItem {...formItemLayout} label="出发月份">
                  {getFieldDecorator('tripMonth', {
                    validateFirst: true,
                    rules: [
                      { required: true, message: '请选择出发日期' }
                    ]
                    })
                    (
                      <DatePicker.MonthPicker disabledDate={this.disabledDate}/>
                    )
                  }
                </FormItem>
                <FormItem {...formItemLayout} label="出发日期">
                  {getFieldDecorator('tripDate', {
                    validateFirst: true,
                    rules: [
                      { required: true, message: '请选择练习时段' }
                    ]
                    })
                    (
                      <Select>
                        {(tripName && tripMonth) ? data.filter((item, index) => {
                          return item.name === tripName;
                        })[0]['tripTime'].filter((item, index) => {
                          return item.month === tripMonth;
                        }).map((item, index) => {
                          return <Option key={item['_id']} value={item.date}>{item.date}</Option>
                        }) : ''}
                      </Select>
                    )
                  }
                </FormItem>
              </Form>
            </div>
            <div className="app-content-trip-appointment-firstSteps-action">
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
    if(changedFields['tripMonth'] && props.firstFields['tripMonth'] && changedFields['tripMonth']['value'] !== props.firstFields['tripMonth']['value']){
      props.onChangeTripAppointmentFirstFields({...changedFields, tripDate: {...props.firstFields.tripDate, value: ''}})
    }
    else if(changedFields['tripName'] && changedFields['tripName']['value'] !== props.firstFields['tripName']['value']){
      props.onChangeTripAppointmentFirstFields({...changedFields, tripDate: {...props.firstFields.tripDate, value: ''}, tripMonth: null})
    }
    else{
      props.onChangeTripAppointmentFirstFields(changedFields);
    }
  },
  mapPropsToFields(props) {
    return {
      tripName: Form.createFormField({
        ...props.firstFields.tripName
      }),
      tripMonth: Form.createFormField({
        ...props.firstFields.tripMonth
      }),
      tripDate: Form.createFormField({
        ...props.firstFields.tripDate
      })
    };
  }
}

const mapStateToProps = (state) => {
  return {
    firstFields: state.trip.tripAppointmentFirstFields,
    isGettingData: state.trip.isGettingTripData,
    data: state.trip.tripData,
    loginState: state.user.loginState,
    tripAppointmentStep: state.trip.tripAppointmentStep
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeTripAppointmentFirstFields: (tripAppointmentFirstFields) => dispatch(doChangeTripAppointmentFirstFields(tripAppointmentFirstFields)),
    onGetTripData: () => dispatch(doGetTripData()),
    onChangeTripAppointmentStep: (tripAppointmentStep) => dispatch(doChangeTripAppointmentStep(tripAppointmentStep)),
    onChangeUserLoginModalVisible: (loginModalVisible) => dispatch(doChangeUserLoginModalVisible(loginModalVisible))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create(options)(AppContentTripAppointmentFirst));