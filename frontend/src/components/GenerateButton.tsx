import fetchColors from "../utils/GenerateColors";

interface Color {
  name: string;
  formats: {
    hex: string;
    rgb: string;
    hsl: string;
  };
  locked: boolean;
}

interface GenerateButtonProps {
  schemeType: string;
  setColors: React.Dispatch<React.SetStateAction<Color[]>>;
}

const GenerateButton = ({ schemeType, setColors }:GenerateButtonProps) => {
  
  const handleGenerate = async () => {
    try {
      const colorData = await fetchColors({schemeType});
      setColors(colorData);
    } catch (error) {
      console.error("Failed to generate colors:", error);
    }
  };

  return (
    <div className='flex justify-center mt-5'>
        <button 
        className='bg-blue-300 border-1 border-solid border-blue-950'
        onClick={handleGenerate}
        >Generate</button>
    </div>
  )
}

export default GenerateButton