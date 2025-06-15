import { useState } from 'react';
import Header from '../components/MainApp/Header';
import ProgressCard from '../components/MainApp/ProgressCard';
import CategoryTags from '../components/MainApp/CategoryTags';
import WorkoutCard from '../components/MainApp/WorkoutCard';
import Navbar from '../components/Common/Navbar';
import Notifications from '../components/MainApp/Notifications';

function Home() {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const workouts = [
    {
      title: "Strength Exercise",
      exercises: ["20 Exercises • 22 Min", "12 Exercises • 14 Min"],
      image: "1.svg"
    },
    {
      title: "Both Side Plank",
      exercises: ["15 Exercises • 18 Min"],
      image: "2.svg"
    },
    {
      title: "Abs Workout",
      exercises: ["16 Exercises • 18 Min"],
      image: "3.svg"
    },
    {
      title: "Torso and Trap Workout",
      exercises: ["8 Exercises • 10 Min"],
      image: "4.svg"
    },
    {
      title: "Lower Back Exercise",
      exercises: ["14 Exercises • 18 Min"],
      image: "5.svg"
    }
  ];

  return (
    <div className="pb-20">
      <div className="flex justify-between items-center mt-6 mb-4 px-4">
        <img src="/images/Flexio.svg" alt="Logo" className="h-[19px]" />
        <button onClick={toggleNotifications}>
          <img 
            src="/images/notification.svg" 
            alt="Notifications" 
            className="w-6 h-6" 
          />
        </button>
      </div>

      <Notifications 
        isOpen={showNotifications} 
        onClose={() => setShowNotifications(false)} 
      />

      <Header />

      <div className="px-4">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Progress</h2>
            <a href="#" className="text-primary text-sm font-medium no-underline">See All</a>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <ProgressCard 
              completed={5} 
              total={12} 
              time="15 min remaining" 
            />
            <ProgressCard 
              completed={3} 
              total={20} 
              title="Legs Workout" 
              time="23 min remaining" 
            />
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Categories</h2>
          </div>
          
          <CategoryTags 
            tags={["All", "Warm Up", "Yoga", "Biceps", "See All"]} 
            activeTag="All" 
          />
        </div>

        <div className="flex flex-col gap-3">
          {workouts.map((workout, index) => (
            <WorkoutCard 
              key={index}
              title={workout.title}
              exercises={workout.exercises}
              image={workout.image}
            />
          ))}
        </div>
      </div>

      <Navbar />
    </div>
  );
}

export default Home;