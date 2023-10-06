import Axios from "axios";
import React, { useState } from 'react'

const App = () => {
  const [joke,setJoke] = useState("");

  const getJoke = () =>{
    Axios.get("http://20.244.56.144/numbers/primes").then(
      (response)=>{
      console.log(response.data.numbers);
      setJoke(response.data.numbers);
    })
  }
  

  return (
    <div>
      <button onClick={getJoke}>Click</button>
      <h1>{joke}</h1>
    </div>
  )
}

export default App
