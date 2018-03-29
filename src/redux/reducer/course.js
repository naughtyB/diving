import {
  GET_COURSE_DATA_REQUEST_POST,
  GET_COURSE_DATA_RECEIVE_SUCCESS_POST,
  GET_COURSE_DATA_RECEIVE_ERROR_POST
} from '../action/course'

const initialCourse = {
  courseData: [],
  isGettingCourseData: false,
}

export const course = (state = initialCourse, action) => {
  switch(action.type){
    case GET_COURSE_DATA_REQUEST_POST:
      return {...state, isGettingCourseData: true};
    case GET_COURSE_DATA_RECEIVE_SUCCESS_POST:
      return {...state, isGettingCourseData: false, courseData: action.courseData};
    case GET_COURSE_DATA_RECEIVE_ERROR_POST:
      return {...state, isGettingCourseData: false, courseData: action.courseData};
    default:
      return state;
  }
}

export default course;