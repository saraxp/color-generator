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
    <div className='flex justify-center mt-6'>
        <button 
        className='w-[189px] h-[36px] bg-[#FFF9F9] border-1 border-[#936666] rounded-full font-sometype font-medium text-lg'
        onClick={handleGenerate}
        >Generate</button>
    </div>
  )
}

export default GenerateButton