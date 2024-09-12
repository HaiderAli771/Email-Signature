import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Preview from './preview';

interface Platform {
    name: string;
    icon: string;
    url: string;
}

const initialSocialMediaPlatforms: Platform[] = [
    { name: 'Instagram', url: 'https://mysignature.io/', icon: '/instagram-brands-solid.svg' },
    { name: 'Facebook', url: '', icon: '/facebook-brands-solid.svg' },
    { name: 'Twitter', url: '', icon: '/square-x-twitter-brands-solid.svg' },
    { name: 'Linkedin', url: '', icon: '/linkedin-brands-solid.svg' },
];

interface Props {
    name: string;
    jobType: string;
    position: string;
    email: string;
    phoneNumber: string;
    website: string;
    socialSize: number;
    selectedTemplate: string;
    handleTemplateClick: (template: string) => void;
    profileImage: string | ArrayBuffer | null;
    handleRemoveImage: () => void;
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Social = ({ name, jobType, position, email, phoneNumber, website, socialSize, selectedTemplate, profileImage, handleFileChange, handleRemoveImage, handleTemplateClick }: Props) => {
    const [socialMediaLinks, setSocialMediaLinks] = useState<Platform[]>(initialSocialMediaPlatforms);
    const [imageSize, setImageSize] = useState<number>(100);

    // Handle input change for social media URLs
    const handleInputChange = (index: number, value: string) => {
        const updatedLinks = [...socialMediaLinks];
        updatedLinks[index].url = value; // Update the specific platform URL
        setSocialMediaLinks(updatedLinks); // Update state with the new URLs
    };

    // Handle removing a social media link
    const handleRemoveLink = (index: number) => {
        const updatedLinks = [...socialMediaLinks];
        updatedLinks.splice(index, 1); // Remove the platform
        setSocialMediaLinks(updatedLinks);
    };

    return (
        <div>
            <div className="max-w-md p-4 bg-white shadow-md rounded-lg">
                <h2 className="text-xl font-bold mb-4">Added Social Icons</h2>
                {socialMediaLinks.map((platform, index) => (
                    <div key={index} className="flex items-center gap-[17px] mb-5 mt-8">
                        <Image src={platform.icon} alt={platform.name} width={30} height={30} />
                        <span className="flex-1">{platform.name}</span>
                        <input
                            value={platform.url}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                            type="text"
                            className="flex-1 p-2 border border-gray-300 rounded"
                        />
                        <button
                            onClick={() => handleRemoveLink(index)}
                            className="ml-2 p-1 text-red-500 hover:text-red-700"
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>

            {/* User Profile Section */}
            <Preview
                imageSize={imageSize}
                name={name}
                jobType={jobType}
                phoneNumber={phoneNumber}
                email={email}
                position={position}
                selectedTemplate={selectedTemplate} // Pass the selected template from localStorage
                handleTemplateClick={handleTemplateClick}
                profileImage={profileImage}
                handleFileChange={handleFileChange}
                handleRemoveImage={handleRemoveImage}
            />
        </div>
    );
};

export default Social;
