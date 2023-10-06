import Axios from "axios";
import React, { useEffect, useState } from 'react'

const App = () => {
  const [data,setdata] = useState("");

  useEffect(()=>{
    Axios.get("http://20.244.56.144/numbers/primes")
    .then((response)=>{
     setdata(JSON.stringify(response.data))
    })
  },[])

  

  return (
    <div>
      <h1>{data}</h1>
    </div>
  )
}

export default App
