import Link from 'next/link'
import React from 'react'
import { FaFileAlt } from 'react-icons/fa'

const page = () => {
    return (
        <section id="templates" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">
                    Choose a <span className="text-blue-600">Template</span> That Fits Your Needs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="p-8 bg-white shadow-xl rounded-lg hover:shadow-2xl transition">
                        <FaFileAlt className="text-blue-600 text-5xl mb-4" />
                        <h3 className="text-2xl font-semibold mb-4">Business Template</h3>
                        <p className="text-gray-600 mb-6">
                            Perfect for signing business contracts and agreements.
                        </p>
                        <Link href='./Editor' className="px-4 py-2 md:px-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
                            Select Template
                        </Link>
                    </div>
                    <div className="p-8 bg-white shadow-xl rounded-lg hover:shadow-2xl transition">
                        <FaFileAlt className="text-blue-600 text-5xl mb-4" />
                        <h3 className="text-2xl font-semibold mb-4">Personal Template</h3>
                        <p className="text-gray-600 mb-6">
                            Ideal for personal signatures and documents.
                        </p>
                        <Link href='./Editor' className="px-4 py-2 md:px-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
                            Select Template
                        </Link>
                    </div>
                    <div className="p-8 bg-white shadow-xl rounded-lg hover:shadow-2xl transition">
                        <FaFileAlt className="text-blue-600 text-5xl mb-4" />
                        <h3 className="text-2xl font-semibold mb-4">Legal Template</h3>
                        <p className="text-gray-600 mb-6">
                            Secure templates for legal documents and agreements.
                        </p>
                        <Link href='./Editor' className="px-4 py-2 md:px-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
                            Select Template
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page