import axios from './axios';
import React, { useEffect, useState } from 'react'
import "./Tag.css"
import TagRow from './TagRow'
function Tag() {

  const [photoTag,setPhotoTag] =useState([]);
    const syncTag = () =>{
        axios.get('/tags')
        .then((res)=>{
            console.log(res.data);
            setPhotoTag(res.data);
        })
    }
    useEffect(()=>{
      syncTag();
  },[])

  return (
    <div className="tag">
      <br />
      <h2>Popular Tags</h2>
      <div className="tag__heading">
      <h5>Tag Name</h5>
      <h5>Total</h5>
      </div>
        <div className="tag__row">
        {
                photoTag.map(entry => (
                    <TagRow
                        tag={entry.tagName}
                        total={entry.total}
            />
                ))
            }
        </div>
    </div>
  )
}

export default Tag