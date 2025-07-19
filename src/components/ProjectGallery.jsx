import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import FilterBar from "./FilterBar";
import projects from "../data/projects";

function ProjectGallery() {
  const scrollRef = useRef(null);
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedKeyword, setSelectedKeyword] = useState("All");

  const uniqueYears = [...new Set(projects.map((p) => p.year))];
  const uniqueKeywords = [
    ...new Set(projects.flatMap((p) => p.keywords || [])),
  ];

  const years = uniqueYears.includes("All")
    ? uniqueYears
    : ["All", ...uniqueYears];
  const keywords = uniqueKeywords.includes("All")
    ? uniqueKeywords
    : ["All", ...uniqueKeywords];

  const filteredProjects = projects.filter((project) => {
    const matchYear = selectedYear === "All" || project.year === selectedYear;
    const matchKeyword =
      selectedKeyword === "All" ||
      (project.keywords && project.keywords.includes(selectedKeyword));
    return matchYear && matchKeyword;
  });

  useEffect(() => {
    const container = scrollRef.current;
    const onWheel = (e) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };
    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-200px)] p-6 space-y-6">
      <FilterBar
        years={years}
        keywords={keywords}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        selectedKeyword={selectedKeyword}
        setSelectedKeyword={setSelectedKeyword}
      />

      <div
        ref={scrollRef}
        className="flex flex-1 gap-6 pb-6 overflow-x-auto scrollbar-hide"
      >
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} post={project} />
          ))
        ) : (
          <div className="p-6 italic text-gray-500">
            No projects match the filters.
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectGallery;
