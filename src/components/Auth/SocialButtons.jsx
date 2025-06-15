import GoogleSignIn from './GoogleSignIn';

function SocialButtons() {
  return (
    <div className="flex justify-center gap-4">
      <GoogleSignIn />
      {/* Add other social buttons here */}
    </div>
  );
}

export default SocialButtons;