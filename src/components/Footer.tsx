import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 text-center">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
            <p className="text-xs">
                Made with ❤️ for Valentine's Day
            </p>
        </footer>
    );
};

export default Footer;