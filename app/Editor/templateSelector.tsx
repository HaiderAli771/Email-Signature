import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SignatureTemplate1 from './templates/template1';
import SignatureTemplate2 from './templates/template2';
import SignatureTemplate3 from './templates/template3';
import SignatureTemplate4 from './templates/template4';
import SignatureTemplate5 from './templates/template5';
import SignatureTemplate6 from './templates/template6';
import SignatureTemplate7 from './templates/template7';
import SignatureTemplate8 from './templates/template8';
import SignatureTemplate9 from './templates/template9';
import SignatureTemplate10 from './templates/template10';
import { ILinks } from './types';

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
    displayText: string;
    nameText: string;
    selectedFont: string;
    fontSize: number;
    textColor: string;
    bgColor: string;
    socialSize: number;
    socialColor: string;
    nameColor: string;
}

const TemplateSelector = ({
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
    handleRemoveImage,
    handleFileChange,
    nameColor,
}: Props) => {
    const router = useRouter();
    const profileImageSrc = typeof profileImage === 'string' ? profileImage : '';

    const handleTemplateSelection = (template: string) => {
        handleTemplateClick(template);
        router.push(`/Editor/Editorpage?template=${template}`);
        ;
    };
    const BannerImage = '/hero.jpg';
    const [showZoom, setShowZoom] = useState(true)


    return (
        <div>
            <div className="bg-white p-4 border rounded-md shadow-md">
                <h2 className="text-lg font-semibold mb-4">Preview and Customize</h2>

                <div className="flex flex-wrap gap-5 justify-center bg-gray-50 p-4 rounded-md mt-4">
                    <div
                        onClick={() => handleTemplateSelection('Template1')}
                        className={`cursor-pointer p-2 max-w-[520px] transition-all h-fit duration-300 rounded-md ${selectedTemplate === 'Template1' ? 'ring-4 ring-purple-500' : 'ring-1 ring-gray-200'}`}
                    >
                        <SignatureTemplate1
                            bannerLink=''
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
                            nameColor={nameColor}
                            bannerImg={BannerImage}
                            dribbleLink='hello' behanceLink={'hello'}
                            googleBussinessLink='hello'
                            retailButtonSize={100}
                            socialButtonPadding={10}
                            retailButtonPadding={10}
                            signatureColor='#000000'
                            signatureSize={20}
                            signature='Best Regards,'
                            zoomLink='sdsdsddsd'
                            zoomText='Meet me on Zoom'
                            meetingButtonSize={15}
                            meetingButtonPadding={10}
                            googleMeetLink='hellllo'
                            googleMeetText='Meet me on Google Meet'
                            showZoom={showZoom}
                            microsoftTeamLink='hello'
                            microsoftTeamText='Meet me on Microsoft Team'
                            meetingTextColor='#000000'
                            meetingBorderRadius={20}
                            selectedOption={'asd'}
                            calenderLink='/'
                            linkedinLink='hello' amazonLink='hello' appStoreLink='hello' ebayLink='hello' instagramLink={'hello'} patreonLink={'hello'} facebookLink={'hello'} youtubeLink={'hello'} twitterLink={'hello'} pinterestLink={'hello'} vimeoLink={'hello'} socialButtonSize={90} />
                    </div>

                    <div
                        onClick={() => handleTemplateSelection('Template2')}
                        className={`cursor-pointer p-2 transition-all duration-300 h-fit rounded-md ${selectedTemplate === 'Template2' ? 'ring-4 ring-green-500' : 'ring-1 ring-gray-200'}`}
                    >
                        <SignatureTemplate2
                            bannerLink=''
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
                            socialColor={'black'}
                            nameColor={nameColor}
                            bannerImg={BannerImage}
                            dribbleLink='' behanceLink={''}
                            googleBussinessLink='helllo'
                            retailButtonSize={100}
                            socialButtonPadding={10}
                            retailButtonPadding={10}
                            signatureColor='#000000'
                            signatureSize={20}
                            signature='Best Regards,'
                            zoomLink='sdsdsddsd'
                            zoomText='Meet me on Zoom'
                            meetingButtonSize={15}
                            meetingButtonPadding={10}
                            googleMeetLink='hellllo'
                            googleMeetText='Meet me on Google Meet'
                            showZoom={showZoom}
                            microsoftTeamLink='hello'
                            microsoftTeamText='Meet me on Microsoft Team'
                            meetingTextColor='#000000'
                            meetingBorderRadius={20}
                            selectedOption={'asd'}
                            calenderLink='/'
                            linkedinLink='' amazonLink='hello' appStoreLink='hello' ebayLink='hello' instagramLink={''} patreonLink={''} facebookLink={''} youtubeLink={''} twitterLink={''} pinterestLink={''} vimeoLink={''} socialButtonSize={0} />
                    </div>

                    <div
                        onClick={() => handleTemplateSelection('Template3')}
                        className={`cursor-pointer p-2 transition-all h-fit duration-300 rounded-md ${selectedTemplate === 'Template3' ? 'ring-4 ring-yellow-500' : 'ring-1 ring-gray-200'}`}
                    >
                        <SignatureTemplate3
                            bannerLink=''
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
                            nameColor={nameColor}
                            bannerImg={BannerImage}
                            dribbleLink='' behanceLink={''}
                            googleBussinessLink=''
                            retailButtonSize={100}
                            socialButtonPadding={10}
                            retailButtonPadding={10}
                            signatureColor='#000000'
                            signatureSize={20}
                            signature='Best Regards,'
                            zoomLink='sdsdsddsd'
                            zoomText='Meet me on Zoom'
                            meetingButtonSize={15}
                            meetingButtonPadding={10}
                            googleMeetLink=''
                            googleMeetText='Meet me on Google Meet'
                            showZoom={showZoom}
                            microsoftTeamLink=''
                            microsoftTeamText='Meet me on Microsoft Team'
                            meetingTextColor='#000000'
                            meetingBorderRadius={20}
                            selectedOption={'asd'}
                            calenderLink='/'
                            disclaimerText='Disclaimers are statements of information that help limit your legal liabilty for things such as errors and omissions, giving instructional guidance and sharing your personal opinions.'
                            disclaimerTextColor='gray'
                            disclaimerTextWidth={400}
                            disclaimerTextSize={11}
                            linkedinLink='' amazonLink='' appStoreLink='' ebayLink='' instagramLink={''} patreonLink={''} facebookLink={''} youtubeLink={''} twitterLink={''} pinterestLink={''} vimeoLink={''} socialButtonSize={90} />
                    </div>

                    <div
                        onClick={() => handleTemplateSelection('Template4')}
                        className={`cursor-pointer p-2 transition-all h-fit duration-300 rounded-md ${selectedTemplate === 'Template4' ? 'ring-4 ring-teal-500' : 'ring-1 ring-gray-200'}`}
                    >
                        <SignatureTemplate4
                            bannerLink=''
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
                            socialColor={'gray'}
                            nameColor={nameColor}
                            bannerImg={BannerImage}
                            dribbleLink='' behanceLink={''}
                            googleBussinessLink=''
                            retailButtonSize={0}
                            socialButtonPadding={0}
                            retailButtonPadding={0}
                            signatureColor='#000000'
                            signatureSize={20}
                            signature='Best Regards,'
                            zoomLink=''
                            zoomText=''
                            meetingButtonSize={0}
                            meetingButtonPadding={0}
                            googleMeetLink=''
                            googleMeetText=''
                            showZoom={showZoom}
                            microsoftTeamLink=''
                            microsoftTeamText=''
                            meetingTextColor='#000000'
                            meetingBorderRadius={0}
                            // selectedOption={'asd'}
                            calenderLink='/'
                            greenMessageText='Please consider the environment before printing this email'
                            greenTextColor='green'
                            greenFontSize={12}
                            greenTextPadding={15}
                            greenImageSize={20}
                            greenTextGap={5}
                            greenImage={'data:image/png;base64,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'}
                            linkedinLink='' amazonLink='' appStoreLink='' ebayLink='' instagramLink={''} patreonLink={''} facebookLink={''} youtubeLink={''} twitterLink={''} pinterestLink={''} vimeoLink={''} socialButtonSize={0} />
                    </div>
                    <div
                        onClick={() => handleTemplateSelection('Template5')}
                        className={`cursor-pointer p-2 transition-all h-fit duration-300 rounded-md ${selectedTemplate === 'Template5' ? 'ring-4 ring-green-500' : 'ring-1 ring-gray-200'}`}
                    >
                        <SignatureTemplate5
                            bannerLink=''
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
                            socialColor={'gray'}
                            nameColor={nameColor}
                            bannerImg={BannerImage}
                            dribbleLink='' behanceLink={''}
                            googleBussinessLink=''
                            retailButtonSize={0}
                            socialButtonPadding={0}
                            retailButtonPadding={0}
                            signatureColor='#000000'
                            signatureSize={20}
                            signature='Best Regards,'
                            zoomLink='/'
                            zoomText='Meet Me On Zoom'
                            meetingButtonSize={15}
                            meetingButtonPadding={20}
                            googleMeetLink=''
                            googleMeetText=''
                            showZoom={showZoom}
                            microsoftTeamLink=''
                            microsoftTeamText=''
                            meetingTextColor='white'
                            meetingBorderRadius={20}
                            selectedOption={'zoom'}
                            meetingBackgroundColor='#C688BAff'
                            calenderLink='/'
                            linkedinLink='' amazonLink='' appStoreLink='' ebayLink='' instagramLink={''} patreonLink={''} facebookLink={''} youtubeLink={''} twitterLink={''} pinterestLink={''} vimeoLink={''} socialButtonSize={0} />
                    </div>
                    <div
                        onClick={() => handleTemplateSelection('Template6')}
                        className={`cursor-pointer p-2 transition-all h-fit duration-300 rounded-md ${selectedTemplate === 'Template6' ? 'ring-4 ring-green-500' : 'ring-1 ring-gray-200'}`}
                    >
                        <SignatureTemplate6
                            bannerLink=''
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
                            socialColor={'gray'}
                            nameColor={nameColor}
                            bannerImg={BannerImage}
                            dribbleLink='' behanceLink={''}
                            googleBussinessLink=''
                            retailButtonSize={0}
                            socialButtonPadding={0}
                            retailButtonPadding={0}
                            signatureColor='#000000'
                            signatureSize={20}
                            signature='Best Regards,'
                            zoomLink='/'
                            zoomText='Meet Me On Zoom'
                            meetingButtonSize={15}
                            meetingButtonPadding={20}
                            googleMeetLink='/'
                            googleMeetText='Meet me on google meet'
                            showZoom={showZoom}
                            microsoftTeamLink=''
                            microsoftTeamText=''
                            meetingTextColor='white'
                            meetingBorderRadius={20}
                            selectedOption={'googleMeet'}
                            meetingBackgroundColor='#C688BAff'
                            calenderLink='/'
                            linkedinLink='' amazonLink='' appStoreLink='' ebayLink='' instagramLink={''} patreonLink={''} facebookLink={''} youtubeLink={''} twitterLink={''} pinterestLink={''} vimeoLink={''} socialButtonSize={0} />
                    </div>
                    <div
                        onClick={() => handleTemplateSelection('Template7')}
                        className={`cursor-pointer p-2 transition-all h-fit duration-300 rounded-md ${selectedTemplate === 'Template7' ? 'ring-4 ring-green-500' : 'ring-1 ring-gray-200'}`}
                    >
                        <SignatureTemplate7
                            bannerLink=''
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
                            nameColor={nameColor} bannerImg={BannerImage} />
                    </div>
                    <div
                        onClick={() => handleTemplateSelection('Template8')}
                        className={`cursor-pointer p-2 transition-all h-fit duration-300 rounded-md ${selectedTemplate === 'Template8' ? 'ring-4 ring-green-500' : 'ring-1 ring-gray-200'}`}
                    >
                        <SignatureTemplate8
                            bannerLink=''
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
                            nameColor={nameColor}
                            bannerImg={BannerImage}
                            dribbleLink='hello' behanceLink={'hello'}
                            googleBussinessLink='hello'
                            retailButtonSize={100}
                            socialButtonPadding={10}
                            retailButtonPadding={10}
                            signatureColor='#000000'
                            signatureSize={20}
                            signature='Best Regards,'
                            zoomLink='sdsdsddsd'
                            zoomText='Meet me on Zoom'
                            meetingButtonSize={15}
                            meetingButtonPadding={10}
                            googleMeetLink='hellllo'
                            googleMeetText='Meet me on Google Meet'
                            showZoom={showZoom}
                            microsoftTeamLink='hello'
                            microsoftTeamText='Meet me on Microsoft Team'
                            meetingTextColor='#000000'
                            meetingBorderRadius={20}
                            selectedOption={'asd'}
                            calenderLink='/'
                            linkedinLink='hello' amazonLink='hello' appStoreLink='hello' ebayLink='hello' instagramLink={'hello'} patreonLink={'hello'} facebookLink={'hello'} youtubeLink={'hello'} twitterLink={'hello'} pinterestLink={'hello'} vimeoLink={'hello'} socialButtonSize={90} />
                    </div>
                    <div
                        onClick={() => handleTemplateSelection('Template9')}
                        className={`cursor-pointer p-2 transition-all h-fit duration-300 rounded-md ${selectedTemplate === 'Template9' ? 'ring-4 ring-green-500' : 'ring-1 ring-gray-200'}`}
                    >
                        <SignatureTemplate9
                            bannerLink=''
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
                            socialColor={'gray'}
                            nameColor={nameColor}
                            bannerImg={BannerImage}
                            dribbleLink='' behanceLink={''}
                            googleBussinessLink=''
                            retailButtonSize={0}
                            socialButtonPadding={0}
                            retailButtonPadding={0}
                            signatureColor='#000000'
                            signatureSize={20}
                            signature='Best Regards,'
                            zoomLink='/'
                            zoomText='Meet Me On Zoom'
                            meetingButtonSize={15}
                            meetingButtonPadding={20}
                            googleMeetLink=''
                            googleMeetText=''
                            showZoom={showZoom}
                            microsoftTeamLink=''
                            microsoftTeamText=''
                            meetingTextColor='white'
                            meetingBorderRadius={20}
                            selectedOption={'zoom'}
                            meetingBackgroundColor='#C688BAff'
                            calenderLink='/'
                            linkedinLink='' amazonLink='' appStoreLink='' ebayLink='' instagramLink={''} patreonLink={''} facebookLink={''} youtubeLink={''} twitterLink={''} pinterestLink={''} vimeoLink={''} socialButtonSize={0} />
                    </div>
                    <div
                        onClick={() => handleTemplateSelection('Template10')}
                        className={`cursor-pointer p-2 transition-all h-fit duration-300 rounded-md ${selectedTemplate === 'Template10' ? 'ring-4 ring-green-500' : 'ring-1 ring-gray-200'}`}
                    >
                        <SignatureTemplate10
                            bannerLink=''
                            name={name}
                            title={jobType}
                            company={position}
                            phone={phoneNumber}
                            email={email}
                            imageSize={imageSize}
                            changeImg={'/addon.png'}
                            links={links}
                            displayText={displayText}
                            nameText={nameText}
                            selectedFont={selectedFont}
                            fontSize={fontSize}
                            textColor={'white'}
                            bgColor={'#808080'}
                            socialSize={socialSize}
                            socialColor={'gray'}
                            nameColor={nameColor}
                            bannerImg={BannerImage}
                            dribbleLink='' behanceLink={''}
                            googleBussinessLink=''
                            retailButtonSize={0}
                            socialButtonPadding={0}
                            retailButtonPadding={0}
                            signatureColor='#000000'
                            signatureSize={20}
                            signature='Best Regards,'
                            zoomLink='/'
                            zoomText='Meet Me On Zoom'
                            meetingButtonSize={15}
                            meetingButtonPadding={20}
                            googleMeetLink=''
                            googleMeetText=''
                            showZoom={showZoom}
                            microsoftTeamLink=''
                            microsoftTeamText=''
                            meetingTextColor='white'
                            meetingBorderRadius={20}
                            selectedOption={'zoom'}
                            meetingBackgroundColor='#C688BAff'
                            calenderLink='/'
                            linkedinLink='' amazonLink='' appStoreLink='' ebayLink='' instagramLink={''} patreonLink={''} facebookLink={''} youtubeLink={''} twitterLink={''} pinterestLink={''} vimeoLink={''} socialButtonSize={0} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TemplateSelector;
