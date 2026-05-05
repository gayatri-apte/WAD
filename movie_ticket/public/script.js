async function loadMovies() {
    let res = await fetch('/api/movies');
    let movies = await res.json();

    let moviesDiv = document.getElementById('movies');
    let select = document.getElementById('movieSelect');

    moviesDiv.innerHTML = '';
    select.innerHTML = '';

    movies.forEach(movie => {
        moviesDiv.innerHTML += `
            <div class="movie">
                <h3>${movie.name}</h3>
                <p>Available Seats: ${movie.seats}</p>
            </div>
        `;

        select.innerHTML += `
            <option value="${movie.id}">
                ${movie.name}
            </option>
        `;
    });
}

async function bookTicket() {
    let movieId = document.getElementById('movieSelect').value;
    let seats = document.getElementById('seats').value;

    let res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ movieId, seats })
    });

    let msg = await res.text();
    document.getElementById('message').innerText = msg;

    loadMovies(); // refresh
}

loadMovies();