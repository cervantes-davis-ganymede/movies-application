module.exports = {
    getMovies: () => {
        return fetch('/api/movies')
            .then(response => response.json());
    },
    addMovie: (movie) => {
        console.log(movie, "<- the movie object to add");
        const url = '/api/movies';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(movie),
        };
        return fetch(url, options)
            .then(response => response.json())
            .catch(console.log('error'))
    }
};

