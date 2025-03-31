import {Link} from "react-router";

export const Header = () => {
  return (
    <header>
      <h1>NC News</h1>
      <nav>
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/topics">
          <p>Topics</p>
        </Link>
        <Link to="/users">
          <p>Users</p>
        </Link>
      </nav>
    </header>
  );
};
