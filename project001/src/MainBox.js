import React from 'react'

const MainBox = ({colour, setColour, hexValue, isDarkText}) => {

  return (
    <main className='mainBox' 
          style={{backgroundColor: colour,
                  color: isDarkText ? '#000' : '#fff'}} >
          <p>{colour ? colour : 'Empty Value'}</p>
          <p>{hexValue ? hexValue : null}</p>
    </main>  
  )
}

export default MainBox