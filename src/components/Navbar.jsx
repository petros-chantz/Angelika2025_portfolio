import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const baseLinkClasses =
    "text-xl text-gray-800 hover:text-[#ca3500] transition-colors";

  const navLinkClasses = ({ isActive }) =>
    `${baseLinkClasses} ${isActive ? "opacity-100" : "opacity-70"}`;

  return (
    <nav className="w-full p-8">
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl tracking-wide font-medium hover:text-[#ca3500] transition-colors"
        >
          Angelika Chantzopoulou
        </Link>

        <div className="flex gap-6">
          <NavLink to="/" className={navLinkClasses}>
            Projects
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
