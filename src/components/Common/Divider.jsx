function Divider({ text }) {
  return (
    <div className="flex items-center my-6">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="mx-4 text-gray-500">{text}</span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
}


export default Divider;