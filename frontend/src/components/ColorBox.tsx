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
    return <div className='w-[146px] h-[318px] border-1 border-[#936666]/50'></div>
  }

  return (
    <div 
      className='w-[146px] h-[318px]' 
      style={{ backgroundColor: color.formats.hex }}
    >
    </div>
  )
}

export default ColorBox