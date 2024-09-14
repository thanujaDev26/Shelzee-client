import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Cover = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const text = 'Welcome to ShelZee';
        const type = () => {
            if (textIndex < text.length) {
                setDisplayedText((prev) => prev + text.charAt(textIndex));
                setTextIndex((prev) => prev + 1);
            }
        };
        const timer = setTimeout(type, 100);
        return () => clearTimeout(timer);
    }, [textIndex]);

    return (
        <div className="relative h-screen overflow-hidden flex items-center justify-center">
            {/* Video for large screens */}
            <video
                className="absolute inset-0 w-full h-full object-cover hidden lg:block lg:object-cover lg:h-3/4 lg:w-full"
                src={require("../../images/CoverVideo.mp4")}
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="absolute inset-0 bg-black opacity-50 w-full h-full object-cover hidden lg:block lg:object-cover lg:h-3/4 lg:w-full"></div>
            {/* Video for mobile devices */}
            <video
                className="absolute inset-0 w-full h-full object-cover lg:hidden"
                src={require("../../images/MobileVideo.mp4")}
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="absolute inset-0 bg-black opacity-50 w-full h-full object-cover lg:hidden"></div>
            <div className="relative z-10 flex flex-col items-center lg:items-end justify-start h-full text-center lg:text-right text-white px-4 lg:px-16 pt-56 lg:pt-32 lg:pr-12 lg:w-1/2 lg:ml-auto">
                <h1 className="text-4xl font-bold mb-4">
                    <span className="typing">{displayedText}</span>
                </h1>
                <p className="text-lg mb-6">
                    Where Shopping helps save turtles!<br />
                    Browse our unique merchandise, <br /> and every purchase supports global efforts <br />to
                    protect endangered turtle species.<br />
                    <span className="text-2xl">
                        <strong>Start making a difference today!</strong>
                    </span>
                </p>
                <div className="flex space-x-4 justify-center items-center lg:justify-end">
                    <Link to="/products" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4">
                        Shop Now
                    </Link>
                    <Link to="/join-us" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
                        Join Us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cover;
