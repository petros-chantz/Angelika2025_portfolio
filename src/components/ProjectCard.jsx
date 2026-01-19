import { Link } from "react-router-dom";

function ProjectCard({ post, className = "" }) {
  const { id, title, year, location, images } = post;

  return (
    <Link
      to={`/project/${id}`}
      className={`group block w-full h-full ${className}`}
      aria-label={`View project ${title}`}
    >
      <article className="flex flex-col w-full h-full overflow-hidden bg-white rounded-sm">
        {/* Image */}
        <div className="relative w-full h-[300px] overflow-hidden bg-gray-100">
          <img
            src={images?.cover?.src}
            alt={images?.cover?.alt || title}
            className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col flex-1 gap-1 py-4">
          <h3 className="text-lg font-semibold leading-tight text-gray-900">
            {title}
          </h3>

          <p className="text-sm text-gray-600 ">
            {location?.city}, {location?.country} · {year}
          </p>
        </div>
      </article>
    </Link>
  );
}

export default ProjectCard;
