import React, { useRef } from 'react';
import Image from 'next/image';
import { ILinks } from '@/app/types';
import Link from 'next/link';

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
    nameText: string;
    selectedFont: string;
    fontSize: number;
    bgColor: string;
    textColor: string;
    socialSize: number;
    socialColor: string;
}

export default function SignatureTemplate1({
    name,
    title,
    company,
    phone,
    email,
    imageSize,
    changeImg,
    links,
    displayText,
    nameText,
    selectedFont,
    fontSize,
    bgColor,
    textColor,
    socialSize,
    socialColor,
}: Props) {
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
            <div
                ref={signatureRef}
                className=""
                style={{
                    backgroundColor: bgColor,
                    color: textColor,
                    fontFamily: selectedFont,
                    fontSize: `${fontSize}px`,
                    width: 'fit-content',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '1px 1px 1px',
                    padding: '24px',
                    display: 'flex',
                    alignItems: 'center',

                }}
            >
                {changeImg && (
                    <div style={{ marginRight: '10px', }}>
                        <Image
                            src={changeImg}
                            className="rounded-full"
                            style={{
                                borderRadius: '50%',
                            }}
                            alt="Profile"
                            width={imageSize}
                            height={imageSize}

                        />
                    </div>
                )}

                <div style={{ backgroundColor: bgColor, }}>
                    <p className="font-semibold mb-1" style={{ margin: 0, backgroundColor: bgColor, fontWeight: '600' }}>{name}</p>
                    <p style={{ margin: '0 0 8px', backgroundColor: bgColor, }}>{title}</p>
                    <p style={{ margin: '0 0 8px', backgroundColor: bgColor, }}>{company}</p>
                    <p style={{ margin: '0 0 8px', backgroundColor: bgColor, }}>
                        📞 {phone}
                    </p>
                    <h5 style={{ margin: '0 0 8px', backgroundColor: bgColor, }}>
                        ✉️ {email}
                    </h5>

                    {displayText && (
                        <Link href={(`https://www.${encodeURIComponent(displayText)}.com`)}
                            style={{ display: 'flex', alignItems: 'center', gap: '8px', border: 'none', cursor: 'pointer', textDecoration: 'none', color: textColor, }}
                        >
                            <Image
                                width={20}
                                height={20}
                                src={imageUrl}
                                alt="Specific Image"
                                className="object-contain rounded-lg shadow-lg"
                            />
                            <h2 className="text-sm" style={{ fontSize: `${fontSize}px`, margin: 0, backgroundColor: bgColor, }}>
                                {nameText}
                            </h2>
                        </Link>
                    )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '20px' }}
                >
                    {links.instagram && (
                        <div style={{ paddingRight: '10px' }}>
                            <Link href={`https://www.instagram.com/${links.instagram}`} target="_blank">
                                <div
                                    style={{
                                        backgroundColor: socialColor,
                                        width: `${socialSize + 16}px`,
                                        height: `${socialSize + 16}px`,
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Image
                                        src='/icons8-instagram.svg'
                                        alt="Instagram"
                                        width={socialSize}
                                        height={socialSize}
                                        style={{
                                            display: 'block',
                                            width: `${socialSize}px`,
                                            height: `${socialSize}px`,
                                        }}
                                    />
                                </div>
                            </Link>
                        </div >
                    )
                    }

                    {
                        links.facebook && (
                            <div style={{ paddingRight: '10px' }}>
                                <Link href={`https://www.facebook.com/${links.facebook}`} target="_blank">
                                    <div
                                        style={{
                                            backgroundColor: socialColor,
                                            width: `${socialSize + 16}px`,
                                            height: `${socialSize + 16}px`,
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Image
                                            src='/icons8-facebook-64.png'
                                            alt="Facebook"
                                            width={socialSize}
                                            height={socialSize}
                                            style={{
                                                display: 'block',
                                                width: `${socialSize}px`,
                                                height: `${socialSize}px`,
                                            }}
                                        />
                                    </div>
                                </Link>
                            </div>
                        )
                    }

                    {
                        links.tiktok && (
                            <div style={{ paddingRight: '10px' }}>
                                <Link href={`https://www.tiktok.com/@${links.tiktok}`} target="_blank">
                                    <div
                                        style={{
                                            backgroundColor: socialColor,
                                            width: `${socialSize + 16}px`,
                                            height: `${socialSize + 16}px`,
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Image
                                            src='/icons8-tiktok (1).svg'
                                            alt="TikTok"
                                            width={socialSize}
                                            height={socialSize}
                                            style={{
                                                display: 'block',
                                                width: `${socialSize}px`,
                                                height: `${socialSize}px`,
                                            }}
                                        />
                                    </div>
                                </Link>
                            </div>
                        )
                    }

                    {
                        links.linkedin && (
                            <div style={{ paddingRight: '10px' }}>
                                <Link href={`https://www.linkedin.com/in/${links.linkedin}`} target="_blank">
                                    <div
                                        style={{
                                            backgroundColor: socialColor,
                                            width: `${socialSize + 16}px`,
                                            height: `${socialSize + 16}px`,
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Image
                                            src='/icons8-linkedin-50.png'
                                            alt="LinkedIn"
                                            width={socialSize}
                                            height={socialSize}
                                            style={{
                                                display: 'block',
                                                width: `${socialSize}px`,
                                                height: `${socialSize}px`,
                                            }}
                                        />
                                    </div>
                                </Link>
                            </div>
                        )
                    }

                    {
                        links.pinterest && (
                            <div style={{ paddingRight: '10px' }}>
                                <Link href={`https://www.pinterest.com/${links.pinterest}`} target="_blank">
                                    <div
                                        style={{
                                            backgroundColor: socialColor,
                                            width: `${socialSize + 16}px`,
                                            height: `${socialSize + 16}px`,
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Image
                                            src='/icons8-pinterest-96.png'
                                            alt="Pinterest"
                                            width={socialSize}
                                            height={socialSize}
                                            style={{
                                                display: 'block',
                                                width: `${socialSize}px`,
                                                height: `${socialSize}px`,
                                            }}
                                        />
                                    </div>
                                </Link>
                            </div>
                        )
                    }

                    {
                        links.reddit && (
                            <div style={{ paddingRight: '10px' }}>
                                <Link href={`https://www.reddit.com/r/${links.reddit}`} target="_blank">
                                    <div
                                        style={{
                                            backgroundColor: socialColor,
                                            width: `${socialSize + 16}px`,
                                            height: `${socialSize + 16}px`,
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Image
                                            src='/icons8-reddit-50.png'
                                            alt="Reddit"
                                            width={socialSize}
                                            height={socialSize}
                                            style={{
                                                display: 'block',
                                                width: `${socialSize}px`,
                                                height: `${socialSize}px`,
                                            }}
                                        />
                                    </div>
                                </Link>
                            </div>
                        )
                    }
                </div >
            </div >

            <button
                onClick={copyToClipboard}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            >
                Copy Template to Clipboard
            </button>
        </div >
    );
}
