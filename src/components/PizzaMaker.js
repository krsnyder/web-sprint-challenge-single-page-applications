import React, { useState } from 'react'

const starterZa = {
  size: "",
  sauce: "",
  pepperoni: false,
  sausage: false,
  onion: false,
  pineapple: false,
  cheese: false,
  wings: false,
  instructions: "",
  quantity: 0
}

const initialErrors = {
  size: "",
  sauce: "",
}

export default function PizzaMaker() {
  const [pizza, setPizza] = useState(starterZa)
  const [errors, setErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(true)

  const onChange = () => {

  }

  const onSubmit = (e) => {
    e.preventDefault()

  }
  return (
    <div className="form">
      <h2>Build your Pizza!</h2>
      <div className="form-header">
         <img src="https://expertphotography.com/wp-content/uploads/2018/11/pizza-photography.jpg" alt="Pizza"/>
      </div>
      
      <form onSubmit={onSubmit}>
        <label className="form-item">
          <h3>Choice of Size</h3>
          <p>Required</p>
           <select 
            onChange={onChange}
            value={""}
            />
        </label>

        <label className="form-item" onChange={onChange}>
          <h3>Choice of Sauce (required)</h3>
          <p>Rquired</p>
           <input type="radio" value="tomato" name="sauce" /> Tomato
           <input type="radio" value="buffalo" name="sauce" /> Buffalo
           <input type="radio" value="vodka" name="sauce" /> Vodka
           <input type="radio" value="pesto" name="sauce" /> Pesto
        </label>

        <label className="form-item">
          <h3>Add Toppings</h3>
          <p>Choose up to 10</p>
          <input type="checkbox" name="pepperoni" value={pizza.pepperoni} onChange={onChange} />Pepperoni
          <input type="checkbox" name="sausage" value={pizza.sausage} onChange={onChange} />Sausage
          <input type="checkbox" name="onion" value={pizza.onion} onChange={onChange} />Onion
          <input type="checkbox" name="pineapple" value={pizza.pineapple} onChange={onChange} />Pineapple
          <input type="checkbox" name="cheese" value={pizza.cheese} onChange={onChange} />Cheese
        </label>

        <label className="form-item">
          <h3>Want some wings?</h3>
          <p>Add a dozen of our famouse buffalo wings!</p>
          <input
            type="checkbox"
            name="wings"
            value={pizza.wings}
            onChange={onChange}
          />
        </label>
        <label className="form-item">
          <h3>Special Instructions</h3>
          <input
            type="text"
            name="instructions"
            value={pizza.instructions}
            onChange={onChange}
          />
        </label>
        <button type="submit" disabled={disabled}>Submit</button>
      </form>
    </div>
  )
}