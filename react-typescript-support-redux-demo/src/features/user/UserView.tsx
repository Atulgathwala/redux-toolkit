import { useAppDispatch , useAppSelector } from "../../app/hooks";
import { useEffect } from "react";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  let dispatch = useAppDispatch();
  let user = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h2>no of Users - {user.users.length}</h2>
      {user.pendding && <div>😒</div>}
      {!user.loading && user.error ? (
        <div>Error : {user.error}</div>
      ) : (
        <ul>
          {user.users.map((user) => (
            <li>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserView;
