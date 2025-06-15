import { useEffect } from 'react';

function Notifications({ isOpen, onClose }) {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('.notifications-menu')) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const notifications = [
    { time: '9:41', content: "Don't forget to hydrate during your workout" },
    { time: '9:30', content: "Congrats on completing your first week of workouts!" },
    { time: '8:57', content: "It's HIIT o'clock! Time for a quick and intense workout" },
    { time: '8:40', content: "Hey fitness enthusiast, time to log your latest workout" },
    { time: '7:44', content: "Legs Workout" },
  ];

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-40 z-40" />
      
      <div className="fixed top-16 right-4 w-[297px] bg-dark-500 rounded-xl shadow-lg z-50 overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-600">
          <h2 className="text-base font-semibold text-gray-300">Notifications</h2>
        </div>
        
        <div className="max-h-[400px] overflow-y-auto">
          {notifications.map((notification, index) => (
            <div key={index} className="flex px-4 py-3 border-b border-gray-600">
              <div className="w-10 mr-2">
                <div className="text-xs text-gray-400 font-medium">
                  {notification.time}
                </div>
              </div>
              <div className="flex-1">
                <div className="text-sm text-white leading-snug">
                  {notification.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Notifications;