import React, { useState } from 'react';
import Image from 'next/image';
import Preview from './preview';

interface Props {
    image: any;
    handleRemoveImage: () => void;
    handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    jobType: string;
    phoneNumber: string;
    email: string;
    position: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    setJobType: React.Dispatch<React.SetStateAction<string>>;
    setPosition: React.Dispatch<React.SetStateAction<string>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
}

const Images = ({ image, handleImageUpload, handleRemoveImage, setName, setEmail, setJobType, setPhoneNumber, setPosition, name, jobType, phoneNumber, email, position }: Props) => {
    // State for selected template
    const [selectedTemplate, setSelectedTemplate] = useState<string>('Template1'); // Default template
    const [website, setWebsite] = useState('Visit My Website');

    // State for image size
    const [size, setSize] = useState<number>(60); // Default size for the image

    // Function to handle template selection
    const handleTemplateClick = (template: string) => {
        setSelectedTemplate(template); // Update the selected template
    };

    // Function to handle the slider change
    const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSize(parseInt(e.target.value)); // Update size state based on slider value
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImageSize(parseInt(e.target.value)); // Update imageSize as the slider moves
    };
    const [imageSize, setImageSize] = useState<number>(60); // State for image size

    const handleImageSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImageSize(Number(e.target.value)); // Update the image size from the slider
    };

    return (
        <div>
            <div className='flex grid-rows-2 gap-16'>
                <div className="w-[400px] bg-white shadow-lg rounded-lg p-6">
                    <div className='flex flex-col gap-7 items-center'>
                        <h1 className="text-lg font-semibold text-gray-700">Image</h1>
                        {image && (
                            <div className="">
                                <Image
                                    src={image}
                                    alt="John Doe"
                                    width={size}  // Set width based on state
                                    height={size} // Set height based on state
                                    className="rounded-full"
                                />
                            </div>
                        )}

                        {image ? (
                            <button
                                onClick={handleRemoveImage}
                                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                            >
                                Remove Image
                            </button>
                        ) : (
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none focus:border-transparent"
                            />
                        )}
                    </div>
                    <div className='flex flex-col pt-5'>
                        <h1>Image Width</h1>
                        <input
                            id="size-slider"
                            type="range"
                            min="32"
                            max="128"
                            value={imageSize}
                            onChange={handleImageSizeChange} // Update image size when slider changes
                            className="mt-[22px] mb-[22px]"
                        />
                        <input
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            id="link"
                            type="text"
                            placeholder="Link"
                        />
                    </div>
                </div>
                <div>
                    <Preview imageSize={imageSize} handleImageSizeChange={handleImageSizeChange} name={name} jobType={jobType} phoneNumber={phoneNumber} email={email} position={position} selectedTemplate={selectedTemplate} handleTemplateClick={handleTemplateClick} />
                </div>
            </div>
        </div>
    );
};

export default Images;