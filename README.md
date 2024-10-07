# Travel Planner - Itinerary Planning Application

This project is a full-stack web application designed to help users plan travel itineraries by exploring different locations and adding activities to each. Users can log in, explore spots within locations, create and save itineraries, and add notes for individual activities.
Features

- **Authentication** : Users can sign up, log in, and have personalized access to their itineraries.
- **Explore Locations**: Browse different global destinations with descriptions and explore spots within each location.
- **Itinerary Creation**: Users can create custom itineraries by selecting spots within locations and adding personalized notes.
- **Responsive Design**: The app is mobile-friendly, ensuring a seamless experience across different devices.

## Tech Stack

- **Frontend**: React.js (with Hooks for state management and react-router for navigation)
- **Database**: MongoDB (for storing user information, itineraries, locations, and spots)
- **Authentication**: JWT (JSON Web Token) based authentication
- **UI Framework**: Tailwind CSS for responsive design

## Prerequisites

Before you begin, ensure you have the following installed:

> Node.js (>= 14.x)
> MongoDB (Ensure MongoDB is running locally or have a connection URI)
> npm or yarn for dependency management


# Getting Started
1. Clone the repository:

```bash

git clone https://github.com/yourusername/travel-planner.git
cd travel-planner
```

2. Install dependencies:
For the backend (Express + MongoDB):

```bash

cd server
npm install
```

For the frontend (React):

```bash

cd client
npm install
```
3. Set up environment variables:

In the server directory, create a .env file with the following values:

```bash

PORT=4000
MONGO_URI=yourmongouri
JWT_SECRET=your-secret-key
```
Adjust the MONGO_URI to match your MongoDB connection string if using a remote database like MongoDB Atlas.