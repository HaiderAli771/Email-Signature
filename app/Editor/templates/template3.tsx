import { faInstagram, faFacebook, faTiktok, faLinkedin, faPinterest, faReddit } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import Image from 'next/image';
import { ILinks } from '@/app/Editor/types';
import Link from 'next/link';
const imageUrl = '/addon.png';

interface Props {
    name: string;
    title: string;
    company: string;
    phone: string;
    email: string;
    imageSize: number;
    changeImg: string | ArrayBuffer | null;
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
    disclaimerTextPadding?: number
}
export default function template3({
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
            <div ref={signatureRef} className=" p-6  md:overflow-hidden overflow-y-auto rounded-md" style={{
                backgroundColor: bgColor,
                color: textColor,
                fontFamily: selectedFont,
                fontSize: `${fontSize}px`,
                borderRadius: '12px',
                overflowX: 'auto',
                padding: '24px',
                maxWidth: '519px',
                width: 'fit-content',
                position: 'sticky',

            }}>
                <div style={{}}>
                    <p style={{ fontSize: `${signatureSize}px`, fontWeight: '600', margin: '0', color: `${signatureColor}` }}>{signature}</p>
                    <div style={{ display: 'inline-table', alignSelf: 'center', marginTop: 'auto', marginBottom: 'auto', paddingRight: '20px' }}>
                        {changeImg && (
                            <Image
                                src={changeImg as string}
                                alt="Profile"
                                width={imageSize}
                                height={imageSize}

                            />
                        )}

                    </div>
                    <div className="flex-grow" style={{ flexGrow: 1, }}>
                        <div style={{ fontFamily: selectedFont, fontSize: `${fontSize}px` }}>
                            <p style={{ fontWeight: '800', color: nameColor, margin: '0px' }} >{name}</p>
                            <p style={{ margin: '0px' }}>{title}</p>
                            <p style={{ margin: '0px' }}>{company}</p>

                            <p style={{ margin: '0px' }}>📞  {phone}</p>
                            <p style={{ margin: '0px' }}>✉️ {email}</p>
                            {displayText && (
                                <Link target='_blank' href={(`https://www.${encodeURIComponent(displayText)}.com`)}
                                    style={{ display: 'flex', alignItems: 'center', border: 'none', cursor: 'pointer', textDecoration: 'none', color: textColor, }}
                                >

                                    <h2 className="text-sm" style={{ fontSize: `${fontSize}px`, margin: '0 0 0 7px', backgroundColor: bgColor, }}>
                                        🌐 {nameText}
                                    </h2>
                                </Link>
                            )}
                        </div>

                        <div className="" style={{ display: 'flex', }} >
                            {links.instagram && (
                                <div style={{ textAlign: 'center', paddingRight: '10px' }}>
                                    <Link href={`https://www.instagram.com/${links.instagram}`} target="_blank">
                                        <div
                                            style={{
                                                backgroundColor: socialColor,
                                                width: `${socialSize}px`,
                                                height: `${socialSize}px`,
                                                borderRadius: '50%',
                                                display: "block",
                                                padding: '3px',
                                                margin: '10px 0 0 0',
                                            }}
                                        >
                                            <Image
                                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAADMUlEQVRYhe2YPU9UQRSG3zGii9gKqChI4kdE/4IfMWApmoD+Az+ItGpsRTSGCKUdKongWhBajKKJsmpnIyYWJn7ERCsjLIrmsbhn5brusjOX3bXhJJubzJzznmfvzJ05M9KKLc+cjxOwXlKHpJ2SGiWlEuabl/RJ0oykSefct4Q6f8BagREgS/ktC9wGWpLC9QLfgZ/AKNAFNANJ356AFNACdANjpj0P9IQKDdq/fArsTgrkkacNmLZcA75BvRYwBqytFFwsXwpIW84zpZxbbVifVAMuljcFZGy4W5ZyHLF5UclhXQXsyH8BwB7LfbNY4Hr7skYrBWd57thwvgTW5PXdBeaAukKBxyywq8KAX2NLzfa8vuPW3plrWx3r32nPF4EJ6yV1StonaYs1v5P0SNK4c+5zXki/pAuSJiS9yet7nsfyV6Iho/da52xi99uQAMwCr+wXb7scqAkwVKjzBoCnUAPwzMQmgXagJtZfY233zScDNHhqA9xIDAjUGtwCcNLD/7T5ZnzeZDkA+03kVCnfWEyPxfRVFBCot/k16QsXi31gc3JDCOCqwDydkmolXQ0FlHRF0jpJR0KCQgH3S5pVtISE2pSkOdPwtlDAJknvnXMLgXFyzv2Q9N40vC0UEHlW4UXMmYa3hQJ+kLQ5vub5GtG+22Qa3hYKOCWpTtKBwDhJOqjoA5sKCQoFHFc00c8FxknSeYudCAkKArSNf0jSIUpVvzEDzip669cLFA/eIr47Sa76XcDjsAOcNd/pqmx15ttgkNgO0UGs+ATWAIeBh+YzTVSW+WgXBUxSbvXZ9oVtgTP2i5dblwI1IVZuxQvWT/ZslPS2lJhzbl7SRWBQ/xaszyU9VlSwfvGBM9tkz4+F6I8afXeAYFkNOGEM/+7XLB6axv4DW44hTbFDkzncIjr6tVWZTcBe4BcwvJTTNqLDs9eSUEa4FFGVngW2lnLOVb/pakAa3D3L6VelAwMWkAH2VBBuL4uHr2uhwWdsuH8SnfiP2xRY7vVbq2mlbc5l8Th8FRNstg8nt/CW0+aAYUrMOd8r4DpJ7ZJ2Sdqo5V0Bf5T0WtEV8GxCnRXztt+Ja10Yo/XDCgAAAABJRU5ErkJggg=='
                                                alt="instagram"
                                                width={socialSize}
                                                height={socialSize}
                                                style={{ display: 'block', width: `100%`, height: `100%`, margin: 'auto' }}
                                            />
                                        </div>
                                    </Link>
                                </div>
                            )}

                            {links.facebook && (
                                <div style={{ textAlign: 'center', paddingRight: '10px' }}>
                                    <Link href={`https://www.facebook.com/${links.facebook}`} target="_blank">
                                        <div
                                            style={{
                                                backgroundColor: socialColor,
                                                width: `${socialSize}px`,
                                                height: `${socialSize}px`,
                                                borderRadius: '50%',
                                                display: "block",
                                                padding: '3px',
                                                margin: '10px 0 0 0',
                                            }}
                                        >
                                            <Image
                                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAJFBMVEVHcEz///////////////////////////////////////////8Uel1nAAAAC3RSTlMACiE6RWJ3iKPL4/2e55kAAAChSURBVHja7dbLCgMhDIXhGHWMOe//vi1ScApdjB56g3xLF78QXURC+Be5Hg9F1qk5JpVFyfCkyBrtoALJwQU6uEAFF0hOBgrIgLGBjmnrIzlOurW7IitwYrIBkycyYPLZQLUBU2/DxSkqpq13zO8MuJABYwOVDSgZcCEDxgaqXKHMCIbcBpzYOMmy5MXVEYhABL4ScExJNujRHo4c+374eTfT3iB+V7Ic5AAAAABJRU5ErkJggg=='
                                                alt="Facebook"
                                                width={socialSize}
                                                height={socialSize}
                                                style={{ display: 'block', width: `100%`, height: `100%`, margin: 'auto' }}
                                            />
                                        </div>
                                    </Link>
                                </div>
                            )}

                            {links.tiktok && (
                                <div style={{ textAlign: 'center', paddingRight: '10px' }}>
                                    <Link href={`https://www.tiktok.com/@${links.tiktok}`} target="_blank">
                                        <div
                                            style={{
                                                backgroundColor: socialColor,
                                                width: `${socialSize}px`,
                                                height: `${socialSize}px`,
                                                borderRadius: '50%',
                                                display: "block",
                                                padding: '3px',
                                                margin: '10px 0 0 0'
                                            }}
                                        >
                                            <Image
                                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAJ1BMVEVHcEz//////////v///v///v7//v7//v7//v///////v///////v6hEWneAAAAC3RSTlMABBhBZIGWp83n8pXIixAAAAEDSURBVHja7dbBbsMgDIBhbBOwwe//vKPdLLZCin3bob96CvpEEyQn6dNdfYRxQlGi32GcUJyUOBEMEy1xojlOGgWIleNEK4aJtkIYIJabcJxAllsCVFiuhTwWKrfxW0CWPtqQu5D7IxVhlstDSJ7gJw9BMeAlwCbcJD/FPGY4EpApKrqeGM1NrpQ8BIota00+ktiWG3qJzGHiJboZWeDcBec1fE/YVmFeo/ekbHYpRmRLaL0XbEZ4JwBkeWL1NJLz67lc/TT4gf+cPtYpBNI+bPY3AKm0Ic5zktTqoykY0tmMDJzeLdR0SQ4jH/lVMKZTWX4DyXACNi91JFzIwIH8l0+bLw6jIBvwyzNCAAAAAElFTkSuQmCC'
                                                alt="TikTok"
                                                width={socialSize}
                                                height={socialSize}
                                                style={{ display: 'block', width: `100%`, height: `100%`, margin: 'auto' }}
                                            />
                                        </div>
                                    </Link>
                                </div>
                            )}

                            {links.linkedin && (
                                <div style={{ textAlign: 'center', paddingRight: '10px' }}>
                                    <Link href={`https://www.tiktok.com/@${links.tiktok}`} target="_blank">
                                        <div
                                            style={{
                                                backgroundColor: socialColor,
                                                width: `${socialSize}px`,
                                                height: `${socialSize}px`,
                                                borderRadius: '50%',
                                                display: "block",
                                                padding: '3px',
                                                margin: '10px 0 0 0'
                                            }}
                                        >
                                            <Image
                                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMFBMVEVHcEz///////////////////////////////////////////////////////////9EPuwCAAAAD3RSTlMA9unEHjKIsJ8IZtURTTtMOVWGAAAA4klEQVR42u2USwrDMAxELdmy5e/c/7aFBpRQQ+wuCqX0rWaCXkhQHPfVhFiJagz7RiE8ob5rDEBHa6Ig2VQS4hEi0qbCaEcI4G0lmPK5BxOCjpZFAXGbdMYTKm6bFj3bKr8HD8NPNXf1TFy1Z3eCC6+1sGUuV+VML9UDNY6QmxQPpLyhoPbrKnxeKQRt7iRUxJVSyvSZjIUyEZHeVRohrJSgTKzBekJZKJ2OjQx7O+i9EghJsiRwcweCeq8okp1BO7f3CkPs3gcZtNp+tkG7tFIs/JW/8qPKyVSnifWff574KR5zWR1PuseM5gAAAABJRU5ErkJggg=='
                                                alt="LinkedIn"
                                                width={socialSize}
                                                height={socialSize}
                                                style={{ display: 'block', width: `100%`, height: `100%`, margin: 'auto' }}
                                            />
                                        </div>
                                    </Link>
                                </div>
                            )}

                            {links.pinterest && (
                                <div style={{ textAlign: 'center', paddingRight: '10px' }}>
                                    <Link href={`https://www.pinterest.com/${links.pinterest}`} target="_blank">
                                        <div
                                            style={{
                                                backgroundColor: socialColor,
                                                width: `${socialSize}px`,
                                                height: `${socialSize}px`,
                                                borderRadius: '50%',
                                                display: "block",
                                                padding: '3px',
                                                margin: '10px 0 0 0'
                                            }}
                                        >
                                            <Image
                                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANlBMVEVHcEz///////////////////////////////////////////////////////////////////+GUsxbAAAAEXRSTlMABQ4aKzxNX3GGlqi7zN/t+QnWvmUAAATlSURBVHjatVlZlqMwDMT7hrf7X3YekHQZyxCSAX01nVhLlSRLZLomTGrrQowp51JzSnH2Vks23SLS+FjqSMrs1P8aUS7VUylB/65duFwvSHLiN+dDgZ8xOKuVlIKziQsptfUzYsuOf4/8DKTtC2lG2An5bcJ+p5778jroz2lk+h3nLL5BJ70OGXaFqc1ENlfVM/dSLyfIFRPuIjwb+lF9w1isi3h2xZ24Mmt7s8r4sFRyLTnNfuWdRh0u6F/hT7IrtziqsJ0NXdYYPuITV/R5a/KwmPOuwtSasvYDvyv+gTXo+nLWKBzvLJRz6lynn7s/9TEspcz5xLnUFhWmGwtlQZef+K9WfBiphxKM6AtZ+Vy71GHmAw18OZKAq93cT2bsFLebiYgTYXmW5wApPL7UT0MBggU+8bQYPKyWsgvQbwDw8wpLdRf1CpKexhJ2FFlQ+Lnuwdu8PB2U2BKA+eNw1Q84P2S2351ThwwkBjCh/4IF6IxHicRyW4ceWJ4InIFrevFsn9H4oHDwfa37AhYLR3vX4HPAw74khQ0xl5xisHJ8Fl77A4wSDHd8TzLURmY5zg/dQJGoftEiZFtQJ1O6DmcGISA5+fJ1ekGbtgRjy7ehPZTEIFv35iEJrkGO18YHvfUbqwTjQtmtnx8AjHDcsIxNozO2OVjsPtTCqH9QajoXgIoaROPIJZJGDdM0JCj4R46RaFiCa9QViETqMDFMo7zBDhXwJnPqyigJc0NhJgaW3GKNCtGgRb/JSaNZkCR/02OIhlPuAUaevjYAiBANcprS+QmiMib5ioEA1gckwxgEmgyNxhOI0vBC0YgLxiBdD4xw2/ZFI1FnpNCIMdKLaK2r/vpwvUUCJZyi3VTAWCLXx/CZdFBEAyEdlBdoCXt3zPBCZOheoHOEYqQXmtphzknngE43TAOIwGzABEaw/dcdgOyZr5JeXRCAAUXVkN6mySaGiCNJl+FoLRsoqtrTxyQZz+kVjhwc0zz3c0t7hUfcDXTmZKd5BgBMQ5vdt1Nex+mh8P/DwQtKM0emSuQc+jwRFhfQGZmvjub3sBtuGCggNwGZMjEinW4gtu2ZajVEexQEaxNGqvNBuegXU6rvKw5ZcLT48Xy+yoq8Tu3ocbuyl3T212WfWQ40QsiBrLae+YpEIguwLrVromlYPAsAkJZXLm+R9Hiov3gXg61CFoHXkbAF9TVuDgq6xXM2kk1ChwL9+PhsbUEevNkMfcS+Qsimby6+cDHlzzFQ0DpJlwXwl8TF10tZHMxAKkJ9Mp1fmOzPhRkn32jN1L6bU6k5etUe8XWroavCKAVqzskDARLXZf10BgLENVs2wDTUb/XTGYilN/B2n+jcxNcHF/AfbxW4LfAuWPBp4kIZ/8e5599pR0vFQzC5HkgE479RIMr6wF0ZqtfTDyJaCux7VhA29dotwP+dgtRkrLQ+5lK3Vwta/KCazh8KE9ddguUaU9mtghEQ4/Ctgn0fb0fuEkpBxN/3CIYU3PY3UoxBkZPXQY9QwPLtFGPqxd70BAUG45C/VzsWDyxIdwqmXoykj1AAis2durHsPkUxFg9U8XMUqCcobqfeAIrv7nQWO9czBgx+tnjOgMDO9UgZMKzOj/RSFuoTAeASbn7CeqSSC36EewYj6H8mhEXiI/qx9Ac+PSc6pRua9D+BZIQCkuKCHAAAAABJRU5ErkJggg=='
                                                alt="Pinterest"
                                                width={socialSize}
                                                height={socialSize}
                                                style={{ display: 'block', width: `100%`, height: `100%`, margin: 'auto' }}
                                            />
                                        </div>
                                    </Link>
                                </div>
                            )}

                            {links.reddit && (
                                <div style={{ textAlign: 'center', paddingRight: '10px' }}>
                                    <Link href={`https://www.reddit.com/r/${links.reddit}`} target="_blank">
                                        <div
                                            style={{
                                                backgroundColor: socialColor,
                                                width: `${socialSize}px`,
                                                height: `${socialSize}px`,
                                                borderRadius: '50%',
                                                display: "block",
                                                padding: '3px',
                                                margin: '10px 0 0 0'

                                            }}
                                        >
                                            <Image
                                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////9KjZoYAAAAFHRSTlMA+urUJKG/G/OuXXkLTJIFPBNtL445wJEAAAHsSURBVHja7ZTblqswCIbJgUBijEb/93/WvWw1bWas9navNd8VKMhBgP5DKlvLlR7MQTWMdEN2AOBkkwc8GOiaAifePXxGmEFkMLiOkxUrUXWwiw8YnrECXTCNz/c5YkM2WaA3eZW9cnZfusS3xO8Sa2Zzk78s38FT47smW1Rq3PzKPC8cnAWsCzzMmW6oKRh0mJAq/cazhWVPng1gXEnzKjnLOqfitifsm8nOqIABNBogpEwdOQXAxN1k3GMooifvAFM8neCLAZwnH6FPAwYTTQUInj7gA1Cmp+mGhacpQhNdkBRxIg+7KRPM5m5XumS1YCKDI8oCXemGVbHsUYgR9JgeiaqxldTrIzSAj47tEokFACtEZzoDursnqBwTH0UiItGZLgZHixbwLimkbdKJzlj6bbp3SYjdatwnRh6ufSsfz57lejrXM7RzuWlyc2kT8xUetmWc6Ja+/AFMXxHbwRCo0Eem2gozptlxCzO5+HMrg0pn1vZyPFzguoji4HIbS0+N1/B7Cx2kOQwK61/DT433FasRMKEsKS0lGCDW9xV70S3yHA12TJy7Re7ozkUeh8JchjH35+InSa+O0vkxEcan0wcWOmdlA8BxmqUSVZkTOwCGV/qMLL/P+FLpI632GKwFrA1x68AfHf8Abl0hniSG4/UAAAAASUVORK5CYII='
                                                alt="Reddit"
                                                width={socialSize}
                                                height={socialSize}
                                                style={{ display: 'block', width: `100%`, height: `100%`, margin: 'auto' }}
                                            />
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </div>
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
                                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABECAMAAACI0EjDAAAAAXNSR0IArs4c6QAAAIdQTFRFl5eXAAAArKys/////Pv39/b28/Xi8fDw/ee44ebu6t7f+9uW0uW31Nfa+sbJ+tB1xcnO97G09sNUt9aMwMDA9bcworvctra29q8Zp8Zp9JWai6nToaGk8HyBh7tBcZbKjIyM7V9mgYGB60dPd3d3S3q76TtDbGxs5zA5MWexXl5eSUlJPT09EvV5awAAAAN0Uk5T/wCt7IkvZgAABSVJREFUeNrtmw1zojgYgLl7E2KkKLoqruAJCqVN3v//+458GRF7XaadGzvwdNeBrNmZhycgQ9tgXPz9VxDk6XjQwimMBjYJT8KT8CQ8CU/Ck/AkPHLh7F3BRyNMrPBUeCo8FZ6EJ+FJ+McIkzAMyY8UZqtDWV7K8ria94X5Ljtl2e5OPozW271iu5z9NOFF+ea5rDrCZFe/W+oErszW+xu2EXnRwD16NHwuYXJ861IyLxxrXUftKi/3d6x//6MI73316HMJM5v3tSzLi92cO+Hd+x3xje92Gc1m0XJrjLXaL+jy2ww+lbDxPS5AMTe1L1QJW7KEUx5nN8YzrbgkoCGR3vWJe4GfSvigk67AsXhVA4er8ImBgZ7MqqYAa50UFD741iXuB34mYab9VuBZ6SPAMusLHmOcAVmu268ZXCG9xP3Anws3qJDNBj4gQaQAKYfhpLwTuOyv8YMRrgl4aK3HGPTQySOTuB/4z4WllIi4+Q9hJnAOQ7mdVPrAncSlEd7BLTs39lj4VzcoCc3+nwtXAMAFVvAYwhjMcbjw7ST6pqDdf9ZjRpjALcyscm80a4lajHBoEvcCDxKGM54hEQIAchEUolBpRUMBIBYiFohqSO1UvJIiBwBeCNmk7UijYooEINDjQAIhRRXbSZqFljt2McLezVPrZe7vszoswSSmYLCBBwiLzWYTICawQdTqVYrI9IZd0gm2NGZHtiCmwCUqCioxVjMLIBITaMkRBaLc6El++T4mMBeoLiY7QKiT9oRt4m7gAcKGHLwwlZgCkbixwjRGjKne0WYCzyBQxEwdpwpzKBCFOhhEBS5EDBxxoyd9Jnxyp2tfmEVasC9sE5NO4AHCsqoqgRh4Yf13g5I4YX062h2u38JUZSASixQbECixtT+DgakVk9pJXvjygPzjws53re609J+tEe4k/mU3h57DOSL3wjEiO2MBj4QpQIGNMYcKG4YYowgwFfZCHzeIsiu8sJ9KfXaPzmGdvTa6EYErayPsE/vAQ4WVYtoKE4BKDQhMJcZ9YfOWQmlqPYkFNNhgkGCDkkILQyxikEa4c0WmHwnXjy5ahfad9T+WrpovPvAwYUopPyPG6qQDJpVwjhIF3Ag7eycMopWGFDFVL5hQRKzcMWHATeEYLP5GqyfcfwDA9dhvd2Pp2Rphn9gFHiZsqYBKlGephTki5l6YIYqqI6y2pED3XgqNcldQiU0gEXMzyXDsr+mVYm6Es7sVrXDr1zPbX4eISewCDxeWIqAAiUQZ5LpUhci9sL4Md4UhaRBlQABAqN1chdWkAjEosDKT/EncTTw3I1q4mzjWI/WyV3i9N4V9Yht4kHAXTq7HoelO59CD8k/+F8a7d86vC3Cwix4gVrjmfnKtR5LZ/Tm83Fthn9h+Bg8U7sM3Z8QUvpP5qy56YKBZXWzy3d1zHWIHTkC03tYZh8rXCNvEjvDrwrG+R/pO/L1HeTwcj69m++iu0vol2+2yU219CUBkBNfRLJxFWte8gE9sAn9dmOVBSuC7ja2l5+juMXYmq+dE/Rr2RKERNry4wM/41NI/1/GUC3DCCfCTt/WPLaPt3rMOoSNMXODnE/bKh9Jkfi0Pc9DEuxYOQHhWG9ssgSuk+1CaRC1q4/ZC/ZzCHsrmjMJjGGfQg3zwXQdiAz+tsIfAl/GBR/NDLdQGHoewDzwa4dAGHoewDzwSYR94LMLEBR5N4ZdQfU0/azkJT8KT8CQ8CU/Ck/AkPAn/H7Ax/sL06H4l/l+DFtf0UvgIEAAAAABJRU5ErkJggg==' />
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
                </div >
                <style jsx>{`
    @media screen and (max-width: 600px) {
        div {
        }
        a {
            display: block;
            margin: 10px auto;
        }
        img {
            max-width: 100%;
            height: auto;
        }
    }
`}</style>
            </div>
        </>
    );
}
