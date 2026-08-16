Movie App

A React movie application that displays popular movies using the TMDB API.

Features
Displays popular movies from TMDB
Movie posters
Movie titles
Movie overviews
Release dates
Displays "No overview found" or "No release date found" when information is unavailable
Responsive two-column movie grid
Technologies Used
React
JavaScript
Vite
Tailwind CSS
TMDB API
Getting Started
1. Clone the repository
git clone <your-repository-url>
cd movie-app
2. Install dependencies
npm install
3. Add your TMDB API key

Create a .env file in the root of the project:

VITE_TMDB_API_KEY=your_api_key_here
4. Run the application
npm run dev

The application will then be available through the local URL provided by Vite.

API

Movie information is provided by The Movie Database (TMDB) API.

This project uses the popular movies endpoint to retrieve movie information.

Notes

Some movies may not have complete information available from the TMDB API. The application displays a fallback message when an overview or release date is unavailable.
