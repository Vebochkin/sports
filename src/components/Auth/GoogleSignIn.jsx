import { useEffect } from 'react';

function GoogleSignIn() {
  // 1. Объявляем глобально
  const handleGoogleSignIn = (response) => {
    const payload = JSON.parse(atob(response.credential.split('.')[1]));
    console.log("Google sign-in response:", payload);

    fetch('/api/auth/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: response.credential,
        email: payload.email,
        name: payload.name
      })
    });
  };

  useEffect(() => {
    // 2. Привязываем к window
    window.handleGoogleSignIn = handleGoogleSignIn;

    const initializeGoogleSignIn = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: '120362024328-dpfhd6jvnrp8lopfffb497ja65ofm1cp.apps.googleusercontent.com',
          callback: handleGoogleSignIn
        });
        window.google.accounts.id.renderButton(
          document.getElementById('google-signin-button'),
          {
            type: 'icon',
            shape: 'circle',
            theme: 'filled_black',
            size: 'large'
          }
        );
      }
    };

    if (document.readyState === 'complete') {
      initializeGoogleSignIn();
    } else {
      window.addEventListener('load', initializeGoogleSignIn);
    }

    return () => {
      window.removeEventListener('load', initializeGoogleSignIn);
    };
  }, []);

  return (
    <div id="google-signin-button" />
  );
}

export default GoogleSignIn;
