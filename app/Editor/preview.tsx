import React, { useState } from 'react';
import SignatureTemplate1 from './templates/template1';
import SignatureTemplate2 from './templates/template2';
import SignatureTemplate3 from './templates/template3';
import SignatureTemplate4 from './templates/template4';

interface Props {
    name: string;
    jobType: string;
    phoneNumber: string;
    email: string;
    position: string;
    selectedTemplate?: string;
    handleTemplateClick: (template: string) => void;
    imageSize: number,
    handleImageSizeChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const Preview = ({ name, jobType, phoneNumber, email, position, selectedTemplate, handleTemplateClick, imageSize, handleImageSizeChange }: Props) => {


    return (
        <>
            <div className="bg-white p-4 border rounded-md shadow-md">
                <h2 className="text-lg font-semibold mb-4">Preview and Customize</h2>

                {/* Tab Navigation with Stylish Template Selection */}
                <div className="flex mb-4 space-x-2 justify-center">
                    <button
                        onClick={() => handleTemplateClick('Template1')}
                        className={`px-6 py-2 rounded-full transition-all duration-300 ${selectedTemplate === 'Template1'
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                    >
                        Template 1
                    </button>
                    <button
                        onClick={() => handleTemplateClick('Template2')}
                        className={`px-6 py-2 rounded-full transition-all duration-300 ${selectedTemplate === 'Template2'
                            ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                    >
                        Template 2
                    </button>
                    <button
                        onClick={() => handleTemplateClick('Template3')}
                        className={`px-6 py-2 rounded-full transition-all duration-300 ${selectedTemplate === 'Template3'
                            ? 'bg-gradient-to-r from-yellow-400 to-red-500 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                    >
                        Template 3
                    </button>
                    <button
                        onClick={() => handleTemplateClick('Template4')}
                        className={`px-6 py-2 rounded-full transition-all duration-300 ${selectedTemplate === 'Template4'
                            ? 'bg-gradient-to-r from-teal-400 to-indigo-500 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                    >
                        Template 4
                    </button>
                </div>

                {/* Section for Image Size */}


                {/* Render the selected template */}
                <div className="bg-gray-50 p-4 rounded-md">
                    {selectedTemplate === 'Template1' && (
                        <SignatureTemplate1
                            name={name}
                            title={jobType}
                            company={position}
                            phone={phoneNumber}
                            email={email}
                            imageSize={imageSize} // Pass the image size to the template
                        />
                    )}
                    {selectedTemplate === 'Template2' && (
                        <SignatureTemplate2
                            name={name}
                            title={jobType}
                            company={position}
                            phone={phoneNumber}
                            email={email}
                        // imageSize={imageSize} // Pass the image size
                        />
                    )}
                    {selectedTemplate === 'Template3' && (
                        <SignatureTemplate3
                            name={name}
                            title={jobType}
                            company={position}
                            phone={phoneNumber}
                            email={email}
                        // imageSize={imageSize} // Pass the image size
                        />
                    )}
                    {selectedTemplate === 'Template4' && (
                        <SignatureTemplate4
                            name={name}
                            title={jobType}
                            company={position}
                            phone={phoneNumber}
                            email={email}
                        // imageSize={imageSize} // Pass the image size
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default Preview;
