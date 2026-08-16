# Movie App

A React movie application that displays popular movies using the TMDB API.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)
- [Credits](#credits)

---

## Overview

### Motivation

This project was created as part of a React course to practise working with React and external APIs.

### Objective

The application retrieves popular movie information from the TMDB API and displays it in a simple movie browsing interface.

### Learning Outcomes

- Built reusable React components
- Used React `useState` and `useEffect`
- Retrieved data from an external API using Fetch
- Worked with JSON API responses
- Passed data between components using props
- Used `.map()` to dynamically create movie cards
- Used conditional rendering
- Used environment variables with Vite
- Used Tailwind CSS for styling

---

## Features

- Display popular movies
- Movie posters
- Movie titles
- Movie overviews
- Release dates
- Fallback messages when information is unavailable
- Two-column movie grid
- Loading message while movies are being retrieved
- Error message if the API request fails

---

## Tech Stack

### Frontend

- React
- JavaScript
- HTML5
- Tailwind CSS

### API

- TMDB API

### Tools

- Vite
- Git & GitHub
- VS Code
- GitHub Desktop

---

## Architecture

The application uses React components to retrieve and display movie data from the TMDB API.

```text
TMDB API
   ↓
App.jsx
   ↓
MovieList.jsx
   ↓
MovieCard.jsx


[live Demo] (https://movie-app-rouge-rho.vercel.app)
   ↓
Movie information displayed on screen


