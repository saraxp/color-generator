import { useState } from 'react'
import ModeMenu from './components/ModeMenu'
import ColorBox from './components/ColorBox'
import GenerateButton from './components/GenerateButton'
import CopyButton from './components/CopyButton'
import ShareButton from './components/ShareButton'
import './App.css'

interface Color {
  name: string;
  formats: {
    hex: string;
    rgb: string;
    hsl: string;
  };
  locked: boolean;
}

function App() {
  const [selectedSchemeType, setSelectedSchemeType] = useState("Monochromatic");
  const [colors, setColors] = useState<Color[]>([]);

  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-center relative'>
      <div className='flex flex-col items-center w-[766px] h-[494px] bg-[#FFF9F9]'>
        
        {/* Color Boxes */}
        <div className='flex flex-row justify-center items-center mt-5'>

          {/* Color Box 0 */}
          <div className='flex flex-col justify-center items-center'>
             <ColorBox color = {colors[0]} />
             <p className='uppercase font-sometype font-medium text-[18px]'>{colors[0].formats.hex}</p>
          </div>

          {/* Color Box 1 */}
          <div className='flex flex-col justify-center items-center'>
             <ColorBox color = {colors[1]} />
             <p className='uppercase font-sometype font-medium text-[18px]'>{colors[1].formats.hex}</p>
          </div>

          {/* Color Box 2 */}
          <div className='flex flex-col justify-center items-center'>
             <ColorBox color = {colors[2]} />
             <p className='uppercase font-sometype font-medium text-[18px]'>{colors[2].formats.hex}</p>
          </div>

          {/* Color Box 3 */}
          <div className='flex flex-col justify-center items-center'>
             <ColorBox color = {colors[3]} />
             <p className='uppercase font-sometype font-medium text-[18px]'>{colors[3].formats.hex}</p>
          </div>

          {/* Color Box 4 */}
          <div className='flex flex-col justify-center items-center'>
             <ColorBox color = {colors[4]} />
             <p className='uppercase font-sometype font-medium text-[18px]'>{colors[4].formats.hex}</p>
          </div>

        </div>
        
        <div className="border-t border-1 border-[#936666]/50 w-[676px] my-6"></div>
        
        <p className='flex justify-center font-sometype font-medium text-[16px]'>Select color scheme type -</p>
        <ModeMenu 
          mode = {selectedSchemeType} 
          onModeChange = {setSelectedSchemeType} 
        />
      </div>
      <GenerateButton schemeType = {selectedSchemeType} setColors = {setColors} />
      <div className='absolute bottom-4 right-4 flex flex-row gap-3'>
        <CopyButton />
        <ShareButton />
      </div>
    </div>
  )
}

export default App
