import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  let dispatch = useDispatch();

  let user = useSelector((state) => state.user);

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
