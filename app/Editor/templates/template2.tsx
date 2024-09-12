import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faFacebook,
    faTiktok,
    faLinkedin,
    faPinterest,
    faReddit,
} from '@fortawesome/free-brands-svg-icons';
interface Props {
    name: string;
    title: string;
    company: string;
    phone: string;
    email: string;
    imageSize: number;
    changeImg: string | null;
}
import Image from 'next/image';
export default function template2({ name,
    title,
    company,
    phone,
    email,
    imageSize,
    changeImg, }: Props) {

    return (
        <div className="h-[200px] rounded-xl overflow-hidden shadow-lg p-6 bg-white flex items-center space-x-4">
            {changeImg && (
                <div className="flex-shrink-0">
                    <Image
                        src={changeImg}
                        className="rounded-full"
                        alt="Profile"
                        width={imageSize}
                        height={imageSize}
                    />
                </div>
            )}

            <div className="flex-grow">
                <h1 className="text-gray-900 font-semibold text-lg mb-1">{name}</h1>
                <h3 className="text-gray-600 text-sm mb-2">{title}</h3>
                <h3 className="text-gray-600 text-sm mb-2">{company}</h3>

                <h4 className="text-gray-600 text-sm mb-2">
                    <span className="font-bold">📞</span> {phone}
                </h4>
                <h5 className="text-gray-600 text-sm mb-2">
                    <span className="font-bold">✉️</span> {email}
                </h5>
            </div>
            <div className="border-l pl-4 flex flex-col text-teal-600">
                <a href="#" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" aria-label="TikTok">
                    <FontAwesomeIcon icon={faTiktok} />
                </a>
                <a href="#" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="#" aria-label="Pinterest">
                    <FontAwesomeIcon icon={faPinterest} />
                </a>
                <a href="#" aria-label="Reddit">
                    <FontAwesomeIcon icon={faReddit} />
                </a>
            </div>
        </div>
    );
}