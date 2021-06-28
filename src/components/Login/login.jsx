import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey} from '@fortawesome/free-solid-svg-icons'
import { faAt} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import {ContextFirebase}  from '../Firebase';
import { useHistory } from "react-router-dom";
const Login = () =>{
  let history = useHistory();
  const firebase =useContext(ContextFirebase);

  const data ={
    Email: '',
    Password:''
  } 
  const [LoginData, setLoginData]=useState(data);

  const [error,seterror]=useState('');

  const Changehandler = e =>{
    setLoginData({...LoginData, [e.target.id]: e.target.value});
  }

  const Submithandler = e =>{
    const { Email,Password}=LoginData;
    firebase.signinUser(Email,Password)
    .then(user =>{
      setLoginData({...data});// si register a succes on reset les valeur de data
      history.push('/calendar');
    })
    .catch(error=>{
      seterror(error);
      setLoginData({...data});
    })
  }

  const btn= LoginData.Email==='' || LoginData.Password===''
    ? <button type="button" className="buttondisabled" name="buttondisabled" disabled>Login</button> : 
    <button type="button" className="button" name="button"onClick={Submithandler}>Login</button>


    const ErrorMsg=error !=='' && <span>{error.message}</span>
    return (
      <div>
      <center>
        <p className="login-text">SIGN-IN</p>

        <div className="grid1">
          <div className="user-name form">
            <FontAwesomeIcon icon={faAt} />
            <input onChange={Changehandler} value={LoginData.Email} id="Email" type="text" placeholder="E-mail" />
          </div>
        </div>
        <div className="grid1">
          <div className="user-password form">
            <FontAwesomeIcon icon={faKey} />
            <input onChange={Changehandler} value={LoginData.Password} id="Password" type="password" placeholder="Password" />
          </div>
        </div>

        {ErrorMsg}

        <div className="test">
          {btn}
        </div>
        </center>
        <p className="register-invite">Don't have an account? <Link to='/signup'>Sign-up</Link>.</p>
      </div>
    )
    // return(
    //   <div>
    //     <MainPage/>
    //     {history.push('/calendar')}
    //   </div>
    // )
  
}

  export default Login
