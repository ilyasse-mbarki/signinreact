
import BackGround from './components/Background/background'
import SignInUpContainer from './components/SignInUpContainer/signInUpContainer'
import Register from './components/Register/register'
import './index.css'
function SignUp() {
  return (
    <div>
      <BackGround/>
      <SignInUpContainer color="blue">
        <Register />
      </SignInUpContainer>

    </div>
  );
}

export default SignUp;
