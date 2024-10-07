import React, { useState, useEffect } from 'react';
import LocationCard from './locationcard'; // Ensure path is correct
const LocationList = () => {
    const [locations, setLocations] = useState([]); // Initialize as an empty array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await fetch('https://youthful-wandering-veil.glitch.me/locations');
                if (!response.ok) {
                    throw new Error('Failed to fetch locations');
                }
                const result = await response.json();
                console.log('API response:', result); // Log to inspect the response
                setLocations(result.data || []); // Access the `data` array inside the response
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchLocations();
    }, []);
    if (loading) {
        return <p className="text-center mt-8">Loading locations...</p>;
    }
    if (error) {
        return <p className="text-center mt-8 text-red-500">Error: {error}</p>;
    }
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Explore Destinations</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {Array.isArray(locations) && locations.length > 0 ? (
                    locations.map((location) => (
                        <LocationCard
                            key={location._id} // Keep the key for the list
                            id={location._id} // Pass location ID as a prop
                            name={location.name}
                            description={location.description}
                            thumbnailUrl={location.thumbnailUrl}
                            coordinates={location.coordinates}
                            spots={location.spots}
                        />

                    ))
                ) : (
                    <p>No locations available.</p>
                )}
            </div>
        </div>
    );
};
export default LocationList