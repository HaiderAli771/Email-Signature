"use client";
import React, { useState } from 'react';
import Header from '../Header/page';
import Image from 'next/image';
import Preview from './preview';
import General from './General';
import Images from './Images';
import Social from './social';
import Link from './Link';

const Page = () => {
  const socialMediaPlatforms = [
    { name: 'Instagram', url: 'https://mysignature.io/', icon: '/instagram-brands-solid.svg' },
    { name: 'Facebook', url: '', icon: '/facebook-brands-solid.svg' },
    { name: 'Twitter', url: '', icon: '/square-x-twitter-brands-solid.svg' },
    { name: 'Linkedin', url: '', icon: '/linkedin-brands-solid.svg' },
  ];

  const [selectedTemplate, setSelectedTemplate] = useState<string>('Template1');
  const [selectedFont, setSelectedFont] = useState('Arial');
  const [fontSize, setFontSize] = useState(13);
  const [bgColor, setBgColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#000000');
  const [socialSize, setSocialSize] = useState(30);
  const [toggle, setToggle] = useState(1);
  const [name, setName] = useState('Enter Your Name');
  const [jobType, setJobType] = useState('Enter Your Company Name');
  const [position, setPosition] = useState('Enter Your Position');
  const [email, setEmail] = useState('Enter Your Email');
  const [phoneNumber, setPhoneNumber] = useState('00000000000');
  const [website, setWebsite] = useState('Visit My Website');
  const [image, setImage] = useState<string | null>('/images.png');
  const [inputValue, setInputValue] = useState('');
  const [buttonText, setButtonText] = useState('Visit Your Website');
  const [links, setLinks] = useState(socialMediaPlatforms);
  const [query, setQuery] = useState('');
  const [imageSize, setImageSize] = useState<number>(60); // Default size for the image

  const handleSocialSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSocialSize(Number(e.target.value));
  };

  const handleTemplateClick = (template: string) => {
    setSelectedTemplate(template);
  };
  const [profileImage, setProfileImage] = useState<string | ArrayBuffer | null>(null);
  const handleRemoveImage = () => {
    setProfileImage(null); // Remove the image
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // Update the state with the selected image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSearch = () => {
    if (inputValue.trim()) {
      window.open(`https://${inputValue}`, '_blank');
    }
  };

  return (
    <>
      <Header />
      <div className='flex flex-row justify-center items-center mt-20 gap-[100px]'>
        <h1 className='tag' onClick={() => setToggle(1)}>General</h1>
        <h1 className='tag' onClick={() => setToggle(2)}>Images</h1>
        <h1 className='tag' onClick={() => setToggle(3)}>Social</h1>
        <h1 className='tag' onClick={() => setToggle(4)}>Addons</h1>
        <h1 className='tag' onClick={() => setToggle(5)}>Design</h1>
      </div>

      <div className={toggle === 1 ? "flex flex-row justify-center items-center mb-10 pt-20 pl-20 pr-20 gap-32" : "content"}>
        <div className="w-[500px] bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700">General</h2>
          <General
            setName={setName}
            setJobType={setJobType}
            setPhoneNumber={setPhoneNumber}
            setEmail={setEmail}
            setPosition={setPosition}
            handleSizeChange={handleSocialSizeChange}
          />
        </div>
        <Preview
          imageSize={imageSize} // Pass imageSize to Preview component
          name={name}
          jobType={jobType}
          phoneNumber={phoneNumber}
          email={email}
          position={position}
          selectedTemplate={selectedTemplate}
          handleTemplateClick={handleTemplateClick}
        />
      </div>

      <div className={toggle === 2 ? "flex flex-row justify-center items-start mb-10 pt-20 pl-20 pr-20" : "content"}>
        <Images
          handleTemplateClick={handleTemplateClick}
          selectedTemplate={selectedTemplate}
          name={name}
          email={email}
          phoneNumber={phoneNumber}
          jobType={jobType}
          position={position}
          handleFileChange={handleFileChange}
          profileImage={profileImage}
          handleRemoveImage={handleRemoveImage}
        />
      </div>

      <div className={toggle === 3 ? "flex flex-row gap-20 justify-center items-start mb-10 pt-20 pl-20 pr-20" : "content"}>
        <Social handleFileChange={handleFileChange} handleRemoveImage={handleRemoveImage} profileImage={profileImage} handleTemplateClick={handleTemplateClick} selectedTemplate={selectedTemplate} name={name} links={links} jobType={jobType} position={position} email={email} phoneNumber={phoneNumber} website={website} socialSize={socialSize} />
      </div>

      <div className={toggle === 4 ? "flex flex-row gap-20 justify-center items-start mb-10 pt-20 pl-20 pr-20" : "content"}>
        <Link />
      </div>
      <div className={toggle === 5 ? "flex flex-row gap-20 justify-center items-start mb-10 pt-20 pl-20 pr-20" : "content"}>
        <div className="max-w-md p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-bold mb-4">General Style</h2>
          <div className='flex flex-row justify-between items-center mt-10'>
            <h1>Font Family</h1>
            <select
              className="p-2 border border-gray-300 rounded-md mb-4"
              value={selectedFont}
              onChange={(e) => setSelectedFont(e.target.value)}
            >
              {/* Replace with your actual fonts array */}
              {['Arial', 'Helvetica', 'Times New Roman'].map((font) => (
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
              max="30"
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-64 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div className='flex flex-row justify-between mt-10 items-center'>
            <h1>Template Color:</h1>
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              className="w-16 cursor-pointer h-16 border-0"
            />
          </div>
          <div className='flex flex-row justify-between mt-10 items-center'>
            <h1>Text Color:</h1>
            <input
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
              className="w-16 cursor-pointer h-16 border-0"
            />
          </div>
          <div className='flex flex-row justify-between mt-10 items-center'>
            <h1>Social Icon Size:</h1>
            <input
              id="size-slider"
              type="range"
              min="32"
              max="80"
              value={socialSize}
              onChange={handleSocialSizeChange}
              className="mt-[22px] mb-[22px] w-52 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
        <div className="font-sans flex flex-col items-center p-4 border border-gray-300 w-[430px]" style={{ backgroundColor: bgColor, color: textColor }}>
          <Image
            src={image || "/images.png"} // Use default image if null
            alt="John Doe"
            width={imageSize}
            height={imageSize}
            className="rounded-full"
          />
          <h1 className="text-xl font-bold" style={{ fontFamily: selectedFont, fontSize: `${fontSize}px` }}>{name}</h1>
          <p style={{ fontFamily: selectedFont, fontSize: `${fontSize}px` }}>{jobType}</p>
          <p style={{ fontFamily: selectedFont, fontSize: `${fontSize}px` }}>{position}</p>
          <div className="mt-4 flex flex-col items-center">
            <p style={{ fontFamily: selectedFont, fontSize: `${fontSize}px` }}>Email: {email}</p>
            <p style={{ fontFamily: selectedFont, fontSize: `${fontSize}px` }}>Phone: {phoneNumber}</p>
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
                style={{ fontFamily: selectedFont, fontSize: `${fontSize}px`, color: textColor }}>
                {buttonText || 'Visit Your Website'}
              </button>
            </div>
          </div>
          <div className="mt-4 flex flex-row gap-5 items-center">
            {links.map((platform, index) => (
              <Image
                key={index}
                src={platform.icon}
                alt={platform.name}
                width={socialSize}
                height={socialSize}
                onClick={() => window.open(platform.url, '_blank')}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;