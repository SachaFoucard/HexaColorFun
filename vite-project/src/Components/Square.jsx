import React from 'react'

export default function Square({colorValue, HexValue,isDarkText}) {
  return (

        <section className='square' 
        style={{backgroundColor : colorValue,
        color : isDarkText ? "#FFF" : "#000"
        }}
        >
            <p>{colorValue ? colorValue : "Empty Value"}</p>
            <p>{HexValue ? HexValue : null}</p>
        </section>

  )
}

Square.defaultProps = {
    colorValue: "Empty Color Value"
}

