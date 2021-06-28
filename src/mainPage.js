import React from 'react'
import BackGround from './components/Background/background'
import Header from './components/Header/Header'
import Calendar from './components/Calendar/calendar'
import 'firebase/auth'; 
import firebase from 'firebase/app';
import { useHistory } from "react-router-dom";
import SignIn from './signIn';
function MainPage() {
  let history = useHistory();
  var user=firebase.auth().currentUser;
  if(user)
  {
  return (
    <div class="mainPage">
      <BackGround/>
      <Header/>
      <div class="calendarContainer">
      <div class="calendar-relative">
      <Calendar/>
      </div>

        <div class="choice">
        <div class="choice-wrapper">
          <center>
          <p>Selected date: <span id="selected-date">15/7/2021</span></p>
          <p>Status: <span id="available">Not available</span></p>
          <button class="appointment">take appointment</button>
          </center>
          </div>
        </div>
      </div>

    </div>
  )
  }
  return(
    <div>
    <SignIn/>
    {history.push('/')}
    </div>
    
  )
}

export default MainPage
