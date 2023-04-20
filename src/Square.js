import React from 'react'

const Square = ({ colorValue }) => {
  return (
    <section
    className='Square'
    style={{ backgroundColor: colorValue}}
    >
        <p>{colorValue ? colorValue : "Empty Value"}</p>

    </section>
  )
}
 Square.defaultProps = {
    colorvalue: "Empty Color Value"
 }
export default Square