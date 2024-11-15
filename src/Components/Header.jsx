import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
    <h1>Learn code</h1>
    <ul>
      <li>
        {/* <a href="/">home</a> */}
        {/* <Link to='/' end >Home</Link> */}
        <Link to='/'>Home</Link>
      </li>
      <li>
        {/* <a href="faq">faq</a> */}
        <Link to="faq">faq</Link>
      </li>
      <li>
      {/* <a href="contact">contact</a> */}
      <NavLink to="contact">contact</NavLink>
      {/* <Link to="contact">contact</Link> */}
      </li>
      <li>
      {/* <Link to="Login">Login</Link> */}
      <NavLink to="User">User</NavLink>
      {/* <Link to="User">User</Link> */}
      </li>

    </ul>
  </div>
  )
}

export default Header