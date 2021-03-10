import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useUserGlobalContext } from "../userContext";

const HomePage = () => {
  const { loggedIn, user } = useUserGlobalContext();
  const { name } = user;
  
  if (loggedIn) {
    return (
      <main>
        <div className="container home-page">
          <h1>Hello {name}</h1>
          <p>
            Welcome to the shopping List app Click
            <span>
              <Link to="/shopping">
                <button>
                  <FaArrowRight />
                </button>
              </Link>
            </span>
            to add Items to your list
          </p>
        </div>
      </main>
    );
  }
  return (
    <main>
      <div className="container home-page">
        <h1>Hello!!!</h1>
        <p>
          Welcome to the shopping List app Click
          <span>
            <Link to="/login">
              <button>
                <FaArrowRight />
              </button>
            </Link>
          </span>
          to add Items to your list
        </p>
      </div>
    </main>
  );
};

export default HomePage;
