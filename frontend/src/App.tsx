import { useState } from 'react'
import ModeMenu from './components/ModeMenu'
import ColorBox from './components/ColorBox'
import GenerateButton from './components/GenerateButton'
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
    <>
      <div className='flex flex-row gap-1 justify-center mt-5'>
        <ColorBox color = {colors[0]} />
        <ColorBox color = {colors[1]} />
        <ColorBox color = {colors[2]} />
        <ColorBox color = {colors[3]} />
        <ColorBox color = {colors[4]} />
      </div>
      <br />
      <ModeMenu 
        mode = {selectedSchemeType} 
        onModeChange = {setSelectedSchemeType} 
      />
      <GenerateButton schemeType = {selectedSchemeType} setColors = {setColors} />
    </>
  )
}

export default App
