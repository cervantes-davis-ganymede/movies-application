// /**
//  * es6 modules and imports
//  */
// import sayHello from './hello';
// sayHello('Augustine');
//
// /**
//  * require style imports
//  */

const $ = require('jquery');
const {getMovies, addMovies} = require('./api.js');
// const {getMovies, addMovies, editMovies, deleteMovies} = require('./api.js');

// "Loading..." Placeholder
$('tbody').innerHTML = '<p>Loading...';

getMovies().then(movies => {
    console.log('Here are all the movies:');
    let movieList = '<tbody>';
    movies.forEach(({title, rating, id}) => {
        console.log(`id#${id} - ${title} - rating: ${rating}`);
        movieList += `<tr class="d-flex justify-content-center">
            <td class="col-1">${id}</td>
            <td class="col-5">${title}</td>
            <td class="col-3">${rating}</td>
            <td class="col-3">"category"</td></tr>`;
        // Replace text "category" with ${category} after it's created
    });
    movieList += '</tbody>';
    // $('tbody').html = '';
    $('tbody').html(movieList);
    console.log(movieList);
}).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.')
    console.log(error);
});

$('#add-movie-btn').click(function (event) {
    event.preventDefault();
    let addTitle = document.querySelector('#title').value;
    let addRating = document.querySelector('#rating').value;
    if (addTitle !== "") {
        // add a function to check if it already exists
    }
        // else addMovies()

});

addMovies().then((movies) => {
    console.log('here is an added movie');
    movies.forEach(({title, rating, id}) => {
        console.log('id${id} - ${title} - rating: ${rating}');
    })
}).catch((error) => {
    console.log(error);
});