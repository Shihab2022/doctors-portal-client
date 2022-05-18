import React from "react";
import { toast } from "react-toastify";


const UsersRow = ({user,index,refetch}) => {
const {role,email}=user
// console(role)
    const makeAdmin=(email)=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method:'PUT',
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>
            {
                if(res.status===403){
                    toast.error('Field to make an admin .')
                }
              return  res.json()
            })
            
        .then(data=>{
            // console.log(data)
            if(data.modifiedCount>0){
                refetch()
                toast.success('Make admin successfully .')
            }
         
        })
    }
  return (

      <tr>
        <td>{index+1}</td>
        <td>{email}</td>
        <td>{role !=='admin' &&<button onClick={()=>makeAdmin(user.email)} class='btn btn-xs'>Make admin</button>}</td>
        <td><button class='btn bg-rose-500 btn-xs'>Remove user</button></td>
      </tr>
    
  );
};

export default UsersRow;
