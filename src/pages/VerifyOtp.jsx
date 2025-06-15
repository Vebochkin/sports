import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OtpInput from '../components/Auth/OtpInput';

function VerifyOtp() {
  const [timeLeft, setTimeLeft] = useState(59);
  const [canResend, setCanResend] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft <= 0) {
      setCanResend(true);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleResend = () => {
    setTimeLeft(59);
    setCanResend(false);
    console.log("Resend OTP requested");
  };

  const handleVerify = (otp) => {
    if (otp.length === 4 && /^\d{4}$/.test(otp)) {
      console.log("OTP submitted: ", otp);
      navigate('/home');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="container">
        <h1 className="text-center text-2xl font-semibold mb-6">Enter OTP</h1>
        <p className="text-center text-sm text-gray-400 mb-1">
          We've sent an OTP code to your email,
        </p>
        <p className="text-center text-base font-medium mb-8">
          username@gmail.com
        </p>

        <OtpInput length={4} onComplete={handleVerify} />

        {!canResend ? (
          <p className="text-center text-xs text-gray-400 mb-6">
            We will resend the code in <span>{timeLeft}</span> s
          </p>
        ) : (
          <p className="text-center text-xs mb-6">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                handleResend();
              }}
              className="text-primary font-semibold no-underline"
            >
              Resend code
            </a>
          </p>
        )}

        <button 
          className="btn-continue" 
          onClick={() => navigate('/home')}
        >
          Verify
        </button>

        <div className="create-account">
          Already have an account? <a href="/">Sign In</a>
        </div>
      </div>
    </div>
  );
}

export default VerifyOtp;