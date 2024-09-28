import React, { useState } from 'react';
import SignatureTemplate1 from './templates/template1';
import SignatureTemplate2 from './templates/template2';
import SignatureTemplate3 from './templates/template3';
import SignatureTemplate4 from './templates/template4';
import { ILinks } from '../types';

interface Props {
    imageSize: number;
    name: string;
    jobType: string;
    phoneNumber: string;
    email: string;
    position: string;
    selectedTemplate: string | null;
    handleTemplateClick: (template: string) => void;
    handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    profileImage: string | ArrayBuffer | null;
    handleRemoveImage: () => void;
    links: ILinks;
    handleLinkChange: (platform: string, value: string) => void;
    handleDeleteLink: (platform: string) => void;
    displayText: string,
    nameText: string,
    selectedFont: string,
    fontSize: number,
    textColor: string,
    bgColor: string,
    socialSize: number,
    socialColor: string,
}

const Preview = ({
    imageSize,
    name,
    jobType,
    phoneNumber,
    email,
    position,
    selectedTemplate,
    handleTemplateClick,
    profileImage,
    links,
    displayText,
    nameText,
    selectedFont,
    fontSize,
    textColor,
    bgColor,
    socialSize,
    socialColor,


}: Props) => {
    const profileImageSrc = typeof profileImage === 'string' ? profileImage : '';

    return (
        <div className="bg-white p-4 border rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-4">Preview and Customize</h2>

            <div className="flex mb-4 space-x-2 justify-center">
                <button
                    onClick={() => handleTemplateClick('Template1')}
                    className={`md:px-6 px-1 py-3 md:py-2 rounded-full transition-all duration-300 ${selectedTemplate === 'Template1'
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300 text-sm'
                        }`}
                >
                    Template 1
                </button>
                <button
                    onClick={() => handleTemplateClick('Template2')}
                    className={`md:px-6 px-1 py-3 md:py-2 rounded-full transition-all duration-300 ${selectedTemplate === 'Template2'
                        ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white  text-sm'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300  text-sm'
                        }`}
                >
                    Template 2
                </button>
                <button
                    onClick={() => handleTemplateClick('Template3')}
                    className={`md:px-6 px-1 py-3 md:py-2 rounded-full transition-all duration-300 ${selectedTemplate === 'Template3'
                        ? 'bg-gradient-to-r from-yellow-400 to-red-500 text-white text-sm'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300 text-sm'
                        }`}
                >
                    Template 3
                </button>
                <button
                    onClick={() => handleTemplateClick('Template4')}
                    className={`md:px-6 px-1 py-3 md:py-2 rounded-full transition-all duration-300 ${selectedTemplate === 'Template4'
                        ? 'bg-gradient-to-r from-teal-400 to-indigo-500 text-white text-sm'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300 text-sm'
                        }`}
                >
                    Template 4
                </button>
            </div>

            <div className="bg-gray-50 p-4 rounded-md mt-4">
                {selectedTemplate === 'Template1' && (
                    <SignatureTemplate1
                        name={name}
                        title={jobType}
                        company={position}
                        phone={phoneNumber}
                        email={email}
                        imageSize={imageSize}
                        changeImg={profileImageSrc}
                        links={links}
                        displayText={displayText}
                        nameText={nameText}
                        selectedFont={selectedFont}
                        fontSize={fontSize}
                        textColor={textColor}
                        bgColor={bgColor}
                        socialSize={socialSize}
                        socialColor={socialColor}
                    />
                )}
                {selectedTemplate === 'Template2' && (
                    <SignatureTemplate2
                        name={name}
                        title={jobType}
                        company={position}
                        phone={phoneNumber}
                        email={email}
                        imageSize={imageSize}
                        changeImg={profileImageSrc}
                        links={links}
                        displayText={displayText}
                        nameText={nameText}
                        selectedFont={selectedFont}
                        fontSize={fontSize}
                        textColor={textColor}
                        bgColor={bgColor}
                        socialSize={socialSize}
                        socialColor={socialColor}

                    />
                )}
                {selectedTemplate === 'Template3' && (
                    <SignatureTemplate3
                        name={name}
                        title={jobType}
                        company={position}
                        phone={phoneNumber}
                        email={email}
                        imageSize={imageSize}
                        changeImg={profileImageSrc}
                        links={links}
                        displayText={displayText}
                        nameText={nameText}
                        selectedFont={selectedFont}
                        fontSize={fontSize}
                        textColor={textColor}
                        bgColor={bgColor}
                        socialSize={socialSize}
                        socialColor={socialColor}
                    />
                )}
                {selectedTemplate === 'Template4' && (
                    <SignatureTemplate4
                        name={name}
                        title={jobType}
                        company={position}
                        phone={phoneNumber}
                        email={email}
                        imageSize={imageSize}
                        changeImg={profileImageSrc}
                        links={links}
                        displayText={displayText}
                        nameText={nameText}
                        selectedFont={selectedFont}
                        fontSize={fontSize}
                        textColor={textColor}
                        socialSize={socialSize}
                        bgColor={bgColor}
                        socialColor={socialColor}
                    />
                )}
            </div>
        </div>
    );
};

export default Preview;









