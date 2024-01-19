import React from 'react'

import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';

import '../app/globals.css';

const TermsAndConditions: React.FC = () => {
    return (
        <div>

            <Navbar />

            <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg my-8">
                <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Terms & Conditions</h1>

                <p className="text-gray-700 mb-4">
                    These Terms and Conditions govern your use of our website. By accessing and using our website, you agree to comply with these terms. If you do not agree with these terms, please do not use our website.
                </p>

                <div className="text-gray-700 mb-4">
                    <h2 className="text-xl font-bold mb-2">Use of Our Website</h2>
                    <p className="mb-4">
                        You may use our website for lawful purposes and in compliance with these terms. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.
                    </p>
                </div>

                <div className="text-gray-700 mb-4">
                    <h2 className="text-xl font-bold mb-2">Intellectual Property</h2>
                    <p className="mb-4">
                        The content on our website, including text, graphics, logos, and images, is protected by copyright and other intellectual property laws. You may not use, modify, or distribute our content without our written consent.
                    </p>
                </div>

                <div className="text-gray-700 mb-4">
                    <h2 className="text-xl font-bold mb-2">Links to Other Websites</h2>
                    <p className="mb-4">
                        Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of these websites. Use them at your own risk.
                    </p>
                </div>

                <div className="text-gray-700 mb-4">
                    <h2 className="text-xl font-bold mb-2">Changes to these Terms</h2>
                    <p className="mb-4">
                        We may update these terms to reflect changes to our website and services. We encourage you to periodically review these terms for the latest information.
                    </p>
                </div>

                <div className="text-gray-700">
                    <h2 className="text-xl font-bold mb-2">Contact Us</h2>
                    <p>
                        If you have any questions or concerns about these Terms & Conditions, please contact us at <a href="mailto:ieee@srmist.edu.in" className="text-blue-500">ieee@srmist.edu.in</a>.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default TermsAndConditions