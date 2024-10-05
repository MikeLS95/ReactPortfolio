import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div><h1>Mike Sheppard ©2024</h1></div>
      <p>This website has been built using React and TailwindCSS.</p>
      <p>Use the buttons below to navigate into my portfolio to learn more about me and checkout my projects and experiences.</p>
      <Link to="/about" className="text-green hover:text-gray-300">
        About
      </Link>
      <Link to="/tech" className="text-green hover:text-gray-300">
        Tech
      </Link>
      <Link to="/projects" className="text-green hover:text-gray-300">
        Projects
      </Link>
      <Link to="/contact" className="text-green hover:text-gray-300">
        Contact
      </Link>
    </div>
  );
};

export default Home;
