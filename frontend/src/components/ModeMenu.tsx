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
    <div className='flex flex-row justify-center items-center mb-6'>
        <div className='w-48 h-10 bg-transparent font-sometype font-medium text-lg text-center mr-0.5 mt-1.5'>{mode}</div>
        <div className='flex flex-col'>
          <button className="bg-transparent" onClick={() => ChangeType()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lucide lucide-chevron-up-icon lucide-chevron-up
                w-[18px] h-[18px]
                [375px]:w-[20px] [375px]:h-[20px]
                [393px]:w-[22px] [393px]:h-[22px]
                sm:w-[24px] sm:h-[24px]
                lg:w-[26px] lg:h-[26px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2" 
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          </button>

          {/* Down Arrow */}
          <button className="bg-transparent" onClick={ChangeTypeRev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lucide lucide-chevron-down-icon lucide-chevron-down
                w-[18px] h-[18px]
                [375px]:w-[20px] [375px]:h-[20px]
                [393px]:w-[22px] [393px]:h-[22px]
                sm:w-[24px] sm:h-[24px]
                lg:w-[26px] lg:h-[26px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
    </div>
  );
}

export default ModeMenu