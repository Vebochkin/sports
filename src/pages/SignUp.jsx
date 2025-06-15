import { useNavigate } from 'react-router-dom';
import EmailForm from '../components/Auth/EmailForm';
import GoogleSignIn from '../components/Auth/GoogleSignIn';
import Divider from '../components/Common/Divider';
import InputField from '../components/Common/InputField';

function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (email) => {
    console.log("Sign up submitted:", email);
    navigate('/verify');
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="container">
        <h1 className="text-center text-2xl font-semibold mb-6">Sign Up</h1>
        
        <form onSubmit={(e) => {
          e.preventDefault();
          const email = e.target.email.value;
          handleSubmit(email);
        }}>
          <InputField 
            label="Full Name"
            type="text"
            id="fullName"
            placeholder="Enter your full name"
            required
          />
          
          <InputField 
            label="Email Address"
            type="email"
            id="email"
            placeholder="Enter email address"
            required
          />
          
          <button type="submit" className="btn-continue">
            Continue
          </button>
        </form>
        
        <div className="create-account">
          Already have an account? <a href="/">Sign In</a>
        </div>
        
        <Divider text="Or" />
        
        <div className="socials">
          <GoogleSignIn />
        </div>
      </div>
    </div>
  );
}

export default SignUp;