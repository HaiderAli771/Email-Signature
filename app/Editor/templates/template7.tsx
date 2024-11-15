import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ILinks } from '@/app/Editor/types';


interface Props {
    name: string;
    title: string;
    company: string;
    phone: string;
    email: string;
    imageSize: number;
    changeImg: string | null;
    bannerImg: string | null;
    links: ILinks;
    displayText: string;
    nameText: string;
    selectedFont: string;
    fontSize: number;
    bgColor: string;
    textColor: string;
    socialSize: number;
    socialColor: string;
    nameColor: string;
    bannerLink: string,
    handleImageError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void,
    isUploadedFromComputer?: boolean,
    signatureRef?: React.RefObject<HTMLDivElement>;
    dribbleLink: string,
    behanceLink: string,
    linkedinLink: string,
    instagramLink: string,
    patreonLink: string,
    facebookLink: string,
    youtubeLink: string,
    twitterLink: string,
    pinterestLink: string,
    vimeoLink: string,
    socialButtonSize: number,
    amazonLink: string,
    appStoreLink: string,
    ebayLink: string,
    googleBussinessLink: string,
    retailButtonSize: number,
    socialButtonPadding: number,
    retailButtonPadding: number,
    signature: string,
    signatureSize: number,
    signatureColor: string,
    zoomLink: string,
    zoomText: string,
    meetingButtonSize: number,
    meetingButtonPadding: number,
    googleMeetLink: string,
    googleMeetText: string,
    showZoom: boolean,
    selectedOption?: string | null,
    skypeText?: string
    microsoftTeamLink: string,
    microsoftTeamText?: string,
    meetingTextColor: string,
    meetingBorderRadius?: number,
    greenImage?: string | null,
    greenMessageText?: string,
    meetingBackgroundColor?: string,
    greenTextGap?: number,
    greenImageSize?: number,
    greenFontSize?: number,
    greenTextPadding?: number,
    calenderImage?: string | null,
    calenderText?: string,
    calenderTextGap?: number,
    calenderImageSize?: number,
    calenderTextPadding?: number,
    calenderTextSize?: number,
    greenTextColor?: string,
    calenderTextColor?: string,
    calenderLink: string,
    ctaText?: string,
    ctaTextColor?: string,
    ctaTextGap?: number,
    disclaimerText?: string,
    disclaimerTextWidth?: number,
    disclaimerTextSize?: number,
    disclaimerTextColor?: string,
    disclaimerTextPadding?: number,
}

export default function SignatureTemplate7({
    name,
    title,
    company,
    phone,
    email,
    imageSize,
    changeImg,
    bannerImg,
    links,
    displayText,
    nameText,
    selectedFont,
    fontSize,
    bgColor,
    textColor,
    socialSize,
    socialColor,
    nameColor,
    bannerLink,
    handleImageError,
    isUploadedFromComputer,
    signatureRef,
    dribbleLink,
    behanceLink,
    linkedinLink,
    patreonLink,
    youtubeLink,
    facebookLink,
    instagramLink,
    twitterLink,
    pinterestLink,
    vimeoLink,
    socialButtonSize,
    amazonLink,
    appStoreLink,
    ebayLink,
    googleBussinessLink,
    retailButtonSize,
    socialButtonPadding,
    retailButtonPadding,
    signatureSize,
    signature,
    signatureColor,
    zoomLink,
    zoomText,
    meetingButtonSize,
    meetingButtonPadding,
    googleMeetLink,
    googleMeetText,
    showZoom,
    selectedOption,
    skypeText,
    microsoftTeamLink,
    microsoftTeamText,
    meetingTextColor,
    meetingBorderRadius,
    meetingBackgroundColor,
    greenImage,
    greenMessageText,
    greenTextGap,
    greenImageSize,
    greenFontSize,
    greenTextPadding,
    calenderImage,
    calenderText,
    calenderTextGap,
    calenderImageSize,
    calenderTextPadding,
    calenderTextSize,
    greenTextColor,
    calenderTextColor,
    calenderLink,
    ctaText,
    ctaTextColor,
    ctaTextGap,
    disclaimerText,
    disclaimerTextWidth,
    disclaimerTextSize,
    disclaimerTextColor,
    disclaimerTextPadding,
}: Props) {
    return (
        <>
            <div ref={signatureRef} className='xl:sticky' style={{ maxWidth: '520px', fontFamily: selectedFont, backgroundColor: bgColor, padding: '20px', color: textColor, borderRadius: '10px', overflowX: 'auto', }}>
                <div style={{ display: 'flex', width: 'fit-content', }}>
                    <div style={{ verticalAlign: 'middle', marginTop: 'auto', marginBottom: 'auto' }}>
                        {changeImg && (
                            <div style={{ margin: 'auto', textAlign: 'center', marginRight: '20px' }}>
                                <Image
                                    src={changeImg}
                                    alt="Profile"
                                    width={imageSize}
                                    height={imageSize}
                                    style={{ margin: 'auto' }}
                                />
                            </div>
                        )}

                    </div>
                    <div style={{ verticalAlign: 'middle', marginRight: 'auto' }}>
                        <p style={{ color: nameColor, fontWeight: '700', fontSize: `${fontSize}px`, lineHeight: '1.4', margin: 'auto' }}>
                            {name}
                        </p>
                        <p style={{ paddingBottom: '6px', fontSize: `${fontSize - 2}px`, margin: 'auto' }}>
                            {title} | {company}
                        </p>
                        <p style={{ paddingBottom: '6px', fontSize: `${fontSize - 2}px`, margin: 'auto' }}>
                            <span style={{ fontWeight: '600' }}>p:</span> {phone}
                        </p>
                        <p style={{ paddingBottom: '6px', fontSize: `${fontSize - 2}px`, margin: 'auto' }}>
                            <span style={{ fontWeight: '600' }}>e:</span> {email}
                        </p>
                        {displayText && (
                            <div style={{}}>
                                <Link
                                    href={`https://www.${encodeURIComponent(displayText)}.com`}
                                    target="_blank"
                                    style={{ textDecoration: 'none', fontSize: `${fontSize}px`, }}
                                >
                                    w: {nameText}
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
                <div style={{ display: 'flex', paddingTop: '20px', verticalAlign: 'middle' }}>
                    {links.instagram && (
                        <Link href={`https://www.instagram.com/${links.instagram}`} target="_blank">
                            <div className='pb-1'
                                style={{
                                    backgroundColor: socialColor,
                                    // width: `${socialSize}px`,
                                    // height: `${socialSize}px`,
                                    width: '65px',
                                    // height: '25px',
                                    textAlign: 'center',
                                    borderRadius: '5px',
                                    paddingTop: '5px',
                                    marginRight: '3px',

                                }}
                            >
                                <Image
                                    src="data:image/png;base64,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"
                                    alt="Instagram"
                                    width={socialSize}
                                    height={socialSize}
                                    style={{ display: 'block', verticalAlign: 'middle', margin: 'auto' }}
                                />
                            </div>
                        </Link>
                    )}
                    {links.facebook && (
                        <div style={{ paddingBottom: '10px', textAlign: 'center' }}>
                            <Link href={`https://www.facebook.com/${links.facebook}`} target="_blank">
                                <div className='pb-1'
                                    style={{
                                        backgroundColor: socialColor,
                                        // width: `${socialSize}px`,
                                        // height: `${socialSize}px`,
                                        width: '65px',
                                        // height: '25px',
                                        textAlign: 'center',
                                        borderRadius: '5px',
                                        paddingTop: '5px',
                                        marginRight: '3px',

                                    }}
                                >
                                    <Image
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAJFBMVEVHcEz///////////////////////////////////////////8Uel1nAAAAC3RSTlMACiE6RWJ3iKPL4/2e55kAAAChSURBVHja7dbLCgMhDIXhGHWMOe//vi1ScApdjB56g3xLF78QXURC+Be5Hg9F1qk5JpVFyfCkyBrtoALJwQU6uEAFF0hOBgrIgLGBjmnrIzlOurW7IitwYrIBkycyYPLZQLUBU2/DxSkqpq13zO8MuJABYwOVDSgZcCEDxgaqXKHMCIbcBpzYOMmy5MXVEYhABL4ScExJNujRHo4c+374eTfT3iB+V7Ic5AAAAABJRU5ErkJggg=="
                                        alt="Facebook"
                                        width={socialSize}
                                        height={socialSize}
                                        style={{ display: 'block', verticalAlign: 'middle', margin: 'auto' }}
                                    />
                                </div>
                            </Link>
                        </div>
                    )}
                    {links.tiktok && (
                        <div style={{ paddingBottom: '10px', textAlign: 'center' }}>
                            <Link href={`https://www.tiktok.com/@${links.tiktok}`} target="_blank">
                                <div className='pb-1'
                                    style={{
                                        backgroundColor: socialColor,
                                        // width: `${socialSize}px`,
                                        // height: `${socialSize}px`,
                                        width: '65px',
                                        // height: '25px',
                                        textAlign: 'center',
                                        borderRadius: '5px',
                                        paddingTop: '5px',
                                        marginRight: '3px',

                                    }}
                                >
                                    <Image
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAJ1BMVEVHcEz//////////v///v///v7//v7//v7//v///////v///////v6hEWneAAAAC3RSTlMABBhBZIGWp83n8pXIixAAAAEDSURBVHja7dbBbsMgDIBhbBOwwe//vKPdLLZCin3bob96CvpEEyQn6dNdfYRxQlGi32GcUJyUOBEMEy1xojlOGgWIleNEK4aJtkIYIJabcJxAllsCVFiuhTwWKrfxW0CWPtqQu5D7IxVhlstDSJ7gJw9BMeAlwCbcJD/FPGY4EpApKrqeGM1NrpQ8BIota00+ktiWG3qJzGHiJboZWeDcBec1fE/YVmFeo/ekbHYpRmRLaL0XbEZ4JwBkeWL1NJLz67lc/TT4gf+cPtYpBNI+bPY3AKm0Ic5zktTqoykY0tmMDJzeLdR0SQ4jH/lVMKZTWX4DyXACNi91JFzIwIH8l0+bLw6jIBvwyzNCAAAAAElFTkSuQmCC"
                                        alt="TikTok"
                                        width={socialSize}
                                        height={socialSize}
                                        style={{ display: 'block', verticalAlign: 'middle', margin: 'auto' }}
                                    />
                                </div>
                            </Link>
                        </div>
                    )}

                    {links.linkedin && (
                        <div style={{ paddingBottom: '10px', textAlign: 'center' }}>
                            <Link href={`https://www.linkedin.com/${links.linkedin}`} target="_blank">
                                <div className='pb-1'
                                    style={{
                                        backgroundColor: socialColor,
                                        // width: `${socialSize}px`,
                                        // height: `${socialSize}px`,
                                        width: '65px',
                                        // height: '25px',
                                        textAlign: 'center',
                                        borderRadius: '5px',
                                        paddingTop: '5px',
                                        marginRight: '3px',

                                    }}
                                >
                                    <Image
                                        src="data:image/png;base64,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"
                                        alt="Linkedin"
                                        width={socialSize}
                                        height={socialSize}
                                        style={{ display: 'block', verticalAlign: 'middle', margin: 'auto' }}
                                    />
                                </div>
                            </Link>
                        </div>
                    )}
                    {links.pinterest && (
                        <div style={{ paddingBottom: '10px', textAlign: 'center' }}>
                            <Link href={`https://www.pinterest.com/${links.pinterest}`} target="_blank">
                                <div className='pb-1'
                                    style={{
                                        backgroundColor: socialColor,
                                        // width: `${socialSize}px`,
                                        // height: `${socialSize}px`,
                                        width: '65px',
                                        // height: '25px',
                                        textAlign: 'center',
                                        borderRadius: '5px',
                                        paddingTop: '5px',
                                        marginRight: '3px',

                                    }}
                                >
                                    <Image
                                        src="data:image/png;base64,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"
                                        alt="Pinterest"
                                        width={socialSize}
                                        height={socialSize}
                                        style={{ display: 'block', verticalAlign: 'middle', margin: 'auto' }}
                                    />
                                </div>
                            </Link>
                        </div>
                    )}
                    {links.reddit && (
                        <div style={{ paddingBottom: '10px', textAlign: 'center' }}>
                            <Link href={`https://www.reddit.com/r/${links.reddit}`} target="_blank">
                                <div className='pb-1'
                                    style={{
                                        backgroundColor: socialColor,
                                        // width: `${socialSize}px`,
                                        // height: `${socialSize}px`,
                                        width: '65px',
                                        // height: '25px',
                                        textAlign: 'center',
                                        borderRadius: '5px',
                                        paddingTop: '5px',
                                        marginRight: '3px',

                                    }}
                                >
                                    <Image
                                        src="data:image/png;base64,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"
                                        alt="Reddit"
                                        width={socialSize}
                                        height={socialSize}
                                        style={{ display: 'block', verticalAlign: 'middle', margin: 'auto' }}
                                    />
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ marginTop: `${socialButtonPadding}px`, }}>
                        {dribbleLink &&
                            <Link href={`https://www.${encodeURIComponent(dribbleLink)}.com`} target='_blank' style={{ display: 'inline-block', marginRight: '5px', width: `${socialButtonSize}px`, }}>
                                <Image
                                    width={socialButtonSize}
                                    height={socialButtonSize - 100}
                                    alt='dribble'
                                    src='data:image/png;base64,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' />
                            </Link>
                        }
                        {behanceLink &&
                            <Link href={`https://www.${encodeURIComponent(behanceLink)}.com`} target='_blank' style={{ display: 'inline-block', marginRight: '5px', }}>
                                <Image
                                    width={socialButtonSize}
                                    height={socialButtonSize - 100}
                                    alt='Behance'
                                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABECAAAAACaZectAAAAAXNSR0IArs4c6QAAAyFJREFUeNrtm8Gx4yAMQFWCulAjFEEfKoMiqIEmaIMeaECbKHyBv8nuzd5J9C5mGGTzLCycZALfB8UvggAgyhcRXdiFXdiFXdiFXdiFXdiFXdiFXdiFXdiFt8AKhZj734e2TxE2MMuLVo3PFDaGcQKjf7YwipI/WJjKk5wCKPXTlzSGeYon+eOLlgnXo3ArOeX6W7iXlMoQt2Ep1y5H6gg2eskWOGNTLu024QZPiiiFQKG0CndGbcQ2QhLBIGggwwP+icYkgxJAwWh+/Sc21GuFLarojLpOJoBBzYZWOnYWhAU2YZ59L7cIkyRKIzD4lgxXsul0gglSt/oGRnxG4BiAVu94HWaPfYCVJCN2wlcKY1Bouf1R+2NK0eTm73VDpw8PqpbqqMIaGziiqSRthVwSWSnQFnIam0O9aR/Os3pRsyZUkSU5cfR1m+oQDXrUWFuzJGNcnEuHdZw9F9q8Q9iqUTSRkZ1oq38tbo2fiJIPwmWGgh7VaLVDW+52ueuFLTk4Jmh2KLJuWTTak0qrMC2h0A/DO3NklnooHpr164RDV1oJI4tVHeNgpGndssJabEviSAAmbCZjKbdxkJV0ukS4ukqbCLQCJ7rAYQ0O4c4IxhSO6+lb04McYPgN3iFcQU02wm0rXE0Xw3vhaj7/l7A9dKwzpLSyzXDHVzzn2vMijLsM97Nw4JXL37Qsw7Ft9omN8HgQ67lKH4Vt91ISR44t2zDjjgwzvExoTUmrD7bCa+1K7zMstFZh1HMf72l90K4XbgxKFV5m2FBP/C9hep9hWwnzxozxZdmb83XCSArOUtvsHaRn7d5nWA+hz7VB+wx3/DHu9l6StcFdpCcN7bd9xdM0DwoiKCw74TFp4sQECu0zLBUUJJhLKh4vUeQmYWrnbSPKXlgCGK8k7jOs+ZyQfQCdZLlFGEORQUbrZNkLr5MObX38T8JSpx73015MRS4SzivHQtlzJEQKqYsytmOlpAdVRTgQBa7WV/hBkVOMjkQKqYnRUiBAisV/anFhF3ZhF3ZhF3ZhF3ZhF3ZhF3ZhF3ZhF3bhrxGm+EXQ9/0h/g8ugN/SnXr52wAAAABJRU5ErkJggg==' />
                            </Link>
                        }
                        {linkedinLink &&
                            <Link href={`https://www.${encodeURIComponent(linkedinLink)}.com`} target='_blank' style={{ display: 'inline-block', marginRight: '5px', }}>
                                <Image
                                    width={socialButtonSize}
                                    height={socialButtonSize - 100}
                                    alt='Linkedin'
                                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABEBAMAAABNIKXCAAAAAXNSR0IArs4c6QAAAB5QTFRFA3Ox////4O72t9fpjsHdfbfYWqTMSJrHM47AFn64gIk4RAAAAmdJREFUeNrt2bFv2kAUBvCvIRhu6+McaLY4S8NmCyktW0mbziaVo46BNFayUZaKjarq0M1qVSX8t/W7k0WARqLKAyvVfZM5fPfT8xlxZ6O0qLSUZPColFw42MEOdrCDHbwlWGdYzHBL8AGW4m0JfoPl/O9wLAGn6SWZvFTRvHUvTaMHTh+aisd6+kgY2CWTDJV5awvoP3B6heE6UVsI1kB1bZj7NOVgb104NnBZl3pfCn6teuvDGDRGUjAF9A8wMgjBnPXnmCMFJ8kZnSZn+vrusoBPkyQifYNbMwl6gu8BbMUqSWJcJR/rJ4fHj4V5yCkqXM3Awj6gAp0BqAdEZlJ/3b+5ImoOiCgUgT2AWwwc5lCOcHaIjgBALcKa8vgisIkycCMDIh71Bxi6AMfAcQHbZCIwM4gYPuKv2lx6F4g0gLsJFismOuTRReABj9NjeMRmzD194HMTfNRdgrvo80cBWPGIBj4HakRThhrAs/0cJ9JLcIYdGZjPewH0czgDvnKrms1mwM4BGKLpwhxr0zuUgKtETWDQAifiWm0qORzwSLZieXi3gDHiiudw+DfYB6ricAJUGa594YyLS71ZmOe4P2WKIZPn926uWAauvcvzdqXifgj8tAZdEbWM0YVcxTbeKrwH1KgNfKNXGHOtuL3GNmDKgJ4PExXQCBxxuLo6xxRyUwyOV6wq7e94sxXzgbIbNNUr/hZjsYpTm09mqX7Oq3s/TXt2QZ/mR+RPUD+hPPoGv4P36dDAnU6ID51jwOt04k1tYRpPbe9U/m6x/I25/KMI99THwQ52sIMd/ITg0l5cl/am/g8ucobijCa9AgAAAABJRU5ErkJggg==' />
                            </Link>
                        }
                        {instagramLink &&
                            <Link href={`https://www.${encodeURIComponent(instagramLink)}.com`} target='_blank' style={{ display: 'inline-block', marginRight: '5px', }}>
                                <Image
                                    width={socialButtonSize}
                                    height={socialButtonSize - 100}
                                    alt='Instagram'
                                    src='data:image/png;base64,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' />
                            </Link>
                        }
                        {youtubeLink &&
                            <Link href={`https://www.${encodeURIComponent(youtubeLink)}.com`} target='_blank' style={{ display: 'inline-block', marginRight: '5px', }}>
                                <Image
                                    width={socialButtonSize}
                                    height={socialButtonSize - 100}
                                    alt='Youtube'
                                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABECAMAAACI0EjDAAAAAXNSR0IArs4c6QAAAEJQTFRFKCgonZ2dXl5eg4OD0NDQTExM8O/v/wAA/////1hYrKysdHR0OTk55OTkv7+/+vj4/5OT/x8f/zk5/29v/7S0/9jYrmBFaQAAA5ZJREFUeNrtm9mSqyAQQFEQWmRx/f9fvRCawlheJ0xFk0w4D6MsY/WxRdAyRHwZRAztFzE44Ra+iLYIF+EiXISLcBEuwkW4CBfhIlyETxFe5r6f2nYcx8EhEr7oatt26vt5+SPCth/EYwy9hadTUYe9UHgZxOMMSwzTE8JklYPB/5HVHRu5mjj4dcJ2EDkMGG5HHCxFfCTckDv4a4V7kUePGSaOCjzK7Sn4GOFB5DHADU0cXdr7GOFF5LKgRcyrJA75421JEQf12JcKzyKXGW7QECfuaPiJJnm9VLgXSO4gNsRh0KSBjxGeRC4T3LDEQeP2c4TbHaV2FAe0q0BrABYzDayiHZUWPJZ5AEAzB18Jc+bQvrvHQhTWVUcZeOKhKn2G8J5bD0drrxHSxKTChlgAXpMbSgLgaajjfC2TcOhPYwWLwhVJ85ztSIBeJgx8OhaOThq6YMYbEpGxsXlc2NdiGWvQ+OnCw66wYxmPJmKPuqmokBga0nv7Y3OFEzTeDtWtWfGrhD3zcCCMLpSHPFuvqjT65V/SioWeDSZY8dBRPl34YOIB24s9AJHeyfjoULCL29wMp3NEACweQmPHa4QRPh0Ic+/q46dpaW1RNEcYG4B4dPhXiuX6WuH9oXw3tfpwzcqLeH4nrEKFIY4Ky81lwgdXNUQoCXD0MjFqmz8tpQr5SuF5EAfChpDoVd8J85jhfGGDowPL6jLhg5kJIlYRDG4jrH8lXK+EOymlQuGrpiU+Hc7DaYXAThBGLhTGwXssXMWY9oXrlwnnLy3n4XBpiaDWCRmuKXLJ01KPg3ef9hxhrDDxLo1cIoy6GcLPu0szFH6zFwBb4f2FR/3LhQd2qLqOyvd4xbMVzl5adjvCloQdHYRDQ/0uL/G2wmbz8KAx01BvhQ2eCqvWwhobFDbUmHH6dGEucuF7wjw843H0w3RJTclWmIWerCZr4caYJqa+w7F8zuMhjCKPEfaEwZshyqKfp1EbYa5IoE7CCYNHRfJeAJxzTc/7wry5CxokFlizEQYaXVbCdYenZ3PyDDxXGDvn0MK+MOgYMwZJ44uMrTAP17CGJglTS7HSYysVDsXgDGE7ZfhOFlZY7eCAaCMrk2JkruT9XBeLWx1bJIstaWOkgYg1Uhp92hcAyzSKRxin5e9848GXee77fnK0ayaHq5/nhZePWopwES7CRbgIF+EiXISLcBEuwkX4w2i/8AfT3/aT+H/3ntKh9Ec6igAAAABJRU5ErkJggg==' />
                            </Link>
                        }
                        {twitterLink &&
                            <Link href={`https://www.${encodeURIComponent(twitterLink)}.com`} target='_blank' style={{ display: 'inline-block', marginRight: '5px', }}>
                                <Image
                                    width={socialButtonSize}
                                    height={socialButtonSize - 100}
                                    alt='Twitter'
                                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPMAAABHBAMAAAAgg2xvAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAACFQTFRFR3BMAAAAAAAA////5eXlvLy8i4uLampqQ0NDICAgAQEBF4lYFwAAAAN0Uk5TAL/fj0e57AAAAYVJREFUeNrt2jFugzAUBuC0J+gRql7hQQgzE1nZWJEilRWpAytbVlCrMgeI/1PWptCXE/yWKj/pSd4+9GMLG/ngsZ7ePNXL4dl8e6nx9fDci5dKAx3oQAc60IFm0TFcdbLXEQOLltbRs+xVmoxG5/i4vGP3onESGh2jsd3/PUjFo6WdbO+JX2ch0qnJ5IxCXCVomHSETuJtXtd37rquZ5F20ZVFpE8oJEWhK4tHR2MvMW5uMAiXlnL5fcs5CjadWPKESlcWg9bEI9wSNFxaE6+NcGlNHAOfdlPbtsm4tCZeGqHSmrjthk1r4pMPWsq7yNlkPugjKtudH3oSuU4+6Bomk9w2nY7xtW7RGj6do3BptxOfHmc5a+JMOtnmd4yOTdfLtg9uZzJ9RL++b02cRpcrGGviJFrPWa0mzqH1nJWvm+KMSEfjvA0w2O6JdIpKJ7ptIt0uj8eQBAWLfvxURvi8XDDQ6NpkOgaAhUWvx1tN3FUR/psFOtCBDnSg/z3t8cKAx2sSP69jT+r5aInHAAAAAElFTkSuQmCC' />
                            </Link>
                        }
                        {pinterestLink &&
                            <Link href={`https://www.${encodeURIComponent(pinterestLink)}.com`} target='_blank' style={{ display: 'inline-block', marginRight: '5px', }}>
                                <Image
                                    width={socialButtonSize}
                                    height={socialButtonSize - 100}
                                    alt='Pinterest'
                                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABEBAMAAABNIKXCAAAAAXNSR0IArs4c6QAAAC1QTFRF5gAj//////L0/d/k+8rS+bfB96az9ZGg83yP8Wp/71hv7kxl7TxX6yxJ6Rk5I1tw8QAABSFJREFUeNrtmd1rW3UYxz+2TZslOQefk6TNXjoaUGGwjR4dCIqjcfUNYSSCzBulxTHc2KRBZ6doiVtxIgiJKEzdoPWFDWXQ7kJRvMjQoVeSbVcyLckEd1P9G+R5OCfS3TSnCvEiz0Xz68n55fO8fZ/fIaFr5n7RFWuSkK7YQg/cA/fAPXAP/B+A7/54xf11Xv6F3XP2rxsvRQY/idmt/Ia5I02A9yKCHySwPzbK9ZYAcPxI4GHaVtsgeBvJp7wn4FokcAWced97vMGGu6/CtIgU2RQFPAJOySJvwpsb4qaJ68tm8COAi+0MPwSxDYFz3NSXDJQ7B3tN4qHjTRy9Erm5R7FMebDYOXgElsP1DExLphFf69kz363nyZ2U7BUudw7eDnnJrlzR9W51eQJKt92wHngcP4h4uXNwUTM9hW3dCi1ZgPLaGxzpDJyJlOoq/eqqVSkH/dKAwlqpbJJ1U207RiI1V52rCmTRdjIgdVK33TC4fnMZcAsUOgc3WZZtFrGBY7KfS2t6C/rWl9PlsBs6B0NNdzAdRuztW/N+Fq6uB/Yw/U+QkggRB2A/rPHkZF7krsmCd/hCSeTQEbjytC+SOXHmedX65MOSfVtXkn7hw5cNe/jLpuvL8KEFkocOdgxusCyj4Ih1NX0jlvUGA3OQ8ocxq9m5x0mLKtvALYlk68APIt4cwO9SBMDpGLxAS4dsPChSa5tmPQ0JgOXNmJXTDYCU9fgMqBKqABRkFwCub/+T6Bg8xZDWccCKBItjkG+flP2jmPn7AevAOglQP7dgdlN1/xuwWAdgsGPwGG5+BFomWSjbvNBAf3oDYtnZJVInXtEpfnwOWh6QOlgnKVX44CgMpuG6TvnWY6/D+dnpKLO6vCUYOU3wbV6MquseDKmMY6J6u6Rp6M9awSdIDEPMDhjdr3mzTilEOY+XKG2HmvlAQgw0HnRYLJDxFG5eMtCX00J7U8RHTYB14jnbmz2TlzGQKOAd5MexiPfCQBtkEu8PZNzQ2IehNQoDmuVBq4g0GczBJj/olmQksDwiU4oQ7dxa1o62qnZ5RpkWUNq82QW1MVhMYxY33fdlgKRWVjdFAtsW3IK8CG4+F8pYjKnVLWkN4gcPNMEvQiEAJ48/ugRl7Wrck2KbooIbgNuwMWCgNNwhYopWdYXSISZVzfAMP57DTBtxJ6ATxdNN0cAepAAN20DBU8mduiySsia3GH1parG9e0OhO5rjOdDKZ2E5IjgL1xsAn9ixb7GWg5lfIW5N/tVH37zlm6JCEQ6++u3pgnjvfuodBVytTDka2Io50sB9Pzz2J0yRM7psEtOLQTD74WoADjzYrB96v5bfirTj8yhg2+Lty5uqsaHh2v1DYiF6EDy/tp+8h8PhOI5jfylYZWZiUcBW18C0iDlUkSbe3QreCeqOVlNdVEuDY5Fj72wFfxx8r9mKAp7Aaa/B2bMAQ+aDM1mHxJ560o5E7xi0XazD95ZjOyL34mh9PnuWchTwVKh8o5kNWMShXZsBVpu4FVKhs3plBRLgXngHBjXdkJIo4IpxwpsgBS27DEmlO34g5Ovt4dTWk1/BrGaa42YkcJXL4dL8nsVG9y6gVsRUZlq9JXXaLj4X6DjbACtNFkj4EcHT7XX64uqp9IlZ/QDv3Oq8ZC7eOKXr136+MS9y4PQ/dx5ZWf26oK1+duXP81r5B1Z+KUg0sNOlL1+qsS6BK7UugY/luwS+r/eVYg/cA/fAPfD/Bty1H6679kv932DGYfnlri+SAAAAAElFTkSuQmCC' />
                            </Link>
                        }
                        {patreonLink &&
                            <Link href={`https://www.${encodeURIComponent(patreonLink)}.com`} target='_blank' style={{ display: 'inline-block', marginRight: '5px', }}>
                                <Image
                                    width={socialButtonSize}
                                    height={socialButtonSize - 100}
                                    alt='Patreon'
                                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABEBAMAAABNIKXCAAAAAXNSR0IArs4c6QAAACFQTFRF/0JN/////+7v/93f/8jM/7K3/6ar/4SL/3Z+/11m/0tWM/BDBQAAAnxJREFUeNrt2b1v00AYBvAH4saxtzffZcsAlTrFI0w2qorElqGdE1pOwNTAENhasaRbIgYaJqdFVOpfyd29dlAcS+a8eOg9UiLlvn725WyfZFQWb1ZJFnCpklxY2MIWtrCFLWxhC1v4scFC5n1ESY7FhEs5qvxUNXhNOl2hmxPn+fXDzdmm4zkRdYT4bxgq/mfiLOCQSgydiS5S+UIqz7g16RxwRTq4PyDaB8xgeAGptAE3H/ajLNyO0woeHNMyMG5JpQf4g1wYtSz8Fpy9FL4zhf+Ij9BVPPCIZL7OL+HP5yMN18UHwON6/0SGZJoxcH8ie/pBAjdM4SXRGNAnGgK4Ip0hGunf/kRXRAxTkh7gDnTPZQIjMof7yYleIkZtF9bMZBseckkHcFJ4aQ53eZQm8An1PLgNTLfhMTziY3VTeK803AEO4BXDXLyXtPN58AZ8c7jHU92HJ+1gB+YjY3i1Wt1wv6fpehzowZ0FJsZwyNwQ9SYwzYFfAdHW5dQE1qQirYDhELdm8O+jN2BljJp01lnYOTqO4VER3IdrBKvEuGNjLXEnC+s4Cfwgw/1qmaluAS9NYZ7IFjBlMAceUcHicuTn2hj+kdwTIj6DDMwNCi4nhw4BI/h+NjtLZ221+gWMMrD7Ta/AghuIQ13AdFVzQnCusqu6FauuBbdM6S9Kwhfg1LKwGj7IeUj85IfEBg5LwDyUL5dsjPoOvA8sCx6LCu6Xgzs8ySG8HbgF1PM3AkD0D26Vg/u8XA6BKAvTGH6Qv/X5Timsvg1gIUa02ckNeMOmjBfinHROxUT9ElHBZu8d6WZ2X21hC1vYwha2sIUtXA1c2Yvryt7U/wVFTM1TAtL4XQAAAABJRU5ErkJggg==' />
                            </Link>
                        }
                        {facebookLink &&
                            <Link href={`https://www.${encodeURIComponent(facebookLink)}.com`} target='_blank' style={{ display: 'inline-block', marginRight: '5px', }}>
                                <Image
                                    width={socialButtonSize}
                                    height={socialButtonSize - 100}
                                    alt='Facebook'
                                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABEBAMAAABNIKXCAAAAAXNSR0IArs4c6QAAACRQTFRFGHfy////6PL/zuL9ttX8nMX6hbj5aKb3WJ32R5P2MIX0IHzzuXtF8AAAAzNJREFUeNrtmc9PE1EQx79a+vs0u22xeGFbUAMXFhNj5FKIcm5jAvFGJeKvC2hJ1VMxxNR6aRW9eFlI/cFyaakRxH/Oee9tm2DSxDxiVpP9Jm2nM6/vM9M3O02z8E2Jqi9yECVftB6AA3AADsABOAAH4D8DTzbcnaFBY+l5e2gwdb9R1genOkB4aNQERoYGx4ANfXABQMQPsAN/Kk4BOK74A45apAtO6oPTwHnSBuM/BGd8AtcbQKy+TeaLk22zWuV9Ug8PfmxaZCy7+xUFTjf278okHhx8XSWha42TV7Z3xuba2qoGGFJhKgKoAF0ya2C16DFY7wQ43ARQJjJk5C0RXRFGzFIV89OeNvhbBqyEAE8DgjMKoaTF4J8qNZqCXGST4UhrT4FXgHltcGgGSl1vU3uFEWy2THiyqaaMFmWVEZdgs4MYaYMPa8D7xQ6D00Dy3tJrcrg000FIgL/fcoByiiObj0TtBXYtsqskzjgLHOoOkC5RB3GiAptiH+UNERURMRln0xSwOyr623B4Yc1ztUTFRaCkDzbkIY6xOS77iNIynRnEGHykrjlBEbnAchCVK86x64lIWQesEKrAC2zOqFbJMK9arUlwWGY3clGmxHFbuVQuz4Ae6VesxtcomwXAJmEqxU1GKvA4UJLgBQnmQIjB4vT/BjhxClw+DR5hMGteEzzsqx6Aw79VPNt39RjcAHbPcMamBGdVc20o8GGOZZnwOikkzlg1VweRQXNVwG/O1NVRWU13DOgNLieWKcaXTCkrR2MTCfHgceldTjXA1gdTE3g64bCZARK388uGmo2L8wxGO18DtjgSX7gOhGkF2JloAiUBngZaZwAXBiOzAyFrncmugy0B9lrIwWBESyUsMbnSQET/jNX4TQqzCKHSlJdIHxwjmgMg51hKJddTPxJNJC39io0mgDabaleuVNUXEs0lPC+JlKtNRDdkwbYCz/FqLXC9Lj6XcXCUd91doksfgc82pd8A+GKbrtu+3MEnYk1ycR+EYdwBjktEWdctU4ZXaIAHMq4OzHxOvdyc7cf6Rs7qe3LBv8UAHIADcAAOwAE4AAfgfwXs241r3+7U/wJfWdwe37tCKgAAAABJRU5ErkJggg==' />
                            </Link>
                        }
                        {vimeoLink &&
                            <Link href={`https://www.${encodeURIComponent(vimeoLink)}.com`} target='_blank' style={{ display: 'inline-block', marginRight: '5px', }}>
                                <Image
                                    width={socialButtonSize}
                                    height={socialButtonSize - 100}
                                    alt='Vimeo'
                                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPIAAABGBAMAAAAEHdT0AAAAAXNSR0IArs4c6QAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAABtQTFRFR3BMSarp////3O/7r9r2jsvydL/vYbXsSqvp/MrXGgAAAAJ0Uk5TAN9g/wJ9AAADDUlEQVR42u2Zv27bMBDG40foK4hK4pn+p1m2Ec1ulWpWW0CzFaCabUu8x6553xEUkKn0QKDlDSFNKfe773g8JvBTPFt8iWRPC/M7ig1Pi3MWxV4TOZETOZH/H3Jel3HIz0RjFLLqiEjHIL/Q3U4xyIUllzHIDcXKdkVEtygVtkSyo9S2+Zq65z9NXu3//jQp/QBZdSOPWzTsN2NLO0cfUyt4xojp8b3ey/w4EP3SweSKqLU3BdrmFse5oQnBmFKCEsCGfJOreH4LI4N4dc3rogYiQvfW2RaOMZ4lMWwjwLBTGFl1cJQj/oIskxdPWCL3CGGKaUSHJ2HkHd3N3F8iaxPc8mJbCaTyMjtyOhEyTIeQ1QBdSJ3Yihc/CHbAYBCmWAvJU40wAsiFi/p49GQsDgTrPHmwMI7kzPKN5ojPQeTxzdVq4wROu6miTzbJzpYMa3nze+zSNYSca4V8Id+9lTKqErv+0QD6k7XKDYqhLFgyau4WeJ47R+axY0dLqHyW2q24wlyMnWU2QswfIBeyU/jTD8lbIpe5tI2CV19YJlgKm/0IGZRLlinowocCxJx4UcgFQ3goc7zwULZZyg3DlR218G7glq4uLY39wOdwhH7fAsPI+axusleQG4kGyqQEBn6G95aoOclYEBlpNizFSCpBvsCt0fhYZmT5G0k5BklHIJm1aGQNiqTe4XaUN3D8aqtVz8hNaA9zv9w3IhZtmDBUCIeZ+Amwqzl5pEPJ0rC8OtS0ZLl15FzaCqKFZqm0UPKSYL0wWlxDcsRLKXHNZMP6VOMircJvSYkbIkE2DJ6Y7G/iCTfIjyxTcrkYSc4pmCxpvPopFM3J3sxAzvo1LqxgspROOSMPnmwd0CdDBiTiUDIA2C0h953fRU9+nwnXhZ8GkwGg0sufdAHyEmS5spRXjJYudRlOlpbt5bPfCSlA3eEY7+YnuvLlEE5Wg3NgnU9W/WagDENpKaCp75zeb9nsZOlQMiw/ZM7We5msZNCW4lbXh4OdAb2p6336XzKREzmREzmREzmQHO/b/j+3BHPJDapFgwAAAABJRU5ErkJggg==' />
                            </Link>
                        }
                    </div>

                </div>
                <div style={{ marginTop: `${retailButtonPadding}px`, }}>
                    {amazonLink &&
                        <Link href={`https://www.${encodeURIComponent(amazonLink)}.com`} target='_blank' style={{ display: 'inline-block', marginRight: '5px', }}>
                            <Image
                                width={retailButtonSize}
                                height={retailButtonSize - 100}
                                alt='Amazon'
                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABECAMAAACI0EjDAAAAAXNSR0IArs4c6QAAAEtQTFRFl5eXR3BMrKys////8vLx8ufZ39/f/dCZ0NDQx8fHv7+/+7Natra2r6+v+ZkjoqKij4+Pg4ODdHR0YGBgRUVFNTU1IyMjEhISAAAAtmlVZQAAAAN0Uk5T/wCt7IkvZgAABPRJREFUeNrtm+t2pCgQgN2tEvFCQG5V7/+kO0Ad+5LRzM4PZ9Ltd05OR0TiB0Upxu7ei3//6Tq7vA2mCi/wNuAlfAlfwpfwJXwJX8KX8CX8NwuryViz9G8iPAXiRl7x9YV14jtoeXVhw0/Y1xae+BlSryyMmT8RjromeYQdLCvA7rcMzhPuuEHBdoEFtSMcus55Tvu5DyFk+P+EfJ5wFF99b293hGu5Yw27/P3CxBXzsBWOhC1rMAkBIARw9Zcx1T5YkvLEqbUVrcsUS7lNlD3CVCrp1JV9EsIuEcUR5KAzhRM0AlfSnjBiP+VYQqF4pggj29sIWVZTJKugkHN2jgjAcVgcJUB2ACtHAM2T/LXVrJlQDjpHGLRdQ9DQ8FzJR/mc8E4Yij7SCiJ8i85MWEpGrPFi2EGMADEzwkpQib5Oo/GEkN5DhOkoaVHWd8Ir91X0s3CshyxTHc6i7RiRLU+QAoCglsDTnxFWi3VrEuGjOdxzuBNWMnSfhYvVyEvXeiMlULwsjNn3LOeqIzOlPyGsxVQ4FoaUoVjIIMbUsz0QNjyCbGbvI4RkCaGAlIwCc7KwdDT/urDiWDM1IBdhwyvhgbDiFVogwJrTCoZjgIqpI+15OVl4Zf5V4eCc85mnIj1OiYowEge4CXu26kEYAnf9mLIqWzwCbpd55KiUYzZy0EnCgTdyomPhQo4TAHTE7ENsiW66E9bE/lEYPTPHKkSl4cQIjS4zR01eDjpH2LIQFtyyNMPXKBB8hgcQPqGkbH8HwknCSFyhCQo7wkcoct9ptWS4YeH3hJE44XcSDlyhx03+dYfV9fCdhBNXIjQiN9TLPgDID8JI3NAvK0wPq4Xuq8daaLrVyTVzHEcENG5CAFDWjXfLkbWbWp0NDZXFrUZJWz9KS4ur6c8Paa5nq4mFBD/FSQUvfbU4eXjgb8/ClDSZFUDPgnSpJebtoqyZGduB3elJi2kB7Ig3up3HQYJvwuJGUaTw/hkZqWdhwwItIhy5MZ4mbPnn0M6ET1YbaqdPRcNOkeunKaKmdYofx1A7DUMMPyg1QvOl1QbpGl1DqTUQ4OQbj4148OASrY9aLtYirACUJDnNzA5gdMGXusy8QiNIVswS9baFiBZxpLr75FtLoYMsvrvgEtuFmuQ8m44oCspRkap4EZtqj0jiyE14lWvhmaslxxt5ksTld5N0yFwQ4QBw+2Q5Tq+RuOC3iU9Kfhm3LsAqbCUCzhSGKXIlOSiMmTtptx96hDt0taUswk1JPjdh3xpjKTUtjUvPqm1BqqqwOVlYUKazkwIBeygMH5UBNnpizk6D3RVem28wCLmVjty0ZPJsSxSCk4VxHuCQ+aMxw4aVmHQHI1xE461U0XaJq4J+y/ZnC/cyeLsM8zwM84Owl5hMB8IoGc+0rVyGHSvVkydppztXWCJ27r+uNDyOcDJd4iK+F9JVcfJUxT3fGGEshbGmvQRnC8scnRF2wGGeS53+8z8ay8eyF9Idb5XSk/Dt1jWps4UlqndHua9TGMrPHSrWeyVIzGFHWO63kzbMrJ6EQUduLcDZwmLcGPqncknQff9pnqtJw1egnvBoZ/8Hl4fzh1AyVF8oiUqKEIaP+dXWw8PHHkOdx/g6wsfKwyu/xSNBfGMeXv7FtLuZO/Tv864lXi+XXsKX8CV8CV/Cl/AlfAk/ge/4hem3+0r8f8hCUff9ZCGrAAAAAElFTkSuQmCC' />
                        </Link>
                    }
                    {appStoreLink &&
                        <Link href={`https://www.${encodeURIComponent(appStoreLink)}.com`} target='_blank' style={{ display: 'inline-block', marginRight: '5px', }}>
                            <Image
                                width={retailButtonSize}
                                height={retailButtonSize - 100}
                                alt='Behance'
                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABECAMAAACI0EjDAAAAAXNSR0IArs4c6QAAADNQTFRFl5eXR3BMrKys////9vb27e3t3Nzcx8fHtra2pqamf39/ZmZmUVFRPj4+JycnEhISAAAAco2e7gAAAAN0Uk5T/wCt7IkvZgAABM9JREFUeNrtm213ozgMhb0rvyFZ0v3/v3YXY6CZKZn0nDQnU7ifwJZcHssXXJKEc+nff0KY6nnUgSudRukCvoAv4Av4Ar6AL+AL+C8BLmLlTMAMIJ8IWAAgngc4AICex8MZs6bzAMso8GmADYDlEwED0EwnAla5m9YAwC3EB25+iY6kSvcUw5yevxW4sDSu63FTlSl9CuwhBG7Q+I3AYt8NXBVdLjUHw5Ckz4AHDf/FwFHwubwcAVMDEU3qJpGaEJFonBtim9hc8wAeEUSs7joPl8UtDOC9f2QNXofVgNrceIYRcy1PBI6KI3k+AO4FCJAa3KI4UXQUoqZkbhzcYwdeI0jAlc0jJbNpMgzgtX/PmlXUpxwAmRoCRXOugvo8YMGxLB4AT6gJ0g9CQaECY4oINFNRQJmBt4ioTEsrIxHlAbz171ldYsM00RtxZ1V7GnDBPZVj4No7Ixo5E6soVWSy1sesM/AeQUS5l6npBw9v/VvWR+CyBDYv/0uQngWsOJYVOgBm5IA8Ll6UlCdEUSKTHXiPKAq4oi5kA5v2fpPfgfMSaFhUngScgcctvAOrx16fTjghoyRU41vgLSK5TZkq6qitdmza+u8Bqz33Ls04Vrn7WMrgPmGBIuZmU+Rb4C2idhRGJfZEFL1j7yP8CuwfgKVfBrf4JOCGQ+nhxkOhkUgQUjFLRA1tPjW6Bd4iElpOAZgou+aqY+it/xdgxpQ34L46AvhZFVYcKhxuLbVvLSOvG+8wx1bwL8B7RDBAiwt1N7fh4b3/Fjg7eAPuGcb0LGDHoR7Iz/HRiD0ypT+PkG7P8hM9fNfCb6RXVHj6kcCGQ/GPBG44lCf6VFVE6DEFUW28jpPeAZhxrAMsfdTfSdHl3RxFwzsAV9wRH+7N2qOrR5svW7YJeAvghHvSdLQmEv1REbBIFK3PXHgTYGq4J6Pf5HAZF59EamJt/WQSoSoqmYbySK9NJgoKqJS5OYjKtDicoyjHOVclvAg4fBG4ArKiZEBsXeECMAB43acGxuXjvFai4tvaafAGOMU2ml4CnPxrLm5AIQXKZmd2IHRgGDfA4s1ceq9rr3ArnbexAa0PBTMhBiw0QF4CTII7Sp943jpKm4FH0XqbAEqdYqKh4Pu0DQ83ICy+rtR6RowOj70nvwQ4f+nBxAB3bKSe6uNBFWkYu/aAoVjFBvEAdiCNYda5yYCWUhioLwGm9pWthwGmquiXn3uhR3EEKLS17cpLIcOaoePFUuvuuHkyhtcAZ3/cwQWbbL98BRIJUJcIoS62sbgdiAOYAB/2lnURV8C460UVJn78DYAA2mY5UCgviyA6vHcxEXEHG1BGNCy+AitQhpVX4LzE5RLpRcDUHn2lNby7cLVuf82lAdKBMaXgQN5XjnEV790TIDkRA1ZSACyuwKQAx2Tw/CrgZA/+PxxWg3bWlAHfzC6A3xphwpDlYYbQw7oqbcDFl9TpZRWm1LBIWfTgFe0s2++kCoQMtMkBzdRJars1ftE+ksThBoTF2j1jB6asAJxf+nFpMJiG1P88qxs/YKhxR86JBlD57W1MzCXRUFpNGsfBTVyO7//FtAE8JECmp+r9gcsF/MOAKcabk+vLpRfwBXwBX8AX8AV8AV/AP07pjD+YPt1P4v8DWlAfcVRkHlwAAAAASUVORK5CYII=' />
                        </Link>
                    }
                    {ebayLink &&
                        <Link href={`https://www.${encodeURIComponent(ebayLink)}.com`} target='_blank' style={{ display: 'inline-block', marginRight: '5px', }}>
                            <Image
                                width={retailButtonSize}
                                height={retailButtonSize - 100}
                                alt='ebay'
                                src='data:image/png;base64,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' />
                        </Link>
                    }
                    {googleBussinessLink &&
                        <Link href={`https://www.${encodeURIComponent(googleBussinessLink)}.com`} target='_blank' style={{ display: 'inline-block', marginRight: '5px', }}>
                            <Image
                                width={retailButtonSize}
                                height={retailButtonSize - 100}
                                alt='Google Bussiness'
                                src='data:image/png;base64,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' />
                        </Link>
                    }
                </div>
                <div style={{ display: 'flex', margin: '0px' }}>
                    {selectedOption === 'zoom' && (
                        <div style={{
                            position: 'relative',
                            width: 'fit-content',
                            // height: `${meetingButtonSize + 70}px`,
                            height: 'fit-content',
                            borderRadius: `${meetingBorderRadius}px`,
                            paddingTop: `${meetingButtonPadding}px`,
                            textAlign: 'center'
                        }}>
                            <Link
                                href={`https://www.${encodeURIComponent(zoomLink)}.com`}
                                target="_blank"
                                style={{ textDecoration: 'none', color: 'white', display: 'inline-block' }}
                            >
                                <div
                                    style={{
                                        backgroundColor: meetingBackgroundColor,
                                        display: 'flex',
                                        borderRadius: `${meetingBorderRadius}px`,
                                        padding: '10px 15px',
                                        marginRight: '3px',
                                        lineHeight: `${meetingButtonSize}px`,
                                        width: 'fit-content',
                                        textAlign: 'center'
                                    }}
                                >
                                    <Image
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIABAMAAAAGVsnJAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAElBMVEVHcEwAAAAAAAAAAAAAAAAAAABWYIjnAAAABXRSTlMAOGXF7dHeYvoAAAVUSURBVHja7djBbttGFIXhM0N3r0byXknIvRN79kmU2dsW7/u/SpEaKLxocYelFFB3/v8N/IFnBF8RERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERba9Pjxvq66c/9TvKj6cv+rv0ZBvqp5nNXz/q2uVqNh/1q8m213z6eP2/3+xVkva2xWY77XTFiv1qlpSqbbM6f9HVOthbR2mw7fZjd70BvPVNKrbhzrurDeCtFyXbdPPxmgMwe9Vg/Qlk+6ez7q0/gfIeYDKneO/A+J5XxbYvcOkB3BrA/EMXLBV7n6rdQA/XGMBbslto3ulSDXaLAPaqC5WqAxB9BJM5AMFHMNitAtiPywzgdgHseJEBOADB38G9OQDB38FcbxvgpJUVcwCCfwJ7u3GA+bRyAC5A7MtAMQcg+A/BwQIA2G7FESAEwPcVAwgBcF5xBHAAYv8SZnMAgj+DqTgA0Z/B0RyA4BsYzAEIvoFUHYDoG5jMAQi+gcEcgOAbSDUYgC0egAcQewN7CwfwXQvKNR7AedkA4gHYbtEAfIDAj0C2kAAvaq3EBDi3X8FiAtTmAQQFsKOaKmEBvqml0cICvLQNIC7AWX6pBAaY2wfgJwv5Cg4WGuBBTqnGBniW02SxAV7cAQQHOHkDiA5w9gYQGcA/CewtPsDRuYJ1DTBZBwAPzgDCAzw7AwgP8OIcAcIDvDpXsG4BsnUCcHaOAL0CjNYLwOwMIDyAOQPoE2C0jgB2zhGgQ4BUOweYrG+AwfoCODoD6A5gsr4B9tY3QK6dA0zWN8De+gbI1jlA6RzgYH0DZOsbIJXOAQ7WN0AyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgqwAqvQPk2jmA9r0DaOodINXOATT0DqCpd4BUOwfQ0DuAxt4BUukcQPn/A9QQABp7B1DpE2D9CFSCAOjQO4BKrwDrTgOawgBo3zuAJlue7gMB5NodwPoR6I8AAGtGoCEUQKqdA2hYDJBjAWhcCpACAKw5DUjBAJSXApQAACtGIE3RAFLpHEB5GcBdOAAdFgEM8QBUlgDkgAB5CYACAuiwBKAEBFBZADBFBMi1HeAuIoD27QBDSABNzQApJkCqrQAqIQE0NANMMQE0tQLcBQVItREgBwXQ0AigGhRAYyPAFBUglTaAu6gAym0AOSyADk0AKmEBUmkCuA8LoNwEkOMC6NACoBoXQKUF4D4wQK4NAENgAO0bAFQCA6g0ANxHBsjVB8iRATT4ACqRATT5AENogFRdgFQjA2hwAXQIDaDRBUixAVLxADSFBtDgAuTYABo9AE2xAVLxAHJsAGUPQFNsAB08gFxjA6g4ADoEB8geQCqxAXRwADQEB9DkAGgKDpCrA5BKbADtHQBlu4V20oVG4BAFAHBOAw7RVtOKBnvXLOkGn4FZTs0jmHWTAq9yah7BWf9W3rrAi1Y1OADbF3jQukbnW9r6Cuad1pWK+y2lMcIT4P9X9Kz/7HO1rXbU6saGMaWnsB+ApNIypg9PEV+At1JpsvzwWG1jzUddpFwax/Th8+PT08+tdPq604VKnx8/ioiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiGhb/QVyu4/EbGHiswAAAABJRU5ErkJggg=="
                                        alt="Zoom"
                                        width={meetingButtonSize}
                                        height={meetingButtonSize}
                                        style={{
                                            verticalAlign: 'middle'
                                        }}
                                    />
                                    <p style={{
                                        display: 'inline-block',
                                        fontSize: `${meetingButtonSize}px`,
                                        color: `${meetingTextColor}`,
                                        margin: '0',
                                        verticalAlign: 'middle',
                                        paddingLeft: '10px',
                                        lineHeight: `${meetingButtonSize}px`
                                    }}>
                                        {zoomText}
                                    </p>
                                </div>
                            </Link>
                        </div>

                    )
                    }
                    {selectedOption === 'googleMeet' && (
                        <div style={{
                            position: 'relative',
                            width: 'fit-content',
                            // height: `${meetingButtonSize + 70}px`,
                            height: 'fit-content',
                            paddingTop: `${meetingButtonPadding}px`,
                            textAlign: 'center'
                        }}>
                            <Link
                                href={`https://www.${encodeURIComponent(googleMeetLink)}.com`}
                                target="_blank"
                                style={{ textDecoration: 'none', color: 'white', display: 'inline-block' }}
                            >
                                <div
                                    style={{
                                        backgroundColor: meetingBackgroundColor,
                                        display: 'flex',
                                        borderRadius: `${meetingBorderRadius}px`,
                                        padding: '10px 15px',
                                        marginRight: '3px',
                                        lineHeight: `${meetingButtonSize}px`,
                                        width: 'fit-content',
                                        textAlign: 'center'
                                    }}
                                >
                                    <Image
                                        src="data:image/png;base64,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"
                                        alt="Google Meet"
                                        width={meetingButtonSize}
                                        height={meetingButtonSize}
                                        style={{
                                            verticalAlign: 'middle'
                                        }}
                                    />
                                    <p style={{
                                        display: 'inline-block',
                                        color: `${meetingTextColor}`,
                                        fontSize: `${meetingButtonSize}px`,
                                        margin: '0',
                                        verticalAlign: 'middle',
                                        paddingLeft: '10px',
                                        lineHeight: `${meetingButtonSize}px`
                                    }}>
                                        {googleMeetText}
                                    </p>
                                </div>
                            </Link>
                        </div>

                    )
                    }
                    {selectedOption === 'skype' && (
                        <div style={{
                            position: 'relative',
                            width: 'fit-content',
                            // height: `${meetingButtonSize + 70}px`,
                            height: 'fit-content',
                            paddingTop: `${meetingButtonPadding}px`,
                            textAlign: 'center'
                        }}>
                            <Link
                                href={`https://www.${encodeURIComponent(googleMeetLink)}.com`}
                                target="_blank"
                                style={{ textDecoration: 'none', color: 'white', display: 'inline-block' }}
                            >
                                <div
                                    style={{
                                        backgroundColor: meetingBackgroundColor,
                                        display: 'flex',
                                        borderRadius: `${meetingBorderRadius}px`,
                                        padding: '10px 15px',
                                        marginRight: '3px',
                                        lineHeight: `${meetingButtonSize}px`,
                                        width: 'fit-content',
                                        textAlign: 'center'
                                    }}
                                >
                                    <Image
                                        src="data:image/png;base64,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"
                                        alt="Skype"
                                        width={meetingButtonSize}
                                        height={meetingButtonSize}
                                        style={{
                                            verticalAlign: 'middle'
                                        }}
                                    />
                                    <p style={{
                                        display: 'inline-block',
                                        color: `${meetingTextColor}`,
                                        fontSize: `${meetingButtonSize}px`,
                                        margin: '0',
                                        verticalAlign: 'middle',
                                        paddingLeft: '10px',
                                        lineHeight: `${meetingButtonSize}px`
                                    }}>
                                        {skypeText}
                                    </p>
                                </div>
                            </Link>
                        </div>

                    )
                    }
                    {selectedOption === 'microsoftteam' && (
                        <div style={{
                            position: 'relative',
                            width: 'fit-content',
                            // height: `${meetingButtonSize + 70}px`,
                            height: 'fit-content',
                            paddingTop: `${meetingButtonPadding}px`,
                            textAlign: 'center'
                        }}>
                            <Link
                                href={`https://www.${encodeURIComponent(microsoftTeamLink)}.com`}
                                target="_blank"
                                style={{ textDecoration: 'none', color: 'white', display: 'inline-block' }}
                            >
                                <div
                                    style={{
                                        backgroundColor: meetingBackgroundColor,
                                        display: 'flex',
                                        borderRadius: `${meetingBorderRadius}px`,
                                        padding: '10px 15px',
                                        marginRight: '3px',
                                        lineHeight: `${meetingButtonSize}px`,
                                        width: 'fit-content',
                                        textAlign: 'center'
                                    }}
                                >
                                    <Image
                                        src="data:image/png;base64,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"
                                        alt="Microsoft Team"
                                        width={meetingButtonSize}
                                        height={meetingButtonSize}
                                        style={{
                                            verticalAlign: 'middle'
                                        }}
                                    />
                                    <p style={{
                                        display: 'inline-block',
                                        color: `${meetingTextColor}`,
                                        fontSize: `${meetingButtonSize}px`,
                                        margin: '0',
                                        verticalAlign: 'middle',
                                        paddingLeft: '10px',
                                        lineHeight: `${meetingButtonSize}px`
                                    }}>
                                        {microsoftTeamText}
                                    </p>
                                </div>
                            </Link>
                        </div>

                    )
                    }
                </div>
                <div style={{ marginTop: `${greenTextPadding}px`, }} className="container ">
                    <div style={{ display: 'flex', }}>
                        {greenImage && (
                            <div className="selected-image">
                                <Image
                                    width={greenImageSize}
                                    height={greenImageSize}
                                    src={greenImage}
                                    alt="Selected" />

                            </div>
                        )}

                        <p style={{ marginTop: 'auto', marginBottom: 'auto', marginLeft: greenTextGap, color: greenTextColor, fontSize: greenFontSize, }}>{greenMessageText}</p>
                    </div>
                </div>
                <div style={{ marginTop: `${calenderTextPadding}px`, }} className="container ">
                    <div style={{ display: 'flex', }}>
                        {calenderImage && (
                            <div className="selected-image">
                                <Image
                                    width={calenderImageSize}
                                    height={calenderImageSize}
                                    src={calenderImage}
                                    alt="Selected" />

                            </div>
                        )}
                        <p style={{ marginTop: 'auto', marginBottom: 'auto', marginLeft: calenderTextGap, color: calenderTextColor, fontSize: calenderTextSize, }}>{calenderText}</p>
                        <Link href={`https://www.${encodeURIComponent(calenderLink)}.com`} style={{ marginTop: 'auto', textDecoration: 'none', marginBottom: 'auto', marginLeft: ctaTextGap, color: calenderTextColor, fontSize: calenderTextSize, }}>
                            <p style={{ marginTop: 'auto', marginBottom: 'auto', marginLeft: ctaTextGap, color: ctaTextColor, fontSize: calenderTextSize, }}> {ctaText}</p>
                        </Link>
                    </div>
                    <div style={{ marginTop: `${disclaimerTextPadding}px`, }}>
                        <p style={{ fontSize: disclaimerTextSize, color: disclaimerTextColor, width: disclaimerTextWidth, }}>{disclaimerText}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
