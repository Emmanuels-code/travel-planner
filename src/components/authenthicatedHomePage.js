import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, LogOut, PlusCircle } from 'lucide-react';
import LottieAnimation from './lottieanimation.js';
import animationData from './Animation - 1728238101879.json';

const Navbar = ({ onLogout }) => (
    <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <LottieAnimation animationData={animationData} width={50} height={50} />
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <a href="/" className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            Home
                        </a>

                        <a href="/locations" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            Explore
                        </a>
                    </div>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    <button onClick={onLogout} className="ml-4 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        <LogOut className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </div>
    </nav>
);

const UpcomingTrip = ({ destination, }) => (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-4">
        <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Upcoming Trip: {destination}</h3>

        </div>
    </div>
);

const RecommendedDestination = ({ name, description }) => (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-4">
        <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">{name}</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">{description}</p>
        </div>
    </div>
);

const AuthedHomePage = () => {
    const navigate = useNavigate();
    const [itineraries, setItineraries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItineraries = async () => {
            try {
                const response = await fetch('https://youthful-wandering-veil.glitch.me/itineraries', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch itineraries');
                }
                const data = await response.json();
                setItineraries(data);
            } catch (error) {
                console.error('Error fetching itineraries:', error);
                setError('Failed to fetch itineraries');
            } finally {
                setIsLoading(false);
            }
        };

        fetchItineraries();
    }, []);

    const handlePlanTrip = () => {
        navigate('/locations');
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    if (isLoading) {
        return <div className="text-center py-10">Loading your trips...</div>;
    }

    if (error) {
        return <div className="text-center py-10 text-red-500">Error: {error}</div>;
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar onLogout={handleLogout} />
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome back</h1>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Trips</h2>
                            {itineraries.length > 0 ? (
                                itineraries.map((itinerary) => (
                                    <UpcomingTrip
                                        key={itinerary._id}
                                        destination={itinerary.locationId.name}
                                        date={new Date(itinerary.activities[0]?.date).toLocaleDateString()}
                                    />
                                ))
                            ) : (
                                <p>You haven't planned any trips yet.</p>
                            )}
                            <div className="mt-6">
                                <button
                                    onClick={handlePlanTrip}
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    <PlusCircle className="h-5 w-5 mr-2" />
                                    Plan a New Trip
                                </button>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Recommended Destinations</h2>
                            <RecommendedDestination name="Paris, France" description="The City of Light, known for its art, cuisine, and iconic landmarks." />
                            <RecommendedDestination name="Tokyo, Japan" description="A bustling metropolis blending ultra-modern and traditional culture." />
                            <RecommendedDestination name="New York City, USA" description="The Big Apple, a global hub of culture, finance, and entertainment." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthedHomePage;