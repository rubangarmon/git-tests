import React from 'react'

export const Comment = ({ comment }) => (

  <aside className="comment">
    <label>hola</label>
    <h2>{comment.title}</h2>
    <h3>{comment.email}</h3>
    <p>{comment.body}</p>
  </aside>
)
