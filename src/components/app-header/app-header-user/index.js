import React from 'react';
import { Modal } from 'antd';
import { connect } from 'react-redux';
import { doChangeUserModalVisible } from '../../../redux/action/userModal.js';
export class AppHeaderUser extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Modal visible={this.props.modalVisible}>
        <p>111</p>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    modalVisible: state.userModal.modalVisible
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeUserModalVisible: (modalVisible) => dispatch(doChangeUserModalVisible(modalVisible))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeaderUser);