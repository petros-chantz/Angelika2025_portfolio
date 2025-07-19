function FilterBar({
  years,
  keywords,
  selectedYear,
  setSelectedYear,
  selectedKeyword,
  setSelectedKeyword,
}) {
  return (
    <div className="flex flex-wrap items-center justify-between p-6">
      <div className="flex flex-wrap items-center gap-4">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-2 py-1 text-lg transition ${
              selectedYear === year
                ? "text-black font-semibold underline"
                : "text-gray-700 hover:text-[#ca3500]"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-4 sm:mt-0">
        {keywords.map((keyword) => (
          <button
            key={keyword}
            onClick={() => setSelectedKeyword(keyword)}
            className={`px-2 py-1 text-lg transition capitalize ${
              selectedKeyword === keyword
                ? "text-black font-semibold underline"
                : "text-gray-700 hover:text-[#ca3500]"
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
