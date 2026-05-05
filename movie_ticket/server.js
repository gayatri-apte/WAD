const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Dummy movie data
let movies = [
    { id: 1, name: "Avengers", seats: 50 },
    { id: 2, name: "Inception", seats: 40 },
    { id: 3, name: "Interstellar", seats: 30 }
];

// API to get movies
app.get('/api/movies', (req, res) => {
    res.json(movies);
});

// API to book ticket
app.post('/api/book', (req, res) => {
    const { movieId, seats } = req.body;

    let movie = movies.find(m => m.id == movieId);

    if (!movie) {
        return res.status(404).send("Movie not found");
    }

    if (movie.seats < seats) {
        return res.status(400).send("Not enough seats available");
    }

    movie.seats -= seats;

    res.send("Booking Successful!");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});