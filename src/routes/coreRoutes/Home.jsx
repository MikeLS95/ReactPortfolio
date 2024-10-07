import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container is-max-desktop p-6 mx-auto">
      <div className="level">
        <div className="level-left">
          <h1 className="title is-large">Mike</h1>
        </div>
        <div className="level-right">
          <h3 className="subtitle">Sheppard &copy;2024</h3>
        </div>
      </div>
      <div className="columns is-variable is-8">
        <div className="column">
          <p>This website has been built using React and BulmaCSS.</p>
          <p>
            Use the buttons below to navigate into my portfolio to learn more
            about me and checkout my projects and experiences.
          </p>
        </div>
      </div>
      <div className="columns is-variable is-8">
        <div className="column">
          <Link to="/about" className="button is-success">
            About
          </Link>
          <Link to="/tech" className="button is-success">
            Tech
          </Link>
          <Link to="/projects" className="button is-success">
            Projects
          </Link>
          <Link to="/contact" className="button is-success">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
