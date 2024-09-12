import React, { useState } from 'react';
import Image from 'next/image'; // Use this only if you're using Next.js, otherwise use <img> tag.
import Preview from './preview';

const Link = () => {
    // State variables
    const [query, setQuery] = useState('');
    const [buttonText, setButtonText] = useState('');
    const [image, setImage] = useState(null);
    const [imageSize] = useState(100); // Example size for the profile image
    const [socialSize] = useState(30); // Example size for social icons
    const [name] = useState('John Doe'); // Example name
    const [jobType] = useState('Developer'); // Example job type
    const [position] = useState('Full Stack Developer'); // Example position
    const [email] = useState('john.doe@example.com'); // Example email
    const [phoneNumber] = useState('123-456-7890'); // Example phone number
    const [textColor] = useState('blue'); // Example text color

    // Example social links
    const links = [
        { name: 'Twitter', icon: '/twitter.png', url: 'https://twitter.com' },
        { name: 'LinkedIn', icon: '/linkedin.png', url: 'https://linkedin.com' },
    ];

    // Example search handler function
    const handleSearch = () => {
        console.log('Search initiated with query:', query);
    };

    return (
        <div>
            <div className='flex flex-row gap-10'>
                <div className='flex flex-row gap-10'>
                    <div className="p-4 bg-white shadow-md rounded-lg">
                        <h1 className='font-extrabold text-[30px] mb-5'>Website Link Edit</h1>
                        <div>
                            <p>Check out and refresh MyPage - your link-in bio and personal web space</p>
                            <div className='flex flex-row gap-5 pl-5 pt-5'>
                                <Image
                                    src="/addon.png"
                                    alt="addon"
                                    width={40}
                                    height={20}
                                    className="rounded-full"
                                />
                                <input
                                    type="text"
                                    className="p-2 border border-gray-300 rounded-md"
                                    placeholder="Enter Your Website URL"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className="p-2 border w-72 ml-5 mt-5 border-gray-300 rounded-md"
                                    placeholder="Enter button text"
                                    value={buttonText}
                                    onChange={(e) => setButtonText(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="font-sans flex flex-col items-center p-4 border border-gray-300 w-[430px]">
                        <Image
                            src={image || "/images.png"} // Use default image if null
                            alt="John Doe"
                            width={imageSize}
                            height={imageSize}
                            className="rounded-full"
                        />
                        <h1 className="text-xl font-bold">{name}</h1>
                        <p className="text-gray-600">{jobType}</p>
                        <p className="text-gray-600">{position}</p>
                        <div className="mt-4 flex flex-col items-center">
                            <p className="text-gray-600">Email: {email}</p>
                            <p className="text-gray-600">Phone: {phoneNumber}</p>
                            <div className='flex flex-row items-center mt-2'>
                                <Image
                                    src="/addon.png"
                                    alt="addon"
                                    width={30}
                                    height={30}
                                    className="rounded-full"
                                    onClick={() => setImage(null)} // Example action
                                />
                                <button
                                    onClick={handleSearch}
                                    className="px-4 py-2 text-black font-bold"
                                    style={{ color: textColor }}>
                                    {buttonText || 'Visit Your Website'}
                                </button>
                            </div>
                        </div>
                        <div className="mt-4 flex flex-row gap-5 items-center">
                            <Preview />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Link;