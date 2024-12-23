import React from 'react'

const page = () => {
    return (
        <section id="testimonials" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">
                    Hear From Our Satisfied Clients
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-white p-8 shadow-xl rounded-lg hover:shadow-2xl transition">
                        <p className="text-lg italic text-gray-600 mb-6">
                            “This platform has saved us countless hours with secure, reliable signatures.”
                        </p>
                        <h4 className="text-xl font-semibold text-gray-900">— Haider</h4>
                    </div>
                    <div className="bg-white p-8 shadow-xl rounded-lg hover:shadow-2xl transition">
                        <p className="text-lg italic text-gray-600 mb-6">
                            “We can sign documents from anywhere, with complete confidence in security.”
                        </p>
                        <h4 className="text-xl font-semibold text-gray-900">— Ali</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page