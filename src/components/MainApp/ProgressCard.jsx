function ProgressCard({ completed, total, title, time }) {
  const progress = (completed / total) * 100;
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="bg-dark-400 rounded-xl p-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-400">
          {completed}/{total}
        </span>
        
        <div className="w-10 h-10 relative">
          <svg className="w-full h-full" viewBox="0 0 40 40">
            <circle
              cx="20"
              cy="20"
              r={radius}
              fill="none"
              stroke="#3A3A5B"
              strokeWidth="4"
            />
            <circle
              cx="20"
              cy="20"
              r={radius}
              fill="none"
              stroke="#8A2BE2"
              strokeWidth="4"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              transform="rotate(-90 20 20)"
            />
          </svg>
        </div>
      </div>
      
      {title && (
        <div className="text-xs text-gray-400 leading-5">
          {title}
        </div>
      )}
      
      <div className="text-xs text-gray-400 leading-5">
        {time}
      </div>
    </div>
  );
}

export default ProgressCard;