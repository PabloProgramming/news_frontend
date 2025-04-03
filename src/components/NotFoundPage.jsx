import {Link} from "react-router";

export const NotFoundPage = () => {
  return (
    <div className="error-container">
      <h2 className="error-title">404 - Page Not Found</h2>
      <p className="error-msg">
        Something went wrong. You can go back to the{" "}
        <Link to="/">Home Page</Link>.
      </p>
    </div>
  );
};
