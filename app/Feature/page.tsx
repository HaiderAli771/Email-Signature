import React from 'react'
import { FaLock, FaSignature, FaUsers } from 'react-icons/fa6'

const page = () => {
    return (
        <div>
            <section id="features" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">
                        Why Choose <span className="text-blue-600">Our Solution?</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="p-8 bg-white shadow-xl rounded-lg hover:shadow-2xl transition">
                            <FaSignature className="text-blue-600 text-5xl mb-4" />
                            <h3 className="text-2xl font-semibold mb-4">Custom Signatures</h3>
                            <p className="text-gray-600">
                                Create personalized signatures with ease for every occasion or need.
                            </p>
                        </div>
                        <div className="p-8 bg-white shadow-xl rounded-lg hover:shadow-2xl transition">
                            <FaLock className="text-blue-600 text-5xl mb-4" />
                            <h3 className="text-2xl font-semibold mb-4">Secure Encryption</h3>
                            <p className="text-gray-600">
                                Your documents are safe with our industry-leading encryption standards.
                            </p>
                        </div>
                        <div className="p-8 bg-white shadow-xl rounded-lg hover:shadow-2xl transition">
                            <FaUsers className="text-blue-600 text-5xl mb-4" />
                            <h3 className="text-2xl font-semibold mb-4">Collaborate Anywhere</h3>
                            <p className="text-gray-600">
                                Work together with your team from anywhere, at any time, on any device.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page