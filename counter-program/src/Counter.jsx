import React, {useState} from "react";
function Counter(){
  const [count, setCount] = useState(0); // initate the stateful variable count using array destructuring and assign it an initial state / value of 0.

  const increment = () => {
    setCount(count + 1) // function for incrementing the value of count everytime the function increment is called
  }

  const decrement = () => {
    setCount(count - 1) // function for decrementing the value of count
  }

  const reset = () => {
    setCount(0) // function to reset the value of count
  }

  return(
    <div className="counter-container">
      <p className="count-display">{count/* display the count using javascript({}) */}</p>
      <button className="counter-btn" onClick={decrement /* this function will be called everytime the button is clicked*/}>Decrement</button>
      <button className="counter-btn" onClick={reset}>Reset</button>
      <button className="counter-btn" onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter