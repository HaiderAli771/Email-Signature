import React, { Dispatch, SetStateAction, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
interface Props {
    setInputText: React.Dispatch<React.SetStateAction<string>>,
    displayText: string,
    nameText: string,
    setNameText: React.Dispatch<React.SetStateAction<string>>,
    setDisplayText: React.Dispatch<React.SetStateAction<string>>,
    dribbleLink: string
    setDribbleLink: React.Dispatch<React.SetStateAction<string>>,
    behanceLink: string
    setBehanceLink: React.Dispatch<React.SetStateAction<string>>,
    linkedinLink: string
    setLinkedinLink: React.Dispatch<React.SetStateAction<string>>,
    instagramLink: string,
    setInstagramLink: React.Dispatch<React.SetStateAction<string>>,
    youtubeLink: string,
    setYoutubeLink: React.Dispatch<React.SetStateAction<string>>,
    twitterLink: string,
    setTwitterLink: React.Dispatch<React.SetStateAction<string>>,
    patreonLink: string,
    setPatreonLink: React.Dispatch<React.SetStateAction<string>>,
    facebookLink: string,
    setFacebookLink: React.Dispatch<React.SetStateAction<string>>,
    pinterestLink: string,
    setPinterestLink: React.Dispatch<React.SetStateAction<string>>,
    socialButtonSize: number,
    handleSocialButtonSizeChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    vimeoLink: string,
    setVimeoLink: React.Dispatch<React.SetStateAction<string>>,
    selectedImage: string,
    handleImageSelect: (image: string) => void;
    setSocialButtonSize: Dispatch<SetStateAction<number>>;
    amazonLink: string,
    setAmazonLink: React.Dispatch<React.SetStateAction<string>>,
    appStoreLink: string,
    setAppStoreLink: React.Dispatch<React.SetStateAction<string>>,
    ebayLink: string,
    setEbayLink: React.Dispatch<React.SetStateAction<string>>,
    googleBussinessLink: string,
    setGoogleBussinessLink: React.Dispatch<React.SetStateAction<string>>,
    retailButtonSize: number,
    setRetailButtonSize: Dispatch<SetStateAction<number>>;
    openSocialSection: string | null;
    toggleSocialSection: (section: string) => void;
    openRetailSection: string | null;
    toggleRetailSection: (section: string) => void;
    socialButtonPadding: number,
    setSocialButtonPadding: Dispatch<SetStateAction<number>>
    retailButtonPadding: number,
    setRetailButtonPadding: Dispatch<SetStateAction<number>>,
    setSignature: React.Dispatch<SetStateAction<string>>,
    signature: string | undefined,
    openSignatureSection: string | null;
    toggleSignatureSection: (section: string) => void;
    signatureSize: number;
    setSignatureSize: Dispatch<SetStateAction<number>>;
    signatureColor: string,
    setSignatureColor: Dispatch<SetStateAction<string>>;
    showImage: boolean,
    handleImageClick: () => void
    openMeetingSection: string | null;
    toggleMeetingSection: (section: string) => void;
    zoomLink: string,
    setZoomLink: React.Dispatch<React.SetStateAction<string>>,
    zoomText: string,
    setZoomText: React.Dispatch<React.SetStateAction<string>>,
    meetingButtonSize: number,
    setMeetingButtonSize: Dispatch<SetStateAction<number>>
    meetingButtonPadding: number,
    setMeetingButtonPadding: Dispatch<SetStateAction<number>>,
    socialColor: string,
    googleMeetLink: string,
    setGoogleMeetLink: React.Dispatch<React.SetStateAction<string>>,
    googleMeetText: string,
    setGoogleMeetText: React.Dispatch<React.SetStateAction<string>>,
    showZoom: boolean,
    setShowZoom: React.Dispatch<React.SetStateAction<boolean>>,
    showGoogleMeet: boolean,
    setShowGoogleMeet: React.Dispatch<React.SetStateAction<boolean>>,
    handleZoomClick: () => void,
    handleGoogleMeetClick: () => void,
    handleSkypeClick: () => void,
    selectedOption: string | null,
    skypeLink: string,
    setSkypeLink: React.Dispatch<React.SetStateAction<string>>,
    skypeText: string,
    setSkypeText: React.Dispatch<React.SetStateAction<string>>,
    handleMicrosoftTeamClick: () => void,
    microsoftTeamLink: string,
    setMicrosoftTeamText: React.Dispatch<React.SetStateAction<string>>,
    microsoftTeamText: string,
    setMicrosoftTeamLink: React.Dispatch<React.SetStateAction<string>>,
    meetingTextColor: string,
    setMeetingTextColor: Dispatch<SetStateAction<string>>,
    meetingBorderRadius: number,
    setMeetingBorderRadius: React.Dispatch<React.SetStateAction<number>>,
    imageOptions: string[],
    handleGreenSelect: (image: React.SetStateAction<string | null>) => void,
    greenImage: string | null,
    openGreenMessageSection: string | null,
    toggleGreenMessageSection: (section: string) => void,
    greenMessageText: string,
    setGreenMessageText: React.Dispatch<React.SetStateAction<string>>,
    meetingBackgroundColor: string,
    setMeetingBackgroundColor: Dispatch<SetStateAction<string>>,
    greenTextGap: number,
    setGreenTextGap: Dispatch<SetStateAction<number>>,
    greenImageSize: number,
    setGreenImageSize: Dispatch<SetStateAction<number>>,
    greenFontSize: number,
    setGreenFontSize: Dispatch<SetStateAction<number>>,
    greenTextPadding: number,
    setGreenTextPadding: Dispatch<SetStateAction<number>>,
    openCalenderSection: string | null,
    toggleCalenderSection: (section: string) => void,
    calenderImage: string | null,
    calenderImageOptions: string[],
    handleCalenderSelect: (image: React.SetStateAction<string | null>) => void,
    calenderText: string,
    setCalenderText: React.Dispatch<React.SetStateAction<string>>,
    calenderTextGap: number,
    setCalenderTextGap: React.Dispatch<React.SetStateAction<number>>,
    calenderImageSize: number,
    setCalenderImageSize: React.Dispatch<React.SetStateAction<number>>,
    calenderTextPadding: number,
    setCalenderTextPadding: React.Dispatch<React.SetStateAction<number>>,
    calenderTextSize: number,
    setCalenderTextSize: React.Dispatch<React.SetStateAction<number>>,
    greenTextColor: string,
    setGreenTextColor: React.Dispatch<React.SetStateAction<string>>,
    calenderTextColor: string,
    setCalenderTextColor: React.Dispatch<React.SetStateAction<string>>,
    calenderLink: string,
    setCalenderLink: React.Dispatch<React.SetStateAction<string>>,
    ctaText: string,
    setCtaText: React.Dispatch<React.SetStateAction<string>>,
    ctaTextColor: string,
    setCtaTextColor: React.Dispatch<React.SetStateAction<string>>,
    ctaTextGap: number,
    setCtaTextGap: Dispatch<SetStateAction<number>>,
    openDisclaimerSection: string | null,
    toggleDisclaimerSection: (section: string) => void,
    disclaimerText: string,
    setDisclaimerText: React.Dispatch<React.SetStateAction<string>>,
    disclaimerTextWidth: number,
    setDisclaimerTextWidth: React.Dispatch<React.SetStateAction<number>>,
    disclaimerTextSize: number,
    setDisclaimerTextSize: React.Dispatch<React.SetStateAction<number>>,
    disclaimerTextColor: string,
    setDisclaimerTextColor: React.Dispatch<React.SetStateAction<string>>,
    disclaimerTextPadding: number,
    setDisclaimerTextPadding: React.Dispatch<React.SetStateAction<number>>,
}

const Links = ({ nameText, showZoom, greenTextGap, disclaimerTextPadding, setDisclaimerTextPadding, disclaimerTextSize, disclaimerTextColor, setDisclaimerTextColor, setDisclaimerTextSize, disclaimerTextWidth, setDisclaimerTextWidth, openDisclaimerSection, toggleDisclaimerSection, disclaimerText, setDisclaimerText, ctaText, ctaTextGap, setCtaTextGap, setCtaText, ctaTextColor, setCtaTextColor, greenTextColor, calenderLink, setCalenderLink, setGreenTextColor, calenderTextColor, setCalenderTextColor, calenderImage, calenderTextGap, setCalenderTextGap, calenderImageSize, setCalenderImageSize, calenderTextPadding, setCalenderTextPadding, calenderTextSize, setCalenderTextSize, calenderText, setCalenderText, handleCalenderSelect, calenderImageOptions, openCalenderSection, toggleCalenderSection, greenTextPadding, setGreenTextPadding, greenFontSize, setGreenFontSize, greenImageSize, setGreenImageSize, setGreenTextGap, showGoogleMeet, meetingBackgroundColor, setMeetingBackgroundColor, greenMessageText, setGreenMessageText, openGreenMessageSection, toggleGreenMessageSection, greenImage, handleGreenSelect, imageOptions, meetingBorderRadius, setMeetingBorderRadius, setMeetingTextColor, meetingTextColor, setMicrosoftTeamText, microsoftTeamText, setMicrosoftTeamLink, microsoftTeamLink, handleMicrosoftTeamClick, setSkypeText, skypeText, setSkypeLink, skypeLink, handleSkypeClick, selectedOption, handleGoogleMeetClick, handleZoomClick, setShowGoogleMeet, setShowZoom, zoomText, setZoomText, setGoogleMeetLink, googleMeetLink, setGoogleMeetText, googleMeetText, socialColor, setMeetingButtonPadding, meetingButtonPadding, meetingButtonSize, setMeetingButtonSize, dribbleLink, showImage, zoomLink, setZoomLink, toggleMeetingSection, openMeetingSection, handleImageClick, setSignature, signatureColor, setSignatureColor, signatureSize, setSignatureSize, openSignatureSection, toggleSignatureSection, signature, retailButtonPadding, setRetailButtonPadding, openRetailSection, socialButtonPadding, setSocialButtonPadding, toggleRetailSection, openSocialSection, toggleSocialSection, retailButtonSize, setRetailButtonSize, ebayLink, googleBussinessLink, setGoogleBussinessLink, setEbayLink, appStoreLink, setAppStoreLink, amazonLink, setAmazonLink, selectedImage, setSocialButtonSize, handleImageSelect, vimeoLink, setVimeoLink, pinterestLink, socialButtonSize, handleSocialButtonSizeChange, setPinterestLink, instagramLink, setInstagramLink, setFacebookLink, facebookLink, youtubeLink, setYoutubeLink, twitterLink, setTwitterLink, patreonLink, setPatreonLink, behanceLink, setBehanceLink, linkedinLink, setLinkedinLink, setDribbleLink, setNameText, setDisplayText, displayText }: Props) => {
    return (
        <div>
            <div className='flex flex-row gap-5'>
                <div className="p-4 pt-10 pb-10 bg-white shadow-md rounded-lg">
                    <h1 className='font-extrabold text-[20px] mb-5'>Website Link Edit</h1>
                    <div>
                        <p>Please Write In Both Input To See Link On Template</p>
                        <div className='md:flex md:flex-row xl:flex xl:flex-row sm:flex sm:flex-col sm:items-center gap-5 pt-5'>
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
                        <div className="w-full mt-2">
                            <div className="bg-white border border-gray-200 rounded-lg mb-5 shadow hover:shadow-lg transition-shadow">
                                <button
                                    onClick={() => toggleSocialSection('social')}
                                    className={`flex justify-between items-center w-full p-4 text-lg font-semibold text-left rounded-t-lg focus:outline-none transition-colors 
                                ${openSocialSection === 'social' ? 'bg-gray-200 text-gray-800' : 'bg-gray-100 text-gray-600'}`}
                                >
                                    <span>Social Links</span>
                                    <span className={`transform transition-transform ${openSocialSection === 'social' ? 'rotate-180' : ''}`}>
                                        ▼
                                    </span>
                                </button>
                                {openSocialSection === 'social' && (
                                    <>
                                        <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                            <Link href={`https://www.dribbble.com/${(dribbleLink)}`} target='_blank' className='min-h-9 pointer-events-none' style={{ margin: 'auto' }}>
                                                <Image
                                                    width={140}
                                                    height={30}
                                                    className='md:w-auto w-36 pointer-events-none'
                                                    alt='dribble'
                                                    src='data:image/png;base64,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'>
                                                </Image>
                                            </Link>
                                            <input
                                                type="text"
                                                value={dribbleLink}
                                                onChange={(e) => setDribbleLink(e.target.value)}
                                                placeholder="Type Dribble Profile Name"
                                                className="w-full max-w-md px-4 py-2  text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                            < Link href={`https://www.behance.net/${(behanceLink)}`} target='_blank' className='min-h-9 pointer-events-none' style={{ margin: 'auto' }}>
                                                <Image
                                                    width={162}
                                                    height={47}
                                                    className='md:w-auto w-36 pointer-events-none'
                                                    alt='Behance'
                                                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABECAAAAACaZectAAAAAXNSR0IArs4c6QAAAyFJREFUeNrtm8Gx4yAMQFWCulAjFEEfKoMiqIEmaIMeaECbKHyBv8nuzd5J9C5mGGTzLCycZALfB8UvggAgyhcRXdiFXdiFXdiFXdiFXdiFXdiFXdiFXdiFt8AKhZj734e2TxE2MMuLVo3PFDaGcQKjf7YwipI/WJjKk5wCKPXTlzSGeYon+eOLlgnXo3ArOeX6W7iXlMoQt2Ep1y5H6gg2eskWOGNTLu024QZPiiiFQKG0CndGbcQ2QhLBIGggwwP+icYkgxJAwWh+/Sc21GuFLarojLpOJoBBzYZWOnYWhAU2YZ59L7cIkyRKIzD4lgxXsul0gglSt/oGRnxG4BiAVu94HWaPfYCVJCN2wlcKY1Bouf1R+2NK0eTm73VDpw8PqpbqqMIaGziiqSRthVwSWSnQFnIam0O9aR/Os3pRsyZUkSU5cfR1m+oQDXrUWFuzJGNcnEuHdZw9F9q8Q9iqUTSRkZ1oq38tbo2fiJIPwmWGgh7VaLVDW+52ueuFLTk4Jmh2KLJuWTTak0qrMC2h0A/DO3NklnooHpr164RDV1oJI4tVHeNgpGndssJabEviSAAmbCZjKbdxkJV0ukS4ukqbCLQCJ7rAYQ0O4c4IxhSO6+lb04McYPgN3iFcQU02wm0rXE0Xw3vhaj7/l7A9dKwzpLSyzXDHVzzn2vMijLsM97Nw4JXL37Qsw7Ft9omN8HgQ67lKH4Vt91ISR44t2zDjjgwzvExoTUmrD7bCa+1K7zMstFZh1HMf72l90K4XbgxKFV5m2FBP/C9hep9hWwnzxozxZdmb83XCSArOUtvsHaRn7d5nWA+hz7VB+wx3/DHu9l6StcFdpCcN7bd9xdM0DwoiKCw74TFp4sQECu0zLBUUJJhLKh4vUeQmYWrnbSPKXlgCGK8k7jOs+ZyQfQCdZLlFGEORQUbrZNkLr5MObX38T8JSpx73015MRS4SzivHQtlzJEQKqYsytmOlpAdVRTgQBa7WV/hBkVOMjkQKqYnRUiBAisV/anFhF3ZhF3ZhF3ZhF3ZhF3ZhF3ZhF3ZhF3bhrxGm+EXQ9/0h/g8ugN/SnXr52wAAAABJRU5ErkJggg=='>
                                                </Image>
                                            </Link>
                                            <input
                                                type="text"
                                                value={behanceLink}
                                                onChange={(e) => setBehanceLink(e.target.value)}
                                                placeholder="Type Behance Profile Name"
                                                className="w-full max-w-md px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                            <Link href={`https://www.linkedin.com/in/${(linkedinLink)}`} target='_blank' className='min-h-9 pointer-events-none' style={{ margin: 'auto' }}>
                                                <Image
                                                    width={162}
                                                    height={47}
                                                    className='md:w-auto w-36 pointer-events-none'
                                                    alt='Linkedin'
                                                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABEBAMAAABNIKXCAAAAAXNSR0IArs4c6QAAAB5QTFRFA3Ox////4O72t9fpjsHdfbfYWqTMSJrHM47AFn64gIk4RAAAAmdJREFUeNrt2bFv2kAUBvCvIRhu6+McaLY4S8NmCyktW0mbziaVo46BNFayUZaKjarq0M1qVSX8t/W7k0WARqLKAyvVfZM5fPfT8xlxZ6O0qLSUZPColFw42MEOdrCDHbwlWGdYzHBL8AGW4m0JfoPl/O9wLAGn6SWZvFTRvHUvTaMHTh+aisd6+kgY2CWTDJV5awvoP3B6heE6UVsI1kB1bZj7NOVgb104NnBZl3pfCn6teuvDGDRGUjAF9A8wMgjBnPXnmCMFJ8kZnSZn+vrusoBPkyQifYNbMwl6gu8BbMUqSWJcJR/rJ4fHj4V5yCkqXM3Awj6gAp0BqAdEZlJ/3b+5ImoOiCgUgT2AWwwc5lCOcHaIjgBALcKa8vgisIkycCMDIh71Bxi6AMfAcQHbZCIwM4gYPuKv2lx6F4g0gLsJFismOuTRReABj9NjeMRmzD194HMTfNRdgrvo80cBWPGIBj4HakRThhrAs/0cJ9JLcIYdGZjPewH0czgDvnKrms1mwM4BGKLpwhxr0zuUgKtETWDQAifiWm0qORzwSLZieXi3gDHiiudw+DfYB6ricAJUGa594YyLS71ZmOe4P2WKIZPn926uWAauvcvzdqXifgj8tAZdEbWM0YVcxTbeKrwH1KgNfKNXGHOtuL3GNmDKgJ4PExXQCBxxuLo6xxRyUwyOV6wq7e94sxXzgbIbNNUr/hZjsYpTm09mqX7Oq3s/TXt2QZ/mR+RPUD+hPPoGv4P36dDAnU6ID51jwOt04k1tYRpPbe9U/m6x/I25/KMI99THwQ52sIMd/ITg0l5cl/am/g8ucobijCa9AgAAAABJRU5ErkJggg=='>
                                                </Image>
                                            </Link>
                                            <input
                                                type="text"
                                                value={linkedinLink}
                                                onChange={(e) => setLinkedinLink(e.target.value)}
                                                placeholder="Type Linkedin Profile Name"
                                                className="w-full max-w-md px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                            <Link href={`https://www.instagram.com/${(instagramLink)}`} target='_blank' className='min-h-9 pointer-events-none' style={{ margin: 'auto' }}>
                                                <Image
                                                    width={162}
                                                    height={47}
                                                    className='md:w-auto w-36 pointer-events-none'
                                                    alt='Instagram'
                                                    src='data:image/png;base64,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'>
                                                </Image>
                                            </Link>
                                            <input
                                                type="text"
                                                value={instagramLink}
                                                onChange={(e) => setInstagramLink(e.target.value)}
                                                placeholder="Type Instagram Profile Name"
                                                className="w-full max-w-md px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>

                                        <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                            <Link href={`https://www.patreon.com/${(patreonLink)}`} target='_blank' className='min-h-9 pointer-events-none' style={{ margin: 'auto' }}>
                                                <Image
                                                    width={162}
                                                    height={47}
                                                    alt='Patreon'
                                                    className='md:w-auto w-36 pointer-events-none'
                                                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABEBAMAAABNIKXCAAAAAXNSR0IArs4c6QAAACFQTFRF/0JN/////+7v/93f/8jM/7K3/6ar/4SL/3Z+/11m/0tWM/BDBQAAAnxJREFUeNrt2b1v00AYBvAH4saxtzffZcsAlTrFI0w2qorElqGdE1pOwNTAENhasaRbIgYaJqdFVOpfyd29dlAcS+a8eOg9UiLlvn725WyfZFQWb1ZJFnCpklxY2MIWtrCFLWxhC1v4scFC5n1ESY7FhEs5qvxUNXhNOl2hmxPn+fXDzdmm4zkRdYT4bxgq/mfiLOCQSgydiS5S+UIqz7g16RxwRTq4PyDaB8xgeAGptAE3H/ajLNyO0woeHNMyMG5JpQf4g1wYtSz8Fpy9FL4zhf+Ij9BVPPCIZL7OL+HP5yMN18UHwON6/0SGZJoxcH8ie/pBAjdM4SXRGNAnGgK4Ip0hGunf/kRXRAxTkh7gDnTPZQIjMof7yYleIkZtF9bMZBseckkHcFJ4aQ53eZQm8An1PLgNTLfhMTziY3VTeK803AEO4BXDXLyXtPN58AZ8c7jHU92HJ+1gB+YjY3i1Wt1wv6fpehzowZ0FJsZwyNwQ9SYwzYFfAdHW5dQE1qQirYDhELdm8O+jN2BljJp01lnYOTqO4VER3IdrBKvEuGNjLXEnC+s4Cfwgw/1qmaluAS9NYZ7IFjBlMAceUcHicuTn2hj+kdwTIj6DDMwNCi4nhw4BI/h+NjtLZ221+gWMMrD7Ta/AghuIQ13AdFVzQnCusqu6FauuBbdM6S9Kwhfg1LKwGj7IeUj85IfEBg5LwDyUL5dsjPoOvA8sCx6LCu6Xgzs8ySG8HbgF1PM3AkD0D26Vg/u8XA6BKAvTGH6Qv/X5Timsvg1gIUa02ckNeMOmjBfinHROxUT9ElHBZu8d6WZ2X21hC1vYwha2sIUtXA1c2Yvryt7U/wVFTM1TAtL4XQAAAABJRU5ErkJggg=='>
                                                </Image>
                                            </Link>
                                            <input
                                                type="text"
                                                value={patreonLink}
                                                onChange={(e) => setPatreonLink(e.target.value)}
                                                placeholder="Type Linkedin Profile Name"
                                                className="w-full max-w-md px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                            <Link href={`https://www.twitter.com/${(twitterLink)}`} target='_blank' className='min-h-9 pointer-events-none' style={{ margin: 'auto' }}>
                                                <Image
                                                    width={162}
                                                    height={47}
                                                    alt='Twitter'
                                                    className='md:w-auto w-36 pointer-events-none'
                                                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPMAAABHBAMAAAAgg2xvAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAACFQTFRFR3BMAAAAAAAA////5eXlvLy8i4uLampqQ0NDICAgAQEBF4lYFwAAAAN0Uk5TAL/fj0e57AAAAYVJREFUeNrt2jFugzAUBuC0J+gRql7hQQgzE1nZWJEilRWpAytbVlCrMgeI/1PWptCXE/yWKj/pSd4+9GMLG/ngsZ7ePNXL4dl8e6nx9fDci5dKAx3oQAc60IFm0TFcdbLXEQOLltbRs+xVmoxG5/i4vGP3onESGh2jsd3/PUjFo6WdbO+JX2ch0qnJ5IxCXCVomHSETuJtXtd37rquZ5F20ZVFpE8oJEWhK4tHR2MvMW5uMAiXlnL5fcs5CjadWPKESlcWg9bEI9wSNFxaE6+NcGlNHAOfdlPbtsm4tCZeGqHSmrjthk1r4pMPWsq7yNlkPugjKtudH3oSuU4+6Bomk9w2nY7xtW7RGj6do3BptxOfHmc5a+JMOtnmd4yOTdfLtg9uZzJ9RL++b02cRpcrGGviJFrPWa0mzqH1nJWvm+KMSEfjvA0w2O6JdIpKJ7ptIt0uj8eQBAWLfvxURvi8XDDQ6NpkOgaAhUWvx1tN3FUR/psFOtCBDnSg/z3t8cKAx2sSP69jT+r5aInHAAAAAElFTkSuQmCC'>
                                                </Image>
                                            </Link>
                                            <input
                                                type="text"
                                                value={twitterLink}
                                                onChange={(e) => setTwitterLink(e.target.value)}
                                                placeholder="Type Linkedin Profile Name"
                                                className="w-full max-w-md px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                            <Link href={`https://www.pinterest.com/${(pinterestLink)}/`} target='_blank' className='min-h-9 pointer-events-none' style={{ margin: 'auto' }}>
                                                <Image
                                                    width={162}
                                                    height={47}
                                                    alt='Twitter'
                                                    className='md:w-auto w-36 pointer-events-none'
                                                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABEBAMAAABNIKXCAAAAAXNSR0IArs4c6QAAAC1QTFRF5gAj//////L0/d/k+8rS+bfB96az9ZGg83yP8Wp/71hv7kxl7TxX6yxJ6Rk5I1tw8QAABSFJREFUeNrtmd1rW3UYxz+2TZslOQefk6TNXjoaUGGwjR4dCIqjcfUNYSSCzBulxTHc2KRBZ6doiVtxIgiJKEzdoPWFDWXQ7kJRvMjQoVeSbVcyLckEd1P9G+R5OCfS3TSnCvEiz0Xz68n55fO8fZ/fIaFr5n7RFWuSkK7YQg/cA/fAPXAP/B+A7/54xf11Xv6F3XP2rxsvRQY/idmt/Ia5I02A9yKCHySwPzbK9ZYAcPxI4GHaVtsgeBvJp7wn4FokcAWced97vMGGu6/CtIgU2RQFPAJOySJvwpsb4qaJ68tm8COAi+0MPwSxDYFz3NSXDJQ7B3tN4qHjTRy9Erm5R7FMebDYOXgElsP1DExLphFf69kz363nyZ2U7BUudw7eDnnJrlzR9W51eQJKt92wHngcP4h4uXNwUTM9hW3dCi1ZgPLaGxzpDJyJlOoq/eqqVSkH/dKAwlqpbJJ1U207RiI1V52rCmTRdjIgdVK33TC4fnMZcAsUOgc3WZZtFrGBY7KfS2t6C/rWl9PlsBs6B0NNdzAdRuztW/N+Fq6uB/Yw/U+QkggRB2A/rPHkZF7krsmCd/hCSeTQEbjytC+SOXHmedX65MOSfVtXkn7hw5cNe/jLpuvL8KEFkocOdgxusCyj4Ih1NX0jlvUGA3OQ8ocxq9m5x0mLKtvALYlk68APIt4cwO9SBMDpGLxAS4dsPChSa5tmPQ0JgOXNmJXTDYCU9fgMqBKqABRkFwCub/+T6Bg8xZDWccCKBItjkG+flP2jmPn7AevAOglQP7dgdlN1/xuwWAdgsGPwGG5+BFomWSjbvNBAf3oDYtnZJVInXtEpfnwOWh6QOlgnKVX44CgMpuG6TvnWY6/D+dnpKLO6vCUYOU3wbV6MquseDKmMY6J6u6Rp6M9awSdIDEPMDhjdr3mzTilEOY+XKG2HmvlAQgw0HnRYLJDxFG5eMtCX00J7U8RHTYB14jnbmz2TlzGQKOAd5MexiPfCQBtkEu8PZNzQ2IehNQoDmuVBq4g0GczBJj/olmQksDwiU4oQ7dxa1o62qnZ5RpkWUNq82QW1MVhMYxY33fdlgKRWVjdFAtsW3IK8CG4+F8pYjKnVLWkN4gcPNMEvQiEAJ48/ugRl7Wrck2KbooIbgNuwMWCgNNwhYopWdYXSISZVzfAMP57DTBtxJ6ATxdNN0cAepAAN20DBU8mduiySsia3GH1parG9e0OhO5rjOdDKZ2E5IjgL1xsAn9ixb7GWg5lfIW5N/tVH37zlm6JCEQ6++u3pgnjvfuodBVytTDka2Io50sB9Pzz2J0yRM7psEtOLQTD74WoADjzYrB96v5bfirTj8yhg2+Lty5uqsaHh2v1DYiF6EDy/tp+8h8PhOI5jfylYZWZiUcBW18C0iDlUkSbe3QreCeqOVlNdVEuDY5Fj72wFfxx8r9mKAp7Aaa/B2bMAQ+aDM1mHxJ560o5E7xi0XazD95ZjOyL34mh9PnuWchTwVKh8o5kNWMShXZsBVpu4FVKhs3plBRLgXngHBjXdkJIo4IpxwpsgBS27DEmlO34g5Ovt4dTWk1/BrGaa42YkcJXL4dL8nsVG9y6gVsRUZlq9JXXaLj4X6DjbACtNFkj4EcHT7XX64uqp9IlZ/QDv3Oq8ZC7eOKXr136+MS9y4PQ/dx5ZWf26oK1+duXP81r5B1Z+KUg0sNOlL1+qsS6BK7UugY/luwS+r/eVYg/cA/fAPfD/Bty1H6679kv932DGYfnlri+SAAAAAElFTkSuQmCC'>
                                                </Image>
                                            </Link>
                                            <input
                                                type="text"
                                                value={pinterestLink}
                                                onChange={(e) => setPinterestLink(e.target.value)}
                                                placeholder="Type Linkedin Profile Name"
                                                className="w-full max-w-md px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                            <Link href={`https://www.youtube.com/@${(youtubeLink)}`} target='_blank' className='min-h-9 pointer-events-none' style={{ margin: 'auto' }}>
                                                <Image
                                                    width={162}
                                                    height={47}
                                                    alt='Youtube'
                                                    className='md:w-auto w-36 pointer-events-none'
                                                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABECAMAAACI0EjDAAAAAXNSR0IArs4c6QAAAEJQTFRFKCgonZ2dXl5eg4OD0NDQTExM8O/v/wAA/////1hYrKysdHR0OTk55OTkv7+/+vj4/5OT/x8f/zk5/29v/7S0/9jYrmBFaQAAA5ZJREFUeNrtm9mSqyAQQFEQWmRx/f9fvRCawlheJ0xFk0w4D6MsY/WxRdAyRHwZRAztFzE44Ra+iLYIF+EiXISLcBEuwkW4CBfhIlyETxFe5r6f2nYcx8EhEr7oatt26vt5+SPCth/EYwy9hadTUYe9UHgZxOMMSwzTE8JklYPB/5HVHRu5mjj4dcJ2EDkMGG5HHCxFfCTckDv4a4V7kUePGSaOCjzK7Sn4GOFB5DHADU0cXdr7GOFF5LKgRcyrJA75421JEQf12JcKzyKXGW7QECfuaPiJJnm9VLgXSO4gNsRh0KSBjxGeRC4T3LDEQeP2c4TbHaV2FAe0q0BrABYzDayiHZUWPJZ5AEAzB18Jc+bQvrvHQhTWVUcZeOKhKn2G8J5bD0drrxHSxKTChlgAXpMbSgLgaajjfC2TcOhPYwWLwhVJ85ztSIBeJgx8OhaOThq6YMYbEpGxsXlc2NdiGWvQ+OnCw66wYxmPJmKPuqmokBga0nv7Y3OFEzTeDtWtWfGrhD3zcCCMLpSHPFuvqjT65V/SioWeDSZY8dBRPl34YOIB24s9AJHeyfjoULCL29wMp3NEACweQmPHa4QRPh0Ic+/q46dpaW1RNEcYG4B4dPhXiuX6WuH9oXw3tfpwzcqLeH4nrEKFIY4Ky81lwgdXNUQoCXD0MjFqmz8tpQr5SuF5EAfChpDoVd8J85jhfGGDowPL6jLhg5kJIlYRDG4jrH8lXK+EOymlQuGrpiU+Hc7DaYXAThBGLhTGwXssXMWY9oXrlwnnLy3n4XBpiaDWCRmuKXLJ01KPg3ef9hxhrDDxLo1cIoy6GcLPu0szFH6zFwBb4f2FR/3LhQd2qLqOyvd4xbMVzl5adjvCloQdHYRDQ/0uL/G2wmbz8KAx01BvhQ2eCqvWwhobFDbUmHH6dGEucuF7wjw843H0w3RJTclWmIWerCZr4caYJqa+w7F8zuMhjCKPEfaEwZshyqKfp1EbYa5IoE7CCYNHRfJeAJxzTc/7wry5CxokFlizEQYaXVbCdYenZ3PyDDxXGDvn0MK+MOgYMwZJ44uMrTAP17CGJglTS7HSYysVDsXgDGE7ZfhOFlZY7eCAaCMrk2JkruT9XBeLWx1bJIstaWOkgYg1Uhp92hcAyzSKRxin5e9848GXee77fnK0ayaHq5/nhZePWopwES7CRbgIF+EiXISLcBEuwkX4w2i/8AfT3/aT+H/3ntKh9Ec6igAAAABJRU5ErkJggg=='>
                                                </Image>
                                            </Link>
                                            <input
                                                type="text"
                                                value={youtubeLink}
                                                onChange={(e) => setYoutubeLink(e.target.value)}
                                                placeholder="Type Linkedin Profile Name"
                                                className="w-full max-w-md px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                            <Link href={`https://www.facebook.com/${(facebookLink)}`} target='_blank' className='min-h-9 pointer-events-none' style={{ margin: 'auto' }}>
                                                <Image
                                                    width={162}
                                                    height={47}
                                                    alt='Facebook'
                                                    className='md:w-auto w-36 pointer-events-none'
                                                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABEBAMAAABNIKXCAAAAAXNSR0IArs4c6QAAACRQTFRFGHfy////6PL/zuL9ttX8nMX6hbj5aKb3WJ32R5P2MIX0IHzzuXtF8AAAAzNJREFUeNrtmc9PE1EQx79a+vs0u22xeGFbUAMXFhNj5FKIcm5jAvFGJeKvC2hJ1VMxxNR6aRW9eFlI/cFyaakRxH/Oee9tm2DSxDxiVpP9Jm2nM6/vM9M3O02z8E2Jqi9yECVftB6AA3AADsABOAAH4D8DTzbcnaFBY+l5e2gwdb9R1genOkB4aNQERoYGx4ANfXABQMQPsAN/Kk4BOK74A45apAtO6oPTwHnSBuM/BGd8AtcbQKy+TeaLk22zWuV9Ug8PfmxaZCy7+xUFTjf278okHhx8XSWha42TV7Z3xuba2qoGGFJhKgKoAF0ya2C16DFY7wQ43ARQJjJk5C0RXRFGzFIV89OeNvhbBqyEAE8DgjMKoaTF4J8qNZqCXGST4UhrT4FXgHltcGgGSl1vU3uFEWy2THiyqaaMFmWVEZdgs4MYaYMPa8D7xQ6D00Dy3tJrcrg000FIgL/fcoByiiObj0TtBXYtsqskzjgLHOoOkC5RB3GiAptiH+UNERURMRln0xSwOyr623B4Yc1ztUTFRaCkDzbkIY6xOS77iNIynRnEGHykrjlBEbnAchCVK86x64lIWQesEKrAC2zOqFbJMK9arUlwWGY3clGmxHFbuVQuz4Ae6VesxtcomwXAJmEqxU1GKvA4UJLgBQnmQIjB4vT/BjhxClw+DR5hMGteEzzsqx6Aw79VPNt39RjcAHbPcMamBGdVc20o8GGOZZnwOikkzlg1VweRQXNVwG/O1NVRWU13DOgNLieWKcaXTCkrR2MTCfHgceldTjXA1gdTE3g64bCZARK388uGmo2L8wxGO18DtjgSX7gOhGkF2JloAiUBngZaZwAXBiOzAyFrncmugy0B9lrIwWBESyUsMbnSQET/jNX4TQqzCKHSlJdIHxwjmgMg51hKJddTPxJNJC39io0mgDabaleuVNUXEs0lPC+JlKtNRDdkwbYCz/FqLXC9Lj6XcXCUd91doksfgc82pd8A+GKbrtu+3MEnYk1ycR+EYdwBjktEWdctU4ZXaIAHMq4OzHxOvdyc7cf6Rs7qe3LBv8UAHIADcAAOwAE4AAfgfwXs241r3+7U/wJfWdwe37tCKgAAAABJRU5ErkJggg=='>
                                                </Image>
                                            </Link>
                                            <input
                                                type="text"
                                                value={facebookLink}
                                                onChange={(e) => setFacebookLink(e.target.value)}
                                                placeholder="Type Linkedin Profile Name"
                                                className="w-full max-w-md px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                            <Link href={`https://www.vimeo.com/${(vimeoLink)}`} target='_blank' className='min-h-9 pointer-events-none' style={{ margin: 'auto' }}>
                                                <Image
                                                    width={162}
                                                    height={47}
                                                    alt='Vimeo'
                                                    className='md:w-auto w-36 pointer-events-none'
                                                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPIAAABGBAMAAAAEHdT0AAAAAXNSR0IArs4c6QAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAABtQTFRFR3BMSarp////3O/7r9r2jsvydL/vYbXsSqvp/MrXGgAAAAJ0Uk5TAN9g/wJ9AAADDUlEQVR42u2Zv27bMBDG40foK4hK4pn+p1m2Ec1ulWpWW0CzFaCabUu8x6553xEUkKn0QKDlDSFNKfe773g8JvBTPFt8iWRPC/M7ig1Pi3MWxV4TOZETOZH/H3Jel3HIz0RjFLLqiEjHIL/Q3U4xyIUllzHIDcXKdkVEtygVtkSyo9S2+Zq65z9NXu3//jQp/QBZdSOPWzTsN2NLO0cfUyt4xojp8b3ey/w4EP3SweSKqLU3BdrmFse5oQnBmFKCEsCGfJOreH4LI4N4dc3rogYiQvfW2RaOMZ4lMWwjwLBTGFl1cJQj/oIskxdPWCL3CGGKaUSHJ2HkHd3N3F8iaxPc8mJbCaTyMjtyOhEyTIeQ1QBdSJ3Yihc/CHbAYBCmWAvJU40wAsiFi/p49GQsDgTrPHmwMI7kzPKN5ojPQeTxzdVq4wROu6miTzbJzpYMa3nze+zSNYSca4V8Id+9lTKqErv+0QD6k7XKDYqhLFgyau4WeJ47R+axY0dLqHyW2q24wlyMnWU2QswfIBeyU/jTD8lbIpe5tI2CV19YJlgKm/0IGZRLlinowocCxJx4UcgFQ3goc7zwULZZyg3DlR218G7glq4uLY39wOdwhH7fAsPI+axusleQG4kGyqQEBn6G95aoOclYEBlpNizFSCpBvsCt0fhYZmT5G0k5BklHIJm1aGQNiqTe4XaUN3D8aqtVz8hNaA9zv9w3IhZtmDBUCIeZ+Amwqzl5pEPJ0rC8OtS0ZLl15FzaCqKFZqm0UPKSYL0wWlxDcsRLKXHNZMP6VOMircJvSYkbIkE2DJ6Y7G/iCTfIjyxTcrkYSc4pmCxpvPopFM3J3sxAzvo1LqxgspROOSMPnmwd0CdDBiTiUDIA2C0h953fRU9+nwnXhZ8GkwGg0sufdAHyEmS5spRXjJYudRlOlpbt5bPfCSlA3eEY7+YnuvLlEE5Wg3NgnU9W/WagDENpKaCp75zeb9nsZOlQMiw/ZM7We5msZNCW4lbXh4OdAb2p6336XzKREzmREzmREzmQHO/b/j+3BHPJDapFgwAAAABJRU5ErkJggg=='>
                                                </Image>
                                            </Link>
                                            <input
                                                type="text"
                                                value={vimeoLink}
                                                onChange={(e) => setVimeoLink(e.target.value)}
                                                placeholder="Type Linkedin Profile Name"
                                                className="w-full max-w-md px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                            <h1>Social Link Size:</h1>
                                            <input
                                                type="range"
                                                min="60"
                                                max="150"
                                                value={socialButtonSize}
                                                onChange={(e) => setSocialButtonSize(Number(e.target.value))}
                                                className="md:w-64 w-56 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                            />
                                        </div>
                                        <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                            <h1>Padding Top:</h1>
                                            <input
                                                type="range"
                                                min="5"
                                                max="30"
                                                value={socialButtonPadding}
                                                onChange={(e) => setSocialButtonPadding(Number(e.target.value))}
                                                className="md:w-64 w-56 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                            />
                                        </div>
                                    </>
                                )}
                            </div>

                        </div>
                        <div className="w-full mt-2">
                            <div className="bg-white border border-gray-200 mb-5 rounded-lg shadow hover:shadow-lg transition-shadow">
                                <button
                                    onClick={() => toggleRetailSection('retail')}
                                    className={`flex justify-between items-center w-full p-4 text-lg font-semibold text-left rounded-t-lg focus:outline-none transition-colors 
                                ${openRetailSection === 'retail' ? 'bg-gray-200 text-gray-800' : 'bg-gray-100 text-gray-600'}`}
                                >
                                    <span>Retails Links</span>
                                    <span className={`transform transition-transform ${openRetailSection === 'retail' ? 'rotate-180' : ''}`}>
                                        ▼
                                    </span>
                                </button>
                                {openRetailSection === 'retail' && (
                                    <>
                                        <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                            <Link href={`https://www.amazon.com/${(amazonLink)}`} target='_blank' className='min-h-9 pointer-events-none' style={{ margin: 'auto' }}>
                                                <Image
                                                    width={162}
                                                    height={47}
                                                    alt='Amazon'
                                                    className='md:w-auto w-36 pointer-events-none'
                                                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABECAMAAACI0EjDAAAAAXNSR0IArs4c6QAAAEtQTFRFl5eXR3BMrKys////8vLx8ufZ39/f/dCZ0NDQx8fHv7+/+7Natra2r6+v+ZkjoqKij4+Pg4ODdHR0YGBgRUVFNTU1IyMjEhISAAAAtmlVZQAAAAN0Uk5T/wCt7IkvZgAABPRJREFUeNrtm+t2pCgQgN2tEvFCQG5V7/+kO0Ad+5LRzM4PZ9Ltd05OR0TiB0Upxu7ei3//6Tq7vA2mCi/wNuAlfAlfwpfwJXwJX8KX8CX8NwuryViz9G8iPAXiRl7x9YV14jtoeXVhw0/Y1xae+BlSryyMmT8RjromeYQdLCvA7rcMzhPuuEHBdoEFtSMcus55Tvu5DyFk+P+EfJ5wFF99b293hGu5Yw27/P3CxBXzsBWOhC1rMAkBIARw9Zcx1T5YkvLEqbUVrcsUS7lNlD3CVCrp1JV9EsIuEcUR5KAzhRM0AlfSnjBiP+VYQqF4pggj29sIWVZTJKugkHN2jgjAcVgcJUB2ACtHAM2T/LXVrJlQDjpHGLRdQ9DQ8FzJR/mc8E4Yij7SCiJ8i85MWEpGrPFi2EGMADEzwkpQib5Oo/GEkN5DhOkoaVHWd8Ir91X0s3CshyxTHc6i7RiRLU+QAoCglsDTnxFWi3VrEuGjOdxzuBNWMnSfhYvVyEvXeiMlULwsjNn3LOeqIzOlPyGsxVQ4FoaUoVjIIMbUsz0QNjyCbGbvI4RkCaGAlIwCc7KwdDT/urDiWDM1IBdhwyvhgbDiFVogwJrTCoZjgIqpI+15OVl4Zf5V4eCc85mnIj1OiYowEge4CXu26kEYAnf9mLIqWzwCbpd55KiUYzZy0EnCgTdyomPhQo4TAHTE7ENsiW66E9bE/lEYPTPHKkSl4cQIjS4zR01eDjpH2LIQFtyyNMPXKBB8hgcQPqGkbH8HwknCSFyhCQo7wkcoct9ptWS4YeH3hJE44XcSDlyhx03+dYfV9fCdhBNXIjQiN9TLPgDID8JI3NAvK0wPq4Xuq8daaLrVyTVzHEcENG5CAFDWjXfLkbWbWp0NDZXFrUZJWz9KS4ur6c8Paa5nq4mFBD/FSQUvfbU4eXjgb8/ClDSZFUDPgnSpJebtoqyZGduB3elJi2kB7Ig3up3HQYJvwuJGUaTw/hkZqWdhwwItIhy5MZ4mbPnn0M6ET1YbaqdPRcNOkeunKaKmdYofx1A7DUMMPyg1QvOl1QbpGl1DqTUQ4OQbj4148OASrY9aLtYirACUJDnNzA5gdMGXusy8QiNIVswS9baFiBZxpLr75FtLoYMsvrvgEtuFmuQ8m44oCspRkap4EZtqj0jiyE14lWvhmaslxxt5ksTld5N0yFwQ4QBw+2Q5Tq+RuOC3iU9Kfhm3LsAqbCUCzhSGKXIlOSiMmTtptx96hDt0taUswk1JPjdh3xpjKTUtjUvPqm1BqqqwOVlYUKazkwIBeygMH5UBNnpizk6D3RVem28wCLmVjty0ZPJsSxSCk4VxHuCQ+aMxw4aVmHQHI1xE461U0XaJq4J+y/ZnC/cyeLsM8zwM84Owl5hMB8IoGc+0rVyGHSvVkydppztXWCJ27r+uNDyOcDJd4iK+F9JVcfJUxT3fGGEshbGmvQRnC8scnRF2wGGeS53+8z8ay8eyF9Idb5XSk/Dt1jWps4UlqndHua9TGMrPHSrWeyVIzGFHWO63kzbMrJ6EQUduLcDZwmLcGPqncknQff9pnqtJw1egnvBoZ/8Hl4fzh1AyVF8oiUqKEIaP+dXWw8PHHkOdx/g6wsfKwyu/xSNBfGMeXv7FtLuZO/Tv864lXi+XXsKX8CV8CV/Cl/AlfAk/ge/4hem3+0r8f8hCUff9ZCGrAAAAAElFTkSuQmCC'>
                                                </Image>
                                            </Link>
                                            <input
                                                type="text"
                                                value={amazonLink}
                                                onChange={(e) => setAmazonLink(e.target.value)}
                                                placeholder="https://www.amazon.com"
                                                className="w-full max-w-md px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                            <Link href={`https://www.appstore.com/${(appStoreLink)}`} target='_blank' className='min-h-9 pointer-events-none' style={{ margin: 'auto' }}>
                                                <Image
                                                    width={162}
                                                    height={47}
                                                    alt='AppStore'
                                                    className='md:w-auto w-36 pointer-events-none'
                                                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABECAMAAACI0EjDAAAAAXNSR0IArs4c6QAAADNQTFRFl5eXR3BMrKys////9vb27e3t3Nzcx8fHtra2pqamf39/ZmZmUVFRPj4+JycnEhISAAAAco2e7gAAAAN0Uk5T/wCt7IkvZgAABM9JREFUeNrtm213ozgMhb0rvyFZ0v3/v3YXY6CZKZn0nDQnU7ifwJZcHssXXJKEc+nff0KY6nnUgSudRukCvoAv4Av4Ar6AL+AL+C8BLmLlTMAMIJ8IWAAgngc4AICex8MZs6bzAMso8GmADYDlEwED0EwnAla5m9YAwC3EB25+iY6kSvcUw5yevxW4sDSu63FTlSl9CuwhBG7Q+I3AYt8NXBVdLjUHw5Ckz4AHDf/FwFHwubwcAVMDEU3qJpGaEJFonBtim9hc8wAeEUSs7joPl8UtDOC9f2QNXofVgNrceIYRcy1PBI6KI3k+AO4FCJAa3KI4UXQUoqZkbhzcYwdeI0jAlc0jJbNpMgzgtX/PmlXUpxwAmRoCRXOugvo8YMGxLB4AT6gJ0g9CQaECY4oINFNRQJmBt4ioTEsrIxHlAbz171ldYsM00RtxZ1V7GnDBPZVj4No7Ixo5E6soVWSy1sesM/AeQUS5l6npBw9v/VvWR+CyBDYv/0uQngWsOJYVOgBm5IA8Ll6UlCdEUSKTHXiPKAq4oi5kA5v2fpPfgfMSaFhUngScgcctvAOrx16fTjghoyRU41vgLSK5TZkq6qitdmza+u8Bqz33Ls04Vrn7WMrgPmGBIuZmU+Rb4C2idhRGJfZEFL1j7yP8CuwfgKVfBrf4JOCGQ+nhxkOhkUgQUjFLRA1tPjW6Bd4iElpOAZgou+aqY+it/xdgxpQ34L46AvhZFVYcKhxuLbVvLSOvG+8wx1bwL8B7RDBAiwt1N7fh4b3/Fjg7eAPuGcb0LGDHoR7Iz/HRiD0ypT+PkG7P8hM9fNfCb6RXVHj6kcCGQ/GPBG44lCf6VFVE6DEFUW28jpPeAZhxrAMsfdTfSdHl3RxFwzsAV9wRH+7N2qOrR5svW7YJeAvghHvSdLQmEv1REbBIFK3PXHgTYGq4J6Pf5HAZF59EamJt/WQSoSoqmYbySK9NJgoKqJS5OYjKtDicoyjHOVclvAg4fBG4ArKiZEBsXeECMAB43acGxuXjvFai4tvaafAGOMU2ml4CnPxrLm5AIQXKZmd2IHRgGDfA4s1ceq9rr3ArnbexAa0PBTMhBiw0QF4CTII7Sp943jpKm4FH0XqbAEqdYqKh4Pu0DQ83ICy+rtR6RowOj70nvwQ4f+nBxAB3bKSe6uNBFWkYu/aAoVjFBvEAdiCNYda5yYCWUhioLwGm9pWthwGmquiXn3uhR3EEKLS17cpLIcOaoePFUuvuuHkyhtcAZ3/cwQWbbL98BRIJUJcIoS62sbgdiAOYAB/2lnURV8C460UVJn78DYAA2mY5UCgviyA6vHcxEXEHG1BGNCy+AitQhpVX4LzE5RLpRcDUHn2lNby7cLVuf82lAdKBMaXgQN5XjnEV790TIDkRA1ZSACyuwKQAx2Tw/CrgZA/+PxxWg3bWlAHfzC6A3xphwpDlYYbQw7oqbcDFl9TpZRWm1LBIWfTgFe0s2++kCoQMtMkBzdRJars1ftE+ksThBoTF2j1jB6asAJxf+nFpMJiG1P88qxs/YKhxR86JBlD57W1MzCXRUFpNGsfBTVyO7//FtAE8JECmp+r9gcsF/MOAKcabk+vLpRfwBXwBX8AX8AV8AV/AP07pjD+YPt1P4v8DWlAfcVRkHlwAAAAASUVORK5CYII='>
                                                </Image>
                                            </Link>
                                            <input
                                                type="text"
                                                value={appStoreLink}
                                                onChange={(e) => setAppStoreLink(e.target.value)}
                                                placeholder="https://www.appstore.com"
                                                className="w-full max-w-md px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                            <Link href={`https://www.appstore.com/${(ebayLink)}`} target='_blank' className='min-h-9 pointer-events-none' style={{ margin: 'auto' }}>
                                                <Image
                                                    width={162}
                                                    height={47}
                                                    alt='ebay'
                                                    className='md:w-auto w-36 pointer-events-none'
                                                    src='data:image/png;base64,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'>
                                                </Image>
                                            </Link>
                                            <input
                                                type="text"
                                                value={ebayLink}
                                                onChange={(e) => setEbayLink(e.target.value)}
                                                placeholder="https://www.ebay.com"
                                                className="w-full max-w-md px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                            <Link href={`https://www.appstore.com/${(googleBussinessLink)}`} target='_blank' className='min-h-9 pointer-events-none' style={{ margin: 'auto' }}>
                                                <Image
                                                    width={162}
                                                    height={47}
                                                    alt='Google Bussiness'
                                                    className='md:w-auto w-36 pointer-events-none'
                                                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABECAMAAACI0EjDAAAAAXNSR0IArs4c6QAAAGZQTFRFl5eXR3BMrKys////+vr77e/z5ebn1d3qv9X50dHRxcXJu7u7tra2mbfxrKyslqTae6v3pKSkb5vjX47jhYWFSYn1R4bvRYHneXl5Qn3gTnHNaWlpR1+8WlpaP1G0PEumSUlJPT09kuJGDwAAAAN0Uk5T/wCt7IkvZgAABcxJREFUeNrt22tz8igUB3B2D5CrqTExQRHL+f5fcgG5jLl0np1W3a75py84lJnmNydB01HyXvn7L0La+n3iwDW8TdgG3sAbeANv4A28gTfwBv6PgFmW26Pc7Sp32Modxa60B4P10CJj8O+jEOmrwHS3v+X66RMm9t3V5VLCcrhQaKJl8ZvAeeB9zsCHq89iE2mLMYL/GjANut0c/BHAO1iIsM0VhAiNKNmvAbMlcIj3fnYwT42IPb39PeP9NeD8S3AIhWmYRiSp/D3gdP1+Bc5hmhZRUZimbHvS8MWK1aQ3RdXUkMDcTLbFM8E04g4L4EsAf8A0PWILk2QSbXRL51WpXVEqVBFMW402hD4PnEVctwA+B/B56aIswYYoG+GvctROMKsKx9V2JoGJKUmvEdvngfOEWwSvvjAhIvetNnEKgSg50NoIimklEQV3fU7gAlEAAFWo2dPA+5jPmMMCuPyyw07Bwl3dIPaTioeqxATuEQu/HZTPArM/BR9gEpEuRMdxFuJKaspJVYUKdAJLROWC2D4LnEfbYQk8RvBlbZdO4BqxDSi9XiWwwpj+WeDd1+DuGpPBfTL0hgguEPtQynklfJXAArEqb8meBd4vbNLXBD4k8A4mIUmcOQW9bU9ADYQsVJWvIrj11zkvAJ4EpvtDyPnzag7789nFydjhy+UDJqEKERWpqkbgTdGgEVSNNBWbVBaHoiUKMYGZQk04rzU2zwLDR7SdPmMS+HCNkyVMw3pMkX4jc9HFrKK+kpjAUGi8pX0aOE/gaLuMqcPnMLn4hFgqT+pLcKmUq9hSVVsrocYcwcB6S1bPu6TTNT2eou00dsE7DNfY4MXQrKoKTiGGFRzWKmro3O9eMbygT314YJ33nk5nh7uexnHsgncYL26ygu+miK9m5LX/0xrGrjNcl/PlcjZek6HrDNfFzJ733/eiLCjQRqPmrwUfBwM9hYwxgz1cjsfjDr4ZqjE9SrwYbMR35JP3Bq4V/0CHJbroBl4NtuIp15G/7jBvmhJ8WNNUMEvZ2JQslG0vSM0hhtXsReDjmMRm6L1jl2cs3x2Pyx0uMT3UEUQJs/S+py0sR2L/IrAxJe8YvDsKNuzgOzwHYxNu0BVwW5aVSM9+89+/Bnzf49HHNjXLGWSrHVaowKVGuQx20n61kQxeBU7iMfS4o8AOwzDsjHelw0L43kmsvwDXq2B4ETiJU4sHQ9yHPWulw8L8+JfYzICZuMEaUdyBBZZ2krspu4QTpfoMoDQLmWgZkYq4ZtuRqCEuiYMHgL043cMZ8MGwM5vDSodBIXew2oJBOiDVmgVw3zStRELtuAATpcE9I7m3Hy1WwFEqrW5bQKFR9Ar7tCQOHgAOYg8eGOSmuznY7NfALRIApjV14BqFm+/vd2lpqAnsl1U1eDD2FLjGAqjSt5VVXBIHDwA7sfOeQoctmDEG0K2BGWrq1A5MNTJHi+C2KKpeY3MHblBSAAhgbQuCDVS3TZuhjEvC4AHgIDZHvIcPwzC6Jq/dwwACa1DILdifNtVqsmlxrVkC2xq1aFgASzCpDZag7G1QxyVh8BBw6vHdLr2nkK/t0m6/KlGCB3NU9tQnYJBYBrDW7vQUpntYBHCPyofGJWHwAHDqsY81ZjkHoIf1DoNChVUAg8BMIpuCFZZ+zFCDCxPYT8EtNuCSlsTBo8BJnN5p0f2w3mFoEDV1YD+HAibg1t3o7qSJBdOGAlRzMEfFAKAgNC7xg4eCj8E7Dl3OWbbrzNx6h5lGAhFMFRpkAkshpHZTHFEQobW204oQjdUUDAQ1qXuti7gkDh4JHu6eh+3EcbXDTsUT2BjU5OFBq57bojJwlSnbYeGfKKZgtwZlFpekwU+C9zNxbLGPETP4szS4enI0Y2nIKSyGZTQtSYMfBQObJp+Fwh9GIf8Nn9Oid8c3UqF4p0/iKYWYvRNYKllun7XcwBt4A2/gDbyBN/AG/p+B3/EL02/3lfh/AA97rS8ucVv5AAAAAElFTkSuQmCC'>
                                                </Image>
                                            </Link>
                                            <input
                                                type="text"
                                                value={googleBussinessLink}
                                                onChange={(e) => setGoogleBussinessLink(e.target.value)}
                                                placeholder="https://business.google.com"
                                                className="w-full max-w-md px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                            <h1>Retail Link Size:</h1>
                                            <input
                                                type="range"
                                                min="60"
                                                max="150"
                                                value={retailButtonSize}
                                                onChange={(e) => setRetailButtonSize(Number(e.target.value))}
                                                className="md:w-64 w-56 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                            />
                                        </div>
                                        <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                            <h1>Padding Top:</h1>
                                            <input
                                                type="range"
                                                min="5"
                                                max="30"
                                                value={retailButtonPadding}
                                                onChange={(e) => setRetailButtonPadding(Number(e.target.value))}
                                                className="md:w-64 w-56 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow">
                                <button
                                    onClick={() => toggleSignatureSection('signature')}
                                    className={`flex justify-between items-center w-full p-4 text-lg font-semibold text-left rounded-t-lg focus:outline-none transition-colors 
                                ${openSignatureSection === 'signature' ? 'bg-gray-200 text-gray-800' : 'bg-gray-100 text-gray-600'}`}
                                >
                                    <span>Sign offs</span>
                                    <span className={`transform transition-transform ${openSignatureSection === 'signature' ? 'rotate-180' : ''}`}>
                                        ▼
                                    </span>
                                </button>
                                {openSignatureSection === 'signature' && (
                                    <>
                                        <div className="flex flex-wrap max-w-[596px] justify-center items-center gap-4 p-4">
                                            <label htmlFor="signature">
                                                <input type="radio" name="signature" id="signature" value='Kind regards,' onChange={(e) => setSignature(e.target.value)} /> Kind regards,
                                            </label>
                                            <label htmlFor="signature">
                                                <input type="radio" name="signature" id="signature" value='Happy Holidays!' onChange={(e) => setSignature(e.target.value)} /> Happy Holidays!
                                            </label>
                                            <label htmlFor="signature">
                                                <input type="radio" name="signature" id="signature" value='Best Wishes,' onChange={(e) => setSignature(e.target.value)} /> Best Wishes,
                                            </label>
                                            <label htmlFor="signature">
                                                <input type="radio" name="signature" id="signature" value='Regards,' onChange={(e) => setSignature(e.target.value)} /> Regards,
                                            </label>
                                            <label htmlFor="signature">
                                                <input type="radio" name="signature" id="signature" value='Sincerely,' onChange={(e) => setSignature(e.target.value)} /> Sincerely,
                                            </label>
                                            <label htmlFor="signature" className=''>
                                                <input type="radio" name="signature" id="signature" value='Thanks,' onChange={(e) => setSignature(e.target.value)} /> Thanks,
                                            </label>
                                            <label htmlFor="signature" className=''>
                                                <input type="radio" name="signature" id="signature" value='Best regards,' onChange={(e) => setSignature(e.target.value)} /> Best regards,
                                            </label>
                                            <label htmlFor="signature" className=''>
                                                <input type="radio" name="signature" id="signature" value='' onChange={(e) => setSignature(e.target.value)} /> Nothing
                                            </label>

                                        </div>
                                        <div className='mt-10 mb-10 ml-5 mr-5'>
                                            <label htmlFor="signature">
                                                <input className="w-full max-w-md px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    type="text" name="signature" id="signature" value={signature} placeholder='Enter Custom Signature' onChange={(e) => setSignature(e.target.value)} />
                                            </label>
                                        </div>
                                        <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                            <h1>Signature Text Size:</h1>
                                            <input
                                                type="range"
                                                min="13"
                                                max="60"
                                                value={signatureSize}
                                                onChange={(e) => setSignatureSize(Number(e.target.value))}
                                                className="md:w-64 w-56 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                            />
                                        </div>
                                        <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                            <h1>Signature Text Color:</h1>
                                            <input
                                                type="color"
                                                value={signatureColor}
                                                onChange={(e) => setSignatureColor(e.target.value)}
                                                className="w-16 cursor-pointer h-16 border-0"
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="bg-white border border-gray-200 mt-5 mb-5 rounded-lg shadow hover:shadow-lg transition-shadow">
                                <button
                                    onClick={() => toggleMeetingSection('meeting')}
                                    className={`flex justify-between items-center w-full p-4 text-lg font-semibold text-left rounded-t-lg focus:outline-none transition-colors 
                                ${openMeetingSection === 'meeting' ? 'bg-gray-200 text-gray-800' : 'bg-gray-100 text-gray-600'}`}
                                >
                                    <span>Meeting</span>
                                    <span className={`transform transition-transform ${openMeetingSection === 'meeting' ? 'rotate-180' : ''}`}>
                                        ▼
                                    </span>
                                </button>
                                {openMeetingSection === 'meeting' && (
                                    <div className='flex flex-col text-center max-w-[596px] md:w-[600px] w-[280px] justify-center mt-5 mb-5 p-[16px] '>
                                        <div className=' mb-5'>
                                            <button onClick={handleZoomClick} style={{ textDecoration: 'none', color: 'white', }}>

                                                <div
                                                    style={{
                                                        backgroundColor: meetingBackgroundColor,
                                                        // width: ${socialSize}px,
                                                        // height: ${socialSize}px,
                                                        width: 'fit-content',
                                                        // height: '25px',
                                                        textAlign: 'center',
                                                        borderRadius: '5px',
                                                        padding: '10px',
                                                        marginRight: '3px',
                                                        display: 'flex',

                                                    }}
                                                >
                                                    <div style={{ verticalAlign: 'middle', margin: 'auto' }}>
                                                        <Image
                                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIABAMAAAAGVsnJAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAElBMVEVHcEwAAAAAAAAAAAAAAAAAAABWYIjnAAAABXRSTlMAOGXF7dHeYvoAAAVUSURBVHja7djBbttGFIXhM0N3r0byXknIvRN79kmU2dsW7/u/SpEaKLxocYelFFB3/v8N/IFnBF8RERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERba9Pjxvq66c/9TvKj6cv+rv0ZBvqp5nNXz/q2uVqNh/1q8m213z6eP2/3+xVkva2xWY77XTFiv1qlpSqbbM6f9HVOthbR2mw7fZjd70BvPVNKrbhzrurDeCtFyXbdPPxmgMwe9Vg/Qlk+6ez7q0/gfIeYDKneO/A+J5XxbYvcOkB3BrA/EMXLBV7n6rdQA/XGMBbslto3ulSDXaLAPaqC5WqAxB9BJM5AMFHMNitAtiPywzgdgHseJEBOADB38G9OQDB38FcbxvgpJUVcwCCfwJ7u3GA+bRyAC5A7MtAMQcg+A/BwQIA2G7FESAEwPcVAwgBcF5xBHAAYv8SZnMAgj+DqTgA0Z/B0RyA4BsYzAEIvoFUHYDoG5jMAQi+gcEcgOAbSDUYgC0egAcQewN7CwfwXQvKNR7AedkA4gHYbtEAfIDAj0C2kAAvaq3EBDi3X8FiAtTmAQQFsKOaKmEBvqml0cICvLQNIC7AWX6pBAaY2wfgJwv5Cg4WGuBBTqnGBniW02SxAV7cAQQHOHkDiA5w9gYQGcA/CewtPsDRuYJ1DTBZBwAPzgDCAzw7AwgP8OIcAcIDvDpXsG4BsnUCcHaOAL0CjNYLwOwMIDyAOQPoE2C0jgB2zhGgQ4BUOweYrG+AwfoCODoD6A5gsr4B9tY3QK6dA0zWN8De+gbI1jlA6RzgYH0DZOsbIJXOAQ7WN0AyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgqwAqvQPk2jmA9r0DaOodINXOATT0DqCpd4BUOwfQ0DuAxt4BUukcQPn/A9QQABp7B1DpE2D9CFSCAOjQO4BKrwDrTgOawgBo3zuAJlue7gMB5NodwPoR6I8AAGtGoCEUQKqdA2hYDJBjAWhcCpACAKw5DUjBAJSXApQAACtGIE3RAFLpHEB5GcBdOAAdFgEM8QBUlgDkgAB5CYACAuiwBKAEBFBZADBFBMi1HeAuIoD27QBDSABNzQApJkCqrQAqIQE0NANMMQE0tQLcBQVItREgBwXQ0AigGhRAYyPAFBUglTaAu6gAym0AOSyADk0AKmEBUmkCuA8LoNwEkOMC6NACoBoXQKUF4D4wQK4NAENgAO0bAFQCA6g0ANxHBsjVB8iRATT4ACqRATT5AENogFRdgFQjA2hwAXQIDaDRBUixAVLxADSFBtDgAuTYABo9AE2xAVLxAHJsAGUPQFNsAB08gFxjA6g4ADoEB8geQCqxAXRwADQEB9DkAGgKDpCrA5BKbADtHQBlu4V20oVG4BAFAHBOAw7RVtOKBnvXLOkGn4FZTs0jmHWTAq9yah7BWf9W3rrAi1Y1OADbF3jQukbnW9r6Cuad1pWK+y2lMcIT4P9X9Kz/7HO1rXbU6saGMaWnsB+ApNIypg9PEV+At1JpsvzwWG1jzUddpFwax/Th8+PT08+tdPq604VKnx8/ioiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiGhb/QVyu4/EbGHiswAAAABJRU5ErkJggg=="
                                                            alt="Zoom"
                                                            width={10}
                                                            height={10}
                                                        />
                                                    </div>
                                                    <p style={{ marginLeft: '10px', marginRight: '0', marginTop: '0', marginBottom: '0', height: 'fit-content', fontSize: '10px' }}>Meet me on Zoom</p>
                                                </div>
                                            </button>
                                            <button onClick={handleGoogleMeetClick} style={{ textDecoration: 'none', color: 'white' }} >
                                                <div style={{
                                                    textAlign: 'center', margin: 'auto', height: '40px', paddingTop: '10px',
                                                }}>
                                                    <Link href={`https://www.${encodeURIComponent(zoomLink)}.com`} target="_blank" style={{ textDecoration: 'none', color: 'white', pointerEvents: 'none' }}>
                                                        <div
                                                            style={{
                                                                backgroundColor: meetingBackgroundColor,
                                                                // width: ${socialSize}px,
                                                                // height: ${socialSize}px,
                                                                width: 'fit-content',
                                                                // height: '25px',
                                                                textAlign: 'center',
                                                                borderRadius: '5px',
                                                                padding: '10px',
                                                                marginRight: '3px',
                                                                display: 'flex',


                                                            }}
                                                        >
                                                            <div style={{ verticalAlign: 'middle', margin: 'auto' }}>
                                                                <Image
                                                                    src="data:image/png;base64,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"
                                                                    alt="Zoom"
                                                                    width={10}
                                                                    height={10}
                                                                />
                                                            </div>
                                                            <p style={{ marginLeft: '10px', marginRight: '0', marginTop: '0', marginBottom: '0', height: 'fit-content', fontSize: '10px' }}>Meet me on Google Meet</p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </button>
                                            <button onClick={handleSkypeClick} style={{ textDecoration: 'none', color: 'white' }} >
                                                <div style={{
                                                    textAlign: 'center', margin: 'auto', height: '40px', paddingTop: '10px',
                                                }}>
                                                    <Link href={`https://www.${encodeURIComponent(skypeLink)}.com`} target="_blank" style={{ textDecoration: 'none', color: 'white', pointerEvents: 'none' }}>
                                                        <div
                                                            style={{
                                                                backgroundColor: meetingBackgroundColor,
                                                                // width: ${socialSize}px,
                                                                // height: ${socialSize}px,
                                                                width: 'fit-content',
                                                                // height: '25px',
                                                                textAlign: 'center',
                                                                borderRadius: '5px',
                                                                padding: '10px',
                                                                marginRight: '3px',
                                                                display: 'flex',


                                                            }}
                                                        >
                                                            <div style={{ verticalAlign: 'middle', margin: 'auto' }}>
                                                                <Image
                                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIABAMAAAAGVsnJAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAGFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAABoAtTLAAAAB3RSTlMAHUNsl7/iUYoOaQAADidJREFUeNrs3EFT2kAUB/BdqJwjtXqlgHKNgM21Ksi1jmCuVYHcgeT/9etMZ5rptGmBkfyfee/3DXbnvbdvd7NxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxpgizc5wvFwukS1n09t2oG30w0f8bnHbclr4boy/mfedBv4qQZFUwRR0E/zL4tJV2scY//MQuOq6whbSygZBbYLt3FQ0/BNs6yVw1dPFDjYtnemfS6s2AxeA6hm4wM6yKs3AF+Q0xsA59rIJ3C/N9mA4ms5eTUejQfuze09OsKf1z7EPxo/4w2I6eC+zUMfenn1nnKBQOu07+WoJDiibSo8DP8GBLW4C2Qvg4WW3geACWI6Hlo4CUCyTmQgTlEDwOcInlGre0poAeR44USKUbh44OY6Q01gJfAwKMWlwCpKXQEMFlH+S0ANPGjq6OpgyfimMwHXNDwDdMxCB7p4dAKpjIILuGagBumfgFDJkXx2FTyBEFjqGBqj4XXEMOTaBK90HSLImb4P4nl3JPIS51lUC+Z9aTMDEL4R1UPHLwBkEuiY0AVrLQB0ibcgZwPdEzgC+kJABGpPgFGI9EbogfUngAahOgiNIdk/YCWtrhxKItiIsgrrqYAPCpYQLIVV1MIF0WcAtAXzPhC5Az1LYA+RbkbfCfCF3I8C3JlyJKQmBBhSEAKUNymajQb99HLhXx8fNzmD8SAgBUg3MCh5INoczaSHgDzH6fuAK+c64hBAg9oGLfPRF/DAuIQQ4feD80m2lE0sJgTPG8PMp4IdARHv34rsJdtRiLgIH+JdS7Y6/I/DcZ0/dhH0uUCe/+KnF5HuiI/abL3/HPR1s8J+6nGMH39wb6wn4sPWceVEW8cafOyE2QzFx/LkT3kqYkMa/fxYEsh6JZGHZPy35LqsNCEv/RiMVdSB4T3i1Hgrqg14YwbgqoQ+ifM58wdgQnEl62zQhdIM9SZfWdUI3GP1o70ya28a1KAxSkntLR51oS89beoq2ciRbWyYeuJXTtrm1KA5//1WqugrVr15eusnDc1BNfD/Aso6AO+Hiwqn2rVN+XWTtVJ0+yOhJcebWkf2EHgrkjjVtrNmLD2ABFYHZVl8RrCJl13KlF+Cr9rB+oU4Gq0jbuL5VJ4PP4n6NWixAHalblhJtNlzIG3e3WgES+SCLSipA6cDthUQpwMaB7v1nZUEoduASYykUYOfEJb5YJ0DqxECnjU6AyImLvDuZAKXpmxktGJv0HAYHh5erH1xe7OP9wAIrAD4KCv/yPOPb6hxcp9ni4wBkHvLhtsOjfHNWMDjuywkG1z+Zo47MB2KNAJsuDxTWN0AjkGoESLq90PYNZwQKiQB1126HbzAjUEsKImXn9xluYGeWiaImuO2+qhKUf96ABYBYnjBHVFRDUlYW4G3gHHOqxiqNwjOhCUBFZmk0B1/lDzLQ2p2TIoEMHAd+akAnOzNSdToDO4EMFU//1mI9UjpENqDsMsHkqTFdgAXozxWAGBVhBGZQLxjgvMmI1CjwG9QLTnBJZQgJzPGNkjWs6a7ExKjsdLDC+ZQYEqMm5HSwxAXWzxABNuRsaIdTs4T8YwU5GSiANeYYsQJKcii4BVrUDWRpRtxI6B3oU0vIdkq47eLvyKgqQgiw4UZCG6QAKcI/F9zDsRQpQIGwJyU3EEiRcXWNELPmVgVT6FFrgrBNMbUolkJPGZ4RNzkW1DsjKbTGXCICtHeqH1xgC2wxYDHtqAlxihDTkgL+q4qaEKfYhpMdQkpqPrgBHzRFANMcM9OhDbjGmgL8yYKZDr2D+w3KFjsA7QZmgA9D+4GceXlhjOwOmEBioQm1cTOEqr1GXL7J2qQU7ckBfgsaDk/Ivctz6HI77bwEggyWU+FjwQp/Ib1oKaElZZYEYPPhLDc/aTKj+cEAHHaFeZdJHL8LLvGtwfstzNoPoztRXOGZtYg7sbvg4c+FNb1rWlAxT0g30CmJltfVcnWbN+0wXcnx++26gUBrlMHvt2nm4OR9av0l4C2CBbNlODKGuQhITdNZT8vtiCPBljlPaQMYnw2A0DAK+rDgqn8JSqQfxH9YcJy5/hhbAMi+lRLUcC+A9zlHTw0MfElkxJigM711NxQcc3KvD7euhoIT1noLr3MnQ8E9wKdJvWIKKAgA4i6ASxDFwmdkr3ucOxYLzwEmR7oRCkAqgNFblCzvuAJUBkF47U4ykDO9jmW6dkYA1TS949yNbEg3TCy8cyEbCpQTNY8bBIBkUDZSM8zk6eBIO08t+KxOB0fqB/GPxQKM5SP1prk0Hx4DHI/YECTamXJ6BRb8l1bqSKqAXoCmMA4pkPJujlkSrQJ6AUoDZpSLSkIzV0bMT6UC6DeBbZEjd8qdufPMwmeRAG35Q/LSkF4Ay1dH3kHeqgSotWZAL0BTxwbMmi/AHPDoKo6ReAXoXcGpYgXo3520BLlWAP0u+CQWQK9AJrIB7anPJa5QvwIsN5IloF8BlvvI4NhjC4CgjCWOQC+A5YuBMSMnQyBecIemZAFgLA2IOVOAWYOjujAQJtySGJKXc4wZ1AqgNwVzalkczcOB6cpYK4B+IwQ592gMz8sFcQ8sABYXT7WMAD8LUQA89X17YxBKGiTwPLQ2BplGADzVlwjgnYlNUnjqZQzYmdQ2ObwxiAFGgNkoiechBhgBZqssnn+6CuYsAUxDol5G/UQCFaBdnkN13ot3KklFWHLxNKRemSEuAvzKLEi5N7t4uuZdm+NyDyhWaoYrW+rXx8e8796iPcceGbD8meSFV3mvCkxYzft7rc+Awrb28zs0Rl8AatAtf71g3mN/WcgboNB+9QbrHrurWAKM2rcEtW9xLoERGnOKTNKxo8XyDAsEauLjs0WLAnb7TTBnNe5nLf7p7kugQAUoO153ZmEMcwnMAEpiY+EEer7+DIrQ3o0hxcIVtqxcgSK0jWE9PbptkbcSHt9d0NoREmMIe4D/+K4ZdbwsOe5p9MUYZwRxj9xC/QDmh6kMKRTcwksqCSZGj0iRUApvMUgxAixIkVACP1zaYvLhLSkQiOBHCzvMCthxAoG6hYKcB7hrTiBQ4btMKlBJKKEEAiX+hLkGVWpSSiCw6+F4DSAAxgrmXQOuuVSAEuAHAQ+P6wSoKX6w6KHPBlWujhl+cItvMqhRAiwYfnCLv3ZRoQTYMPxgge84LlFHVgUjHyzwvWalAYhKq4wX+EabAnVsXTMKw7uWjqT91p0Rp3zOiBvWsoBpmhDcQIXvt4xbLEtdNlDDm81qXP/elnFAGqGv3uyAj6AxsoEY3XS9wW2qkpENJOg9kOAUrRh39lPw9bMK2brDOB16B188eEY2b8WEYLggv9QwA/wxaDBcYq9flVA9FwwriG28T6F/bcOwgjGy5bLC3mR5Z1jBFDkQMcVe5ioYR8Rb4AykCtzBuzOdWSM+JMMZrRlbgBmi7DDGtYvP2ePeJ5BoYw6bQpizBQghvibIQLNIQ0BqDQ+FClDz/U0PYw2MIYRCFWYa3rc+bjJFRhwKWU4h04gz/uNHI4AR+LUC9Q3IIuEFMDnK2550n785wY96h7iwqNvD6/WXFgaJJ8AeLusMrvJugyTyRvAG3giZcwTHT81feP0StfhXqAKYHBtv7B+tHt/emubt7XF1EbWIy+kCnAE+B0OmEWAC2QOQzagRIAS+sMSecZiyVl7q5g5oFizlS8oOUAkwBsScAM5kAgS5C2YwyGUCmLkLZvBToxNgwrK38M7rhDfUujL9MpY+/LUGrDbJYKeEuP9Kug8kOqdRo14Cc60AJhMvgVHTjogahi9csQAWrg2uHHEBlprshb8yYwDyT3LW4iq9/tXNkm2Fvps+CHOAAKRVmDBdIDdFOwNITp/yXfA98XcH0mDLu8ASJ/oNYNkI8vEqInkAemgWAiZjsoe8J5Jw9Cvp9Xl6pXLC1z1YN50QmeM6lhpAS6WqS1ex8tl1SylLysuI8NiwoFafERWw3x8ZB/GGLVcxYf3TS/VBTlMguGu6k0iP5+ob055w3QCIxLXJe9OWad4AqA2eNeXV3esGws5YCNHgP+gAbNFOKPaClqyf10MswXWDYuPGIfXLgbG0aKVsT+JKm8LLOfPrWyJ1o4rl9e90RE5v8wZJZQDgZuQ9/H8NPlxljYXgBBQp6uPy4H9/+SPAbw+wgZQi1evD8uLwYN/8INg/PLxcPeVNPyy0R/V6IulZvZ5K262hp9C2a+jZmIEvgcQMewnUxgx7CexMn4QDNQGWs2GaAEuYD9MEWD4NNgqwIxGk6C8xfWy06K/wrBsZzl/i0vNsCJwOwAkC6qMSKkNhMlAnaJm7vwOGGQ/WhsXHge4Ay9rZHTDkTVAZIh8HGgVZ5m7mAUPeBKXhMh5SJqzPCeSTDNz3hVtjGaQZiA2fkZPnAQONBhZGwqk7UaCGYO66DxxImbwyMsLMjTRAxyhv5FSRGbYCz0bK2IEFMGwFUqNmmotdwLAVWBgleku4M1L08UBsxNgbbxK+G1cIPotdoJ4TuQXUOwO1BdQbAnElVM+xeAPoGWViD6DnmGUJysi4SXjLMQCxcZYPd2IDoGf61PTMN+M4035XwR/GfcLrXBwB6fnl7djXZXxCcABCgqOrp1/crD4hfH+5CLdPeWOpf9wl3rdZFOP76wn2Dw4PLw4PD/f3uwXQL5H51/F7Lrf/7qcQ7vt/xhCt+twQUCVR2u2vJ7xDDmjSA58mdR+Zfz/H2U+/fmyGwZGtJliqZWyGQ/BfGcTr8sAMjv2jy9XqdrVaXh5GxuPxeDwej8fj8Xg8Ho/H4/F4PB6Px+PxeDwej8fj8Xg8Ho/H4/F4PB6Px+Px/Iz/AN8Uv4bHN5ULAAAAAElFTkSuQmCC"
                                                                    alt="Zoom"
                                                                    width={10}
                                                                    height={10}
                                                                />
                                                            </div>
                                                            <p style={{ marginLeft: '10px', marginRight: '0', marginTop: '0', marginBottom: '0', height: 'fit-content', fontSize: '10px' }}>Meet me on Skype</p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </button>
                                            <button onClick={handleMicrosoftTeamClick} style={{ textDecoration: 'none', color: 'white' }} >
                                                <div style={{
                                                    textAlign: 'center', margin: 'auto', height: '40px', paddingTop: '10px',
                                                }}>
                                                    <Link href={`https://www.${encodeURIComponent(microsoftTeamLink)}.com`} target="_blank" style={{ textDecoration: 'none', color: 'white', pointerEvents: 'none' }}>
                                                        <div
                                                            style={{
                                                                backgroundColor: meetingBackgroundColor,
                                                                // width: ${socialSize}px,
                                                                // height: ${socialSize}px,
                                                                width: 'fit-content',
                                                                // height: '25px',
                                                                textAlign: 'center',
                                                                borderRadius: '5px',
                                                                padding: '10px',
                                                                marginRight: '3px',
                                                                display: 'flex',


                                                            }}
                                                        >
                                                            <div style={{ verticalAlign: 'middle', margin: 'auto' }}>
                                                                <Image
                                                                    src="data:image/png;base64,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"
                                                                    alt="Microsoft Team"
                                                                    width={10}
                                                                    height={10}
                                                                />
                                                            </div>
                                                            <p style={{ marginLeft: '10px', marginRight: '0', marginTop: '0', marginBottom: '0', height: 'fit-content', fontSize: '10px' }}>Meet me on Microsoft Team</p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </button>
                                        </div>
                                        {selectedOption === "zoom" && (
                                            <>
                                                <div className='flex flex-col gap-5 justify-center items-center mt-3 pl-4 pr-4'>

                                                    <div className='flex md:flex-row flex-col gap-2'>
                                                        <input
                                                            type="text"
                                                            value={zoomLink}
                                                            onChange={(e) => setZoomLink(e.target.value)}
                                                            placeholder="https://www.amazon.com"
                                                            className="w-full max-w-md px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        />
                                                        <input
                                                            type="text"
                                                            value={zoomText}
                                                            onChange={(e) => setZoomText(e.target.value)}
                                                            placeholder="https://www.amazon.com"
                                                            className="w-full max-w-md px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        />
                                                    </div>
                                                </div>
                                                <div className='flex md:flex-row flex-col justify-between items-center gap-2 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                                    <h1>Size:</h1>
                                                    <input
                                                        type="range"
                                                        min="10"
                                                        max="30"
                                                        value={meetingButtonSize}
                                                        onChange={(e) => setMeetingButtonSize(Number(e.target.value))}
                                                        className="md:w-64 h-2 w-48 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                                    />
                                                </div>
                                                <div className='flex md:flex-row flex-col justify-between items-center md:gap-10 gap-2 mt-5 pl-5 pr-5 pb-4'>
                                                    <h1>Padding Top:</h1>
                                                    <input
                                                        type="range"
                                                        min="5"
                                                        max="30"
                                                        value={meetingButtonPadding}
                                                        onChange={(e) => setMeetingButtonPadding(Number(e.target.value))}
                                                        className="md:w-64 h-2 w-48 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                                    />
                                                </div>
                                                <div className='flex md:flex-row flex-col justify-between items-center md:gap-10 gap-2 mt-5 pl-5 pr-5 pb-4'>
                                                    <h1>Background Color:</h1>
                                                    <input
                                                        type="color"
                                                        value={meetingBackgroundColor}
                                                        onChange={(e) => setMeetingBackgroundColor(e.target.value)}
                                                        className="md:w-16 w-14 cursor-pointer h-16 border-0"
                                                    />
                                                </div>
                                                <div className='flex md:flex-row flex-col justify-between items-center md:gap-10 gap-2 mt-5 pl-5 pr-5 pb-4'>
                                                    <h1>Text Color:</h1>
                                                    <input
                                                        type="color"
                                                        value={meetingTextColor}
                                                        onChange={(e) => setMeetingTextColor(e.target.value)}
                                                        className="md:w-16 cursor-pointer h-16 border-0"
                                                    />
                                                </div>
                                                <div className='flex md:flex-row flex-col justify-between items-center md:gap-10 gap-2 mt-5 pl-5 pr-5 pb-4'>
                                                    <h1>Border Radius:</h1>
                                                    <input
                                                        type="range"
                                                        min="0"
                                                        max="40"
                                                        value={meetingBorderRadius}
                                                        onChange={(e) => setMeetingBorderRadius(Number(e.target.value))}
                                                        className="md:w-64 w-48 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                                    />
                                                </div>
                                            </>
                                        )}

                                        {selectedOption === "googleMeet" && (
                                            <>
                                                <div className='flex flex-col gap-5 justify-center items-center mt-3 pl-4 pr-4'>

                                                    <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                                        <input
                                                            type="text"
                                                            value={googleMeetLink}
                                                            onChange={(e) => setGoogleMeetLink(e.target.value)}
                                                            placeholder="https://www.amazon.com"
                                                            className="w-full max-w-md px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        />
                                                        <input
                                                            type="text"
                                                            value={googleMeetText}
                                                            onChange={(e) => setGoogleMeetText(e.target.value)}
                                                            placeholder="https://www.amazon.com"
                                                            className="w-full max-w-md px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        />
                                                    </div>
                                                </div>
                                                <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                                    <h1>Size:</h1>
                                                    <input
                                                        type="range"
                                                        min="10"
                                                        max="30"
                                                        value={meetingButtonSize}
                                                        onChange={(e) => setMeetingButtonSize(Number(e.target.value))}
                                                        className="md:w-64 w-56 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                                    />
                                                </div>
                                                <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                                    <h1>Padding Top:</h1>
                                                    <input
                                                        type="range"
                                                        min="5"
                                                        max="30"
                                                        value={meetingButtonPadding}
                                                        onChange={(e) => setMeetingButtonPadding(Number(e.target.value))}
                                                        className="md:w-64 w-56 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                                    />
                                                </div>
                                                <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                                    <h1>Text Color:</h1>
                                                    <input
                                                        type="color"
                                                        value={meetingTextColor}
                                                        onChange={(e) => setMeetingTextColor(e.target.value)}
                                                        className="w-16 cursor-pointer h-16 border-0"
                                                    />
                                                </div>
                                                <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                                    <h1>Background Color:</h1>
                                                    <input
                                                        type="color"
                                                        value={meetingBackgroundColor}
                                                        onChange={(e) => setMeetingBackgroundColor(e.target.value)}
                                                        className="w-16 cursor-pointer h-16 border-0"
                                                    />
                                                </div>
                                                <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                                    <h1>Border Radius:</h1>
                                                    <input
                                                        type="range"
                                                        min="0"
                                                        max="40"
                                                        value={meetingBorderRadius}
                                                        onChange={(e) => setMeetingBorderRadius(Number(e.target.value))}
                                                        className="md:w-64 w-56 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                                    />
                                                </div>
                                            </>
                                        )}
                                        {selectedOption === "skype" && (
                                            <>
                                                <div className='flex flex-col gap-5 justify-center items-center mt-3 pl-4 pr-4'>
                                                    <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                                        <input
                                                            type="text"
                                                            value={skypeLink}
                                                            onChange={(e) => setSkypeLink(e.target.value)}
                                                            placeholder="https://www.amazon.com"
                                                            className="w-full max-w-md px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        />
                                                        <input
                                                            type="text"
                                                            value={skypeText}
                                                            onChange={(e) => setSkypeText(e.target.value)}
                                                            placeholder="https://www.amazon.com"
                                                            className="w-full max-w-md px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        />
                                                    </div>
                                                </div>
                                                <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                                    <h1>Size:</h1>
                                                    <input
                                                        type="range"
                                                        min="10"
                                                        max="30"
                                                        value={meetingButtonSize}
                                                        onChange={(e) => setMeetingButtonSize(Number(e.target.value))}
                                                        className="md:w-64 w-56 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                                    />
                                                </div>
                                                <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                                    <h1>Padding Top:</h1>
                                                    <input
                                                        type="range"
                                                        min="5"
                                                        max="30"
                                                        value={meetingButtonPadding}
                                                        onChange={(e) => setMeetingButtonPadding(Number(e.target.value))}
                                                        className="md:w-64 w-56 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                                    />
                                                </div>
                                                <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                                    <h1>Text Color:</h1>
                                                    <input
                                                        type="color"
                                                        value={meetingTextColor}
                                                        onChange={(e) => setMeetingTextColor(e.target.value)}
                                                        className="w-16 cursor-pointer h-16 border-0"
                                                    />
                                                </div>
                                                <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                                    <h1>Background Color:</h1>
                                                    <input
                                                        type="color"
                                                        value={meetingBackgroundColor}
                                                        onChange={(e) => setMeetingBackgroundColor(e.target.value)}
                                                        className="w-16 cursor-pointer h-16 border-0"
                                                    />
                                                </div>
                                                <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                                    <h1>Border Radius:</h1>
                                                    <input
                                                        type="range"
                                                        min="0"
                                                        max="40"
                                                        value={meetingBorderRadius}
                                                        onChange={(e) => setMeetingBorderRadius(Number(e.target.value))}
                                                        className="md:w-64 w-56 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                                    />
                                                </div>
                                            </>
                                        )}
                                        {selectedOption === "microsoftteam" && (
                                            <>
                                                <div className='flex flex-col gap-5 justify-center items-center mt-3 pl-4 pr-4'>
                                                    <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                                        <input
                                                            type="text"
                                                            value={microsoftTeamLink}
                                                            onChange={(e) => setMicrosoftTeamLink(e.target.value)}
                                                            placeholder="https://www.amazon.com"
                                                            className="w-full max-w-md px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        />
                                                        <input
                                                            type="text"
                                                            value={microsoftTeamText}
                                                            onChange={(e) => setMicrosoftTeamText(e.target.value)}
                                                            placeholder="https://www.amazon.com"
                                                            className="w-full max-w-md px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        />
                                                    </div>
                                                </div>
                                                <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                                    <h1>Size:</h1>
                                                    <input
                                                        type="range"
                                                        min="10"
                                                        max="30"
                                                        value={meetingButtonSize}
                                                        onChange={(e) => setMeetingButtonSize(Number(e.target.value))}
                                                        className="md:w-64 w-56 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                                    />
                                                </div>
                                                <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                                    <h1>Padding Top:</h1>
                                                    <input
                                                        type="range"
                                                        min="5"
                                                        max="30"
                                                        value={meetingButtonPadding}
                                                        onChange={(e) => setMeetingButtonPadding(Number(e.target.value))}
                                                        className="md:w-64 w-56 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                                    />
                                                </div>
                                                <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                                    <h1>Text Color:</h1>
                                                    <input
                                                        type="color"
                                                        value={meetingTextColor}
                                                        onChange={(e) => setMeetingTextColor(e.target.value)}
                                                        className="w-16 cursor-pointer h-16 border-0"
                                                    />
                                                </div>
                                                <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                                    <h1>Background Color:</h1>
                                                    <input
                                                        type="color"
                                                        value={meetingBackgroundColor}
                                                        onChange={(e) => setMeetingBackgroundColor(e.target.value)}
                                                        className="w-16 cursor-pointer h-16 border-0"
                                                    />
                                                </div>
                                                <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                                    <h1>Border Radius:</h1>
                                                    <input
                                                        type="range"
                                                        min="0"
                                                        max="40"
                                                        value={meetingBorderRadius}
                                                        onChange={(e) => setMeetingBorderRadius(Number(e.target.value))}
                                                        className="md:w-64 w-56 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                                    />
                                                </div>
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="w-full mt-2">
                            <div className="bg-white border border-gray-200 rounded-lg mb-5 shadow hover:shadow-lg transition-shadow">
                                <button
                                    onClick={() => toggleGreenMessageSection('greenmessage')}
                                    className={`flex justify-between items-center w-full p-4 text-lg font-semibold text-left rounded-t-lg focus:outline-none transition-colors 
                                ${openGreenMessageSection === 'greenmessage' ? 'bg-gray-200 text-gray-800' : 'bg-gray-100 text-gray-600'}`}
                                >
                                    <span>Green Message</span>
                                    <span className={`transform transition-transform ${openGreenMessageSection === 'greenmessage' ? 'rotate-180' : ''}`}>
                                        ▼
                                    </span>
                                </button>
                                {openGreenMessageSection === 'greenmessage' && (
                                    <>
                                        <div className="flex flex-wrap justify-center items-center gap-4 p-4">
                                            <Image
                                                key={'hello'}
                                                alt='none'
                                                src={'data:image/png;base64,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'}
                                                width={40}
                                                height={40}
                                                onClick={() => handleGreenSelect(null)}
                                                className={`thumbnail ${greenImage === null ? 'selected' : ''}`}
                                                style={{ cursor: 'pointer', borderRadius: '20px', padding: '5px', border: greenImage === null ? '2px solid black' : 'none' }}
                                            />
                                            {imageOptions.map((image, index) => (
                                                <>
                                                    <Image
                                                        key={index}
                                                        src={image}
                                                        width={40}
                                                        height={40}
                                                        alt={`Option ${index + 1}`}
                                                        className="thumbnail"
                                                        onClick={() => handleGreenSelect(image)}
                                                        style={{ cursor: 'pointer', borderRadius: '20px', padding: '5px', border: greenImage === image ? '2px solid black' : 'none' }}
                                                    />
                                                </>
                                            ))}
                                        </div>
                                        <div className="flex md:flex-row flex-col justify-between items-center gap-2 md:gap-10 p-5">
                                            <p>Enter Your Message</p>
                                            <input
                                                type="text"
                                                value={greenMessageText}
                                                onChange={(e) => setGreenMessageText(e.target.value)}
                                                placeholder="Save the World"
                                                className=" md:w-[350px] w-full max-w-md px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                            <h1>Text Color:</h1>
                                            <input
                                                type="color"
                                                value={greenTextColor}
                                                onChange={(e) => setGreenTextColor(e.target.value)}
                                                className="w-16 cursor-pointer h-16 border-0"
                                            />
                                        </div>
                                        <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                            <h1>Gap Between Image and Text</h1>
                                            <input
                                                type="range"
                                                min="0"
                                                max="30"
                                                value={greenTextGap}
                                                onChange={(e) => setGreenTextGap(Number(e.target.value))}
                                                className="md:w-64 w-56 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                            />
                                        </div>
                                        <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                            <h1>Image Size:</h1>
                                            <input
                                                type="range"
                                                min="20"
                                                max="40"
                                                value={greenImageSize}
                                                onChange={(e) => setGreenImageSize(Number(e.target.value))}
                                                className="md:w-64 w-56 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                            />
                                        </div>
                                        <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                            <h1>Padding Top:</h1>
                                            <input
                                                type="range"
                                                min="5"
                                                max="30"
                                                value={greenTextPadding}
                                                onChange={(e) => setGreenTextPadding(Number(e.target.value))}
                                                className="md:w-64 w-56 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                            />
                                        </div>
                                        <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                            <h1>Font Size:</h1>
                                            <input
                                                type="range"
                                                min="10"
                                                max="15"
                                                value={greenFontSize}
                                                onChange={(e) => setGreenFontSize(Number(e.target.value))}
                                                className="md:w-64 w-56 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="bg-white border max-w-[596px] border-gray-200 mt-5 mb-5 rounded-lg shadow hover:shadow-lg transition-shadow">
                                <button
                                    onClick={() => toggleCalenderSection('calender')}
                                    className={`flex justify-between items-center w-full p-4 text-lg font-semibold text-left rounded-t-lg focus:outline-none transition-colors 
        ${openCalenderSection === 'calender' ? 'bg-gray-200 text-gray-800' : 'bg-gray-100 text-gray-600'}`}
                                >
                                    <span>Calendar And Events</span>
                                    <span className={`transform transition-transform ${openCalenderSection === 'calender' ? 'rotate-180' : ''}`}>
                                        ▼
                                    </span>
                                </button>
                                {openCalenderSection === 'calender' && (
                                    <>
                                        {/* Responsive Image Selection */}
                                        <div className="flex flex-wrap justify-center items-center gap-4 p-4">
                                            <Image
                                                key={'hello'}
                                                alt='none'
                                                src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIABAMAAAAGVsnJAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAGFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAABoAtTLAAAAB3RSTlMAHEduk7vhPzOP5QAAEGdJREFUeNrsmztbIjEUhpMB+qBgjYhsGwWlRVFpRcTUojC9O5Pz93e7aXwII57LMHkLW8nhO7d8QUUikUgkEolEIpFIJBKJkKBPRuOH1dt26wG8325Wr7NR36h6cDJ+3MK3+NXs2KOQjB5T2M1qdn60uh+/wV5sjjIGF09Qgs21ObIv30FJ/LJ3PJl/Az/i9bymxy/4rL4K9A0cxNKoSjNI4UD8fYVDcOrgF8ivaqr+gg9Tz6+/wFdPBPoWCmoogoaDAMddCQaAwEsF5V/PNEjmgETeq0T1TwENf1XT9C+4V8K5BEzkl8IhoPOhBHMLiMhvBnoOJGRG6PknQERmpJ6fNwL8+q91BOZAyqeRXf9r1w2HQM5fWfMfA2slhi6wsFBCaEJp/OphdN1vt9tK/f/T748eVlsozVSJIEmhFJvZdVt9g74Yv0EpvFUC0A5K8Lrb9tUXj2nFbkj0/JdNb13GSM8q1AD98nzvpBqnlWkFXSSLb+Cq0QoaaZnjY4TAW/kF0M8MorWcG8XHBPZg2UOyV/ln4i66pXXyJLkMNCheeAwgjBU7AeRWHUzipJaBIdX9bbgSrEWuQP6Ozm2bcnRAwjk9cfKS4A/ppZ2+ldYLm9QW3qWsJNCO3MLswE68EZQA/k4h0EnldIJG4BkDy+ZlpSSAtzyXb7ki4yx0fp4IvCsiEp7zh7OgJ2AJ9hb7Cpp/GGgFz8+mgSlNBeT9BKfcdfCM+2qiE6qDfEn4wm7F+h7nDLgWcBOxZpwBMxHPUSzbv86NiFE049qCvRViyEyZBHCnSOnwSKAVLj78hfBZ4eEE2dRzhmmoG2i/pCQpuQR0KuqxToe8H3UDBUBMGVgQN9/cCDPnvaEVgBXnzi5I4/0u74FSTimATDHiCBuBCyQACw06CbRkvlMbkknAhTqArE6QUa2BVupL7SnN5P2l2JmQSKCBsAMg7wSWIswLJYAzAnEmCDJDr88GP8hWiaCFPqHqVPTvtiboK1ELwYwlWImekXvguxwBIJeoJoLCSKwai+qGLSQJALUTaoR9i+i9lkHsgc+yBIDZCV0lBIAn02b1BFBgsUpgJloABV//2jt7/yiOJAzPrlhdOmAjpYO5s9K1sE062PBTOtjApiuwUar57H//LiNB98xXUfX+vBUo0u5OVz/9VlV3T7eVBFbxzq2witXnQRSAh6dRT93oAGAyVs8EADCVwcvYALDVBknAkOsAkHqD37gNCYDN0v2VAABgzepTQR8FAID+WjYVVIidXVOunGm3MgAsf+ANONQbAIMxwCOgDw1AfwNpy/IRUIUGoNqtOQY2wFNAAL4et/IVR0AdG4Cv5+7ViiNgHxqAB5Yx2/WyoC40AOUDvhny1UZAFRqABx+7XKsOGPLIy8HVF3BXqQfgi8IB0GHHLR9n+7gAfOH8bKUxcBU2CzzA7N8B0J3/M7cCAHx9IrtfZza0kAAg28Dgnb0e0AkA8FAGd1xDaavIAICPujUKoTwyAJTD5st/p40MAEYwxpe/IjIA+F/N4jRwyCMDwI+/OAi2oQFggPdLg2AlBED2aGkgfAkjICIAEAe6hXMhbWAAUMS5B1kCqsAAwL/OqAgvQ2ZBGwAAErnbRXlwKwAAqFi3KA8+hgWg5TjGEHMQKWIBwPF9C6hMlIBeAAAcxvUCCaij3eXDCd7FAhGAnwkKAIfyfLYEDAoAcEFUzi4EGgUAOBmsZxcClSAA2Q7cBewEC4Iz3lzczB3JZwZB0OXV1ZuZWn5uEARdXl29hHx2vHiUGgBwNGtmFt15VADAYCyP1o5OBQAWgWJWGnSrAgA7rpxVCZUqAHA8q2elQbkKAPzJdk7K0ckAwJ05zDkupNYBgH1XzJh3KUMCUMyra6sZGpjLApBtGGceNp0QAJwJtNM1sBECgHkepmtgpQQAK1oxWTaKKAAwlSwCLOn/AmaCA8CVXT1VA1tlALg97LGjFAA8u9NPHjNaALCm5RPrp1wLAO7R/bSw0YsBwGO6mpY4NGIA8AxnPU00j2IAsAq20xLhUgwAVrUBJCOMBm4XA8BNYnf1AgCAHRatJ7ZyALAKHqcEgftgp6YzAFzd1FOCQBUMgI8rvP7XThkvhTwA2XaKrkHIkFAADu0TnNUJAsDzggUNF/9EeJtAARaFgZLSRv9E+GoNALhVHAVLQQCY63p8FCwiATAUK50F046OgoMSABwGOA5CEBABgMPAaM83kgCwQ4uxteB9JACgMJ9SDZRja8FKGQBuF3tqrwwAk80/nccBoF7zcOxmZBowaALAcbAbmQZ0cQC4XfXcoX6koxpRAPhLRw6VWhQAVvdinFhWogBwHNyPq5pKZQC4a7luLkQBYL8ex80G5KIAcJVXj3L/oAoAB/hmVB7UqQLAiUA76r8aVQD4m/tReVAtBgAs+fHo9p4SfrkaABzgcugAjzzoDABYNRMqxjxAKQsAt20/JhEsZAFgussxmOSyAHCdV7FQpEEXAI5wR64ZU68LAKeCNScLqVMGgJM8dkArDQA3jp2kAwDb5QwH3CsDwALHOnFUAoBzYXYAhEolADjJGThXSKU3AG8t7+TI2QF7YQDYxzmny4U0ANw69pEyAMw3jxJlAFjiS3TA4AtAvzKAd+iAnVMt9AgAMKqGKk4VfO9Myo1/5ojJYucMgLsDWlcAzJXmHuulxhOAynzRpWYHKAPADmjYRdIAcP+yA6QBYIljlfAFwN8BR2kAMM1pOVBKA4CJbocOqKQBYAdwsiwNAJc67ABlANjb7IDSCwABBwgAwA7AGYO9MgA87zSwAwQA0HMA353s54D0bR1wAADWtq2DAxwVgAlI6IDCBQABAgQUABzgRwADIOAAPwD0HcD3JoZywN4BAAECPBVAnwC+N1EgDForgEAtIAEAE8AOEABAiAAGIJwDSmkA2AFeU2JPEQCBOUEHABwcUDkAIOAADwD0l8YYgIgOODrcnu7kAF4e1wcgOzfYICEAAGyQgC0ywgCwAxp2gC8A/pukGgEAtPYJbu4AAAcHgEoIA8Aaj3Gi87w1zd4BR3RA73BxpoFBogu7iHQB4FKHX5mRBoDne9ABSRsAfmmKX5uTBoBfm+NXC6UB4Naxj5QBYL7ZAaUwAOwA1slUSQPAr8/zAQrSAHCax0doKAPAb0VyttxIA8CHqPBJM8oAcOP4fzpdAHh815ZHafkDwAp/z0KZkjwAfJgaH6enDwAfp8cHKuoDsAX/w6mLvhdnmh2pyZhYXp1rbjy8+VhdZQVggWelrKUB4IOV+QBuaQXgJI8PV1cGgPuW3TSEuTjT5nh9vookFwWA9f1+5AHc0gDwsel8yYoyANwyTpeOugDwNTv2Fy1tPQFgdbO/auvSGQC+aosvW5MFgC9bs79u78oNAEa7/QYXLm6TOwB84SJfuSkNAF+5yZeTKgPA7WJP1QoAsJ0D2XDxshwA3BuF4dXbfHm2fxRM49/n0AaAL1/n6/cFAeDuaMdnr6UgAFwL1uPl8qgMALeKfdUoA8Bc86N3CwCAvNoxCBTj584Gg+vz3YNAmvJeYyGnANwh/ZSz/ks5AFjY2il6cS8HAAeBekrd1BrcnOpdCVRTKudeKASwrvEsxwaeXAwAbhK7q7S7O9neGGoOA0cxAFgD22lpY2NwZ5KvBtbTps96g2vzfDWwmtiEXAsA1sD9xP8vlQHgHmVijlIAsAb2UxvRSgHA7WmmriQPUgAw0feTTzwulAHYoqbxJyplAHbYnzx/UgsBwIndML0je2EAshvUdPZZynUB2CTmmUdNqQMAS3o5QzdrHQAY52LGLHInAwA/1jDrQ7kqAFlKrIGcC6ZSBQDul/tZwlGrAnABfTk2dHSiAGQ380L6AT4GzPgBwF3Zz5zZLcHRQQDgjmnmzSGkWgMAzgKqmdrZawDAD7afuaCeCgUAWAKG2ZV9ZXB7urntIA2akgo1CgCwmN/PVs9BAQAeyeXswZP29tfn2+fBaYF81gIAYBDsFny2l1MA7sVpka1QA2CbQAImisDR+t5E+yCYFuHT+t6cysbJTLdIQFIeFwCGmLMAblmlBcAOQvn0F7/b2ABwGjgs3eyTywDAPch2Dh0bCwCAc6X9bk1oAHi/YrG0khhyw4sz7UdAv9yFlQ4AOwB43le0MgBw97FtaMv3AQBwHgFzVgSQ8EoFgB1cZTI3EHZhAeAs5rjGhEoqNADYptlBEAb5rQYA5/Bk8yvCPigA3HX1Otlk2scEgAdvuc60cmpCAsDoDmtlE0MOAARNApq1ommqPO5OXv7Y5Wqu7AICwBnckK+WT6Q9KEDIJKBdEaYG7k10t0vom6UF0ZADAO4SCFXc4jHwNhoATG27/NvYyoASyHDyGAALB8DZyruVXqoBcLXyXQY7MQC2q3fOnRYAF6vv17sSAABiYLNshUULAIOHuxMCIDsYlCiXQgDsLLYrbcUBSIVBaqUEQGfwtYEA4K6qDEJLVACsNu1fKQPQGGy2CArAI7sbnQ66IaA3yK+UFCDdGmTYUQEACbSSwX0Ww56aHmR7lh6yNkwZaNs9N9EBuDAen7uIAPCFLpUBYT4A+B/jeOEbA/3f3t+mcK/GsEQV9pCl27ghMDUGlBl4WUagXoaNAz9aPhnXhGUQBbR/sENQHTxAkWKeDDVBckD77QoHYC3UAOhNKu6Ag+AGAFjTNg8h8DHGALDvlKdRakKu098aZRyeg4CZtH+gXbB5kR8BAAOPwy/6TIQzAPYIDHvPWRD7EMBLBF3uGAE5B7BHIH1yEAAAwBIBfxn43mGpAhYK954CYJ+a89bJoXDIAAAAo+TLXwhvPEDkdbJP/gKYmm8z+nzLov8kp3HIq+VvfQNASre+ApTSK4cMGJJgmyfwy4nP7vy3a7wED7i1v3XYlQ8eMGq/9zLNBXjAMgSxArroIHvAvv/73Hcy7osNrzzan0rfYtQ+Gn7/pf2QhbkPgpT+MM3//I/y5ndp/sxWtl9i7dnm16n+ylcl7lf4uSbKpPwX64sVwx/+GLjbqiYBKbSVPx4A9pGAhCBfhTUY/m7Lk5ubRNb/ZIi//9rcWWL7w1L97ZNvXi82huC7Q2J763psG9u7Yjb92P1cBNvHQrbht3zWl/8M4u8nAFyfLHfB5t/w1SQA/jLALuDms70KslGTbfjzWTbSnvwCzYcMwCkbYPv7egQGm+cfUszDW1gI2Ya/rvP/3/o3CcxZAHmijjl4ff04+4o9fv4a+57XgUJs1mH7/P71i+sfHj9+nGX/+/PD8xev34MboQTyDgW25p8B8nSVg0GZ4RwM7e1TFsp+FWi/Q11kZ10WzTa2HuDtOAIpoUH79Tyg336evLfXP2i/pwcE9F8xGnL7hXJC/fyPV3Es7VUW3s4MPTD8lAnY1iAcwnqrVjDQD39sMKcrL39sTw7K+BusabPxSruafXewVX99CPS7n5WAA6L1Art+OBh+y6RtA8t8YEMg+s12OfDeCn0X3M3rfZ3m82aPw+Tm/w7wq9m0Zd9315me8a6PDyOXj7U7H5b/74D8d7CJQt+evHjz4aHGv3iW/TNs8+T5z2/ev//8OQ13n4fPf79/9/v1szw72clOdrKTnexkJzvZyU52spOd7GQn+xb2X6SlKgGMhmbDAAAAAElFTkSuQmCC'}
                                                width={40}
                                                height={40}
                                                onClick={() => handleCalenderSelect(null)}
                                                className={`thumbnail ${calenderImage === null ? 'selected' : ''}`}
                                                style={{ cursor: 'pointer', borderRadius: '20px', padding: '5px', border: calenderImage === null ? '2px solid black' : 'none' }}
                                            />
                                            {calenderImageOptions.map((image, index) => (
                                                <Image
                                                    key={index}
                                                    src={image}
                                                    width={40}
                                                    height={40}
                                                    alt={`Option ${index + 1}`}
                                                    className="thumbnail cursor-pointer"
                                                    onClick={() => handleCalenderSelect(image)}
                                                    style={{
                                                        borderRadius: calenderImage === image ? '30%' : '0%',
                                                        padding: '5px',
                                                        border: calenderImage === image ? '2px solid black' : 'none',
                                                    }}
                                                />
                                            ))}
                                        </div>

                                        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-10 p-5">
                                            <p>Enter Your Message:</p>
                                            <input
                                                type="text"
                                                value={calenderText}
                                                onChange={(e) => setCalenderText(e.target.value)}
                                                placeholder="Save the World"
                                                className="w-full md:w-[350px] px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-10 p-5">
                                            <p>CTA:</p>
                                            <input
                                                type="text"
                                                value={ctaText}
                                                onChange={(e) => setCtaText(e.target.value)}
                                                placeholder="Save the World"
                                                className="w-full md:w-[350px] px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-10 p-5">
                                            <p>Link:</p>
                                            <input
                                                type="text"
                                                value={calenderLink}
                                                onChange={(e) => setCalenderLink(e.target.value)}
                                                placeholder="Save the World"
                                                className="w-full md:w-[350px] px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                            <h1>Text Color:</h1>
                                            <input
                                                type="color"
                                                value={calenderTextColor}
                                                onChange={(e) => setCalenderTextColor(e.target.value)}
                                                className="w-16 cursor-pointer h-16 border-0"
                                            />
                                        </div>
                                        <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                            <h1>CTA Text Color:</h1>
                                            <input
                                                type="color"
                                                value={ctaTextColor}
                                                onChange={(e) => setCtaTextColor(e.target.value)}
                                                className="w-16 cursor-pointer h-16 border-0"
                                            />
                                        </div>
                                        <div className="space-y-4 p-4">
                                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                                                <h1>Gap Between Image and Text</h1>
                                                <input
                                                    type="range"
                                                    min="0"
                                                    max="30"
                                                    value={calenderTextGap}
                                                    onChange={(e) => setCalenderTextGap(Number(e.target.value))}
                                                    className="w-full sm:w-64 h-2 bg-gray-200 rounded-lg cursor-pointer"
                                                />
                                            </div>
                                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                                                <h1>Gap Between Text and CTA</h1>
                                                <input
                                                    type="range"
                                                    min="0"
                                                    max="30"
                                                    value={ctaTextGap}
                                                    onChange={(e) => setCtaTextGap(Number(e.target.value))}
                                                    className="w-full sm:w-64 h-2 bg-gray-200 rounded-lg cursor-pointer"
                                                />
                                            </div>
                                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                                                <h1>Image Size:</h1>
                                                <input
                                                    type="range"
                                                    min="20"
                                                    max="40"
                                                    value={calenderImageSize}
                                                    onChange={(e) => setCalenderImageSize(Number(e.target.value))}
                                                    className="w-full sm:w-64 h-2 bg-gray-200 rounded-lg cursor-pointer"
                                                />
                                            </div>

                                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                                                <h1>Padding Top:</h1>
                                                <input
                                                    type="range"
                                                    min="5"
                                                    max="30"
                                                    value={calenderTextPadding}
                                                    onChange={(e) => setCalenderTextPadding(Number(e.target.value))}
                                                    className="w-full sm:w-64 h-2 bg-gray-200 rounded-lg cursor-pointer"
                                                />
                                            </div>

                                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                                                <h1>Font Size:</h1>
                                                <input
                                                    type="range"
                                                    min="10"
                                                    max="15"
                                                    value={calenderTextSize}
                                                    onChange={(e) => setCalenderTextSize(Number(e.target.value))}
                                                    className="w-full sm:w-64 h-2 bg-gray-200 rounded-lg cursor-pointer"
                                                />
                                            </div>

                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="bg-white border max-w-[599px] border-gray-200 mt-5 mb-5 rounded-lg shadow hover:shadow-lg transition-shadow">
                                <button
                                    onClick={() => toggleDisclaimerSection('disclaimer')}
                                    className={`flex justify-between items-center w-full p-4 text-lg font-semibold text-left rounded-t-lg focus:outline-none transition-colors 
        ${openDisclaimerSection === 'calender' ? 'bg-gray-200 text-gray-800' : 'bg-gray-100 text-gray-600'}`}
                                >
                                    <span>Disclaimer</span>
                                    <span className={`transform transition-transform ${openDisclaimerSection === 'disclaimer' ? 'rotate-180' : ''}`}>
                                        ▼
                                    </span>
                                </button>
                                {openDisclaimerSection === 'disclaimer' && (
                                    <>
                                        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-10 p-5">
                                            <p>Enter Disclaimer:</p>
                                            <input
                                                type="text"
                                                value={disclaimerText}
                                                onChange={(e) => setDisclaimerText(e.target.value)}
                                                placeholder="Save the World"
                                                className="w-full md:w-[350px] px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                            <h1>Width:</h1>
                                            <input
                                                type="range"
                                                min="10"
                                                max="600"
                                                value={disclaimerTextWidth}
                                                onChange={(e) => setDisclaimerTextWidth(Number(e.target.value))}
                                                className="md:w-64 w-56 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                            />
                                        </div>
                                        <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                            <h1>Font Size:</h1>
                                            <input
                                                type="range"
                                                min="10"
                                                max="15"
                                                value={disclaimerTextSize}
                                                onChange={(e) => setDisclaimerTextSize(Number(e.target.value))}
                                                className="md:w-64 w-56 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                            />
                                        </div>
                                        <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                            <h1>Text Color:</h1>
                                            <input
                                                type="color"
                                                value={disclaimerTextColor}
                                                onChange={(e) => setDisclaimerTextColor(e.target.value)}
                                                className="w-16 cursor-pointer h-16 border-0"
                                            />
                                        </div>
                                        <div className='flex md:flex-row flex-col justify-between items-center gap-3 md:gap-10 mt-5 pl-5 pr-5 pb-4'>
                                            <h1>Padding Top:</h1>
                                            <input
                                                type="range"
                                                min="5"
                                                max="30"
                                                value={disclaimerTextPadding}
                                                onChange={(e) => setDisclaimerTextPadding(Number(e.target.value))}
                                                className="w-full sm:w-64 h-2 bg-gray-200 rounded-lg cursor-pointer"
                                            />
                                        </div>
                                    </>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Links