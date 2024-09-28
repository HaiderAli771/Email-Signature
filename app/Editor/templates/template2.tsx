import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ILinks } from '@/app/types';
import {
    faInstagram,
    faFacebook,
    faTiktok,
    faLinkedin,
    faPinterest,
    faReddit,
} from '@fortawesome/free-brands-svg-icons';
const imageUrl = '/addon.png';

interface Props {
    name: string;
    title: string;
    company: string;
    phone: string;
    email: string;
    imageSize: number;
    changeImg: string | null;
    links: ILinks;
    displayText: string;
    nameText: string,
    selectedFont: string,
    fontSize: number,
    bgColor: string,
    textColor: string,
    socialSize: number,
    socialColor: string,
}
import Image from 'next/image';
import Link from 'next/link';
export default function template2({ name,
    title,
    company,
    phone,
    email,
    imageSize,
    changeImg,
    displayText,
    nameText,
    selectedFont,
    fontSize,
    links,
    bgColor,
    textColor,
    socialColor,
    socialSize, }: Props) {
    const signatureRef = useRef<HTMLDivElement>(null);

    // Function to copy the template HTML to clipboard as rich HTML
    const copyToClipboard = () => {
        if (signatureRef.current) {
            const signatureHTML = signatureRef.current.outerHTML;

            const blob = new Blob([signatureHTML], { type: 'text/html' });
            const clipboardItem = new ClipboardItem({ 'text/html': blob });

            navigator.clipboard.write([clipboardItem]).then(() => {
                alert('Signature copied to clipboard! You can now paste it into Gmail.');
            }).catch(err => {
                console.error('Failed to copy signature: ', err);
            });
        }
    };

    return (
        <div>
            <div ref={signatureRef} className=" rounded-xl md:overflow-hidden overflow-y-auto shadow-lg p-6 flex items-center" style={{
                backgroundColor: bgColor,
                color: textColor,
                fontFamily: selectedFont,
                fontSize: `${fontSize}px`,
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '1px 1px 2px',
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
            }}>
                {changeImg && (
                    <div style={{ marginRight: '10px', }}>
                        <Image
                            src={changeImg}
                            className="rounded-full"
                            alt="Profile"
                            width={imageSize}
                            height={imageSize}

                        />
                    </div>
                )}

                <div className="flex-grow" style={{ display: 'flex', flex: '1' }}>
                    <div style={{ fontFamily: selectedFont, fontSize: `${fontSize}px` }}>

                        <p className=" font-semibold mb-1" style={{ fontWeight: '600' }} >{name}</p>
                        <p className=" " >{title}</p>
                        <p className=" " >{company}</p>

                        <p className=" " >
                            <span className="font-bold" >📞</span> {phone}
                        </p>
                        <p className=" ">
                            <span className="font-bold">✉️</span> {email}
                        </p>
                        {displayText && (
                            <Link href={(`https://www.${encodeURIComponent(displayText)}.com`)} className='flex flex-row items-center gap-1' style={{ textDecoration: 'none', textDecorationColor: 'none', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '4px' }}><Image
                                width={20}
                                height={20}
                                src={imageUrl}
                                alt="Specific Image"
                                className=" ml-[2px] object-contain rounded-lg shadow-lg" style={{ fontFamily: selectedFont, width: `${fontSize}px`, }} /><h2 className='' style={{ fontFamily: selectedFont, fontSize: `${fontSize}px`, textDecoration: 'none', color: textColor }}>{nameText}</h2></Link >
                        )}
                    </div>
                </div>
                <div className="border-l pl-4 gap-2 flex flex-col" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }} >
                    {links.instagram && (
                        <Link href={`https://www.instagram.com/${links.instagram}`} target="_blank">
                            <div className="p-[8px] rounded-full flex items-center justify-center" style={{
                                backgroundColor: socialColor,
                                width: `${socialSize + 16}px`,
                                height: `${socialSize + 16}px`,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                            }}>
                                <Image
                                    src='/icons8-instagram.svg'
                                    alt={`${name} Icon`}
                                    width={socialSize}
                                    height={socialSize}
                                    style={{ width: socialSize, height: socialSize }}
                                />
                            </div>
                        </Link>
                    )}

                    {links.facebook && (
                        <Link href={`https://www.facebook.com/${links.facebook}`} target="_blank">
                            <div className="p-[8px] rounded-full flex items-center justify-center" style={{
                                backgroundColor: socialColor,
                                width: `${socialSize + 16}px`,
                                height: `${socialSize + 16}px`,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                            }}>
                                <Image
                                    src='/icons8-facebook-64.png'
                                    alt={`${name} Icon`}
                                    width={socialSize}
                                    height={socialSize}
                                    style={{ width: socialSize, height: socialSize }}
                                />
                            </div>
                        </Link>
                    )}

                    {links.tiktok && (
                        <Link href={`https://www.tiktok.com/@${links.tiktok}`} target="_blank">
                            <div className="p-[8px] rounded-full flex items-center justify-center" style={{
                                backgroundColor: socialColor,
                                width: `${socialSize + 16}px`,
                                height: `${socialSize + 16}px`,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                            }}>
                                <Image
                                    src='/icons8-tiktok (1).svg'
                                    alt={`${name} Icon`}
                                    width={socialSize}
                                    height={socialSize}
                                    style={{ width: socialSize, height: socialSize }}
                                />
                            </div>
                        </Link>
                    )}

                    {links.linkedin && (
                        <Link href={`https://www.linkedin.com/in/${links.linkedin}`} target="_blank">
                            <div className="p-[8px] rounded-full flex items-center justify-center" style={{
                                backgroundColor: socialColor,
                                width: `${socialSize + 16}px`,
                                height: `${socialSize + 16}px`,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                            }}>
                                <Image
                                    src='/icons8-linkedin-50.png'
                                    alt={`${name} Icon`}
                                    width={socialSize}
                                    height={socialSize}
                                    style={{ width: socialSize, height: socialSize }}
                                />
                            </div>
                        </Link>
                    )}

                    {links.pinterest && (
                        <Link href={`https://www.pinterest.com/${links.pinterest}`} target="_blank">
                            <div className="p-[8px] rounded-full flex items-center justify-center" style={{
                                backgroundColor: socialColor,
                                width: `${socialSize + 16}px`,
                                height: `${socialSize + 16}px`,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                            }}>
                                <Image
                                    src='/icons8-pinterest-96.png'
                                    alt={`${name} Icon`}
                                    width={socialSize}
                                    height={socialSize}
                                    style={{ width: socialSize, height: socialSize }}
                                />
                            </div>
                        </Link>
                    )}

                    {links.reddit && (
                        <Link href={`https://www.reddit.com/r/${links.reddit}`} target="_blank">
                            <div className="p-[8px] rounded-full flex items-center justify-center" style={{
                                backgroundColor: socialColor,
                                width: `${socialSize + 16}px`,
                                height: `${socialSize + 16}px`,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                            }}>
                                <Image
                                    src='/icons8-reddit-50.png'
                                    alt={`${name} Icon`}
                                    width={socialSize}
                                    height={socialSize}
                                    style={{ width: socialSize, height: socialSize }}
                                />
                            </div>
                        </Link>
                    )}
                </div>
            </div>
            <button
                onClick={copyToClipboard}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            >
                Copy Template to Clipboard
            </button>
        </div >
    );
}