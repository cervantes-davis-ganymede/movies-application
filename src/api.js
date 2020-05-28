module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
      .then(response => response.json());
  },
  addMovies: (movie) => {
    const url = '/api/movies';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(movie),
    }
  return fetch(url, options)
      .then(console.log('Post created!'))
      .catch(console.log('error'))
  }
};

