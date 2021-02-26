import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {

  return (
    <div id="nav">
      <h3>Lambda Eats</h3>

      <div id="links">
        <Link to="/">Home</Link>
        <Link to="/help">Help</Link>
      </div>
    </div>
  )
}