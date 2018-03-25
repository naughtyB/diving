case CREATE_TRIP_APPOINTMENT_ORDER_REQUEST_POST:
      return {...state, isCreatingTripOrder: true};
    case CREATE_TRIP_APPOINTMENT_ORDER_RECEIVE_SUCCESS_POST:
      return {...state, isCreatingTripOrder: false, personSelectedRowKeys: []};
    case CREATE_TRIP_APPOINTMENT_ORDER_RECEIVE_LOGIN_ERROR_POST:
      return {...state, isCreatingTripOrder: false, loginState: false, loginModalVisible: true};
    case CREATE_TRIP_APPOINTMENT_ORDER_RECEIVE_OTHER_ERROR_POST:
      return {...state, isCreatingTripOrder: false};