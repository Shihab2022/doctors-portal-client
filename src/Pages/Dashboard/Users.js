import React from "react";
import { useQuery } from "react-query";
import Spinner from "../Sherad/Spinner";
import UsersRow from "./UsersRow";

const Users = () => {
  const { data: users, isLoading ,refetch} = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers:{
       authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then((res) => res.json()));
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <h3>this is user page : {users?.length}</h3>

      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <UsersRow key={user._id} user={user} refetch={refetch} index={index}></UsersRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
