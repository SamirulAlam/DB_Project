import axios from './axios';
import React, { useEffect, useState } from 'react'
import "./Feed.css"
import Post from './Post'

function Feed() {

  const [userData,setUserData] =useState([]);
    const syncFeed = () =>{
        axios.get('/users')
        .then((res)=>{
            console.log(res.data);
            setUserData(res.data);
        })
    }
    useEffect(()=>{
      syncFeed();
  },[])
  return (
    <div className="feed">

          {
                userData.map(entry => (
                    <Post
                        timestamp={entry.date}
                        imgUrl={entry.image_url}
                        username={entry.username}
                        comment={entry.photoId}
            />
                ))
            }
    </div>
  )
}

export default Feed