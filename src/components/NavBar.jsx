import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && (
        <nav className="bg-gray-800 p-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/tech" className="text-white hover:text-gray-300">
                Tech
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-white hover:text-gray-300">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default NavBar;
