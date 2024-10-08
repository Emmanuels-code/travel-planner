import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NotesScreen = () => {
    const [spots, setSpots] = useState([]);
    const [notes, setNotes] = useState({});
    const [locationId, setLocationId] = useState(null); // State to store locationId
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const fetchSpots = async () => {
            const searchParams = new URLSearchParams(location.search);
            const fetchedLocationId = searchParams.get('locationId');

            if (!fetchedLocationId) {
                console.error('No locationId provided');
                return;
            }

            setLocationId(fetchedLocationId); // Save locationId to state

            try {
                const response = await fetch(`https://youthful-wandering-veil.glitch.me/locations/${fetchedLocationId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch spots');
                }
                const data = await response.json();

                setSpots(data.data.spots || []);
            } catch (error) {
                console.error('Error fetching spots:', error);
            }
        };

        fetchSpots();
    }, [location.search]);

    const handleNoteChange = (spotId, note) => {
        setNotes({ ...notes, [spotId]: note });
    };

    const handleSave = async () => {
        if (spots.length === 0) {
            alert('No spots available to save');
            return;
        }

        const activities = spots.map(spot => ({
            name: spot.name,
            spot: spot._id,
            notes: notes[spot._id] || '',
            duration: 60,
        }));

        if (!locationId) {
            alert('No locationId available');
            return;
        }

        try {
            const response = await fetch('https://youthful-wandering-veil.glitch.me/itineraries', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify({
                    locationId,
                    activities,
                }),
            });

            if (response.ok) {
                alert('Itinerary saved successfully!');
                navigate('/');
            } else {
                alert('Error saving itinerary');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Background image */}
            <div
                className="fixed inset-0 w-full h-full bg-cover bg-center z-0"
                style={{
                    backgroundImage: `url('https://miro.medium.com/v2/resize:fit:1400/0*Mua5Y2uq4a-XiK6j.jpg')`,
                }}
            >
                {/* Translucent overlay */}
                <div className="absolute inset-0 bg-white opacity-80"></div>
            </div>

            {/* Main content overlay */}
            <div className="relative z-10 max-w-3xl mx-auto p-6 min-h-screen overflow-y-auto">
                <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-xl">
                    <h1 className="text-3xl font-bold mb-6 text-center">Plan Your Itinerary</h1>
                    <div className="space-y-8">
                        {spots.map(spot => (
                            <div key={spot._id} className="bg-white shadow-md rounded-lg p-6">
                                <img
                                    src={spot.thumbnailUrl}
                                    alt={spot.name}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                                <h2 className="text-2xl font-semibold mb-2">{spot.name}</h2>
                                <p className="text-gray-600 mb-4">{spot.description}</p>
                                <div className="mb-4">
                                    <label htmlFor={`notes-${spot._id}`} className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Notes for This Spot:
                                    </label>
                                    <textarea
                                        id={`notes-${spot._id}`}
                                        value={notes[spot._id] || ''}
                                        onChange={(e) => handleNoteChange(spot._id, e.target.value)}
                                        placeholder="What would you like to do here? Any special plans or things to remember?"
                                        className="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <button
                            onClick={handleSave}
                            className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300"
                        >
                            Save Itinerary
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotesScreen;
