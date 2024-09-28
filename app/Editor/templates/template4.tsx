import { useRef, useState } from 'react';
import { faInstagram, faFacebook, faTiktok, faLinkedin, faPinterest, faReddit } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    displayText: string,
    nameText: string,
    fontSize: number,
    selectedFont: string,
    bgColor: string,
    textColor: string,
    socialSize: number,
    socialColor: string,
}


export default function Template4({
    name,
    links,
    title,
    company,
    phone,
    email,
    imageSize,
    changeImg,
    displayText,
    nameText,
    fontSize,
    selectedFont,
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
        <div >
            <div ref={signatureRef} className="p-6 border-2 border-indigo-200  md:overflow-hidden overflow-y-auto rounded-lg shadow-lg space-y-4" style={{
                backgroundColor: bgColor,
                color: textColor,
                fontFamily: selectedFont,
                fontSize: `${fontSize}px`,
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '1px 1px 2px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <div className="flex items-center" style={{ display: 'flex', alignItems: 'center', margin: 0 }}>
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
                    <div style={{ fontFamily: selectedFont, fontSize: `${fontSize}px`, }}>

                        <p className=" font-semibold" style={{ fontWeight: '600' }}>{name}</p>
                        <p >{title}</p>
                        <p className="mb-2">{company}</p>
                    </div>
                </div>

                <div className=" my-4" style={{ border: '1px solid black', marginTop: '16px', marginBottom: '16px', }}></div>

                <div className="space-y-2" style={{ fontFamily: selectedFont, fontSize: `${fontSize}px` }} >
                    <p>📞 {phone}</p>
                    <p>✉️ {email}</p>
                    {displayText && (
                        <button onClick={() => window.open(`https://www.${encodeURIComponent(displayText)}.com`, '_blank')} className='flex flex-row items-center gap-1'><Image
                            width={20}
                            height={20}
                            src={imageUrl}
                            alt="Specific Image"
                            className=" object-contain rounded-lg shadow-lg ml-[2px]" style={{ fontFamily: selectedFont, width: `${fontSize}px` }} /><h2 >{nameText}</h2></button >
                    )}
                </div>
                <div className="flex flex-row gap-5 mt-4" style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>

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
        </div>
    );
}
