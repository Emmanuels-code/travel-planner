import React from 'react';
import { Camera } from 'lucide-react';


const locations = [
    {
        name: "Paris, France",
        description: "The City of Light, known for its art, cuisine, and iconic landmarks.",
        coordinates: { latitude: 48.8566, longitude: 2.3522 }
    },
    {
        name: "Tokyo, Japan",
        description: "A bustling metropolis blending ultra-modern and traditional culture.",
        coordinates: { latitude: 35.6762, longitude: 139.6503 }
    },
    {
        name: "New York City, USA",
        description: "The Big Apple, a global hub of culture, finance, and entertainment.",
        coordinates: { latitude: 40.7128, longitude: -74.006 }
    },
    {
        name: "Sydney, Australia",
        description: "A vibrant city known for its stunning harbor and opera house.",
        coordinates: { latitude: -33.8688, longitude: 151.2093 }
    },
    {
        name: "Rio de Janeiro, Brazil",
        description: "Famous for its beaches, Carnival, and the statue of Christ the Redeemer.",
        coordinates: { latitude: -22.9068, longitude: -43.1729 }
    }
];

const Navbar = () => (
    <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex">

                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <a href="google.com" className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            Home
                        </a>
                        <a href="google.com" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            About
                        </a>
                    </div>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    <a href="/login">
                        <button href="" className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
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

const Hero = () => (
    <div className="relative bg-white min-h-screen flex flex-col-reverse lg:flex-row">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 z-10">

            <div className="max-w-2xl w-full">
                <img width="80" height="50" src="https://img.icons8.com/stickers/50/airplane-mode-on.png" alt="airplane-mode-on" />
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block mb-2">Travel Planner</span>
                    <span className="block text-blue-600">Explore the World</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Plan your next adventure with ease. Discover new destinations and create unforgettable memories.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                        <a
                            href="/signup"
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                        >
                            Get started
                        </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                        <a
                            href="#"
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* Image Section */}
        <div className="w-full h-64 lg:h-auto lg:w-1/2">
            <img
                className="w-full h-full object-cover"
                src="https://physicsworld.com/wp-content/uploads/2019/02/plane-841441_1280.jpg"
                alt="Travel"
            />
        </div>
    </div>
);

const LocationCard = ({ name, description }) => (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-4">
        <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">{name}</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">{description}</p>
        </div>
    </div>
);

const LocationList = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Explore Destinations</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((location, index) => (
                <LocationCard key={index} {...location} />
            ))}
        </div>
    </div>
);

const HomePage = () => {
    return (
        <div className="bg-white">
            <Navbar />
            <Hero />
            <LocationList />
        </div>
    );
};

export default HomePage;