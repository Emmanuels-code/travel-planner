import React, { useState, useEffect } from 'react';
import LocationCard from './LocationCard'; // Assuming LocationCard is a separate component

const LocationList = () => {
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch locations from the server
    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await fetch('/locations'); // Assumes server is running on the same domain
                if (!response.ok) {
                    throw new Error('Failed to fetch locations');
                }
                const data = await response.json();
                setLocations(data); // Set locations with fetched data
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchLocations();
    }, []); // Empty dependency array ensures this only runs once on mount

    if (loading) {
        return <p>Loading locations...</p>; // Show loading indicator
    }

    if (error) {
        return <p>Error: {error}</p>; // Show error if any
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Explore Destinations</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {locations.map((location, index) => (
                    <LocationCard key={index} {...location} />
                ))}
            </div>
        </div>
    );
};

export default LocationList;
