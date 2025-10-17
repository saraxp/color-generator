import React from 'react'
import type { Color } from '../types/index'


interface ColorBoxProps {
  color?: Color; 
}

const ColorBox = ({color}: ColorBoxProps) => {

  if (!color || !color.formats?.hex) {
    return <div className='
      w-[200px] h-[75px] 
      [375px]:w-[225px] [375px]:h-[82px] 
      [393px]:w-[260px] [393px]:h-[87px]
      [430px]:w-[280px] [430px]:h-[95px]
      sm:w-[471px] sm:h-[114px]       
      lg:w-[146px] lg:h-[318px]   
      border border-[#936666]/50 bg-white'
      ></div>
  }

  return (
    <div 
      className='
      w-[200px] h-[75px] 
      [375px]:w-[225px] [375px]:h-[82px] 
      [393px]:w-[260px] [393px]:h-[87px]
      [430px]:w-[280px] [430px]:h-[95px]
      sm:w-[471px] sm:h-[114px]  
      lg:w-[146px] lg:h-[318px]   
      ' 
      style={{ backgroundColor: color.formats.hex }}
    >
    </div>
  )
}

export default ColorBox