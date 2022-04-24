import React from 'react'
import "./TagRow.css"
function TagRow({tag,total}) {
  return (
    <div className="tagRow">
        <p>{tag}</p>
        <p>{total}</p>
    </div>
  )
}

export default TagRow