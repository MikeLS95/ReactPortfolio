import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul className="flex space-x-4">
        <li>
          <Link to="/about" className="text-green hover:text-gray-300">
            About
          </Link>
        </li>
        <li>
          <Link to="/tech" className="text-green hover:text-gray-300">
            Tech
          </Link>
        </li>
        <li>
          <Link to="/projects" className="text-green hover:text-gray-300">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-green hover:text-gray-300">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
