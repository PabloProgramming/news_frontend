import {ClipLoader} from "react-spinners";
import {getUsers} from "../api";
import {useApiRequest} from "../hooks/useApiRequest";
import {ErrorComponent} from "./ErrorComponent";
import {UserCard} from "./UserCard";

export const Users = () => {
  const {data: users, error, loading} = useApiRequest(getUsers);

  if (loading)
    return (
      <div className="loader-container">
        <ClipLoader color="#646cff" size={50} />
      </div>
    );

  if (error) return <ErrorComponent message={error} />;
  return (
    <ul>
      {users.map((user) => {
        return <UserCard key={user.username} user={user} />;
      })}
    </ul>
  );
};
