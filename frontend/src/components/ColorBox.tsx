import React from 'react'

interface Color {
  name: string;
  formats: {
    hex: string;
    rgb: string;
    hsl: string;
  };
  locked: boolean;
}

interface ColorBoxProps {
  color?: Color; 
}

const ColorBox = ({color}: ColorBoxProps) => {
  if (!color) {
    return <div className='w-20 h-20 border-2 border-solid border-gray-300'></div>
  }

  return (
    <div 
      className='w-20 h-20 border-2 border-solid border-black' 
      style={{ backgroundColor: color.formats.hex }}
    >
    </div>
  )
}

export default ColorBox