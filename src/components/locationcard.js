import React, { useState } from 'react';
import { MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const LocationCard = ({ id, name, description, thumbnailUrl, coordinates, spots }) => {
    const [expanded, setExpanded] = useState(false); // Define expanded state

    return (
        <Link
            to={{
                pathname: '/note',
                search: `?locationId=${id}`,  // Add this line
            }}
            className="block"
        >
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl">
                <img src={thumbnailUrl} alt={name} className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
                    <p className="text-gray-600 mb-4">{description}</p>
                    <div className="flex items-center text-gray-500 mb-4">
                        <MapPin className="h-5 w-5 mr-2" />
                        <span>{coordinates.latitude.toFixed(2)}, {coordinates.longitude.toFixed(2)}</span>
                    </div>

                    {/* Add the expanded toggle button */}
                    {spots && spots.length > 0 && (
                        <div>
                            <button
                                onClick={(e) => {
                                    e.preventDefault(); // Prevent the link from triggering when expanding spots
                                    setExpanded(!expanded); // Toggle the expanded state
                                }}
                                className="flex items-center justify-between w-full text-blue-600 hover:text-blue-800 transition-colors duration-200"
                            >
                                <span>{expanded ? 'Hide Spots' : 'Show Spots'}</span>
                                {expanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                            </button>
                            {expanded && (
                                <div className="mt-4 space-y-2">
                                    {spots.map((spot, index) => (
                                        <div key={index} className="bg-gray-100 p-3 rounded-md">
                                            <h4 className="font-medium text-gray-900">{spot.name}</h4>
                                            <p className="text-sm text-gray-600">{spot.description}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default LocationCard;
