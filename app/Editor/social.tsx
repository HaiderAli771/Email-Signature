import React, { Dispatch, SetStateAction, useState } from 'react';
import { ILinks } from './types';
import { faInstagram, faFacebook, faTiktok, faLinkedin, faPinterest, faReddit } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface Props {
    links: ILinks,
    setLinks: Dispatch<SetStateAction<ILinks>>
}

const Social = ({
    links,
    setLinks,
}: Props) => {



    return (
        <div className="max-w-md p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Added Social Icons</h2>
            <h1 className="text-base  mb-4">ADD THE SOCIAL MEDIA PROFILE NAME TO ADD THE SOCIAL ICON ON TEMPLATE.</h1>
            <div className="space-y-4 mt-4">

                <div className="flex items-center mr-10 space-x-2">
                    <FontAwesomeIcon icon={faInstagram} />
                    <input
                        type="text"
                        value={links.instagram}
                        onChange={(e) => setLinks({ ...links, instagram: e.target.value })}
                        placeholder="Add Instagram link"
                        className="w-full px-4 pl-2 pr-10 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                    />


                </div>


                <div className="flex items-center mr-10 space-x-2">
                    <FontAwesomeIcon icon={faFacebook} />
                    <input
                        type="text"
                        value={links.facebook}
                        onChange={(e) => setLinks({ ...links, facebook: e.target.value })}
                        placeholder="Add Facebook link"
                        className="w-full px-4 pl-2 pr-10 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                    />

                </div>



                <div className="flex items-center mr-10 space-x-2">
                    <FontAwesomeIcon icon={faTiktok} />
                    <input
                        type="text"
                        value={links.tiktok}
                        onChange={(e) => setLinks({ ...links, tiktok: e.target.value })}
                        placeholder="Add TikTok link"
                        className="w-full px-4 pl-2 pr-10 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                    />
                </div>



                <div className="flex items-center mr-10 space-x-2">
                    <FontAwesomeIcon icon={faLinkedin} />
                    <input
                        type="text"
                        value={links.linkedin}
                        onChange={(e) => setLinks({ ...links, linkedin: e.target.value })}
                        placeholder="Add LinkedIn link"
                        className="w-full px-4 pl-2 pr-10 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                    />

                </div>



                <div className="flex items-center mr-10 space-x-2">
                    <FontAwesomeIcon icon={faPinterest} />
                    <input
                        type="text"
                        value={links.pinterest}
                        onChange={(e) => setLinks({ ...links, pinterest: e.target.value })}
                        placeholder="Add Pinterest link"
                        className="w-full px-4 pl-2 pr-10 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                    />

                </div>


                <div className="flex items-center mr-10 space-x-2">
                    <FontAwesomeIcon icon={faReddit} />
                    <input
                        type="text"
                        value={links.reddit}
                        onChange={(e) => setLinks({ ...links, "reddit": e.target.value })}
                        placeholder="Add Reddit link"
                        className="w-full px-4 pl-2 pr-10 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                    />

                </div>

            </div>
        </div>
    );
};

export default Social;
