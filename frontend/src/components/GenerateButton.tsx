import fetchColors from "../utils/GenerateColors";
import { useEffect, useCallback } from "react";
import type { Color } from '../types/index'

interface GenerateButtonProps {
  schemeType: string;
  colors: Color[];  // Add this
  setColors: React.Dispatch<React.SetStateAction<Color[]>>;
}

const GenerateButton = ({ schemeType, colors, setColors }:GenerateButtonProps) => {
  
   const handleGenerate = useCallback(async () => {
    try {
      // Filter locked colors
      const lockedColors = colors.filter(color => color.locked);
      
      // Pass locked colors to fetchColors
      const colorData = await fetchColors({
        schemeType, 
        lockedColors: lockedColors.length > 0 ? lockedColors : undefined
      });
      
      setColors(colorData);
    } catch (error) {
      console.error("Failed to generate colors:", error);
    }
  }, [schemeType, colors, setColors]);  // Add colors to dependencies

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if(e.key === 'Enter'){
        handleGenerate();
      }
    };
    
    globalThis.addEventListener('keydown', handleKeyDown);
    return () => globalThis.removeEventListener('keydown', handleKeyDown);
  }, [handleGenerate]);

  return (
    <div className='flex justify-center mt-6'>
        <button 
        className='w-[189px] h-[36px] bg-[#FFF9F9] border-1 border-[#936666] rounded-full font-sometype font-medium text-lg'
        onClick={handleGenerate}
        >Generate</button>
    </div>
  )
}

export default GenerateButton