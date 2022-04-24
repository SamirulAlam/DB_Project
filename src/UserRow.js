import React from 'react'
import "./UserRow.css"
function UserRow({user,total}) {
  return (
    <div className="userRow">
            <p>{user}</p>
            <p>{total}</p>
    </div>
  )
}

export default UserRow