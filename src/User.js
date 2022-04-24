import axios from './axios';
import React, { useEffect, useState } from 'react'
import "./User.css"
import UserRow from './UserRow'
function User() {
  const [userPost,setUserPost] =useState([]);
    const syncPost = () =>{
        axios.get('/post')
        .then((res)=>{
            console.log(res.data);
            setUserPost(res.data);
        })
    }
    useEffect(()=>{
      syncPost();
  },[])
  return (
    <div className="user">
        {
                userPost.map(entry => (
                    <UserRow
                        user={entry.username}
                        total={entry.total}
            />
                ))
            }
    </div>
  )
}

export default User