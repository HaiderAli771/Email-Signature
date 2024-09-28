"use client";
import React, { useState, useRef } from 'react';
import Preview from './preview';
import General from './General';
import Images from './Images';
import Social from './social';
import LinkTab from './Link';
import { ILinks } from '../types';
import Design from './Design';
import { FaHome, FaImages, FaPaintBrush, FaPlus } from "react-icons/fa";
import { IoShareSocialOutline } from 'react-icons/io5';
import Link from 'next/link';


const Page = () => {
  const socialMediaPlatforms = [
    { name: 'Instagram', url: 'https://mysignature.io/', icon: '/instagram-brands-solid.svg' },
    { name: 'Facebook', url: '', icon: '/facebook-brands-solid.svg' },
    { name: 'Twitter', url: '', icon: '/square-x-twitter-brands-solid.svg' },
    { name: 'Linkedin', url: '', icon: '/linkedin-brands-solid.svg' },
  ];

  const [selectedTemplate, setSelectedTemplate] = useState<string>('Template1');
  const [selectedFont, setSelectedFont] = useState('Courier New');
  const [fontSize, setFontSize] = useState(13);
  const [bgColor, setBgColor] = useState('#ffffff');
  const [socialColor, setSocialColor] = useState('#0011FF');
  const [textColor, setTextColor] = useState('#000000');
  const [socialSize, setSocialSize] = useState(20);
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
  const [query, setQuery] = useState('');
  const [imageSize, setImageSize] = useState<number>(60);

  const [links, setLinks] = useState<ILinks>({
    instagram: 'Enter Your Instagram Profile',
    twitter: 'Enter Your Twitter Profile',
    linkedin: 'Enter Your Linkedin Profile',
    facebook: 'Enter Your Facebook Profile',
    tiktok: 'Enter Your tiktok Profile',
    reddit: 'Enter Your reddit Profile',
    pinterest: 'Enter Your Pinterest Profile',
  });

  const handleSocialSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSocialSize(Number(e.target.value));
  };

  const handleTemplateClick = (template: string) => {
    setSelectedTemplate(template);
  };
  const [profileImage, setProfileImage] = useState<string | ArrayBuffer | null>(null);
  const handleRemoveImage = () => {
    setProfileImage(null);
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSearch = () => {
    if (inputValue.trim()) {
      window.open(`https://${inputValue}`, '_blank');
    }
  };
  const handleImageSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageSize(Number(e.target.value));
  };
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [nameText, setNameText] = useState('');


  const handleAddText = () => {
    setDisplayText(nameText);
  };
  const handleDisplayText = () => {
    setDisplayText(displayText);
  };
  const [isClick, setIsClick] = useState(false)


  return (
    <>
      <div className="flex items-center pt-9 pl-28">
        <Link href='/' className="ml-2 text-black tracking-tight font-bold text-[20px]">Signature</Link>
      </div>
      <div className="w-full bg-white border-gray-200 fixed bottom-0 sm:relative sm:top-0 md:top-20 ">

        <div className="flex gap-5 xl:gap-40 md:gap-20 justify-center py-2">
          <div className="flex flex-col items-center cursor-pointer" onClick={() => setToggle(1)}>
            <FaHome className={`h-6 w-6 ${toggle === 1 ? 'text-blue-500' : 'text-gray-500'}`} />
            <span className={`text-xs ${toggle === 1 ? 'text-blue-500' : 'text-gray-500'}`}>General</span>
          </div>

          <div className="flex flex-col items-center cursor-pointer" onClick={() => setToggle(2)}>
            <FaImages className={`h-6 w-6 ${toggle === 2 ? 'text-blue-500' : 'text-gray-500'}`} />
            <span className={`text-xs ${toggle === 2 ? 'text-blue-500' : 'text-gray-500'}`}>Images</span>
          </div>

          <div className="flex flex-col items-center cursor-pointer" onClick={() => setToggle(3)}>
            <IoShareSocialOutline className={`h-6 w-6 ${toggle === 3 ? 'text-blue-500' : 'text-gray-500'}`} />
            <span className={`text-xs ${toggle === 3 ? 'text-blue-500' : 'text-gray-500'}`}>Social</span>
          </div>

          <div className="flex flex-col items-center cursor-pointer" onClick={() => setToggle(4)}>
            <FaPlus className={`h-6 w-6 ${toggle === 4 ? 'text-blue-500' : 'text-gray-500'}`} />
            <span className={`text-xs ${toggle === 4 ? 'text-blue-500' : 'text-gray-500'}`}>Add-ons</span>
          </div>

          <div className="flex flex-col items-center cursor-pointer" onClick={() => setToggle(5)}>
            <FaPaintBrush className={`h-6 w-6 ${toggle === 5 ? 'text-blue-500' : 'text-gray-500'}`} />
            <span className={`text-xs ${toggle === 5 ? 'text-blue-500' : 'text-gray-500'}`}>Design</span>
          </div>
        </div>
      </div>



      <div className="flex flex-col xl:flex-row xl:gap-10 p-0 md:p-5 sm:flex sm:flex-col sm:w-full md:gap-2 xl:justify-center mt-28">

        <div className={toggle === 1 ? "flex  flex-row justify-center gap-10" : "content"}>
          <div className="xl:w-[500px] bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-2xl font-bold  mb-5 text-gray-700">General</h1>
            <General
              setName={setName}
              setJobType={setJobType}
              setPhoneNumber={setPhoneNumber}
              setEmail={setEmail}
              setPosition={setPosition}
              handleSizeChange={handleSocialSizeChange}
            />
          </div>
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
            handleImageSizeChange={handleImageSizeChange}
            imageSize={imageSize}
          />
        </div>

        <div className={toggle === 3 ? "flex flex-row gap-20 justify-center p-2 " : "content"}>
          <Social setLinks={setLinks} handleImageSizeChange={handleImageSizeChange} imageSize={imageSize} handleFileChange={handleFileChange} handleRemoveImage={handleRemoveImage} profileImage={profileImage} handleTemplateClick={handleTemplateClick} selectedTemplate={selectedTemplate} name={name} jobType={jobType} position={position} email={email} phoneNumber={phoneNumber} website={website} socialSize={socialSize} links={links} />
        </div>

        <div className={toggle === 4 ? "flex flex-row gap-10 justify-center p-2" : "content"}>
          <LinkTab setDisplayText={setDisplayText} nameText={nameText} setNameText={setNameText} displayText={displayText} setInputText={setInputText} handleAddText={handleAddText} inputText={inputText} />
        </div>
        <div className={toggle === 5 ? "flex flex-row gap-20 justify-center items-start mb-10 p-2 md:pl-20 md:pr-20" : "content"}>

          <div className="font-sans flex flex-col items-center p-4 border border-gray-300">
            <Design socialColor={socialColor} setSocialColor={setSocialColor} selectedFont={selectedFont} setSelectedFont={setSelectedFont} fontSize={fontSize} setFontSize={setFontSize} bgColor={bgColor} setBgColor={setBgColor} textColor={textColor} setTextColor={setTextColor} socialSize={socialSize} handleSocialSizeChange={handleSocialSizeChange} />

          </div>
        </div>
        <div className="p-1 pb-20">
          <Preview
            imageSize={imageSize}
            name={name}
            jobType={jobType}
            phoneNumber={phoneNumber}
            email={email}
            position={position}
            selectedTemplate={selectedTemplate}
            handleTemplateClick={handleTemplateClick}
            links={links}
            handleFileChange={handleFileChange}
            handleRemoveImage={handleRemoveImage}
            profileImage={profileImage}
            handleLinkChange={() => { }}
            handleDeleteLink={() => { }}
            displayText={displayText}
            nameText={nameText}
            selectedFont={selectedFont}
            fontSize={fontSize}
            textColor={textColor}
            bgColor={bgColor}
            socialSize={socialSize}
            socialColor={socialColor}

          />
        </div>
      </div >
    </>
  );
}

export default Page;