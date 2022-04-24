import React, { useEffect, useState } from 'react'
import "./Post.css"
import Comment from './Comment';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function Post({imgUrl,username,timestamp,comment}) {

    const [userComment,setUserComment] =useState([]);
    const syncComment = () =>{
        axios.get(`/comments?id=${comment}`)
        .then((res)=>{
            console.log(res.data);
            setUserComment(res.data);
        })
    }
    useEffect(()=>{
      syncComment();
  },[])
  return (
    <div className="post">
        <div className="post__top">
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{timestamp}</p>
                </div>
            </div>
        
                    <div className="post__image">
                        <img src={imgUrl} />
                    </div>

            <div className="post__options">
                <div className="post__option">
                    <p>Like</p>
                </div>
                {
                userComment.map(entry => (
                    <Comment
                        timestamp={entry.date}
                        username={entry.username}
                        comment={entry.comment_text}
            />
                ))
            }
            <Comment />
            </div>
    </div>
  )
}

export default Post