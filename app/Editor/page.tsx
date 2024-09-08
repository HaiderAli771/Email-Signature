"use client"
import React, { SetStateAction, useState } from 'react'
import Header from '../Header/page'
import Image from 'next/image'
// import Templates from "../Templates/page"
// import SignatureTemplate1 from './templates/template1';
// import SignatureTemplate2 from './templates/template2';
// import SignatureTemplate3 from './templates/template3';
// import SignatureTemplate4 from './templates/template4'
import Preview from "./preview"
import General from './General'
import Images from './Images'

const page = () => {
  const socialMediaPlatforms = [
    { name: 'Instagram', url: 'https://mysignature.io/', icon: '/instagram-brands-solid.svg', },
    // { name: 'Youtube', url: 'https://mysignature.io/', icon: '/youtube.png' },
    // { name: 'Tiktok', url: 'https://mysignature.io/', icon: '/tik-tok.png' },
    { name: 'Facebook', url: '', icon: '/facebook-brands-solid.svg' },
    { name: 'Twitter', url: '', icon: '/square-x-twitter-brands-solid.svg' },
    { name: 'Linkedin', url: '', icon: '/linkedin-brands-solid.svg' },
  ];
  const [selectedTemplate, setSelectedTemplate] = useState<string>();

  const [selectedFont, setSelectedFont] = useState('Arial');
  const [fontSize, setFontSize] = useState(13);
  const [bgColor, setBgColor] = useState('#ffffff'); // Initial background color
  const [textColor, setTextColor] = useState('#000000'); // Initial text color
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


  const [query, setQuery] = useState('');
  const [buttonText, setButtonText] = useState('Visit Your Website'); // Default button text

  const handleSearch = () => {
    if (query.trim()) {
      window.open(`https://${query}`, '_blank');
    }
  };
  const [name, setName] = useState('Enter Your Name')
  const [jobType, setJobType] = useState('Enter Your Company Name')
  const [position, setPosition] = useState('Enter Your Position')
  const [email, setEmail] = useState('Enter Your Email')
  const [phoneNumber, setPhoneNumber] = useState('00000000000')
  const [website, setWebsite] = useState('Visit My Website')
  const [links, setLinks] = useState(socialMediaPlatforms);
  const [size, setSize] = useState(64); // Initial size of 64x64
  const [socialSize, setSocialSize] = useState(30); // Initial size of 64x64
  const [toggle, setToggle] = useState(1)
  const handleSocialSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSocialSize(Number(e.target.value));
  };
  const handleRemImage = () => {
    setImage(null);
  }
  const handleRemoveImage = () => {
    setImage(null);
  };
  function updateToggle(id: React.SetStateAction<number>) {
    setToggle(id)
  }
  const [image, setImage] = useState<string | null>("/images.png");
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setInputValue(e.target.value);
  };

  const handleImageClick = () => {
    if (inputValue) {
      window.location.href = inputValue;
    }
  };
  const [showText, setShowText] = useState(false);

  const handleButtonClick = () => {
    setShowText(!showText);
  };
  const [selectedTemplate1, setSelectedTemplate1] = useState('Template1');

  const handleTemplateClick = (template: string) => {
    setSelectedTemplate1(template);
  };
  const [imageSize, setImageSize] = useState(100);

  // Handle slider change
  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageSize(Number(e.target.value)); // Update the image size as the slider moves
  };

  return (
    <>
      <Header />
      <div className='flex flex-row justify-center items-center mt-20 gap-[100px]'>
        <h1 className='tag' onClick={() => updateToggle(1)} >General</h1>
        <h1 className='tag' onClick={() => updateToggle(2)} >Images</h1>
        <h1 className='tag' onClick={() => updateToggle(3)} >Social</h1>
        <h1 className='tag' onClick={() => updateToggle(4)} >Addons</h1>
        <h1 className='tag' onClick={() => updateToggle(5)} >Design</h1>

      </div>

      <div className={toggle === 1 ? "flex flex-row justify-center items-center mb-10 pt-20 pl-20 pr-20 gap-32" : "content"}>
        <div className="w-[500px] bg-white shadow-lg rounded-lg p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700">General</h2>
            <div className="mt-4">
              <General setJobType={setJobType} handleSizeChange={handleSizeChange} setName={setName} setPhoneNumber={setPhoneNumber} setEmail={setEmail} setPosition={setPosition} />
            </div>
          </div>
        </div>
        {/* Preview Section */}
        <Preview name={name} jobType={jobType} phoneNumber={phoneNumber} email={email} position={position} selectedTemplate={selectedTemplate1} handleTemplateClick={handleTemplateClick} />
      </div>
      <div className={toggle === 2 ? "flex flex-row  justify-center items-start mb-10 pt-20 pl-20 pr-20" : "content"}>

        <Images image={image} name={name} email={email} phoneNumber={phoneNumber} jobType={jobType} position={position} handleImageUpload={handleImageUpload} handleRemoveImage={handleRemoveImage} />
      </div>
      <div className={toggle === 3 ? "flex flex-row gap-20  justify-center items-start mb-10 pt-20 pl-20 pr-20" : "content"}>

        <div className="max-w-md  p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-bold mb-4">Added social icons</h2>
          {links.map((platform, index) => (
            <div className="flex items-center gap-[17px]  mb-5 mt-8">
              <Image
                src={`${platform.icon}`}
                alt='alt'
                width={30}
                height={30}
              />
              <span className="flex-1">{platform.name}</span>
              <input
                value={inputValue} onChange={handleInputChange}
                type="text"
                className="flex-1 p-2 border border-gray-300 rounded"
              />


              <button
                onClick={() => setLinks(links.filter((_, i) => i !== index))}
                className="ml-2 p-1 text-red-500 hover:text-red-700"
              >
                X
              </button>
            </div>
          ))}
        </div>
        <div className="font-sans p-4 border border-gray-300 max-w-md">
          <Image
            src="/images.png"
            alt="John Doe"
            width={size}
            height={size}
            className="rounded-full"
          />
          <h1 className="text-xl font-bold">{name}</h1>
          <p className="text-gray-600">{jobType}</p>
          <p className="text-gray-600">{position}</p>
          <div className="mt-4">
            <p className="text-gray-600">Email: {email}</p>
            <p className="text-gray-600">Phone: {phoneNumber}</p>
            <p className="text-gray-600">Website: {website}</p>


          </div>
          <div className="mt-4 flex flex-row gap-5 items-center">
            {links.map((platform, index) => (
              <Image
                src={`${platform.icon}`}
                alt='alt'
                width={30}
                height={30}
                onClick={handleImageClick}
                style={{ cursor: 'pointer' }}
              />
            ))
            }
          </div>
          <div>
          </div>
        </div>
      </div>
      <div className={toggle === 4 ? "flex flex-row gap-20  justify-center items-start mb-10 pt-20 pl-20 pr-20" : "content"}>
        <div className='flex flex-row gap-10'>
          <div className='flex flex-row gap-10'>
            <div className="p-4 bg-white shadow-md rounded-lg">
              <h1 className='font-extrabold text-[30px] mb-5'>Website Link Edit</h1>
              <div>
                <p>Check out and refresh MyPage - your link-in bio and personal web space</p>
                <div className='flex flex-row gap-5 pl-5 pt-5'>
                  {/* <Image
                    src="/cancel.png"
                    alt="cancel"
                    width={30}
                    height={30}
                    className="rounded-full cursor-pointer"
                    onClick={handleRemoveImage}

                  /> */}
                  <Image
                    src="/addon.png"
                    alt="John Doe"
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
                src="/images.png"
                alt="John Doe"
                width={size}
                height={size}
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
                    alt="John Doe"
                    width={30}
                    height={30}
                    className="rounded-full"
                    onChange={handleImageClick}


                  />
                  {/* <p className="text-gray-600">Website: {website}</p> */}
                  <button
                    onClick={handleSearch}
                    className=" px-4 py-2 text-black font-bold"              >
                    {buttonText || 'Visit Your Website'}
                  </button>
                </div>

              </div>
              <div className="mt-4 flex flex-row gap-5 items-center">
                {links.map((platform, index) => (
                  <Image
                    src={`${platform.icon}`}
                    alt='alt'
                    width={30}
                    height={30}
                    onClick={handleImageClick}
                    style={{ cursor: 'pointer' }}
                  />
                ))
                }
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={toggle === 5 ? "flex flex-row gap-20  justify-center items-start mb-10 pt-20 pl-20 pr-20" : "content"}>
        <div className="max-w-md  p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-bold mb-4">General Style</h2>
          <div className='flex flex-row justify-between items-center mt-10'>
            <h1>Font Family</h1>
            <select
              className="p-2 border border-gray-300 rounded-md mb-4"
              value={selectedFont}
              onChange={(e) => setSelectedFont(e.target.value)}
            >
              {fonts.map((font) => (
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
              onChange={(e) => setFontSize(e.target.value)}
              className="w-64 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div className='flex flex-row justify-between  mt-10 items-center'>
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
            src="/images.png"
            alt="John Doe"
            width={size}
            height={size}
            className="rounded-full"
          />
          <h1 className="text-xl font-bold " style={{ fontFamily: selectedFont, fontSize: `${fontSize}px` }}>{name}</h1>
          <p className="" style={{ fontFamily: selectedFont, fontSize: `${fontSize}px` }}>{jobType}</p>
          <p className="" style={{ fontFamily: selectedFont, fontSize: `${fontSize}px` }}>{position}</p>
          <div className="mt-4 flex flex-col items-center">
            <p className="" style={{ fontFamily: selectedFont, fontSize: `${fontSize}px` }}>Email: {email}</p>
            <p className="" style={{ fontFamily: selectedFont, fontSize: `${fontSize}px` }}>Phone: {phoneNumber}</p>
            <div className='flex flex-row items-center mt-2'>
              <Image
                src="/addon.png"
                alt="John Doe"
                width={30}
                height={30}
                className="rounded-full"
                onChange={handleImageClick}


              />
              {/* <p className="text-gray-600">Website: {website}</p> */}
              <button
                onClick={handleSearch}
                className=" px-4 py-2 text-black font-bold"
                style={{ fontFamily: selectedFont, fontSize: `${fontSize}px`, color: textColor }}>
                {buttonText || 'Visit Your Website'}
              </button>
            </div>

          </div>
          <div className="mt-4 flex flex-row gap-5 items-center ">
            {/* <div className='flex flex-row gap-4' style={{ backgroundColor: bgColor1 }}> */}

            {links.map((platform, index) => (
              <Image
                className='py-5'
                src={`${platform.icon}`}
                alt='alt'
                width={socialSize}
                height={socialSize}
                onClick={handleImageClick}
                style={{
                  cursor: 'pointer',
                }}
              />
            ))
            }
          </div>

        </div>

        {/* </div> */}
      </div>
    </>
  )
}

export default page
