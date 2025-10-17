import { useState } from "react";
import ModeMenu from "./components/ModeMenu";
import ColorBox from "./components/ColorBox";
import GenerateButton from "./components/GenerateButton";
import ClipBoardButton from "./components/ClipBoardButton";
import ClipBoard from "./components/ClipBoard";
import ShareButton from "./components/ShareButton";
import type { Color } from "./types/index";
import "./App.css";

function App() {
  const [selectedSchemeType, setSelectedSchemeType] = useState("Monochromatic");
  const [colors, setColors] = useState<Color[]>([
    { name: "", formats: { hex: "", rgb: "", hsl: "" }, locked: false },
    { name: "", formats: { hex: "", rgb: "", hsl: "" }, locked: false },
    { name: "", formats: { hex: "", rgb: "", hsl: "" }, locked: false },
    { name: "", formats: { hex: "", rgb: "", hsl: "" }, locked: false },
    { name: "", formats: { hex: "", rgb: "", hsl: "" }, locked: false },
  ]);
  const [isClipboardOpen, setIsClipboardOpen] = useState(false);
  const [activeColorIndex, setActiveColorIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white relative p-4 sm:p-6 lg:p-10">

      {/* Main Card */}
      <div
        className="
          flex flex-col items-center justify-start
          [393px]:w-[235px] [430px]:w-[296px] sm:w-[538px] lg:w-[766px]
          h-auto bg-[#FFF9F9] rounded-2xl shadow-sm
        "
      >

        {/* Color Boxes */}
        <div
          className="
            flex flex-col items-center justify-center
            lg:flex-row
            mt-5
          "
        >
          {colors.map((c, i) => (
            <div
              key={i}
              className="
                flex flex-col items-center justify-center
                gap-2 lg:gap-2
              "
            >
              <div 
                className="relative cursor-pointer lg:cursor-default"
                onClick={() => setActiveColorIndex(activeColorIndex === i ? null : i)}
              >
                <ColorBox color={c} />
                <div
                  className={`
                    absolute inset-0 bg-black/20 
                    flex items-center justify-center
                    transition-opacity duration-200
                    lg:hidden
                    ${activeColorIndex === i ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                  `}
                >
                  <p
                    className="
                      uppercase font-sometype font-medium
                      text-[14px] [375px]:text-[15px] [393px]:text-[16px]
                      sm:text-[17px]
                      text-white
                    "
                  >
                    {c?.formats?.hex}
                  </p>
                </div>
              </div>
              <p
                className="
                  hidden lg:block
                  uppercase font-sometype font-medium
                  text-[18px]
                "
              >
                {c?.formats?.hex}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#936666]/50 w-[80%] my-4 sm:my-6"></div>

        {/* Mode Selector */}
        <p
          className="
            font-sometype font-medium text-[13px]
            [375px]:text-[14px] [393px]:text-[15px]
            sm:text-[16px] mb-2
          "
        >
          Select color scheme type —
        </p>
        <ModeMenu mode={selectedSchemeType} onModeChange={setSelectedSchemeType} />
      </div>

      {/* Generate Button */}
      <GenerateButton schemeType={selectedSchemeType} setColors={setColors} />

      {/* Clipboard + Share Buttons */}
      <ClipBoard colors={colors} ClipBoardStatus={isClipboardOpen} />
      <div className="fixed bottom-4 right-4 flex flex-row gap-4">
        <ClipBoardButton
          ClipBoardStatus={isClipboardOpen}
          ChangeClipBoardStatus={setIsClipboardOpen}
        />
        <ShareButton />
      </div>
    </div>
  );
}

export default App;