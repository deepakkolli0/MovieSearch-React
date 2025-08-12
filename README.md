# MovieSearch-React

A modern movie search application built with React that allows users to search for movies, TV shows, and anime using the OMDB API.

## Features

- **Movie Search**: Search for any movie, TV show, or anime
- **Movie Details**: View comprehensive information about each movie including:
  - Title, Year, Rating, Runtime
  - Genre, Plot, Director, Actors
  - Writer, Language, Awards
  - IMDb Rating
- **Sorting**: Filter movies by highest or lowest ratings
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Default Poster**: Fallback image for movies without posters
- **Clean UI**: Modern, dark theme with green accents

## Technologies Used

- **React**: Frontend framework
- **React Router**: Navigation and routing
- **OMDB API**: Movie database and information
- **CSS3**: Styling and responsive design
- **Font Awesome**: Icons

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/deepakkolli0/MovieSearch-React.git
cd MovieSearch-React
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## API Key

This application uses the OMDB API. The API key is included in the code for demonstration purposes. For production use, consider using environment variables to secure your API key.

## Project Structure

```
src/
├── components/
│   ├── FilterDropdown.jsx
│   ├── LandingPage.jsx
│   ├── MovieDetail.jsx
│   ├── MovieItem.jsx
│   ├── MovieList.jsx
│   ├── MovieSearch.jsx
│   ├── Navbar.jsx
│   └── SearchBar.jsx
├── img/
│   └── default_poster.jpg
├── App.js
├── App.css
├── index.js
└── index.css
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [OMDB API](http://www.omdbapi.com/) for providing movie data
- [Create React App](https://create-react-app.dev/) for the project setup
- [React Router](https://reactrouter.com/) for navigation
