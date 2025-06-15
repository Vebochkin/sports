import { useState, useRef, useEffect } from 'react';

function OtpInput({ length = 4, onComplete }) {
  const [otp, setOtp] = useState(Array(length).fill(''));
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, '');
    
    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (newOtp.every(num => num !== '') && newOtp.join('').length === length) {
      onComplete(newOtp.join(''));
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex justify-center gap-4 mb-6">
      {Array(length).fill(0).map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={otp[index]}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputRefs.current[index] = el)}
          className="w-12 h-12 bg-dark-100 border-none rounded-xl text-2xl text-white text-center"
          inputMode="numeric"
          pattern="\d*"
        />
      ))}
    </div>
  );
}

export default OtpInput;