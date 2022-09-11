import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => (
  <nav>
    <h4>Hello</h4>
    <section>
      <Link to="/">Dashboard something more</Link>
      <Link to="/posts">Posts-- Anake</Link>
    </section>
  </nav>
)
