import React from 'react'
import {Link} from 'react-router-dom'

export default function Homepage() {

  return (
    <div className="home">
      <div className="header">
        <h1>It's Pizza Day!</h1>
        <Link to="/Pizza">Who wants some PIZZA??</Link>
      </div>
      <div className="gallery">
        <div className="img"><img src="https://phoode.com/blog/wp-content/uploads/2020/03/PhoodeBasilMozPizza.jpg" alt="pizza"/></div>
        <div className="img"><img src="https://image.freepik.com/free-photo/flying-slices-pizza_117255-100.jpg" alt="pizza"/></div>
        <div className="img"><img src="https://oneeyeland.com/600/291316-one-eyeland-food-photography-pizza-by-russell-smith.jpg" alt="pizza"/></div>
        <div className="img"><img src="https://expertphotography.com/wp-content/uploads/2018/11/pizza-photography-gourmet-pizza.jpg" alt="pizza"/></div>
        <div className="img"><img src="https://phoode.com/blog/wp-content/uploads/2020/03/Phoode8524.jpg" alt="pizza"/></div>
        <div className="img"><img src="https://whatshouldimakefor.com/wp-content/uploads/2019/02/Cast-Iron-Skillet-Pizza-7-2.jpg" alt="pizza"/></div>
      </div>
    </div>
  )
}