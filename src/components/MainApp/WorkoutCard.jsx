function WorkoutCard({ title, exercises = [], image }) {
  return (
    <div className="flex justify-between items-center bg-dark-300 rounded-xl p-4">
      <div>
        <h3 className="text-base font-bold mb-1">{title}</h3>
        {exercises.map((exercise, index) => (
          <p key={index} className="text-xs text-gray-400">{exercise}</p>
        ))}
      </div>
      <img 
        src={`/images/${image}`} 
        alt={title} 
        className="w-12 h-12" 
      />
    </div>
  );
}

export default WorkoutCard;