import React from 'react'
//test comment
export const Comment = ({ comment }) => (

  <aside className="comment">
    <label>hola 1 2 3 A B</label>
    <h2>{comment.title}</h2>
    <h3>{comment.email}</h3>
    <p>{comment.body}</p>
  </aside>
)
