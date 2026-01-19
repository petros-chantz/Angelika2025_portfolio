function FilterBar({ years, keywords, selectedKeyword, setSelectedKeyword }) {
  return (
    <div className="flex flex-wrap items-center justify-between">
      <div className="flex flex-wrap items-center gap-4 mt-4 sm:mt-0">
        {keywords.map((keyword) => (
          <button
            key={keyword}
            onClick={() => setSelectedKeyword(keyword)}
            className={`px-2 py-1 text-lg transition capitalize ${
              selectedKeyword === keyword
                ? "text-gray-800 opacity-100 font-medium "
                : "text-gray-800 opacity-70 font-medium hover:text-[#ca3500]"
            }`}
          >
            {keyword}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;
