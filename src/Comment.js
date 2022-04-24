import React from 'react'

function Comment({timestamp,username,comment}) {
  return (
    <div className="comment">
        <p>{username}</p>
        <p>{comment}</p>
        <p>{timestamp}</p>
       
    </div>
  )
}

export default Comment