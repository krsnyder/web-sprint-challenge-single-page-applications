import React, { useState, useEffect } from 'react'
import * as yup from "yup"
import formSchema from './validation/formSchema'
import Confirmation from './Confirmation'


/// Defining Blank State ///
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
  name: ""
}

const initialErrors = {
  name: "",
  size: "",
  sauce: "",
}

const initialDisabled = true;
let confirmed = false;

/// Defining Main Function
export default function PizzaMaker() {

  /// Initializing State Values
  const [pizza, setPizza] = useState(starterZa)
  const [errors, setErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [newPie, setNewPie] = useState({})

  /// Building Event Handler for form Changes
  const onChange = (e => {
    const value = 
      e.target.type === "checkbox" ? e.target.checked : e.target.value

    const name = e.target.name

    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
      setErrors({...errors, [name]: ''})
      })
      .catch(err => {
        setErrors({...errors, [name]: err.errors[0]})
    })
    setPizza({
      ...pizza, [name]: value
    })
  })

  /// Setting Submit button to active
  useEffect(() => {
    formSchema.isValid(pizza).then(valid => setDisabled(!valid))
  }, [pizza])

  /// Funcionality for Submit Button
  const onSubmit = (e) => {
    e.preventDefault()
    const newPizza = {
      size: pizza.size,
      sauce: pizza.sauce,
      toppings: ['pepperoni', 'sausage', 'onion', 'pineapple', 'cheese'].filter(topping => pizza[topping]),
      name: pizza.name,
      wings: pizza.wings,
      instructions: pizza.instructions
    }
    setNewPie(newPizza)
  } 

  /// Rendering elements
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
            value={pizza.size}
            name="size"
          >
            <option value=""> Select a size</option>
            <option value="10"> 10 inch</option>
            <option value="12"> 12 inch</option>
            <option value="16"> 16 inch</option>
            <option value="24"> 24 inch</option>
          </select>
        </label>

        <label id="radio" className="form-item" onChange={onChange}>
          <h3>Choice of Sauce</h3>
          <p>Required</p>
          <input type="radio" value="tomato" name="sauce" /> Tomato
          <input type="radio" value="buffalo" name="sauce" /> Buffalo
          <input type="radio" value="vodka" name="sauce" /> Vodka
          <input type="radio" value="pesto" name="sauce" /> Pesto
        </label>

        <label className="form-item">
          <h3>Add Toppings</h3>
          <p>Choose up to 5</p>

          <input type="checkbox" name="pepperoni" value={pizza.pepperoni} onChange={onChange} />Pepperoni

          <input type="checkbox" name="sausage" value={pizza.sausage} onChange={onChange} />Sausage

          <input type="checkbox" name="onion" value={pizza.onion} onChange={onChange} />Onion

          <input type="checkbox" name="pineapple" value={pizza.pineapple} onChange={onChange} />Pineapple

          <input type="checkbox" name="cheese" value={pizza.cheese} onChange={onChange} />Extra Cheese

        </label>

        <label className="form-item">
          <h3>Want some wings?</h3>
          <p>Add a dozen of our famouse buffalo wings!</p>
          <input
            type="checkbox"
            name="wings"
            value={pizza.wings}
            onChange={onChange}
          /> {'(+$9.99)'}
        </label>
        <label className="form-item">
          <div className="inputs">
            <h3>Special Instructions</h3>
            <input
              type="text"
              name="instructions"
              value={pizza.instructions}
              onChange={onChange}
            />
          </div>
          <div className="inputs">
           <h3>Name</h3>
            <input
              type="text"
              name="name"
              value={pizza.name}
              onChange={onChange}
            />
          </div>

        </label>
        <button type="submit" disabled={disabled} onClick={() => {confirmed = true }}>Submit</button>
        <div className="errors">
          <div>{errors.size}</div>
          <div>{errors.radio}</div>
          <div>{errors.name}</div>
        </div>
      </form>

      {confirmed && <Confirmation newPie={newPie} />}
    </div>
  )
}