import React, { Component } from 'react'

import logo from './logo.png'

class SignInUpContainer extends Component {
  constructor(props) {
    super(props)
    console.log(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="login-container">
       <center>
         <img className="project-logo" src={logo} alt=""/>
      </center>
         {this.props.children}
       </div>

    )
  }
}

export default SignInUpContainer
