import React from 'react'
// import {Link} from 'react-router-dom'

export default function Homepage({newPie}) {

  return (
    <div className="confirmation">
      Order Confirmation: <br></br>
      {newPie.name} you ordered a {newPie.size} inch pie with 
      {newPie.sauce} sauce and {newPie.toppings}. 
      <br></br>Bold move Cotton let's see if it pays off!
      <br></br>
      {newPie.wings && <div>AND you got wings!</div>}
    </div>
    
  )
}