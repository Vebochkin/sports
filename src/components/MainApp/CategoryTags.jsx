function CategoryTags({ tags = [], activeTag = '' }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {tags.map((tag, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
            tag === activeTag
              ? 'bg-primary text-white'
              : 'bg-transparent border border-dark-400 text-gray-400'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

export default CategoryTags;