function Navbar() {
  const navItems = [
    { icon: 'home.svg', alt: 'Home' },
    { icon: 'track.svg', alt: 'Activity' },
    { icon: 'ship.svg', alt: 'Calendar' },
    { icon: 'profile.svg', alt: 'Profile' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-primary flex justify-around py-3">
      {navItems.map((item, index) => (
        <button key={index} className="w-14 h-12 flex justify-center items-center">
          <img 
            src={`/images/${item.icon}`} 
            alt={item.alt} 
            className="w-13 h-13" 
          />
        </button>
      ))}
    </nav>
  );
}

export default Navbar;