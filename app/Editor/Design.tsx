import React, { Dispatch, SetStateAction } from 'react'

interface Props {
    selectedFont: string,
    setSelectedFont: Dispatch<SetStateAction<string>>,
    fontSize: number,
    setFontSize: Dispatch<SetStateAction<number>>,
    bgColor: string,
    setBgColor: Dispatch<SetStateAction<string>>,
    textColor: string,
    setTextColor: Dispatch<SetStateAction<string>>,
    socialSize: number,
    handleSocialSizeChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    socialColor: string,
    setSocialColor: Dispatch<SetStateAction<string>>,

}
const Design = ({ selectedFont, setSelectedFont, fontSize, socialColor, setSocialColor, setFontSize, bgColor, setBgColor, textColor, setTextColor, socialSize, handleSocialSizeChange }: Props) => {
    return (
        <div>
            <div className="md:max-w-md p-4 bg-white shadow-md rounded-lg">
                <h2 className="text-xl font-bold mb-4">General Style</h2>
                <div className='flex flex-row justify-between items-center mt-10'>
                    <h1>Font Family</h1>
                    <select
                        className="p-2 border border-gray-300 rounded-md mb-4"
                        value={selectedFont}
                        onChange={(e) => setSelectedFont(e.target.value)}
                    >
                        {['Arial', 'Times New Roman', 'Impact', 'Tahoma', 'Georgia', 'Comic Sans MS'].map((font) => (
                            <option key={font} value={font}>
                                {font}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-row justify-between items-center gap-10 mt-10'>
                    <h1>Font Size</h1>
                    <input
                        type="range"
                        min="15"
                        max="23"
                        value={fontSize}
                        onChange={(e) => setFontSize(Number(e.target.value))}
                        className="md:w-64 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                </div>
                <div className='flex flex-row justify-between mt-10 items-center'>
                    <h1>Template Color:</h1>
                    <input
                        type="color"
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                        className="md:w-16 cursor-pointer h-16 border-0"
                    />
                </div>
                <div className='flex flex-row justify-between mt-10 items-center'>
                    <h1>Text Color:</h1>
                    <input
                        type="color"
                        value={textColor}
                        onChange={(e) => setTextColor(e.target.value)}
                        className="md:w-16 cursor-pointer h-16 border-0"
                    />
                </div>
                <div className='flex flex-row justify-between mt-10 items-center'>
                    <h1>Social Icon Size:</h1>
                    <input
                        id="size-slider"
                        type="range"
                        min="20"
                        max="60"
                        value={socialSize}
                        onChange={handleSocialSizeChange}
                        className="mt-[22px] mb-[22px] md:w-52 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                </div>
                <div className='flex flex-row justify-between mt-10 items-center'>
                    <h1>Social Icon Color:</h1>
                    <input
                        type="color"
                        value={socialColor}
                        onChange={(e) => setSocialColor(e.target.value)}
                        className="md:w-16 cursor-pointer h-16 border-0"
                    />
                </div>
            </div>
        </div>
    )
}

export default Design