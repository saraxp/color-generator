import React, { useState } from 'react'
import type { Color } from '../types/index'

interface ClipBoardProps {
    ClipBoardStatus: boolean;
    colors: Color[];
}

const ClipBoard = ({colors, ClipBoardStatus}: ClipBoardProps) => {
    const [selectedFormat, setSelectedFormat] = useState<'rgb' | 'hsl' | 'hex'>('hex');

    function copyToClipboard() {
        const colorLabels = ['Primary', 'Secondary', 'Accent', 'Light', 'Dark'];
        const textToCopy = colors.map((color, index) => 
            `${colorLabels[index]}: ${color.formats[selectedFormat]}`
        ).join('\n');
        
        navigator.clipboard.writeText(textToCopy);
    }

    return (
        <div className={ClipBoardStatus ? 'visible' : 'invisible'}>
            <div>
                <button onClick={() => setSelectedFormat('rgb')}>RGB</button>
                <button onClick={() => setSelectedFormat('hsl')}>HSL</button>
                <button onClick={() => setSelectedFormat('hex')}>HEX</button>
            </div>
            <div>
                <p className='font-sometype text-black'>Primary: {colors[0].formats[selectedFormat]}</p>
                <p className='font-sometype text-black'>Secondary: {colors[1].formats[selectedFormat]}</p>
                <p className='font-sometype text-black'>Accent: {colors[2].formats[selectedFormat]}</p>
                <p className='font-sometype text-black'>Light: {colors[3].formats[selectedFormat]}</p>
                <p className='font-sometype text-black'>Dark: {colors[4].formats[selectedFormat]}</p>
            </div>
            <button onClick={copyToClipboard}>Copy</button> 
        </div>
    )
}

export default ClipBoard