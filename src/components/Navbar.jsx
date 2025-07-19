import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full p-8">
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="text-3xl text-black font-semibold hover:text-[#ca3500]"
        >
          Angelika Chantzopoulou
        </Link>
        <Link
          to="/about"
          className="text-lg text-gray-800 hover:text-[#ca3500]"
        >
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
