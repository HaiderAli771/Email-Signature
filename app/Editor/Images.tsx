import React, { useState } from 'react';
import Image from 'next/image';

interface Props {
    selectedTemplate: string;
    name: string;
    jobType: string;
    phoneNumber: string;
    email: string;
    position: string;
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    profileImage: string | ArrayBuffer | null,
    handleRemoveImage: () => void,
    imageSize: number,
    handleImageSizeChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Images = ({
    handleFileChange,
    handleRemoveImage,
    profileImage,
    imageSize,
    handleImageSizeChange
}: Props) => {

    return (
        <div className="flex grid-rows-2 gap-16">
            <div className="xl:w-[400px] w-[300px] bg-white shadow-lg rounded-lg p-6">
                <div className="flex flex-col gap-7 items-center">
                    <h1 className="text-lg font-semibold text-gray-700">Image</h1>

                    {profileImage ? (
                        <>
                            <Image
                                src={profileImage as string}
                                alt="Profile"
                                width={60}
                                height={40}
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
                        onChange={handleImageSizeChange}
                        className="mt-[22px] mb-[22px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Images;