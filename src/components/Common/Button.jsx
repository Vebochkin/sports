function Button({ children, type = 'button', className = '', ...props }) {
  return (
    <button
      type={type}
      className={`py-3.5 px-4 bg-primary rounded-xl text-white font-medium ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;