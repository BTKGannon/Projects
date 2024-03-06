import React from 'react'
import colorNames from 'colornames';

const InputBox = ({colour, setColour, setHexValue,
                    isDarkText, setIsDarkText}) => {
  return (
    <form className='inputBox' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='inputBox'>Input Box</label>
        <input
            autoFocus
            required
            id='inputBox'
            type='text'
            role='inputBox'
            placeholder='Enter a colour'
            value={colour}
            onChange={(e) => {setColour(e.target.value)
                              setHexValue(colorNames(e.target.value))}}
        />
        <button
            type="button"
            onClick={() => setIsDarkText(!isDarkText)}
        >
            Toggle Text Colour
        </button>
    </form>
  )
}

export default InputBox