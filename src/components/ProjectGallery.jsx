import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import FilterBar from "./FilterBar";
import projects from "../data/projects";

function ProjectGallery() {
  const [selectedKeyword, setSelectedKeyword] = useState("All");

  const keywords = useMemo(() => {
    const uniqueKeywords = [
      ...new Set(projects.flatMap((p) => p.keywords || [])),
    ];
    return uniqueKeywords.includes("All")
      ? uniqueKeywords
      : ["All", ...uniqueKeywords];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedKeyword === "All") return projects;
    return projects.filter(
      (project) =>
        project.keywords && project.keywords.includes(selectedKeyword),
    );
  }, [selectedKeyword]);

  return (
    <div className="flex flex-col min-h-[calc(100vh-200px)] p-6 space-y-6">
      <FilterBar
        keywords={keywords}
        selectedKeyword={selectedKeyword}
        setSelectedKeyword={setSelectedKeyword}
      />

      {filteredProjects.length > 0 ? (
        <div className="w-full mx-auto max-w-[1800px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-10 place-items-center">
            {filteredProjects.map((project) => (
              <div key={project.id} className="w-full max-w-[420px] h-[420px]">
                <ProjectCard post={project} className="w-full h-full" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-6 italic text-gray-500">
          No projects match the selected keyword.
        </div>
      )}
    </div>
  );
}

export default ProjectGallery;
