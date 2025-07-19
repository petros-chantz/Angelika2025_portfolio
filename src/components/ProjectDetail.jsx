import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import projects from "../data/projects";

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div className="p-8">Project not found.</div>;
  }

  return (
    <div className="max-w-4xl p-8 mx-auto space-y-6">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <img
        src={project.image}
        alt={project.alt || `${project.title} image`}
        className="w-full rounded-xl object-cover max-h-[500px]"
      />
      <p className="text-gray-700">{project.subtitle}</p>
      <p className="text-sm text-gray-500">Year: {project.year}</p>

      {project.description && (
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>{project.description}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default ProjectDetail;
