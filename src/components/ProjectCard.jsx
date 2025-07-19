import { Link } from "react-router-dom";

function ProjectCard({ post }) {
  return (
    <Link to={`/projects/${post.id}`} className="block">
      <div className="w-[600px] h-full bg-white rounded-sm flex flex-col overflow-hidden relative">
        <img
          src={post.image}
          alt={post.alt || `${post.title} image`}
          className="object-cover w-full h-full bg-gray-200"
        />
        <div className="absolute px-4 py-2 rounded shadow bottom-4 left-4 bg-white/80 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
          <span className="text-sm text-gray-600">Year: {post.year}</span>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
