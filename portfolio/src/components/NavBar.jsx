import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-10 bg-white shadow-md">
      {/* Logo */}
      <div className="text-black text-[34px] font-medium font-[Inknut_Antiqua]">
        Ansh Jadhav
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-7 ml-auto">
        <Link to="/" className="text-black text-lg font-light font-[Poppins]">
          Home
        </Link>
        <Link to="/about" className="text-black text-lg font-light font-[Poppins]">
          About Me
        </Link>
        <Link to="/projects" className="text-black text-lg font-light font-[Poppins]">
          Projects
        </Link>
        <Link to="/experience" className="text-black text-lg font-light font-[Poppins]">
          Experience
        </Link>

        {/* Start a Project Button */}
        <button className="px-4 py-2 bg-gradient-to-r from-blue-400 to-indigo-700 rounded-lg shadow-md text-white text-lg font-medium">
          Start a Project
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
