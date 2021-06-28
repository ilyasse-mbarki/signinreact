import BackGround from './components/Background/background'
import SignInUpContainer from './components/SignInUpContainer/signInUpContainer'
import Login from './components/Login/login'
import './index.css'
function SignIn() {
  return (
    <div>
      <BackGround/>
      <SignInUpContainer color="blue">
        <Login/>
      </SignInUpContainer>

    </div>
  );
}

export default SignIn;