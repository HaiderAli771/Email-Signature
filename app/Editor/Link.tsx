import React, { useState } from 'react';
import Image from 'next/image'; // Use this only if you're using Next.js, otherwise use <img> tag.
const imageUrl = '/addon.png';
interface Props {
    inputText: string,
    setInputText: React.Dispatch<React.SetStateAction<string>>,
    displayText: string,
    handleAddText: () => void
    nameText: string
    setNameText: React.Dispatch<React.SetStateAction<string>>,
    setDisplayText: React.Dispatch<React.SetStateAction<string>>,


}

const Link = ({ inputText, nameText, setNameText, setDisplayText, handleAddText, displayText }: Props) => {
    // State variables
    const [query, setQuery] = useState('');
    const [buttonText, setButtonText] = useState('');
    const [image, setImage] = useState(null);
    const [imageSize] = useState(100);
    const [socialSize] = useState(30);
    const [name] = useState('John Doe');
    const [jobType] = useState('Developer');
    const [position] = useState('Full Stack Developer');
    const [email] = useState('john.doe@example.com');
    const [phoneNumber] = useState('123-456-7890');
    const [textColor] = useState('blue');

    const links = [
        { name: 'Twitter', icon: '/twitter.png', url: 'https://twitter.com' },
        { name: 'LinkedIn', icon: '/linkedin.png', url: 'https://linkedin.com' },
    ];

    const handleSearch = () => {
        console.log('Search initiated with query:', query);
    };

    return (
        <div>
            <div className='flex flex-row gap-5'>
                <div className="p-4 pt-10 pb-10 bg-white shadow-md rounded-lg">
                    <h1 className='font-extrabold text-[20px] mb-5'>Website Link Edit</h1>
                    <div>
                        <p>Please Write In Both Input To See Link On Template</p>
                        <div className='md:flex md:flex-row xl:flex xl:flex-row sm:flex sm:flex-col sm:items-center gap-5 pl-5 pt-5'>
                            <Image
                                src="/addon.png"
                                alt="addon"
                                width={40}
                                height={10}
                                className="rounded-full mb-[10px] w-0 sm:w-[40px]"
                            />
                            <input
                                type="text"
                                value={nameText}
                                onChange={(e) => setNameText(e.target.value)}
                                placeholder="Type Name"
                                className="w-full max-w-md px-4 py-2 mb-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <input
                                type="text"
                                value={displayText}
                                onChange={(e) => setDisplayText(e.target.value)}
                                placeholder="Type Url"
                                className="w-full max-w-md px-4 py-2 mb-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Link;