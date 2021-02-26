import React from 'react'
import {Link} from 'react-router-dom'

export default function Homepage() {

  return (
    <div className="home">
      <div className="header">
        <h1>It's Pizza Day!</h1>
        <Link to="/Pizza" />
      </div>
    </div>
  )
}