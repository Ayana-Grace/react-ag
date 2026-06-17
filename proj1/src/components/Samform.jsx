import React from 'react'

const Samform = () => {
  return (
    <>
    <h1>Login Form</h1>
    <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name"/>
        <br/><br/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password"/>
        <br/><br/>
        <label htmlFor="password">Confirm Password:</label>
        <input type="password" id="password" name="password"/>
        <br/><br/><br/>
        <button type="submit">Submit</button>

   </form>
    </>
  )
}

export default Samform