import React, { useState } from 'react';
import Image from 'next/image';
import Preview from './preview';

interface Props {
    selectedTemplate: string;
    handleTemplateClick: (template: string) => void;
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
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    profileImage: string | ArrayBuffer | null,
    handleRemoveImage: () => void,
}

const Images = ({
    selectedTemplate,
    handleTemplateClick,
    setName,
    setEmail,
    setJobType,
    setPhoneNumber,
    setPosition,
    name,
    jobType,
    phoneNumber,
    email,
    position,
    handleFileChange,
    handleRemoveImage,
    profileImage
}: Props) => {
    // State for image size
    const [imageSize, setImageSize] = useState<number>(60); // Default size for the image

    // State to store the selected image
    // No default profile image

    // Function to handle image upload


    // Function to remove the selected image


    // Function to handle the image size change
    const handleImageSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImageSize(Number(e.target.value)); // Update the image size from the slider
    };

    return (
        <div>
            <div className="flex grid-rows-2 gap-16">
                <div className="w-[400px] bg-white shadow-lg rounded-lg p-6">
                    <div className="flex flex-col gap-7 items-center">
                        <h1 className="text-lg font-semibold text-gray-700">Image</h1>

                        {/* Conditionally render the image if profileImage exists */}
                        {profileImage ? (
                            <>
                                <Image
                                    src={profileImage as string}
                                    alt="Profile"
                                    width={imageSize}
                                    height={imageSize}
                                    className="rounded-full"
                                />

                                <button
                                    onClick={handleRemoveImage}
                                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none mt-4"
                                >
                                    Remove Profile Image
                                </button>
                            </>
                        ) : (
                            // Display file input if no image is selected
                            <>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none focus:border-transparent"
                                />
                            </>
                        )}
                    </div>

                    <div className="flex flex-col pt-5">
                        <h1>Image Size</h1>
                        <input
                            id="size-slider"
                            type="range"
                            min="32"
                            max="128"
                            value={imageSize}
                            onChange={handleImageSizeChange} // Update image size when slider changes
                            className="mt-[22px] mb-[22px]"
                        />
                    </div>
                </div>

                {/* Pass the selected image to the Preview component */}
                <div>
                    <Preview
                        imageSize={imageSize} // Pass the image size to Preview
                        name={name}
                        jobType={jobType}
                        phoneNumber={phoneNumber}
                        email={email}
                        position={position}
                        selectedTemplate={selectedTemplate}
                        handleTemplateClick={handleTemplateClick}
                        profileImage={profileImage} // Pass the selected image
                        handleFileChange={handleFileChange}
                        handleRemoveImage={handleRemoveImage}
                    />
                </div>
            </div>
        </div>
    );
};

export default Images;