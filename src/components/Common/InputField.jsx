function InputField({ label, type = 'text', id, placeholder, required = false, ...props }) {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="block text-xs mb-2">{label}</label>
      <div className="relative">
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          required={required}
          className="w-full py-3.5 px-4 bg-dark-100 rounded-xl text-sm text-white"
          {...props}
        />
      </div>
    </div>
  );
}

export default InputField;