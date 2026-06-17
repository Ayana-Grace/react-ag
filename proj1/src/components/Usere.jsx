import React from 'react'
const Usere=()=>{
    const[count,setCount]=React.useState(0)
    React.useEffect(()=>{
        console.log("use effect is active")
    },[count])

  return (
    <>
    <h1>UseEffect example</h1>
    <h2>Count:{count}</h2>
    <button onClick={()=> setCount(count+1)}>Add</button>
    </>
  )
}

export default Usere