import React from 'react'

const Counter = () => {
    const[count,setCount]=React.useState(0)

    const increment=()=>{if(count<10 )setCount(count+1)}

    const decrement=()=>{if(count>0)setCount(count-1)}

    const res=()=>{setCount(0)}

    
  return (
   <>
   <h1>COUNT APP</h1>
   <h2>Count:{count}</h2>
   <button onClick={increment}>inc</button>
   <button onClick={decrement}>dec</button>
   <button onClick={res}>res</button>
   
    </>
  )
}

export default Counter