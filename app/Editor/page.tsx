"use client";
import React, { useState, Suspense, useEffect } from 'react';
import { ILinks } from './types';
import { useRouter } from "next/navigation";
import Editor from './templateSelector'


const Page = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('Template1');
  const [selectedFont, setSelectedFont] = useState('Courier New');
  const [fontSize, setFontSize] = useState(13);
  const [bgColor, setBgColor] = useState('#ffffff');
  const [socialColor, setSocialColor] = useState('#0011FF');
  const [nameColor, setNameColor] = useState('#0011FF');
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

  const [profileImage, setProfileImage] = useState<string | ArrayBuffer | null>(null);
  const handleRemoveImage = () => {
    setProfileImage(null);
  };
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];


    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);


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
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const router = useRouter();

  const handleTemplateClick = (template: string) => {
    setSelectedTemplate(template);
  };
  const [selectedImage, setSelectedImage] = useState<string>("/hero.jpg");

  const handleImageSelect = (image: string) => {
    setSelectedImage(image);
  }


  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Editor imageSize={imageSize}
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
          nameColor={nameColor} />
      </Suspense>
    </>
  );
}

export default Page;