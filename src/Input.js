import React from 'react'

const Input = ({ colorvalue, setColorValue }) => {
  return (
    <form onSubmit={(e)=> e.preventDefault()}>
        <label>Add Color Name:</label>
        <input 
        autoFocustype='text'
        placeholder='Add color name'
        requiredvalue={colorvalue}
        onChange={(e) => setColorValue(e.target.value)}
        />

    </form>
    
  )
}

export default Input