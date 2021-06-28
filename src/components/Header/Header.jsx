import React, { useState, useContext, useEffect } from 'react'
import { faPowerOff} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from "react-router-dom";
import 'firebase/auth'; 
import firebase from 'firebase/app'
import {ContextFirebase}  from '../Firebase'

const Header = () => {
  const Firebase =useContext(ContextFirebase);
  let history = useHistory();
  var user=firebase.auth().currentUser;
  const email= user ?user.email: 'None'

  const Changehandler = () =>{
    Firebase.signoutUser();
    history.push('/');
  }
    return (
      <div class="headerContainer">
       <p class="welcome-message"><span id="Email">{email}</span></p>
       <button class="disconnect" onClick={Changehandler}><FontAwesomeIcon icon={faPowerOff} /><logout/></button>
    </div>
    )
}

export default Header
