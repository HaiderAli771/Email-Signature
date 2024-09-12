import React, { useState } from 'react'
import Image from 'next/image'
import SignatureTemplate1 from './templates/template1';
import SignatureTemplate2 from './templates/template2';
import SignatureTemplate3 from './templates/template3';
import SignatureTemplate4 from './templates/template4'
import Preview from './preview'
interface Props {
    setName: (Name: string) => void,
    setJobType: (JobType: string) => void,
    setPosition: (Position: string) => void,
    setEmail: (Email: string) => void,
    setPhoneNumber: (PhoneNumber: string) => void,
    handleSizeChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}
const General = ({ setName, setJobType, setPhoneNumber, setEmail, setPosition, handleSizeChange }: Props) => {
    const [buttonText, setButtonText] = useState('Visit Your Website'); // Default button text
    const socialMediaPlatforms = [
        { name: 'Instagram', url: 'https://mysignature.io/', icon: '/instagram-brands-solid.svg', },
        // { name: 'Youtube', url: 'https://mysignature.io/', icon: '/youtube.png' },
        // { name: 'Tiktok', url: 'https://mysignature.io/', icon: '/tik-tok.png' },
        { name: 'Facebook', url: '', icon: '/facebook-brands-solid.svg' },
        { name: 'Twitter', url: '', icon: '/square-x-twitter-brands-solid.svg' },
        { name: 'Linkedin', url: '', icon: '/linkedin-brands-solid.svg' },
    ];
    const [links, setLinks] = useState(socialMediaPlatforms);

    const [socialSize, setSocialSize] = useState(30); // Initial size of 64x64
    const handleSocialSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSocialSize(Number(e.target.value));
    };
    const [query, setQuery] = useState('');
    const [textColor, setTextColor] = useState('#000000'); // Initial text color
    const [bgColor, setBgColor] = useState('#ffffff'); // Initial background color

    const handleSearch = () => {
        if (query.trim()) {
            window.open(`https://${query}`, '_blank');
        }
    };

    const fonts = [

        'Arial',
        'Courier New',
        'Georgia',
        'Times New Roman',
        'Verdana',
        'Trebuchet MS',
        'Lucida Console',
        'Tahoma',
        'Impact',
        'Palatino Linotype',
        'Gill Sans',
        'Comic Sans MS',
    ];
    const [selectedFont, setSelectedFont] = useState('Arial');

    const [selectedTemplate, setSelectedTemplate] = useState(null);

    const [fontSize, setFontSize] = useState(13);


    const handleTemplateSelect = (template: any) => {
        setSelectedTemplate(template);
    };
    const handleImageClick = () => {
        if (inputValue) {
            window.location.href = inputValue;
        }
    };

    const handleInputChange = (e: { target: { value: React.SetStateAction<string> } }) => {
        setInputValue(e.target.value);
    };
    const [inputValue, setInputValue] = useState('');

    const [position] = useState('Enter Your Position')
    const [email] = useState('Enter Your Email')
    const [website, setWebsite] = useState('Visit My Website')
    return (
        <>

            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                Name
            </label>
            <input
                onChange={e => setName(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                id="name"
                type="text"
                placeholder="Enter Your Name"
            />
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="company">
                    Company
                </label>
                <input
                    onChange={e => setJobType(e.target.value)}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    id="company"
                    type="text"
                    placeholder="Enter Your Company Name"
                />
            </div>
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="position">
                    Position
                </label>
                <input
                    onChange={e => setPosition(e.target.value)}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    id="position"
                    type="text"
                    placeholder="Enter Your Position"
                />

            </div>

            <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-700">Contacts</h2>
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="emailAddress">
                        Email address
                    </label>
                    <input
                        onChange={e => setEmail(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        id="emailAddress"
                        type="text"
                        placeholder="milacoll@example.com"
                    />
                </div>
            </div>
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="phoneNumber">
                    Phone number
                </label>
                <input
                    onChange={e => setPhoneNumber(e.target.value)}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    id="phoneNumber"
                    type="number"
                    placeholder="Your Number"
                />
            </div>
        </>
    )
}
export default General