import React from 'react'
//test comment
export const Comment = ({ comment }) => (

  <aside className="comment">
    <label>hola 1 2 3 4 5 6 7</label>
    <h2>{comment.title}</h2>
    <h3>{comment.email}</h3>
    <p>{comment.body}</p>
  </aside>
)
