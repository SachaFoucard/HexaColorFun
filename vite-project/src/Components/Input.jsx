import React from 'react'
import colorNames from 'colornames'

export default function Input({ colorValue, setColorValue, setHexValue,isDarkText,setisDarkText }) {
    return (
        <>
        <form onSubmit={(e) => e.preventDefault()}>
            <label>Add color name:</label>
            <input
                type="text"
                autoFocus
                placeholder='enter a color name'
                required
                value={colorValue}
                onChange={(e) => {
                    setColorValue(e.target.value);
                    setHexValue(colorNames(e.target.value))
                }}
            >
            </input>
        </form>
        <button onClick={()=>setisDarkText(!isDarkText)}>Toggle Text Color</button>
        </>
    )
}
