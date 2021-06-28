
import './App.css';
import BackGround from './components/Background/background'
import SignInUpContainer from './components/SignInUpContainer/signInUpContainer'
import  React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './signUp'
import SignIn from './signIn'
import MainPage from './mainPage';
function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/calendar" component={MainPage}/>
        </Switch>
      </Router>
  );
}

export default App;


//  <BackGround/>
//  <SignInUpContainer>
//    <Login/>
//    <signInUpContainer/>
