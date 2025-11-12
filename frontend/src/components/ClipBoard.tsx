import { useState } from "react";
import type { Color } from "../types/index";

interface ClipBoardProps {
  ClipBoardStatus: boolean;
  colors: Color[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ClipBoard({ colors, ClipBoardStatus }: ClipBoardProps) {
  const [activeTab, setActiveTab] = useState("HEX");
  const [selectedFormat, setSelectedFormat] = useState<"rgb" | "hsl" | "hex">(
    "hex"
  );

  function copyToClipboard() {
    const colorLabels = ["Primary", "Secondary", "Accent", "Light", "Dark"];
    const textToCopy = colors
      .map(
        (color, index) =>
          `-- ${colorLabels[index]}: ${color.formats[selectedFormat]}`
      )
      .join("\n");

    navigator.clipboard.writeText(textToCopy);
  }

  const getTabPosition = () => {
    switch (activeTab) {
      case "HEX":
        return "left-[15px]";
      case "RGB":
        return "left-[60px]";
      case "HSL":
        return "left-[105px]";
      default:
        return "left-[15px]";
    }
  };

  const handleTabClick = (tab: string, format: "rgb" | "hsl" | "hex") => {
    setActiveTab(tab);
    setSelectedFormat(format);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center border-2 border-[#936666] bg-[#FFF9F9] w-[253px] h-[169px] rounded-[27px]">
        <div>
          <div className="flex flex-row gap-1 ml-[15px]">
            <button
              onClick={() => handleTabClick("HEX", "hex")}
              className="text-center text-[10px] w-[41px] h-[18px] rounded-t-[6px] border-t-2 border-l-2 border-r-2 border-[#936666] bg-[#FFFFFF] relative z-10"
            >
              HEX
            </button>
            <button
              onClick={() => handleTabClick("RGB", "rgb")}
              className="text-center text-[10px] w-[41px] h-[18px] rounded-t-[6px] border-t-2 border-l-2 border-r-2 border-[#936666] bg-[#FFFFFF] relative z-10"
            >
              RGB
            </button>
            <button
              onClick={() => handleTabClick("HSL", "hsl")}
              className="text-center text-[10px] w-[41px] h-[18px] rounded-t-[6px] border-t-2 border-l-2 border-r-2 border-[#936666] bg-[#FFFFFF] relative z-10"
            >
              HSL
            </button>
          </div>
          <div className="relative p-2 w-[218px] h-[96px] border-2 border-[#936666] rounded-[16px] bg-[#FFFFFF]">
            {/* White overlay to hide the border */}
            <div
              className={`absolute top-[-2px] ${getTabPosition()} w-[37px] h-[2px] bg-[#FFFFFF] z-20`}
            ></div>
            <p className="ml-2 text-start text-[10px] font-sometype text-black">
              -- Primary: {colors[0].formats[selectedFormat]}
            </p>
            <p className="ml-2 text-start text-[10px] font-sometype text-black">
              -- Secondary: {colors[1].formats[selectedFormat]}
            </p>
            <p className="ml-2 text-start text-[10px] font-sometype text-black">
              -- Accent: {colors[2].formats[selectedFormat]}
            </p>
            <p className="ml-2 text-start text-[10px] font-sometype text-black">
              -- Light: {colors[3].formats[selectedFormat]}
            </p>
            <p className="ml-2 text-start text-[10px] font-sometype text-black">
              -- Dark: {colors[4].formats[selectedFormat]}
            </p>
          </div>
          <div className="flex justify-end mt-3">
            <button
              onClick={copyToClipboard}
              className="relative right-0 bottom-0 w-[64px] h-[19px] text-[10px] text-center rounded-[17px] border-2 border-[#936666] bg-[#FFFFFF]"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ClipBoard;