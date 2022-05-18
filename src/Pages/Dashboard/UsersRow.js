import React from "react";
import { toast } from "react-toastify";


const UsersRow = ({user,index,refetch}) => {
// const {email}=user
    const makeAdmin=(email)=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method:'PUT',
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            refetch()
            toast.success('Make admin successfully .')
        })
    }
  return (

      <tr>
        <td>{index+1}</td>
        <td>{user.email}</td>
        <td><button onClick={()=>makeAdmin(user.email)} class='btn btn-xs'>Make admin</button></td>
        <td><button class='btn bg-rose-500 btn-xs'>Remove user</button></td>
      </tr>
    
  );
};

export default UsersRow;
