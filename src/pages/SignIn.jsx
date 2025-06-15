import { useNavigate } from 'react-router-dom';
import EmailForm from '../components/Auth/EmailForm';
import GoogleSignIn from '../components/Auth/GoogleSignIn';
import Divider from '../components/Common/Divider';

function SignIn() {
  const navigate = useNavigate();

  const handleEmailSubmit = (email) => {
    console.log("Email submitted:", email);
    navigate('/verify');
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="container">
        <h1 className="text-center text-2xl font-semibold mb-6">Sign In</h1>
      <div className="mb-6">
  <EmailForm onSubmit={handleEmailSubmit} buttonText="Continue" />
</div>

<div className="create-account mb-6">
  Don't have an account? <a href="/signup">Create Account</a>
</div>

        
        <Divider text="Or" />
        
        <div className="socials">
          <GoogleSignIn />
        </div>
      </div>
    </div>
  );
}

export default SignIn;