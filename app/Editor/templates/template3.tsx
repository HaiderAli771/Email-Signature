import { faInstagram, faFacebook, faTiktok, faLinkedin, faPinterest, faReddit } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Image from 'next/image';
interface Props {
    name: string,
    title: string,
    company: string,
    phone: string,
    email: string

}

export default function template3({ name, title, company, phone, email }: Props) {
    return (
        <div className=" p-6 border-2 border-indigo-200 rounded-md shadow-lg flex items-center space-x-4">
            {/* Left section: Profile Image */}
            <div className="flex-shrink-0">
                <Image
                    src='/images.png'
                    className="h-16 w-16 rounded-full"
                    alt="Profile"
                    width={60}
                    height={20}
                />
            </div>

            {/* Middle section: User Details */}
            <div className="flex-grow">
                <div className="text-lg font-semibold">{name}</div>
                <div className="text-sm text-gray-500 mb-2">{title}</div>
                <h3 className="text-gray-600 text-sm mb-2">{company}</h3>

                <div className="text-sm">📞{phone}</div>
                <div className="text-sm">✉️ {email}</div>

                {/* Social Media Icons */}
                <div className="flex space-x-2 mt-2">
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
        </div>
    );
}
