import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey} from '@fortawesome/free-solid-svg-icons'
import { faAt} from '@fortawesome/free-solid-svg-icons'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import {ContextFirebase}  from '../Firebase'

import { useHistory } from "react-router-dom";
const Register = () =>{
    let history = useHistory();
    const firebase =useContext(ContextFirebase);
  
 
    const data ={
      Nom: '',
      Prenom: '',
      Email: '',
      Password:'',
      ConfirmPassword:''
    } 
    const [RegisterData, setRegisterData]=useState(data);

    const [error,seterror]=useState('');

    console.log(RegisterData); 

    const Changehandler = e =>{
      setRegisterData({...RegisterData, [e.target.id]: e.target.value});
    }

    const Submithandler = e =>{
      const { Nom,Prenom,Email,Password}=RegisterData;
      firebase.registerUser(Email,Password)
      .then(authUser =>{
        return firebase.user(authUser.user.uid).set({
          Nom,
          Prenom,
          Email
        })
        
      })
      .then(()=>{
        setRegisterData({...data});
        history.push('/');
      })
      .catch(error=>{
        seterror(error);
      })
    }

    const { Nom,Prenom,Email,Password,ConfirmPassword}=RegisterData;

  
    const btn= Nom==='' || Prenom==='' || Email==='' || Password==='' || Password!==ConfirmPassword
    ? <button type="button" className="buttondisabled" name="buttondisabled" disabled>Sign-up</button> : 
    <button type="button" className="button" name="button" onClick={Submithandler}>Sign-up</button>


    const wrongfconfpass= Password!==ConfirmPassword
   ?<input onChange={Changehandler} value={ConfirmPassword} className="Wrongconfirm" type="password" id="ConfirmPassword" placeholder="Repeat password" />:
    <input onChange={Changehandler} value={ConfirmPassword} type="password" id="ConfirmPassword" placeholder="Repeat password" />

    const ErrorMsg=error !=='' && <span>{error.message}</span>


    return (
      <div>
          <center>
            <p className="login-text">SIGN-UP</p>
            <div className="grid2">
              
              {/* Nom */}
              <div className="user-name form">
                <FontAwesomeIcon icon={faUser} />
                <input onChange={Changehandler} value={Nom} type="text" id="Nom" placeholder="First Name" />
              </div>
              {/* Prenom */}
              <div className="user-password form">
                <i className="fas fa" />
                <input onChange={Changehandler} value={Prenom} type="text" id="Prenom" placeholder="Last name" />
              </div>
            </div>
            <div className="grid1">
             {/* Email */}
              <div className="user-password form">
                <FontAwesomeIcon icon={faAt} />
               <input onChange={Changehandler} value={Email} type="email" id="Email" placeholder="E-mail" />
             </div>
           </div>
            <div className="grid2">
              {/* Password */}
             <div className="user-name form">
               <FontAwesomeIcon icon={faKey} />
               <input onChange={Changehandler} value={Password} type="password" id="Password" placeholder="Password" />
             </div>
              {/* Confirm Password */}
             <div className="user-password form">
               <i className="fas fa" />
               {wrongfconfpass}
               {/* <input onChange={Changehandler} value={ConfirmPassword} type="password" id="ConfirmPassword" placeholder="Repeat password" /> */}
              </div>
           </div>
           {ErrorMsg}
           {/* button */}
           <div className="test">
              {btn}
           </div>
           </center>
            <p className="register-invite">Already have an account?<Link to='/'> Sign-in</Link>.</p>
      </div>
      
    )
  
}

export default Register
