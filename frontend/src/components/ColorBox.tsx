import React, { useState } from 'react'
import type { Color } from '../types/index'
import LockedIcon from '../public/lock.svg'
import UnLockIcon from '../public/unlock.svg'

interface ColorBoxProps {
  color?: Color;
  onToggleLock?: () => void;
}

const ColorBox = ({color, onToggleLock}: ColorBoxProps) => {
  const [isHovered, setIsHovered] = useState(false);

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
      relative cursor-pointer
      ' 
      style={{ backgroundColor: color.formats.hex }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Lock Button - only visible on hover */}
      {isHovered && (
        <button
          onClick={onToggleLock}
          className='absolute top-2 right-2 bg-white/80 rounded p-2 hover:bg-white transition-colors'
        >
          {color.locked ? (
            // Locked icon
            <LockedIcon/>
          ) : (
            // Unlocked icon
            <UnLockIcon />
          )}
        </button>
      )}
    </div>
  )
}

export default ColorBox