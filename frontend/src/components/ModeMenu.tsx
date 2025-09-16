const types = [
  "Monochromatic",
  "Complementary",
  "Analogous",
  "Triadic",
  "Split-Complementary",
  "Square"
]

interface ModeMenuProps {
  mode: string;
  onModeChange: (newMode: string) => void;
}

const ModeMenu = ({ mode, onModeChange }: ModeMenuProps) => {

  function ChangeType() {
    const currentIndex = types.indexOf(mode);
    const newIndex = (currentIndex + 1) % types.length;
    onModeChange(types[newIndex]); 
  }

  function ChangeTypeRev() {
    const currentIndex = types.indexOf(mode);
    const newIndex = currentIndex === 0 ? types.length - 1 : currentIndex - 1;
    onModeChange(types[newIndex]);
  }


  return (
    <div className='flex justify-center'>
        <div className='w-48 h-10 border-gray-300 bg-gray-100 mr-1 mt-1.5'>{mode}</div>
        <div className='flex flex-col'>
          <button className='bg-transparent'
          onClick={() => ChangeType()}
          ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-up-icon lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg></button>
          <button className='bg-transparent'
          onClick={ChangeTypeRev}
          ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg></button>
        </div>
    </div>
  );
}

export default ModeMenu