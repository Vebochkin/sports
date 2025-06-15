import InputField from '../Common/InputField';
import Button from '../Common/Button';

function EmailForm({ onSubmit, buttonText = "Continue" }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    onSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField 
        label="Email Address"
        type="email"
        id="email"
        placeholder="Enter email address"
        required
      />
      <Button type="submit" className="w-full">
        {buttonText}
      </Button>
    </form>
  );
}

export default EmailForm;