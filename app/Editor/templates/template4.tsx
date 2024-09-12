import { faInstagram, faFacebook, faTiktok, faLinkedin, faPinterest, faReddit } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Image from 'next/image';
interface Props {
    name: string;
    title: string;
    company: string;
    phone: string;
    email: string;
    imageSize: number;
    changeImg: string | null;

}
export default function template4({ name,
    title,
    company,
    phone,
    email,
    imageSize,
    changeImg, }: Props) {
    return (

        <div className=" p-6 border-2 border-indigo-200 rounded-lg shadow-lg space-y-4">

            <div className="flex items-center space-x-4">
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
                <div>
                    <h1 className="text-xl font-bold text-gray-700">{name}</h1>
                    <h3 className="text-sm text-gray-500">{title}</h3>
                    <h3 className="text-gray-600 text-sm mb-2">{company}</h3>

                </div>
            </div>

            <div className="border-b border-gray-300 my-4"></div>
            <div className="space-y-2">
                <h4 className="text-sm">📞 {phone}</h4>
                <h5 className="text-sm">✉️ {email}</h5>
            </div>

            <div className="flex space-x-4 mt-4">
                <a href="#" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} />

                </a>
                <a href="#" target="_blank">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" target="_blank">
                    <FontAwesomeIcon icon={faTiktok} />
                </a>
                <a href="#" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="#" target="_blank">
                    <FontAwesomeIcon icon={faPinterest} />
                </a>
                <a href="#" target="_blank">
                    <FontAwesomeIcon icon={faReddit} />
                </a>
            </div>
        </div>
    );
}