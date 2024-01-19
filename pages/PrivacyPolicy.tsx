import React from 'react';

import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';

import '../app/globals.css';

const PrivacyPolicy: React.FC = () => {
    return (
        <div>

            <Navbar />

            <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg my-8">
                <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Privacy Policy</h1>

                <div className="text-gray-700 mb-4">
                    <h2 className="text-xl font-bold mb-2">Information We Collect</h2>
                    <p className="mb-4">
                        We may gather information directly from you, including your name, email address, and contact details. Additionally, we collect data about your website usage, such as IP address, browser type, and browsing activity.
                    </p>
                </div>

                <div className="text-gray-700 mb-4">
                    <h2 className="text-xl font-bold mb-2">How We Use Your Information</h2>
                    <p className="mb-4">
                        The information we collect is utilized to provide, maintain, and enhance the functionality and user experience of our website. This involves sending you updates, promotions, and important announcements.
                    </p>
                </div>

                <div className="text-gray-700 mb-4">
                    <h2 className="text-xl font-bold mb-2">Sharing Your Information</h2>
                    <p className="mb-4">
                        Rest assured, we do not sell, trade, or rent your personal information to third parties. However, we may share your information with service providers who help us operate and improve our website.
                    </p>
                </div>

                <div className="text-gray-700 mb-4">
                    <h2 className="text-xl font-bold mb-2">Your Choices</h2>
                    <p className="mb-4">
                        You can opt out of receiving promotional emails from us by following the unsubscribe instructions provided in those emails. You can also contact us to update, correct, or delete your personal information.
                    </p>
                </div>

                <div className="text-gray-700 mb-4">
                    <h2 className="text-xl font-bold mb-2">Security</h2>
                    <p className="mb-4">
                        We take appropriate security measures to protect your information. However, no data transmission over the internet can be guaranteed to be 100% secure. We cannot guarantee the security of any information you transmit to us.
                    </p>
                </div>

                <div className="text-gray-700 mb-4">
                    <h2 className="text-xl font-bold mb-2">Changes to this Policy</h2>
                    <p className="mb-4">
                        We may update this Privacy Policy to reflect changes to our information practices. We encourage you to periodically review this page for the latest information on our privacy practices.
                    </p>
                </div>

                <div className="text-gray-700">
                    <h2 className="text-xl font-bold mb-2">Contact Us</h2>
                    <p>
                        If you have any questions or concerns about our Privacy Policy, please contact us at <a href="mailto:ieee@srmist.edu.in" className="text-blue-500">ieee@srmist.edu.in</a>.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default PrivacyPolicy;