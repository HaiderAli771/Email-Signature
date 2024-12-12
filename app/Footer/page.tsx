import React from 'react';
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto text-center">
                <div className="mb-4">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                </div>
                <div className="flex justify-center space-x-6">
                    <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600">
                        <FaFacebook />
                    </Link>
                    <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                        <FaTwitter />
                    </Link>
                    <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700">
                        <FaLinkedin />
                    </Link>
                    <Link href="https://www.instagram.com/r_haiderali_/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
                        <FaInstagram />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;