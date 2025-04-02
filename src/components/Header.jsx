import { Link } from "react-router";
import {useContext} from "react";
import {UserContext} from "../contexts/UserContex";

export const Header = () => {
  const {user} = useContext(UserContext)
  return (
    <header>
      <h1 id="header-title">NC News</h1>
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
      <div className="user-info">
        <img
          src={user.avatar_url}
          alt={user.username}
          className="user-avatar"
        />
        <p>{user.name}</p>
      </div>
    </header>
  );
};


