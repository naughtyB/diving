import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import AppContentHomepage from './app-content-homepage/index.js';
import AppContentCourse from './app-content-course/index.js';
import AppContentPractice from './app-content-practice/index.js';
import AppContentPracticeAppointment from './app-content-practice-appointment/index.js';
import AppContentTrip from './app-content-trip/index.js';
import AppContentUser from './app-content-user/index.js';
import AppContentTripDetail from './app-content-trip-detail/index.js';

export class AppContent extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Switch>
        <Route 
          key="homepage"
          exact path='/'
          render={({history,location})=>{
            return <AppContentHomepage
              history={history}
              location={location}
            />
          }}
        />
        <Route
          exact path="/practice/appointment"
          key="practiceAppointment"
          render={({history,location})=>{
            return <AppContentPracticeAppointment
              history={history}
              location={location}
            />
          }}
        />
        <Route 
          exact path="/trip/detail"
          key="tripDetail"
          render={({history,location})=>{
            return <AppContentTripDetail
              history={history}
              location={location}
            />
          }}
        />
        <Route 
          exact path="/course"
          key="course"
          render={({history,location})=>{
            return <AppContentCourse
              history={history}
              location={location}
            />
          }}
        />
        <Route 
          exact path="/practice"
          key="practice"
          render={({history,location})=>{
            return <AppContentPractice
              history={history}
              location={location}
            />
          }}
        />
        <Route
          exact path="/trip"
          key="trip"
          render={({history,location})=>{
            return <AppContentTrip
              history={history}
              location={location}
            />
          }}
        />
        <Route 
          path="/user"
          key="user"
          render={({history,location})=>{
            return <AppContentUser
              history={history}
              location={location}
            />
          }}
        />
        <Redirect to={{
          pathname: '/'
        }}/>
      </Switch>
    )
  }
}




export default AppContent;