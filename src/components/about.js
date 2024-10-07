import React from 'react';
import LottieAnimation from './lottieanimation.js';
import animationData from './Animation - 1728238101879.json';

const Navbar = () => (
    <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex">
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <a href="/" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            Home
                        </a>
                        <a href="/about" className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            About
                        </a>
                    </div>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    <a href="/login">
                        <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Login
                        </button>
                    </a>
                    <a href="/signup">
                        <button className="ml-3 bg-blue-500 p-2 rounded-full text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Sign Up
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </nav>
);

const AboutHero = () => (
    <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">About Our</span>{' '}
                            <span className="block text-blue-600 xl:inline">Travel Planner</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            Discover the story behind our passion for travel and our commitment to making your journeys unforgettable.
                        </p>
                    </div>
                </main>
            </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Travel planning"
            />
        </div>
    </div>
);

const MissionSection = () => (
    <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">Our Mission</h2>
                <p className="mt-4 text-lg text-gray-500">
                    At Travel Planner, we believe that travel has the power to transform lives, broaden perspectives, and create lasting memories. Our mission is to make travel planning effortless and inspiring, enabling everyone to explore the world with confidence and excitement.
                </p>
            </div>
        </div>
    </div>
);

const FeatureSection = () => (
    <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div>
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Why Choose Us?
                    </h2>
                    <p className="mt-3 max-w-3xl text-lg text-gray-500">
                        Our travel planning platform offers a unique combination of features designed to make your journey seamless and enjoyable.
                    </p>
                    <div className="mt-8 space-y-4">
                        {[
                            "Personalized itineraries tailored to your interests",
                            "Real-time updates and travel alerts",
                            "Access to exclusive deals and local experiences",
                            "24/7 customer support for peace of mind"
                        ].map((feature, index) => (
                            <div key={index} className="flex items-center">
                                <div className="flex-shrink-0">
                                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="ml-3 text-base text-gray-500">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-8 lg:mt-0">
                    <div className="flex justify-center">
                        <LottieAnimation animationData={animationData} width={400} height={400} />
                    </div>
                </div>
            </div>
        </div>
    </div>
);


const AboutPage = () => {
    return (
        <div className="bg-white">
            <Navbar />
            <AboutHero />
            <MissionSection />
            <FeatureSection />

        </div>
    );
};

export default AboutPage;