function Header() {
  return (
    <div className="relative bg-[url('/images/back.svg')] bg-cover rounded-xl mx-4 mb-16 h-48 overflow-hidden">
      <div className="relative z-10 pt-2 px-6 pb-6 h-full flex flex-col justify-between">
        <div className="max-w-[60%]">
          <h1 className="text-2xl font-bold mb-2 mt-1">Start Strong and Set Your Fitness Goals</h1>
        </div>
        
        <button className="absolute -bottom-4 left-6 w-40 h-12">
          <img src="/images/Button.svg" alt="Start Exercise" className="absolute bottom-10 z-0" />
        </button>
      </div>
      
      <img 
        src="/images/sportsman.svg" 
        alt="Man exercising" 
        className="absolute right-3 h-40 -bottom-1 z-0" 
      />
    </div>
  );
}

export default Header;
