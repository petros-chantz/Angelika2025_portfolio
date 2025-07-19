import { Link } from "react-router-dom";

function ProjectCard({ post }) {
  return (
    <Link to={`/project/${post.id}`} className="block">
      <div className="w-[600px] h-full bg-white rounded-sm flex flex-col overflow-hidden transition-transform duration-300 group">
        {/* Image with hover zoom effect */}
        <div className="overflow-hidden">
          <img
            src={post.image}
            alt={post.alt || `${post.title} image`}
            className="object-cover w-full h-full transition-transform duration-500 bg-gray-200 group-hover:scale-105"
          />
        </div>

        {/* Text content below */}
        <div className="py-4">
          <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
          <span className="text-sm text-gray-600">Year: {post.year}</span>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
